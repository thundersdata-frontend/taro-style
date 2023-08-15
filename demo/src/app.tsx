import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import { ThemeProvider } from '@td-design/taro-style'
import './app.less'
import {lightTheme} from './components/theme';

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

export default App
