import { defineOverridesPreferences } from '@vben/preferences';

/**
 * @description 项目配置文件
 * 只需要覆盖项目中的一部分配置，不需要的配置不用覆盖，会自动使用默认配置
 */
export const overridesPreferences = defineOverridesPreferences({
  // overrides
  app: {
    name: import.meta.env.VITE_APP_TITLE,
    enableCheckUpdates: false,
    locale: 'pt-BR',
  },
  breadcrumb: {
    styleType: 'background',
  },
  navigation: {
    styleType: 'plain',
  },
  sidebar: {
    width: 260,
  },
  tabbar: {
    styleType: 'plain',
  },
  theme: {
    radius: '0',
    semiDarkSidebar: true,
  },
  transition: {
    enable: false,
  },
});
