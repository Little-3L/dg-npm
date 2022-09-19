type LocationType = {
  lng: string;
  lat: string;
};

export function getLocation() {
  return new Promise<LocationType>((resolve, reject) => {
    AMap.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        enableHighAccuracy: true, // 是否使用高精度定位，默认:true
        timeout: 10000, // 超过10秒后停止定位，默认：5s
      });
      geolocation.getCurrentPosition((status: string, { position }: { position: LocationType }) => {
        if (status === 'complete') {
          const result = {
            lng: position.lng,
            lat: position.lat,
          };
          resolve(result);
        } else {
          reject('获取点位失败');
        }
      });
    });
  });
}

/**
 * 经纬度逆地址解析，获取地址信息
 * @param location { lng: string, lat: string }
 */
export function getAddressName(location: LocationType) {
  return new Promise<string>((resolve, reject) => {
    const geocoder = new AMap.Geocoder();
    geocoder.getAddress(
      location,
      function (status: string, result: { regeocode: { formattedAddress: string } }) {
        if (status === 'complete' && result.regeocode) {
          resolve(result.regeocode.formattedAddress);
        } else {
          reject('无效的点位');
        }
      },
    );
  });
}
