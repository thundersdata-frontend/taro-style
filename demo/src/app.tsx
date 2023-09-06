import {ThemeProvider} from '@td-design/taro-style';
import useChangeTheme from './hooks/useChangeTheme';
import './animate.css';

function Main({children}: React.PropsWithChildren<any>) {
  const {theme} = useChangeTheme.useModel();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default function App({children}: React.PropsWithChildren<any>) {
  return (
    <useChangeTheme.Provider>
      <Main>{children}</Main>
    </useChangeTheme.Provider>
  );
}
