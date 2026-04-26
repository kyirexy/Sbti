import html2canvas from 'html2canvas';

interface PosterOptions {
  bgColor?: string;
  outputWidth?: number;
  outputHeight?: number;
  mimeType?: 'image/jpeg' | 'image/png';
  quality?: number;
}

interface ResultPosterOptions {
  testTitle: string;
  resultTitle: string;
  description: string;
  matchPercentage: number;
  imageUrl: string;
  themeColor: string;
  bgColor?: string;
  outputWidth?: number;
  outputHeight?: number;
  mimeType?: 'image/jpeg' | 'image/png';
  quality?: number;
}

const POSTER_WIDTH = 1080;
const POSTER_HEIGHT = 1350;
const POSTER_PADDING = 60;
const IMAGE_WAIT_TIMEOUT_MS = 3000;

const SAFE_TEXT_COLORS: Record<string, string> = {
  'text-white': '#ffffff',
  'text-black/70': 'rgba(0, 0, 0, 0.7)',
  'text-slate-800': '#1f2937',
  'text-slate-700': '#334155',
  'text-slate-600': '#475569',
  'text-slate-500': '#64748b',
  'text-slate-400': '#94a3b8',
  'text-red-600': '#dc2626',
};

const SAFE_BACKGROUND_COLORS: Record<string, string> = {
  'bg-white': '#ffffff',
  'bg-white/95': 'rgba(255, 255, 255, 0.95)',
  'bg-white/90': 'rgba(255, 255, 255, 0.9)',
  'bg-white/80': 'rgba(255, 255, 255, 0.8)',
  'bg-white/70': 'rgba(255, 255, 255, 0.7)',
  'bg-white/60': 'rgba(255, 255, 255, 0.6)',
  'bg-white/50': 'rgba(255, 255, 255, 0.5)',
  'bg-slate-100': '#f1f5f9',
};

const SAFE_BORDER_COLORS: Record<string, string> = {
  'border-white': '#ffffff',
  'border-white/70': 'rgba(255, 255, 255, 0.7)',
  'border-white/40': 'rgba(255, 255, 255, 0.4)',
  'border-slate-100': '#f1f5f9',
};

const SAFE_SHADOWS: Record<string, string> = {
  'shadow-sm': '0 1px 3px rgba(15, 23, 42, 0.08)',
  'shadow-md': '0 4px 12px rgba(15, 23, 42, 0.12)',
  'shadow-lg': '0 10px 24px rgba(15, 23, 42, 0.14)',
  'shadow-xl': '0 18px 36px rgba(15, 23, 42, 0.16)',
};

const COLOR_PROPERTY_FALLBACKS: Array<[string, string]> = [
  ['color', '#1f2937'],
  ['background-color', 'rgba(255, 255, 255, 0)'],
  ['border-top-color', 'rgba(255, 255, 255, 0)'],
  ['border-right-color', 'rgba(255, 255, 255, 0)'],
  ['border-bottom-color', 'rgba(255, 255, 255, 0)'],
  ['border-left-color', 'rgba(255, 255, 255, 0)'],
  ['outline-color', '#94a3b8'],
  ['text-decoration-color', '#1f2937'],
  ['fill', '#1f2937'],
  ['stroke', '#1f2937'],
];

function hasUnsupportedColorFunction(value: string | null): boolean {
  return !!value && /(oklab|oklch|color-mix|lab\()/i.test(value);
}

function applyHtml2CanvasColorFallbacks(root: HTMLElement) {
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>('*'))];
  const ownerWindow = root.ownerDocument.defaultView;

  elements.forEach(el => {
    Object.entries(SAFE_TEXT_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.setProperty('color', color, 'important');
      }
    });

    Object.entries(SAFE_BACKGROUND_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.setProperty('background-color', color, 'important');
      }
    });

    Object.entries(SAFE_BORDER_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.setProperty('border-color', color, 'important');
      }
    });

    Object.entries(SAFE_SHADOWS).forEach(([className, shadow]) => {
      if (el.classList.contains(className)) {
        el.style.setProperty('box-shadow', shadow, 'important');
      }
    });

    if (!ownerWindow) return;

    const styles = ownerWindow.getComputedStyle(el);
    COLOR_PROPERTY_FALLBACKS.forEach(([property, fallback]) => {
      if (hasUnsupportedColorFunction(styles.getPropertyValue(property))) {
        el.style.setProperty(property, fallback, 'important');
      }
    });

    ['background-image', 'box-shadow', 'text-shadow'].forEach(property => {
      if (hasUnsupportedColorFunction(styles.getPropertyValue(property))) {
        el.style.setProperty(property, 'none', 'important');
      }
    });
  });
}

async function waitForImages(element: HTMLElement): Promise<void> {
  const images = Array.from(element.querySelectorAll<HTMLImageElement>('img'));
  if (images.length === 0) return;

  const settled = Promise.all(
    images.map(img => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return img.decode().catch(() => undefined);
    })
  );

  await Promise.race([
    settled,
    new Promise<void>(resolve => {
      window.setTimeout(resolve, IMAGE_WAIT_TIMEOUT_MS);
    }),
  ]);
}

function drawPosterBackground(ctx: CanvasRenderingContext2D, width: number, height: number, bgColor: string) {
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  const topGlow = ctx.createRadialGradient(width * 0.5, 0, 0, width * 0.5, 0, width * 0.85);
  topGlow.addColorStop(0, 'rgba(139, 92, 246, 0.11)');
  topGlow.addColorStop(1, 'rgba(139, 92, 246, 0)');
  ctx.fillStyle = topGlow;
  ctx.fillRect(0, 0, width, height);

  const bottomGlow = ctx.createRadialGradient(width * 0.5, height, 0, width * 0.5, height, width * 0.7);
  bottomGlow.addColorStop(0, 'rgba(236, 72, 153, 0.08)');
  bottomGlow.addColorStop(1, 'rgba(236, 72, 153, 0)');
  ctx.fillStyle = bottomGlow;
  ctx.fillRect(0, 0, width, height);
}

function fitCanvasIntoPoster(sourceCanvas: HTMLCanvasElement, targetCanvas: HTMLCanvasElement) {
  const ctx = targetCanvas.getContext('2d');
  if (!ctx) throw new Error('Unable to create poster canvas context');

  const maxWidth = targetCanvas.width - POSTER_PADDING * 2;
  const maxHeight = targetCanvas.height - POSTER_PADDING * 2;
  const ratio = Math.min(maxWidth / sourceCanvas.width, maxHeight / sourceCanvas.height);
  const drawWidth = Math.round(sourceCanvas.width * ratio);
  const drawHeight = Math.round(sourceCanvas.height * ratio);
  const x = Math.round((targetCanvas.width - drawWidth) / 2);
  const y = Math.round((targetCanvas.height - drawHeight) / 2);

  ctx.drawImage(sourceCanvas, x, y, drawWidth, drawHeight);
}

function loadPosterImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new window.Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Failed to load poster image: ${src}`));
    image.src = src;
  });
}

function roundRectPath(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill: string
) {
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.fillStyle = fill;
  ctx.fill();
}

function drawContainImage(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  const ratio = Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * ratio;
  const drawHeight = image.naturalHeight * ratio;
  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;

  ctx.save();
  roundRectPath(ctx, x, y, width, height, radius);
  ctx.clip();
  ctx.fillStyle = '#fff7fb';
  ctx.fillRect(x, y, width, height);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(image, drawX, drawY, drawWidth, drawHeight);
  ctx.restore();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines = 99,
  firstLineIndent = 0
): number {
  const chars = Array.from(text);
  let line = '';
  let lineIndex = 0;
  let currentY = y;

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    const candidate = line + char;
    const indent = lineIndex === 0 ? firstLineIndent : 0;

    if (ctx.measureText(candidate).width > maxWidth - indent && line) {
      if (lineIndex >= maxLines - 1) {
        let clipped = line;
        while (ctx.measureText(`${clipped}...`).width > maxWidth - indent && clipped.length > 0) {
          clipped = clipped.slice(0, -1);
        }
        ctx.fillText(`${clipped}...`, x + indent, currentY);
        return currentY + lineHeight;
      }

      ctx.fillText(line, x + indent, currentY);
      line = char;
      lineIndex += 1;
      currentY += lineHeight;
    } else {
      line = candidate;
    }
  }

  if (line) {
    const indent = lineIndex === 0 ? firstLineIndent : 0;
    ctx.fillText(line, x + indent, currentY);
    currentY += lineHeight;
  }

  return currentY;
}

export async function generateResultPoster(options: ResultPosterOptions): Promise<string> {
  const {
    testTitle,
    resultTitle,
    description,
    matchPercentage,
    imageUrl,
    themeColor,
    bgColor = '#fff7fb',
    outputWidth = Number(import.meta.env.VITE_POSTER_WIDTH || POSTER_WIDTH),
    outputHeight = Number(import.meta.env.VITE_POSTER_HEIGHT || POSTER_HEIGHT),
    mimeType = 'image/jpeg',
    quality = 0.95,
  } = options;
  const image = await loadPosterImage(imageUrl);
  const canvas = document.createElement('canvas');
  canvas.width = outputWidth;
  canvas.height = outputHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Unable to create poster canvas context');

  drawPosterBackground(ctx, outputWidth, outputHeight, bgColor);

  const cardX = 72;
  const cardY = 64;
  const cardW = outputWidth - cardX * 2;
  const cardH = outputHeight - cardY * 2;

  ctx.save();
  ctx.shadowColor = 'rgba(15, 23, 42, 0.08)';
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 18;
  drawRoundedRect(ctx, cardX, cardY, cardW, cardH, 36, '#ffffff');
  ctx.restore();

  const imageX = cardX + 54;
  const imageY = cardY + 48;
  const imageW = cardW - 108;
  const imageH = 560;
  drawContainImage(ctx, image, imageX, imageY, imageW, imageH, 28);

  const contentX = cardX + 74;
  const contentW = cardW - 148;
  let cursorY = imageY + imageH + 70;

  ctx.fillStyle = '#6b7280';
  ctx.font = '600 32px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(testTitle, contentX, cursorY);

  cursorY += 76;
  ctx.fillStyle = '#111827';
  ctx.font = '800 66px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  cursorY = wrapText(ctx, resultTitle, contentX, cursorY, contentW, 78, 2);

  cursorY += 38;
  const labelBaseline = cursorY;
  ctx.fillStyle = '#64748b';
  ctx.font = '600 30px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  ctx.fillText('\u4eba\u683c\u5339\u914d\u5ea6', contentX, labelBaseline);
  ctx.fillStyle = themeColor;
  ctx.font = '800 34px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  const percentText = `${Math.max(0, Math.min(100, Math.round(matchPercentage)))}%`;
  ctx.fillText(percentText, contentX + contentW - ctx.measureText(percentText).width, labelBaseline);

  const progressY = labelBaseline + 28;
  const progressH = 12;
  drawRoundedRect(ctx, contentX, progressY, contentW, progressH, 999, 'rgba(236, 72, 153, 0.14)');
  drawRoundedRect(ctx, contentX, progressY, contentW * Math.max(0, Math.min(1, matchPercentage / 100)), progressH, 999, themeColor);

  cursorY = progressY + 74;
  ctx.fillStyle = '#475569';
  ctx.font = '400 36px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  ctx.textBaseline = 'alphabetic';
  wrapText(ctx, description, contentX, cursorY, contentW, 58, 5, 72);

  ctx.fillStyle = '#94a3b8';
  ctx.font = '600 24px "PingFang SC", "Microsoft YaHei", "HarmonyOS Sans SC", sans-serif';
  const footer = 'sbtiplay.fun';
  ctx.fillText(footer, outputWidth / 2 - ctx.measureText(footer).width / 2, outputHeight - 72);

  return canvas.toDataURL(mimeType, quality);
}

export async function generatePoster(
  element: HTMLElement,
  options: PosterOptions = {}
): Promise<string> {
  const {
    bgColor = import.meta.env.VITE_POSTER_BG_COLOR || '#ffffff',
    outputWidth = Number(import.meta.env.VITE_POSTER_WIDTH || POSTER_WIDTH),
    outputHeight = Number(import.meta.env.VITE_POSTER_HEIGHT || POSTER_HEIGHT),
    mimeType = 'image/jpeg',
    quality = 0.92,
  } = options;

  const hideSelectors = ['button', '.share-btn', 'footer', 'nav', '[data-poster-exclude="true"]'];
  const originalDisplay: Map<Element, string> = new Map();

  hideSelectors.forEach(selector => {
    element.querySelectorAll(selector).forEach((el: Element) => {
      originalDisplay.set(el, (el as HTMLElement).style.display);
      (el as HTMLElement).style.display = 'none';
    });
  });

  try {
    await waitForImages(element);

    const captureCanvas = await html2canvas(element, {
      backgroundColor: bgColor,
      scale: 2,
      useCORS: true,
      logging: false,
      width: element.offsetWidth,
      height: element.offsetHeight,
      onclone: (_clonedDocument, clonedElement) => {
        applyHtml2CanvasColorFallbacks(clonedElement as HTMLElement);
      },
    });

    const posterCanvas = document.createElement('canvas');
    posterCanvas.width = outputWidth;
    posterCanvas.height = outputHeight;
    const posterCtx = posterCanvas.getContext('2d');
    if (!posterCtx) throw new Error('Unable to create poster canvas context');

    drawPosterBackground(posterCtx, outputWidth, outputHeight, bgColor);
    fitCanvasIntoPoster(captureCanvas, posterCanvas);

    return posterCanvas.toDataURL(mimeType, quality);
  } finally {
    originalDisplay.forEach((display, el) => {
      (el as HTMLElement).style.display = display;
    });
  }
}

export function downloadPoster(dataUrl: string, filename: string = 'my-poster.jpg') {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
