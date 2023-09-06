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
import {View} from '@tarojs/components';
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
  {
    onPress: () => void;
    title: string;
  };

const Button = ({title, onPress, ...rest}: ButtonProps) => {
  const props = useRestyle(restyleFunctions, rest as any);

  return (
    <View onClick={onPress} style={props.style}>
      <Text>{title}</Text>
    </View>
  );
};

export default Button;
