import { Precision } from 'antd-mobile/es/components/date-picker/date-picker-utils';
import dayjs from 'dayjs';

/**
 * 渲染 DatePicker 每一项的时间
 * @param type 时间的精度类型
 * @param data 时间
 * @returns 渲染后的时间
 */
export const renderDatePickerLabel = (type: string, data: number) => {
  switch (type) {
    case 'year':
      return data + '年';
    case 'month':
      return data + '月';
    case 'day':
      return data + '日';
    case 'hour':
      return data + '时';
    case 'minute':
      return data + '分';
    case 'second':
      return data + '秒';
    case 'week':
      return data + '周';
    case 'week-day':
      return '星期' + data;
    default:
      return data;
  }
};

/**
 * 获取格式化时间类型
 * @param type 时间的精度类型
 * @returns 格式化时间类型
 */
export const getFormateType = (type: Precision) => {
  switch (type) {
    case 'year':
      return 'YYYY';
    case 'month':
      return 'YYYY-MM';
    case 'day':
      return 'YYYY-MM-DD';
    case 'hour':
      return 'YYYY-MM-DD HH';
    case 'minute':
      return 'YYYY-MM-DD HH:mm';
    case 'second':
      return 'YYYY-MM-DD HH:mm:ss';
    case 'week':
      return 'YYYY-MM-DD';
    case 'week-day':
      return 'YYYY-MM-DD';
    default:
      return type;
  }
};

export const formatDate = (date: Date, type: Precision) => {
  return dayjs(date).format(getFormateType(type));
};
