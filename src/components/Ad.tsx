import { useEffect, useRef, useState, type ReactNode } from 'react';

type GoogleAdPlacement = 'home-feed' | 'gallery-feed' | 'result-bottom';
type AdRenderState = 'pending' | 'filled' | 'hidden';

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

const AD_LABEL = '\u5e7f\u544a';

export function GoogleAd({ placement, className = '' }: GoogleAdProps): ReactNode {
  const adRef = useRef<HTMLModElement>(null);
  const [renderState, setRenderState] = useState<AdRenderState>('pending');
  const enabled = import.meta.env.VITE_GOOGLE_ADSENSE_ENABLED !== 'false';
  const clientId = import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || 'ca-pub-1275580456891124';
  const slotId = AD_SLOT_IDS[placement];
  const shouldRender = enabled && Boolean(clientId) && Boolean(slotId);

  useEffect(() => {
    setRenderState('pending');
    if (!shouldRender) return;

    let collapseTimer: number | undefined;
    let observer: MutationObserver | undefined;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      const adElement = adRef.current;
      const syncAdStatus = () => {
        const status = adElement?.getAttribute('data-ad-status');
        const hasFrame = Boolean(adElement?.querySelector('iframe'));

        if (status === 'filled' || hasFrame) {
          setRenderState('filled');
        } else if (status === 'unfilled' || status === 'unfill-optimized') {
          setRenderState('hidden');
        }
      };

      if (adElement) {
        observer = new MutationObserver(syncAdStatus);
        observer.observe(adElement, {
          attributes: true,
          attributeFilter: ['data-ad-status'],
          childList: true,
          subtree: true,
        });
      }

      collapseTimer = window.setTimeout(() => {
        const status = adElement?.getAttribute('data-ad-status');
        const hasFrame = Boolean(adElement?.querySelector('iframe'));

        if (status === 'filled' || hasFrame) {
          setRenderState('filled');
        } else {
          setRenderState('hidden');
        }
      }, 6000);
    } catch (error) {
      console.warn('AdSense render skipped:', error);
      setRenderState('hidden');
    }

    return () => {
      if (collapseTimer) {
        window.clearTimeout(collapseTimer);
      }
      observer?.disconnect();
    };
  }, [placement, shouldRender]);

  if (!shouldRender || renderState === 'hidden') return null;

  const isFilled = renderState === 'filled';

  return (
    <div
      className={`w-full mx-auto ${className}`}
      data-ad-placement={placement}
      data-ad-state={renderState}
      aria-label="Advertisement"
    >
      <div className={isFilled ? 'rounded-2xl border border-slate-200/70 bg-white/72 px-3 py-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-md' : ''}>
        {isFilled && (
          <div className="mb-2 text-center text-[11px] font-medium text-slate-400">{AD_LABEL}</div>
        )}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
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
