import {useLoad} from '@tarojs/taro';

import Box from '@/components/box';
import Text from '@/components/text';

import './index.less';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <Box backgroundColor='primary200' m='x5' p='x2' borderRadius='x2'>
      <Text color='white' variant='h2'>
        Hello world!
      </Text>
    </Box>
  );
}
