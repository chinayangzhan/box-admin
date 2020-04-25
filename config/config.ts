// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          layout: false,
          component: './user/login',
        },
      ],
    },

    {
      path: '/home',
      name: 'home',
      icon: 'home',
      component: './Welcome',
    },
    {
      path: '/management',
      name: 'management',
      icon: 'database',
      component: './Admin',
      // routes: [
      //   {
      //     path: '/admin/sub-page',
      //     name: 'sub-page',
      //     icon: 'smile',
      //     component: './Welcome',
      //   },
      // ],
    },
    {
      name: 'objective',
      icon: 'cluster',
      path: '/list',
      component: './ListTableList',
    },
    {
      name: 'UnityStream',
      icon: 'cloud',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/',
      redirect: '/home',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});
