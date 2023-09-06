import {createTheme} from '@td-design/taro-style';

import {px} from '../helpers';

const basePalette = {
  // 基础色
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
  // 功能色
  func50: '#FBF5F5',
  func100: '#FFF7E3',
  func200: '#FFD21D',
  func300: '#52C41A',
  func400: '#1890FF',
  func500: '#F86E21',
  func600: '#F4333C',
  func700: 'transparent',
  func800: 'transparent',
  func900: 'transparent',
};

/** 默认调色板 */
const palette = {
  ...basePalette,
  // 主色
  primary50: '#E5F1FF',
  primary100: '#3AA3FF',
  primary200: '#005DFF',
  primary300: 'rgba(0, 93, 255, 0.7)',
  primary400: 'rgba(0, 93, 255, 0.4)',
  primary500: 'transparent',
  primary600: 'transparent',
  primary700: 'transparent',
  primary800: 'transparent',
  primary900: 'transparent',

  // 中性色
  gray50: '#F5F5F5',
  gray100: '#E5E5E5',
  gray200: '#CCCCCC',
  gray300: '#999999',
  gray400: '#666666',
  gray500: '#333333',
  gray600: 'rgba(0, 0, 0, 0.4)',
  gray700: 'rgba(0, 0, 0, 0.04)',
  gray800: 'transparent',
  gray900: 'transparent',
};

const createLightTheme = () =>
  createTheme({
    spacing: {
      x0: px(0),
      x1: px(4),
      x2: px(8),
      x3: px(12),
      x4: px(16),
      x5: px(20),
      x6: px(24),
      x7: px(28),
      x8: px(32),
      x9: px(36),
      x10: px(40),
    },
    borderRadii: {
      x0: px(0),
      x1: px(4),
      x2: px(8),
      x3: px(12),
      x4: px(16),
      x5: px(20),
      x6: px(24),
      x7: px(28),
      x8: px(32),
      x9: px(36),
      x10: px(40),
    },
    zIndices: {
      '1': 1,
      '9': 9,
      '19': 9,
      '29': 9,
      '39': 9,
      '49': 9,
      '59': 9,
      '69': 9,
      '79': 9,
      '89': 9,
      '99': 99,
      '199': 199,
      '299': 299,
      '399': 399,
      '499': 499,
      '599': 599,
      '699': 699,
      '799': 799,
      '899': 899,
      '999': 999,
    },
    colors: {
      ...palette,
      background: palette.gray50,
      mask: palette.gray600,
      border: palette.gray200,
      icon: palette.gray300,
      disabled: palette.gray300,
      text: palette.gray500,
      text_active: palette.white,
      primary_text: palette.black,
      primary_background: palette.white,
      cardPrimaryBackground: palette.func300,
      cardSecondaryBackground: palette.func600,
    },
    textVariants: {
      defaults: {},
      h0: {
        fontWeight: 'bold',
        fontSize: px(28),
      },
      h1: {
        fontWeight: 'bold',
        fontSize: px(18),
      },
      h2: {
        fontWeight: 'bold',
        fontSize: px(16),
      },
      h3: {
        fontWeight: 'bold',
        fontSize: px(14),
      },
      h4: {},
      h5: {},
      h6: {},
      h7: {},
      h8: {},
      h9: {},
      p0: {
        fontSize: px(16),
      },
      p1: {
        fontSize: px(14),
      },
      p2: {
        fontSize: px(12),
      },
      p3: {
        fontSize: px(10),
      },
      p4: {},
      p5: {},
      p6: {},
      p7: {},
      p8: {},
      p9: {},
      d0: {
        fontWeight: 'bold',
        fontSize: px(24),
      },
      d1: {
        fontWeight: 'bold',
        fontSize: px(18),
      },
      d2: {
        fontWeight: 'bold',
        fontSize: px(12),
      },
      d3: {},
      d4: {},
      d5: {},
      d6: {},
      d7: {},
      d8: {},
      d9: {},
    },
    cardVariants: {
      defaults: {
        padding: 'x3', // 这里的优先级，比createVariant方法的defaults里面的高，所以不会被覆盖掉
        borderRadius: 'x2',
      },
      primary: {
        backgroundColor: 'cardPrimaryBackground',
      },
      secondary: {
        backgroundColor: 'cardSecondaryBackground',
      },
    },
    theme: 'light',
  });
export type Theme = ReturnType<typeof createLightTheme>;
export type Spacing = keyof Theme['spacing'];
export type Color = keyof Theme['colors'];
export type Variant = keyof Omit<Theme['textVariants'], 'defaults'>;
export type BorderRadius = keyof Theme['borderRadii'];

/** 深色调色板 */
const darkPalette = {
  ...basePalette,
  // 主色
  primary50: 'rgba(0, 93, 255, 0.3)',
  primary100: '#3AA3FF',
  primary200: '#005DFF',
  primary300: 'rgba(0, 93, 255, 0.7)',
  primary400: 'rgba(0, 93, 255, 0.4)',
  primary500: 'transparent',
  primary600: 'transparent',
  primary700: 'transparent',
  primary800: 'transparent',
  primary900: 'transparent',

  // 中性色
  gray50: '#131C22',
  gray100: 'rgba(255, 255, 255, 0.15)',
  gray200: 'rgba(255, 255, 255, 0.25)',
  gray300: 'rgba(255, 255, 255, 0.4)',
  gray400: 'rgba(255, 255, 255, 0.6)',
  gray500: 'rgba(255, 255, 255, 0.8)',
  gray600: 'rgba(0, 0, 0, 0.4)',
  gray700: 'rgba(0, 0, 0, 0.04)',
  gray800: 'transparent',
  gray900: 'transparent',
};

const createDarkTheme = () => ({
  ...createLightTheme(),
  colors: {
    ...darkPalette,
    background: darkPalette.gray50,
    mask: darkPalette.gray600,
    border: darkPalette.gray400,
    icon: darkPalette.gray300,
    disabled: darkPalette.gray300,
    text: darkPalette.gray500,
    text_active: darkPalette.white,
    primary_text: palette.white,
    primary_background: palette.black,
    cardPrimaryBackground: palette.func300,
    cardSecondaryBackground: palette.func600,
  },
  theme: 'dark',
});

export {createLightTheme, createDarkTheme};
