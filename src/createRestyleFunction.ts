import {CSSProperties} from 'react';
import {getThemeValue} from './utilities';
import {
  BaseTheme,
  Dimensions,
  RestyleFunction,
  StyleTransformFunction,
} from './types';

const getMemoizedMapHashKey = (
  dimensions: Dimensions | null,
  themeKey: string,
  property: string,
  value: string | number | boolean,
) => {
  return `${dimensions?.height}x${dimensions?.width}-${themeKey}-${property}-${value}`;
};

const memoizedThemes: WeakMap<BaseTheme, any> = new WeakMap();

const createRestyleFunction = <
  Theme extends BaseTheme = BaseTheme,
  TProps extends Record<string, any> = Record<string, any>,
  P extends keyof TProps = keyof TProps,
  K extends keyof Theme | undefined = undefined,
  S extends keyof CSSProperties = keyof CSSProperties,
>({
  property,
  transform,
  styleProperty,
  themeKey,
}: {
  property: P;
  transform?: StyleTransformFunction<Theme, K, TProps[P]>;
  styleProperty?: S;
  themeKey?: K;
}) => {
  const styleProp = styleProperty || property.toString();

  const func: RestyleFunction<TProps, Theme, S | P> = (
    props,
    {theme, dimensions},
  ) => {
    if (memoizedThemes.get(theme) == null) {
      memoizedThemes.set(theme, {});
    }

    const memoizedMapHashKey = (() => {
      if (
        themeKey &&
        property &&
        props[property] &&
        typeof themeKey === 'string' &&
        typeof property === 'string'
      ) {
        const propertyValue = String(props[property]);

        return getMemoizedMapHashKey(
          dimensions,
          String(themeKey),
          String(property),
          propertyValue,
        );
      } else {
        return null;
      }
    })();

    if (memoizedMapHashKey != null) {
      const memoizedValue = memoizedThemes.get(theme)[memoizedMapHashKey];
      if (memoizedValue != null) {
        return memoizedValue;
      }
    }

    const value = (() => {
      return getThemeValue(props[property], {theme, themeKey, transform});
    })();
    if (value === undefined) return {};

    if (memoizedMapHashKey != null) {
      memoizedThemes.get(theme)[memoizedMapHashKey] = {
        [styleProp]: value,
      };
      return memoizedThemes.get(theme)[memoizedMapHashKey];
    }
    return {
      [styleProp]: value,
    } as {[key in S | P]?: typeof value};
  };

  return {
    property,
    themeKey,
    variant: false,
    func,
  };
};

export default createRestyleFunction;
