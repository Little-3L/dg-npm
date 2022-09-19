import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dg-npm',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  navs: [
    {
      title: '指南',
      path: '/guide',
    },
    {
      title: 'sdks',
      path: '/sdks',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: '发布日志',
      path: 'https://github.com/Little-3L/dg-npm/releases',
    },
    {
      title: 'Github',
      path: 'https://github.com/Little-3L/dg-npm',
    },
  ],
  menus: {
    '/': [
      {
        title: 'Home',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '快速上手',
        path: '/guide/quick-start',
      },
      {
        title: '按需加载',
        path: '/guide/import-on-demand',
      },
    ],
    // '/samples': [
    //   {
    //     title: '概要',
    //     path: '/samples',
    //   },
    //   {
    //     title: '地图',
    //     children: ['/samples/map/marker.md'],
    //   },
    //   {
    //     title: '头像裁切',
    //     children: ['/samples/avatar/index.md'],
    //   },
    //   {
    //     title: '签字板',
    //     children: ['/samples/signature/index.md'],
    //   },
    // ],
    '/components': [
      {
        title: '基础组件',
        children: ['/components/foo/index.md'],
      },
      // {
      //   title: '数据录入',
      //   children: [
      //     '/components/uploader/index.md',
      //     '/components/video-uploader/index.md',
      //     '/components/form-picker/index.md',
      //     '/components/form-cascader/index.md',
      //     '/components/form-date-picker/index.md',
      //     '/components/form-map-picker/index.md',
      //   ],
      // },
      // {
      //   title: '数据展示',
      //   children: ['/components/preview/index.md'],
      // },
      // {
      //   title: '其他',
      //   children: ['/components/back-to-top/index.md', './components/graph-code/index.md'],
      // },
    ],
  },
  // more config: https://d.umijs.org/config
});
