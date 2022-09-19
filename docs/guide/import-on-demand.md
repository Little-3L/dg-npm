# 按需加载

## 手动的按需加载

你可以手动引入部分组件：

```js
import Foo from 'dg-npm/es/components/foo';
```

当然，如果你觉得上面的写法过于繁琐，你也可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行自动语法转换。

在 `.babelrc` 中这样配置：

```js
module.exports = {
  plugins: [['import', { libraryName: 'dg-npm', libraryDirectory: 'es/components', style: false }]],
};
```

在 `umi` 项目中，修改 `.umirc.ts` 或 `config/config.ts` 中配置：

```js
import { defineConfig } from 'umi';
export default defineConfig({
  antd: { mobile: false }, // 去掉 umi 自带的 antd-mobile 2.x
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'dg-npm',
        style: false,
        libraryDirectory: 'es/components',
      },
      'dg-npm',
    ],
  ],
});
```
