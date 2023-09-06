import {CSSProperties, useMemo} from 'react';

import {BaseTheme, Dimensions} from '../types';

import useTheme from './useTheme';

const filterRestyleProps = <
  TRestyleProps,
  TProps extends Record<string, any> & TRestyleProps,
>(
  componentProps: TProps,
  omitPropertiesMap: {[key in keyof TProps]: boolean},
) => {
  const cleanProps: TProps = {} as TProps;
  const restyleProps: TProps & {variant?: unknown} = {} as TProps;
  let serializedRestyleProps = '';
  if (omitPropertiesMap.variant) {
    restyleProps.variant = componentProps.variant ?? 'defaults';
  }
  for (const key in componentProps) {
    if (omitPropertiesMap[key as keyof TProps]) {
      restyleProps[key] = componentProps[key];
      serializedRestyleProps += `${String(key)}:${componentProps[key]};`;
    } else {
      cleanProps[key] = componentProps[key];
    }
  }

  const keys = {cleanProps, restyleProps, serializedRestyleProps};
  return keys;
};

const useRestyle = <
  Theme extends BaseTheme,
  TRestyleProps extends {[key: string]: any},
  TProps extends TRestyleProps & {style?: CSSProperties},
>(
  composedRestyleFunction: {
    buildStyle: <TInputProps extends TProps>(
      props: TInputProps,
      {
        theme,
        dimensions,
      }: {
        theme: Theme;
        dimensions: Dimensions | null;
      },
    ) => CSSProperties;
    properties: (keyof TProps)[];
    propertiesMap: {[key in keyof TProps]: boolean};
  },
  props: TProps,
) => {
  const theme = useTheme<Theme>();
  const {cleanProps, restyleProps, serializedRestyleProps} = filterRestyleProps(
    props,
    composedRestyleFunction.propertiesMap,
  );

  const calculatedStyle = useMemo(() => {
    const style = composedRestyleFunction.buildStyle(restyleProps as TProps, {
      theme,
      dimensions: null,
    });

    const styleProp = props.style;
    return {
      ...style,
      ...styleProp,
    };

    // We disable the exhaustive deps rule here in order to trigger the useMemo
    // when the serialized string of restyleProps changes instead of the object
    // reference which will change on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, props.style, serializedRestyleProps, composedRestyleFunction]);

  cleanProps.style = calculatedStyle;
  return cleanProps as {style: CSSProperties};
};

export default useRestyle;
