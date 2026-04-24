// 微信分享配置
interface WechatShareConfig {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

// 微信 SDK 类型声明
declare global {
  interface Window {
    wx?: {
      config: (config: {
        appId: string;
        timestamp: number;
        nonceStr: string;
        signature: string;
        jsApiList: string[];
      }) => void;
      ready: (callback: () => void) => void;
      updateAppMessageShareData: (config: {
        title: string;
        desc: string;
        link: string;
        imgUrl: string;
      }) => void;
      updateTimelineShareData: (config: {
        title: string;
        link: string;
        imgUrl: string;
      }) => void;
    };
  }
}

// 初始化微信 JS-SDK
export async function initWechatShare(config: WechatShareConfig): Promise<boolean> {
  const appId = import.meta.env.VITE_WECHAT_APP_ID;

  if (!appId || appId === 'YOUR_WECHAT_APP_ID') {
    console.warn('微信分享未配置 AppID');
    return false;
  }

  // 动态加载微信 JS-SDK
  if (!document.getElementById('wechat-jssdk')) {
    await loadScript('https://res.wx.qq.com/connect_prod/qcloud_miniapp_jsapi_wechat_jssdk.js');
  }

  try {
    if (typeof window.wx !== 'undefined') {
      // 配置分享信息
      window.wx.config({
        appId,
        timestamp: Date.now(),
        nonceStr: 'sbti-wechat-share',
        signature: '', // 需要服务端生成
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      });

      window.wx.ready(() => {
        window.wx!.updateAppMessageShareData({
          title: config.title,
          desc: config.desc,
          link: config.link,
          imgUrl: config.icon,
        });

        window.wx!.updateTimelineShareData({
          title: config.title,
          link: config.link,
          imgUrl: config.icon,
        });
      });

      return true;
    }
  } catch (error) {
    console.error('微信分享初始化失败:', error);
  }

  return false;
}

// 加载外部脚本
function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = 'wechat-jssdk';
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

// 构建分享配置
export function buildShareConfig(
  testTitle: string,
  resultTitle: string,
  resultId: string
): WechatShareConfig {
  const titleTemplate = import.meta.env.VITE_WECHAT_SHARE_TITLE || '测测你的${testTitle}人格，超准！';
  const descTemplate = import.meta.env.VITE_WECHAT_SHARE_DESC || '我测试结果是${resultTitle}，你也来试试吧~';

  const title = titleTemplate.replace('${testTitle}', testTitle);
  const desc = descTemplate.replace('${resultTitle}', resultTitle);
  const icon = import.meta.env.VITE_WECHAT_SHARE_ICON || '';
  const link = `${window.location.origin}/result/${resultId}`;

  return { title, desc, icon, link };
}

// 复制链接到剪贴板（作为微信分享的降级方案）
export async function copyShareLink(): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(window.location.href);
    return true;
  } catch {
    // 降级方案：创建临时 input
    const input = document.createElement('input');
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    return true;
  }
}