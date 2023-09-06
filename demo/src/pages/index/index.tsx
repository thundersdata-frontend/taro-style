import {useRef} from 'react';
import Taro, {useLoad} from '@tarojs/taro';
import {View, Text as TaroText} from '@tarojs/components';

import Box from '@/components/box';
import Card from '@/components/card';
import Text from '@/components/text';
import Button from '@/components/button';
import animateCSS from '@/utils/animateCss';

import './index.css';

export default function Index() {
  const ref = useRef<typeof View>(null);

  useLoad(() => {
    console.log('Page loaded.');
  });

  const handleClick = () => {
    animateCSS(ref, 'bounce');
  };

  return (
    <>
      <View
        ref={ref}
        style={{margin: Taro.pxTransform(20), padding: 20}}
        className='hello'
      >
        <TaroText>hello</TaroText>
      </View>
      <Box backgroundColor='primary200' m='x5' p='x2' borderRadius='x2'>
        <Text color='white' variant='h2'>
          Hello world!
        </Text>
      </Box>
      <Card variant='primary'>
        <Text variant='h1' color='primary_text'>
          This is a simple example displaying how to use Restyle
        </Text>
      </Card>
      <Card variant='secondary'>
        <Text variant='h1' color='primary_text'>
          You can find the theme in theme.ts. Update the theme values to see how
          it changes this screen
        </Text>
      </Card>
      <Button
        title='bounce动画'
        onPress={handleClick}
        borderWidth={1}
        borderStyle='solid'
        borderColor='primary200'
        borderRadius='x2'
        padding='x4'
        backgroundColor='func300'
        marginTop='x2'
        style={{backgroundColor: 'red'}}
        className='hello'
      />
    </>
  );
}
