interface WechatShareConfig {
  title: string;
  desc: string;
  icon: string;
  link: string;
}

interface ResultSharePayload {
  testTitle: string;
  resultTitle: string;
  testId: string;
  resultId: string;
  resultDescription?: string;
}

interface ShareMessage {
  title: string;
  text: string;
  url: string;
}

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

export async function initWechatShare(config: WechatShareConfig): Promise<boolean> {
  const appId = import.meta.env.VITE_WECHAT_APP_ID;

  if (!appId || appId === 'YOUR_WECHAT_APP_ID') {
    console.warn('Wechat share AppID is not configured');
    return false;
  }

  if (!document.getElementById('wechat-jssdk')) {
    await loadScript('https://res.wx.qq.com/connect_prod/qcloud_miniapp_jsapi_wechat_jssdk.js');
  }

  try {
    if (typeof window.wx !== 'undefined') {
      window.wx.config({
        appId,
        timestamp: Date.now(),
        nonceStr: 'sbti-wechat-share',
        signature: '',
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
    console.error('Wechat share init failed:', error);
  }

  return false;
}

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

export function buildResultShareUrl(testId: string, resultId: string): string {
  const url = new URL(`/result/${testId}`, window.location.origin);
  url.searchParams.set('personality', resultId);
  return url.toString();
}

function trimDescription(description?: string): string {
  if (!description) return '';
  return description.length > 48 ? `${description.slice(0, 48)}...` : description;
}

export function buildResultShareMessage(payload: ResultSharePayload): ShareMessage {
  const url = buildResultShareUrl(payload.testId, payload.resultId);
  const title = `我测出了「${payload.resultTitle}」`;
  const description = trimDescription(payload.resultDescription);
  const text = description
    ? `我在「${payload.testTitle}」里测出了「${payload.resultTitle}」：${description}\n你也来测测看：`
    : `我在「${payload.testTitle}」里测出了「${payload.resultTitle}」。\n你也来测测看：`;

  return { title, text, url };
}

export function buildShareConfig(
  testTitle: string,
  resultTitle: string,
  testId: string,
  resultId: string,
  resultDescription?: string
): WechatShareConfig {
  const message = buildResultShareMessage({
    testTitle,
    resultTitle,
    testId,
    resultId,
    resultDescription,
  });
  const icon = import.meta.env.VITE_WECHAT_SHARE_ICON || '';

  return {
    title: message.title,
    desc: message.text.replace(/\n/g, ' '),
    icon,
    link: message.url,
  };
}

async function copyShareText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', 'true');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  }
}

export async function shareResult(payload: ResultSharePayload): Promise<'shared' | 'copied' | 'cancelled'> {
  const message = buildResultShareMessage(payload);

  if (navigator.share) {
    try {
      await navigator.share({
        title: message.title,
        text: message.text,
        url: message.url,
      });
      return 'shared';
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        return 'cancelled';
      }
    }
  }

  const copied = await copyShareText(`${message.text}\n${message.url}`);
  return copied ? 'copied' : 'cancelled';
}

export async function copyShareLink(): Promise<boolean> {
  return copyShareText(window.location.href);
}
