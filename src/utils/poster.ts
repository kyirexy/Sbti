import html2canvas from 'html2canvas';

interface PosterOptions {
  bgColor?: string;
  titleFontSize?: number;
  includeQrCode?: boolean;
}

const SAFE_TEXT_COLORS: Record<string, string> = {
  'text-white': '#ffffff',
  'text-slate-800': '#1f2937',
  'text-slate-700': '#334155',
  'text-slate-600': '#475569',
  'text-slate-500': '#64748b',
  'text-slate-400': '#94a3b8',
  'text-red-600': '#dc2626',
};

const SAFE_BACKGROUND_COLORS: Record<string, string> = {
  'bg-white': '#ffffff',
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

function applyHtml2CanvasColorFallbacks(root: HTMLElement) {
  const elements = [root, ...Array.from(root.querySelectorAll<HTMLElement>('*'))];

  elements.forEach(el => {
    Object.entries(SAFE_TEXT_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.color = color;
      }
    });

    Object.entries(SAFE_BACKGROUND_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.backgroundColor = color;
      }
    });

    Object.entries(SAFE_BORDER_COLORS).forEach(([className, color]) => {
      if (el.classList.contains(className)) {
        el.style.borderColor = color;
      }
    });

    Object.entries(SAFE_SHADOWS).forEach(([className, shadow]) => {
      if (el.classList.contains(className)) {
        el.style.boxShadow = shadow;
      }
    });
  });
}

export async function generatePoster(
  element: HTMLElement,
  options: PosterOptions = {}
): Promise<string> {
  const {
    bgColor = import.meta.env.VITE_POSTER_BG_COLOR || '#ffffff',
    titleFontSize = Number(import.meta.env.VITE_POSTER_TITLE_FONT_SIZE || '24'),
    includeQrCode = import.meta.env.VITE_POSTER_INCLUDE_QR_CODE !== 'false',
  } = options;

  // 隐藏不需要的元素
  const hideSelectors = ['button', '.share-btn', 'footer', 'nav', '[data-poster-exclude="true"]'];
  const originalDisplay: Map<Element, string> = new Map();

  hideSelectors.forEach(selector => {
    element.querySelectorAll(selector).forEach((el: Element) => {
      originalDisplay.set(el, (el as HTMLElement).style.display);
      (el as HTMLElement).style.display = 'none';
    });
  });

  try {
    const canvas = await html2canvas(element, {
      backgroundColor: bgColor,
      scale: 2, // 高清输出
      useCORS: true,
      logging: false,
      width: element.offsetWidth,
      height: element.offsetHeight,
      onclone: (_clonedDocument, clonedElement) => {
        applyHtml2CanvasColorFallbacks(clonedElement as HTMLElement);
      },
    });

    return canvas.toDataURL('image/png', 1.0);
  } finally {
    // 恢复元素显示
    originalDisplay.forEach((display, el) => {
      (el as HTMLElement).style.display = display;
    });
  }
}

export function downloadPoster(dataUrl: string, filename: string = 'my-poster.png') {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  link.click();
}
