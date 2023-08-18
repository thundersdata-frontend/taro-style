import Taro, {useLaunch} from '@tarojs/taro';
import {useMemo, useState} from 'react';
import {lightTheme, darkTheme} from '@/components/theme';
import {createShareModel} from '@/createShareModel';

function useChangeTheme() {
  const [dark, setDark] = useState(false);

  useLaunch(() => {
    const system = Taro.getSystemInfoSync();
    setDark(system.theme === 'dark');

    // 监听手机系统主题变化
    Taro.onThemeChange(({theme}) => {
      setDark(theme === 'dark');
    });
  });

  const theme = useMemo(() => (dark ? darkTheme : lightTheme), [dark]);

  return {
    theme,
  };
}

export default createShareModel(useChangeTheme);
