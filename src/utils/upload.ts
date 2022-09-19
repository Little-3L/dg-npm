import { Toast } from 'antd-mobile';

/** 图片上传到服务器 */
export async function uploadToServer(file: File, uploadUrl: string, imgPreUrl: string) {
  const formData = new FormData();
  formData.append('file', file);

  Toast.show({
    icon: 'loading',
    content: '上传中',
    duration: 0,
    maskClickable: false,
  });

  const res = await fetch(uploadUrl, {
    method: 'POST',
    body: formData,
  });
  const data: { code: number; data: string } = await res.json();

  Toast.clear();
  if (data.code === 200) {
    return imgPreUrl + data.data;
  } else {
    Toast.show({
      icon: 'fail',
      content: '上传失败',
    });
    throw new Error('Fail to upload');
  }
}
