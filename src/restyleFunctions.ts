import {CSSProperties} from 'react';
import createRestyleFunction from './createRestyleFunction';
import {BaseTheme} from './types';
import {getKeys} from './typeHelpers';

const spacingProperties = {
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  marginStart: true,
  marginEnd: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingStart: true,
  paddingEnd: true,
  columnGap: true,
  rowGap: true,
  gap: true,
};

const spacingPropertiesShorthand = {
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  ms: 'marginStart',
  me: 'marginEnd',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  ps: 'paddingStart',
  pe: 'paddingEnd',
  g: 'gap',
  rg: 'rowGap',
  cg: 'columnGap',
};

const typographyProperties = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  includeFontPadding: true,
  fontVariant: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationLine: true,
  textDecorationStyle: true,
  textTransform: true,
  verticalAlign: true,
  writingDirection: true,
};

const layoutProperties = {
  width: true,
  height: true,
  minWidth: true,
  maxWidth: true,
  minHeight: true,
  maxHeight: true,
  overflow: true,
  aspectRatio: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  justifyContent: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
};

const positionProperties = {
  position: true,
  top: true,
  right: true,
  bottom: true,
  left: true,
  start: true,
  end: true,
};

const borderProperties = {
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStyle: true,
  borderTopWidth: true,
  borderStartWidth: true,
  borderEndWidth: true,
  borderWidth: true,
};

const borderRadiusProperties = {
  borderRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomEndRadius: true,
  borderTopStartRadius: true,
  borderTopEndRadius: true,
};

const borderColorProperties = {
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderLeftColor: true,
  borderBottomColor: true,
  borderStartColor: true,
  borderEndColor: true,
};

const shadowProperties = {
  shadowOpacity: true,
  shadowOffset: true,
  shadowRadius: true,
  elevation: true,
};

const textShadowProperties = {
  textShadowOffset: true,
  textShadowRadius: true,
};

export const backgroundColor = createRestyleFunction({
  property: 'backgroundColor',
  themeKey: 'colors',
});

export const backgroundColorShorthand = createRestyleFunction({
  property: 'bg',
  styleProperty: 'backgroundColor',
  themeKey: 'colors',
});

export const color = [
  createRestyleFunction({
    property: 'color',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'textDecorationColor',
    themeKey: 'colors',
  }),
];

export const opacity = createRestyleFunction({
  property: 'opacity',
});

export const visible = createRestyleFunction({
  property: 'visible',
  styleProperty: 'display',
  transform: ({value}) => (value === false ? 'none' : 'flex'),
});

export const spacing = getKeys(spacingProperties).map(property => {
  return createRestyleFunction({
    property,
    themeKey: 'spacing',
  });
});

export const spacingShorthand = getKeys(spacingPropertiesShorthand).map(
  property => {
    const styleProperty = spacingPropertiesShorthand[
      property
    ] as keyof CSSProperties;

    return createRestyleFunction({
      property,
      styleProperty,
      themeKey: 'spacing',
    });
  },
);

export const typography = getKeys(typographyProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const layout = getKeys(layoutProperties).map(property => {
  return createRestyleFunction({
    property,
  });
});

export const position = [
  ...getKeys(positionProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'zIndex',
    themeKey: 'zIndices',
  }),
];

export const border = [
  ...getKeys(borderProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  ...getKeys(borderColorProperties).map(property => {
    return createRestyleFunction({
      property,
      themeKey: 'colors',
    });
  }),
  ...getKeys(borderRadiusProperties).map(property => {
    return createRestyleFunction({
      property,
      themeKey: 'borderRadii',
    });
  }),
];

export const shadow = [
  ...getKeys(shadowProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'shadowColor',
    themeKey: 'colors',
  }),
];

export const textShadow = [
  ...getKeys(textShadowProperties).map(property => {
    return createRestyleFunction({
      property,
    });
  }),
  createRestyleFunction({
    property: 'textShadowColor',
    themeKey: 'colors',
  }),
];

export const all = [
  color,
  opacity,
  backgroundColor,
  backgroundColorShorthand,
  ...spacing,
  ...spacingShorthand,
  ...typography,
  ...layout,
  ...position,
  ...border,
  ...shadow,
  ...textShadow,
];

export interface ColorProps<Theme extends BaseTheme> {
  color?: keyof Theme['colors'];
  textDecorationColor?: keyof Theme['colors'];
}
export interface OpacityProps {
  opacity?: number;
}

export interface VisibleProps {
  visible?: boolean;
}

export interface BackgroundColorProps<Theme extends BaseTheme> {
  backgroundColor?: keyof Theme['colors'];
}

export interface BackgroundColorShorthandProps<Theme extends BaseTheme> {
  bg?: keyof Theme['colors'];
}

export type SpacingProps<Theme extends BaseTheme> = {
  [Key in keyof typeof spacingProperties]?: keyof Theme['spacing'];
};

export type SpacingShorthandProps<Theme extends BaseTheme> = {
  [Key in keyof typeof spacingPropertiesShorthand]?: keyof Theme['spacing'];
};

export type TypographyProps = {
  [Key in keyof typeof typographyProperties]?: any;
};

export type LayoutProps = {
  [Key in keyof typeof layoutProperties]?: any;
};

export type PositionProps<Theme extends BaseTheme> = {
  [Key in keyof typeof positionProperties]?: any;
} & {
  zIndex?: Theme['zIndices'] extends object ? keyof Theme['zIndices'] : number;
};

export type BorderProps<Theme extends BaseTheme> = {
  [Key in keyof typeof borderProperties]?: any;
} & {
  [Key in keyof typeof borderColorProperties]?: keyof Theme['colors'];
} & {
  [Key in keyof typeof borderRadiusProperties]?: Theme['borderRadii'] extends object
    ? keyof Theme['borderRadii']
    : number;
};

export type ShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof shadowProperties]?: any;
} & {
  shadowColor?: keyof Theme['colors'];
};

export type TextShadowProps<Theme extends BaseTheme> = {
  [Key in keyof typeof textShadowProperties]?: any;
} & {
  textShadowColor?: keyof Theme['colors'];
};

export type AllProps<Theme extends BaseTheme> = BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  ColorProps<Theme> &
  OpacityProps &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  TypographyProps &
  LayoutProps &
  PositionProps<Theme> &
  BorderProps<Theme> &
  ShadowProps<Theme> &
  TextShadowProps<Theme>;
