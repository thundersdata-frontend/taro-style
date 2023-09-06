import {
  BackgroundColorProps,
  BorderProps,
  SpacingProps,
  backgroundColor,
  composeRestyleFunctions,
  spacing,
  border,
  useRestyle,
} from '@td-design/taro-style';
import {View, ViewProps} from '@tarojs/components';
import {Theme} from '../theme';
import Text from '../text';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type ButtonProps = RestyleProps &
  Pick<ViewProps, 'style' | 'className'> & {
    onPress: () => void;
    title: string;
  };

const Button = ({title, onPress, style, className}: ButtonProps) => {
  const props = useRestyle(restyleFunctions, {style, className} as any);
  console.log(...props);

  return (
    <View onClick={onPress}>
      <Text>{title}</Text>
    </View>
  );
};

export default Button;
