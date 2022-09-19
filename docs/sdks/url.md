```typescript
/**
 * 获取当前链接对应字段
 * @param name 需要截取的字段内容
 * @returns 返回值
 */
function getUrlParam(name: string) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`); // 构造一个含有目标参数的正则表达式对象
  const r = window.location.search.substr(1).match(reg); // 匹配目标参数
  if (r != null) return decodeURI(r[2]);
  return null; // 返回参数值
}
```
