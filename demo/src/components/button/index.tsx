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
import {ButtonProps, Button as TaroButton} from '@tarojs/components';
import {Theme} from '../theme';

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type BaseButtonProps = RestyleProps &
  Omit<ButtonProps, 'onClick'> & {
    onPress: () => void;
    title: React.ReactNode;
  };

const Button = ({title, onPress, ...rest}: BaseButtonProps) => {
  const props = useRestyle(restyleFunctions, rest as any);

  return (
    <TaroButton onClick={onPress} {...props}>
      {title}
    </TaroButton>
  );
};

export default Button;
