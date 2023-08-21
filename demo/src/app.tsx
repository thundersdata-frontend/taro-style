import {PropsWithChildren} from 'react';
import {ThemeProvider} from '@td-design/taro-style';
import { useSystemInfo } from 'taro-hooks';
import useChangeTheme from './pages/useChangeTheme';

function Main({children}: PropsWithChildren<any>) {
  const {theme} = useChangeTheme.useModel();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function App({ children }: PropsWithChildren<any>) {
  const system = useSystemInfo(); // 注释掉就不会报错

  return (
    <useChangeTheme.Provider>
      <Main>{children}</Main>
    </useChangeTheme.Provider>
  );
}
