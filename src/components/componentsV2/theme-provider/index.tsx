import ConfigProvider, { ThemeConfig } from 'antd/es/config-provider';
import React, { useMemo } from 'react';
import { TMode, TThemeConfigurationVariables, TVariables } from '../../theme/types';
import darkThemeVariables from '../../theme/variables/dark';
import lightThemeVariables from '../../theme/variables/light';
import getAntDTheme from './get-antd-theme';
import getVariables from './get-variables';
import GlobalStyles from './global-styles';
import ThemeContext from './theme-context';
import { TThemeContext } from './types';

const getDerivedThemeConfigurationVariables = (mode: TMode, variables?: TThemeConfigurationVariables) => {
  return {
    ...(mode === 'dark' ? darkThemeVariables : lightThemeVariables),
    ...variables,
  };
};

const ThemeProvider: React.FC<{
  children: React.ReactNode,
  mode?: TMode,
  variables?: TThemeConfigurationVariables,
}> = ({ children, mode, variables }) => {
  const state = useMemo<{
    variables: TVariables,
    antDThemeConfig: ThemeConfig,
    nThemeConfig: TThemeContext,
  }>(() => {
    const themeMode = mode ?? 'light';

    const derivedThemeConfigurationVariables = getDerivedThemeConfigurationVariables(themeMode, variables);

    const completeSetOfThemeVariables = getVariables({
      mode: themeMode,
      variables: derivedThemeConfigurationVariables,
    });

    return {
      variables: completeSetOfThemeVariables,
      antDThemeConfig: getAntDTheme({
        mode: themeMode,
        variables: derivedThemeConfigurationVariables,
      }),
      nThemeConfig: {
        mode: themeMode,
        variables: completeSetOfThemeVariables,
      },
    };
  }, [mode, variables]);

  return (
    <ThemeContext.Provider value={state.nThemeConfig}>
      <ConfigProvider theme={state.antDThemeConfig}>
        <GlobalStyles variables={state.variables} />
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
