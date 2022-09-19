const officeName = ['xls', 'xlsx', 'doc', 'docx', 'ppt', 'pptx', 'doc', 'docx'];
const pdfName = ['pdf'];

/**
 * 判断是否为 office 文件
 * @param url 文件链接
 * @returns boolean
 */
export const isOffice = (url: string) => {
  const urlList = url?.split('.');
  if (urlList.length <= 1) {
    return false;
  }
  const endName = urlList?.[urlList?.length - 1];
  if (officeName.includes(endName?.toLocaleLowerCase())) {
    return true;
  } else {
    return false;
  }
};

/**
 * 判断是否为 pdf 文件
 * @param url 文件链接
 * @returns boolean
 */
export const isPdf = (url: string) => {
  const urlList = url?.split('.');
  if (urlList.length <= 1) {
    return false;
  }
  const endName = urlList?.[urlList?.length - 1];
  if (pdfName.includes(endName?.toLocaleLowerCase())) {
    return true;
  } else {
    return false;
  }
};
