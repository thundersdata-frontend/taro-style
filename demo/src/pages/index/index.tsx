import {useLoad} from '@tarojs/taro';

import Box from '@/components/box';
import Card from '@/components/card';
import Text from '@/components/text';
import Button from '@/components/button';
import useChangeTheme from '@/pages/useChangeTheme';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  const { changeTheme } = useChangeTheme.useModel();

  return (
    <>
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
        title='切换主题'
        onPress={changeTheme}
        borderWidth={1}
        borderStyle='solid'
        borderColor='primary200'
        borderRadius='x2'
        padding='x4'
        backgroundColor='func300'
        marginTop='x2'
      />
    </>
  );
}
