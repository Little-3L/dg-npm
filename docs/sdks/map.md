# Map 地图相关

## 逆地址解析

```typescript
/**
 * 逆地址解析
 * @param lnglat 传入需解析的经纬度 高德火星坐标
 * @param callback  解析成功返回的信息
 */
export const niAddress = (lnglat: { lng: number; lat: number }, callback: any) => {
  AMap.plugin('AMap.Geocoder', () => {
    const geocoder = new AMap.Geocoder({});
    const lnglatObj = [lnglat.lng, lnglat.lat];
    geocoder.getAddress(lnglatObj, (status: any, result: any) => {
      if (status === 'complete' && result.info === 'OK') {
        // result为对应的地理位置详细信息
        callback(result.regeocode.formattedAddress);
      } else {
        callback('');
      }
    });
  });
};
```
