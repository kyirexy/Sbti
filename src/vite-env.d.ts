/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BAIDU_AD_ENABLED: string;
  readonly VITE_BAIDU_AD_SLOT_ID: string;
  readonly VITE_GOOGLE_ADSENSE_ENABLED: string;
  readonly VITE_GOOGLE_ADSENSE_CLIENT_ID: string;
  readonly VITE_AD_SHOW_AFTER_COMPLETIONS: string;
  readonly VITE_AD_ONLY_ON_RESULT: string;
  readonly VITE_WECHAT_APP_ID: string;
  readonly VITE_WECHAT_SHARE_TITLE: string;
  readonly VITE_WECHAT_SHARE_DESC: string;
  readonly VITE_WECHAT_SHARE_ICON: string;
  readonly VITE_POSTER_BG_COLOR: string;
  readonly VITE_POSTER_TITLE_FONT_SIZE: string;
  readonly VITE_POSTER_INCLUDE_QR_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}