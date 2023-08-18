import {PropsWithChildren} from 'react';
import {ThemeProvider} from '@td-design/taro-style';
import useChangeTheme from './pages/useChangeTheme';

function Main({children}: PropsWithChildren<any>) {
  const {theme} = useChangeTheme.useModel();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function App({children}: PropsWithChildren<any>) {
  return (
    <useChangeTheme.Provider>
      <Main>{children}</Main>
    </useChangeTheme.Provider>
  );
}
