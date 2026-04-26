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

interface PlacementAdProps {
  className?: string;
}

const AD_SLOT_IDS: Record<GoogleAdPlacement, string> = {
  'home-feed': import.meta.env.VITE_GOOGLE_ADSENSE_HOME_FEED_SLOT_ID || '6814649962',
  'gallery-feed': import.meta.env.VITE_GOOGLE_ADSENSE_GALLERY_FEED_SLOT_ID || '6814649962',
  'result-bottom': import.meta.env.VITE_GOOGLE_ADSENSE_RESULT_SLOT_ID || '6814649962',
};

const AD_MIN_HEIGHT: Record<GoogleAdPlacement, number> = {
  'home-feed': 90,
  'gallery-feed': 90,
  'result-bottom': 90,
};

const AD_LABEL = '\u5e7f\u544a';

export function GoogleAd({ placement, className = '' }: GoogleAdProps): ReactNode {
  const enabled = import.meta.env.VITE_GOOGLE_ADSENSE_ENABLED !== 'false';
  const clientId = import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || 'ca-pub-1275580456891124';
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
      aria-label="Advertisement"
    >
      <div className="rounded-2xl border border-slate-200/70 bg-white/70 px-3 py-2 shadow-[0_8px_28px_rgba(15,23,42,0.06)]">
        <div className="mb-2 text-center text-[11px] font-medium text-slate-400">{AD_LABEL}</div>
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

export function HomeFeedAd({ className = 'mt-6 max-w-md' }: PlacementAdProps = {}): ReactNode {
  return <GoogleAd placement="home-feed" className={className} />;
}

export function GalleryFeedAd({ className = 'mt-6 max-w-3xl' }: PlacementAdProps = {}): ReactNode {
  return <GoogleAd placement="gallery-feed" className={className} />;
}

export function ResultAd({ className = 'mt-6 max-w-md' }: PlacementAdProps = {}): ReactNode {
  return <GoogleAd placement="result-bottom" className={className} />;
}
