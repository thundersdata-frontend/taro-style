import {CSSProperties} from 'react';
import {
  RestyleFunctionContainer,
  BaseTheme,
  Dimensions,
  RestyleFunction,
} from './types';
import {AllProps} from './restyleFunctions';

const composeRestyleFunctions = <
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(
  restyleFunctions: (
    | RestyleFunctionContainer<TProps, Theme>
    | RestyleFunctionContainer<TProps, Theme>[]
  )[],
) => {
  const flattenedRestyleFunctions = restyleFunctions.reduce(
    (acc: RestyleFunctionContainer<TProps, Theme>[], item) => {
      return acc.concat(item);
    },
    [],
  );

  const properties = flattenedRestyleFunctions.map(styleFunc => {
    return styleFunc.property;
  });
  const propertiesMap = properties.reduce(
    (acc, prop) => ({...acc, [prop]: true}),
    {} as {[key in keyof TProps]: true},
  );

  const funcsMap = flattenedRestyleFunctions.reduce(
    (acc, each) => ({[each.property]: each.func, ...acc}),
    {} as {[key in keyof TProps]: RestyleFunction<TProps, Theme>},
  );

  // TInputProps is a superset of TProps since TProps are only the Restyle Props
  const buildStyle = (
    props: TProps,
    {
      theme,
      dimensions,
    }: {
      theme: Theme;
      dimensions: Dimensions | null;
    },
  ) => {
    const styles: any = {};
    const options = {theme, dimensions};
    // We make the assumption that the props object won't have extra prototype keys.
    // eslint-disable-next-line guard-for-in
    for (const key in props) {
      const mappedProps = funcsMap[key](props, options) as any;
      // eslint-disable-next-line guard-for-in
      for (const mappedKey in mappedProps) {
        styles[mappedKey] = mappedProps[mappedKey];
      }
    }

    return styles as CSSProperties;
  };
  return {
    buildStyle,
    properties,
    propertiesMap,
  };
};

export default composeRestyleFunctions;
