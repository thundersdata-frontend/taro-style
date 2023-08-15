export type StyleTransformFunction<
  Theme extends BaseTheme,
  K extends keyof Theme | undefined,
  TVal,
> = (params: {
  value: TVal | undefined | null;
  theme: Theme;
  themeKey?: K;
}) => TVal | undefined | null;

export type SafeVariants<T> = Omit<T, keyof KnownBaseTheme>;

export interface KnownBaseTheme {
  colors: {
    [key: string]: string;
  };
  spacing: {
    [key: string]: number | string;
  };
  zIndices?: {
    [key: string]: number;
  };
  borderRadii?: {
    [key: string]: number | string;
  };
}

export interface BaseTheme extends KnownBaseTheme {
  [key: string]: any;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface RestyleFunctionContainer<
  TProps extends Record<string, any>,
  Theme extends BaseTheme = BaseTheme,
  P extends keyof TProps = keyof TProps,
  K extends keyof Theme | undefined = keyof Theme | undefined,
> {
  property: P;
  themeKey: K | undefined;
  variant: boolean;
  func: RestyleFunction<TProps, Theme>;
}

export type RestyleFunction<
  TProps extends Record<string, any> = Record<string, any>,
  Theme extends BaseTheme = BaseTheme,
  S extends keyof any = string,
> = (
  props: TProps,
  context: {theme: Theme; dimensions: Dimensions | null},
) => {
  [key in S]?: any;
};

export type PropValue = string | number | undefined | null;
