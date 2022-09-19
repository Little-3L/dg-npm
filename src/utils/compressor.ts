import Compressor from 'compressorjs';

/**
 * 图片压缩，添加水印，手机端拍照图片回正
 * @param file 处理的 File 文件
 * @param watermark 添加的水印文字
 * @param quality 压缩图片的质量 默认为 0.8
 * @returns Blob 格式的文件
 */
export function compress(file: File, watermark: string, quality: number): Promise<File> {
  return new Promise((resolve, reject) => {
    new Compressor(file, {
      quality,
      drew(context, canvas) {
        if (watermark) {
          context.fillStyle = '#fff';
          context.font = '2rem serif';
          context.fillText(watermark, 20, canvas.height - 20);
        }
      },
      success: (result) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve(new window.File([result], (result as any).name, { type: result.type }));
      },
      error: reject,
    });
  });
}
