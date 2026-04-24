import { useEffect, useState, type ReactNode } from 'react';

interface AdPositionProps {
  position: 'top' | 'bottom' | 'sidebar';
  className?: string;
}

// 百度联盟广告组件
export function BaiduAd({ position, className = '' }: AdPositionProps): ReactNode {
  const enabled = import.meta.env.VITE_BAIDU_AD_ENABLED === 'true';
  const slotId = import.meta.env.VITE_BAIDU_AD_SLOT_ID || '';

  if (!enabled || !slotId) return null;

  const sizeMap = {
    top: { width: 320, height: 50 },
    bottom: { width: 320, height: 50 },
    sidebar: { width: 160, height: 600 },
  };

  const size = sizeMap[position];

  return (
    <div className={`ad-container ${className}`} data-ad-position={position}>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: `${size.width}px`, height: `${size.height}px` }}
        data-ad-client={`${slotId.split('-')[0]}`}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

// Google AdSense 广告组件
export function GoogleAd({ position, className = '' }: AdPositionProps): ReactNode {
  const enabled = import.meta.env.VITE_GOOGLE_ADSENSE_ENABLED === 'true';
  const clientId = import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || '';

  if (!enabled || !clientId || clientId === 'ca-pub-XXXXXXXXXXXXXXXX') return null;

  const sizeMap = {
    top: { width: 320, height: 50 },
    bottom: { width: 320, height: 50 },
    sidebar: { width: 160, height: 600 },
  };

  const size = sizeMap[position];

  return (
    <div className={`ad-container ${className}`} data-ad-position={position}>
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: `${size.width}px`, height: `${size.height}px` }}
        data-ad-client={clientId}
        data-ad-slot={import.meta.env.VITE_GOOGLE_ADSENSE_CLIENT_ID || ''}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

// 广告展示控制器 - 根据完成次数决定是否显示广告
export function AdController({ children }: { children: ReactNode }): ReactNode {
  const [canShowAd, setCanShowAd] = useState(false);
  const completions = Number(import.meta.env.VITE_AD_SHOW_AFTER_COMPLETIONS || '1');

  useEffect(() => {
    const completedCount = Number(localStorage.getItem('test_completion_count') || '0');
    setCanShowAd(completedCount >= completions);
  }, [completions]);

  if (!canShowAd) return null;

  return <>{children}</>;
}

// 结果页广告组件
export function ResultAd(): ReactNode {
  const onlyOnResult = import.meta.env.VITE_AD_ONLY_ON_RESULT !== 'false';
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const completedCount = Number(localStorage.getItem('test_completion_count') || '0');
    const threshold = Number(import.meta.env.VITE_AD_SHOW_AFTER_COMPLETIONS || '1');
    setShowAd(onlyOnResult && completedCount >= threshold);
  }, [onlyOnResult]);

  if (!showAd) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <div className="bg-white/60 rounded-xl p-4 border border-white/40">
        <div className="text-xs text-gray-400 mb-2 text-center">广告</div>
        <BaiduAd position="bottom" />
        <GoogleAd position="bottom" />
      </div>
    </div>
  );
}