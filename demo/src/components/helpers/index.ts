import Taro from '@tarojs/taro';

export const px = (value: number) => {
  const result = Taro.pxTransform(value);
  return result;
};
