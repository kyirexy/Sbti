import html2canvas from 'html2canvas';

interface PosterOptions {
  bgColor?: string;
  outputWidth?: number;
  outputHeight?: number;
  mimeType?: 'image/jpeg' | 'image/png';
  quality?: number;
}

const POSTER_WIDTH = 1080;
const POSTER_HEIGHT = 1920;
const POSTER_PADDING = 72;
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
