import {
  VariantProps,
  createRestyleComponent,
  createRestyleFunction,
  createVariant,
} from '@td-design/taro-style';
import Box from '../box';
import {Theme} from '../theme';

const variant = createVariant({
  themeKey: 'cardVariants',
  // 这里的defaults里跟theme的cardVariants里的defaults是一样的
  // 但是优先级没有theme的高，也就是说相同的属性并不会覆盖theme里的。其他属性会被合并
  // 所以最后实际上属性变成了 {padding: 'x3', borderRadius: 'x2', marginTop: 'x2'}
  defaults: {padding: 'x10', marginTop: 'x2'},
});

const transparency = createRestyleFunction({
  property: 'transparency',
  styleProperty: 'opacity',
  // 这里的transform是将transparency的值转换成opacity的值
  transform: ({value}: {value: number}) => 1 - value,
});

const Card = createRestyleComponent<
  VariantProps<Theme, 'cardVariants'> & {transparency?: number} &  React.ComponentProps<typeof Box>,
  Theme
>([variant, transparency], Box);

export default Card;
