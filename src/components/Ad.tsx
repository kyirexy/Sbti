import { useEffect, type ReactNode } from 'react';

type GoogleAdPlacement = 'home-feed' | 'gallery-feed' | 'result-bottom';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

interface GoogleAdProps {
  placement: GoogleAdPlacement;
  className?: string;
}

const AD_SLOT_IDS: Record<GoogleAdPlacement, string> = {
  'home-feed': import.meta.env.VITE_GOOGLE_ADSENSE_HOME_FEED_SLOT_ID || '',
  'gallery-feed': import.meta.env.VITE_GOOGLE_ADSENSE_GALLERY_FEED_SLOT_ID || '',
  'result-bottom': import.meta.env.VITE_GOOGLE_ADSENSE_RESULT_SLOT_ID || '',
};

const AD_MIN_HEIGHT: Record<GoogleAdPlacement, number> = {
  'home-feed': 90,
  'gallery-feed': 90,
  'result-bottom': 90,
};

export function GoogleAd({ placement, className = '' }: GoogleAdProps): ReactNode {
  const enabled = import.meta.env.VITE_GOOGLE_ADSENSE_ENABLED === 'true';
  const clientId = import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || '';
  const slotId = AD_SLOT_IDS[placement];
  const shouldRender = enabled && Boolean(clientId) && Boolean(slotId);

  useEffect(() => {
    if (!shouldRender) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (error) {
      console.warn('AdSense render skipped:', error);
    }
  }, [placement, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`w-full mx-auto ${className}`}
      data-ad-placement={placement}
      aria-label="广告"
    >
      <div className="rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
        <div className="mb-2 text-center text-[11px] font-medium text-slate-400">广告</div>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', minHeight: `${AD_MIN_HEIGHT[placement]}px` }}
          data-ad-client={clientId}
          data-ad-slot={slotId}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}

export function HomeFeedAd(): ReactNode {
  return <GoogleAd placement="home-feed" className="mt-6 max-w-md" />;
}

export function GalleryFeedAd(): ReactNode {
  return <GoogleAd placement="gallery-feed" className="mt-6 max-w-3xl" />;
}

export function ResultAd(): ReactNode {
  return <GoogleAd placement="result-bottom" className="mt-6 max-w-md" />;
}
