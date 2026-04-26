import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'import.meta.env': JSON.stringify({
        VITE_BAIDU_AD_ENABLED: env.BAIDU_AD_ENABLED,
        VITE_BAIDU_AD_SLOT_ID: env.BAIDU_AD_SLOT_ID,
        VITE_GOOGLE_ADSENSE_ENABLED: env.GOOGLE_ADSENSE_ENABLED,
        VITE_GOOGLE_ADSENSE_CLIENT_ID: env.GOOGLE_ADSENSE_CLIENT_ID,
        VITE_GOOGLE_ADSENSE_HOME_FEED_SLOT_ID: env.GOOGLE_ADSENSE_HOME_FEED_SLOT_ID,
        VITE_GOOGLE_ADSENSE_GALLERY_FEED_SLOT_ID: env.GOOGLE_ADSENSE_GALLERY_FEED_SLOT_ID,
        VITE_GOOGLE_ADSENSE_RESULT_SLOT_ID: env.GOOGLE_ADSENSE_RESULT_SLOT_ID,
        VITE_AD_SHOW_AFTER_COMPLETIONS: env.AD_SHOW_AFTER_COMPLETIONS,
        VITE_AD_ONLY_ON_RESULT: env.AD_ONLY_ON_RESULT,
        VITE_WECHAT_APP_ID: env.WECHAT_APP_ID,
        VITE_WECHAT_SHARE_TITLE: env.WECHAT_SHARE_TITLE,
        VITE_WECHAT_SHARE_DESC: env.WECHAT_SHARE_DESC,
        VITE_WECHAT_SHARE_ICON: env.WECHAT_SHARE_ICON,
        VITE_POSTER_BG_COLOR: env.POSTER_BG_COLOR,
        VITE_POSTER_WIDTH: env.POSTER_WIDTH,
        VITE_POSTER_HEIGHT: env.POSTER_HEIGHT,
        VITE_POSTER_TITLE_FONT_SIZE: env.POSTER_TITLE_FONT_SIZE,
        VITE_POSTER_INCLUDE_QR_CODE: env.POSTER_INCLUDE_QR_CODE,
      }),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
