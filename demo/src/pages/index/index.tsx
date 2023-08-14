import {View, Text} from '@tarojs/components';
import {useLoad} from '@tarojs/taro';
import './index.less';

import Box from '../../components/Box';

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <Box>
      <Text>Hello world!</Text>
    </Box>
  );
}
