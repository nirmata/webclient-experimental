import { ThemeConfig } from 'antd/es/config-provider';
import AntDTheme from 'antd/es/theme';
import { AliasToken } from 'antd/es/theme/internal';
import { TMode, TThemeConfigurationVariables } from '../../../theme/types';

const getNumericValue = (str: string | undefined) => {
  if (str) {
    try {
      return Number(str.replace(/[^0-9.]/g, ''));
    } catch (err: any) {
      console.error(err);
    }
  }
  return undefined;
};

export const getToken = (args: {
  mode?: TMode,
  variables: TThemeConfigurationVariables,
}): Partial<AliasToken> => {
  const { mode, variables } = args;

  const token: Partial<AliasToken> = {
    padding: getNumericValue(variables['spacing']),
    margin: getNumericValue(variables['spacing']),

    fontFamily: variables['font.family'],
    fontSize: getNumericValue(variables['font.size']),
    fontSizeSM: getNumericValue(variables['font.size.small']),
    fontSizeLG: getNumericValue(variables['font.size.large']),
    lineHeight: getNumericValue(variables['line.height']),

    colorBgBase: variables['color.background.body'],
    colorBgLayout: variables['color.background.body'],
    colorBgContainer: variables['color.background.component'],

    colorTextBase: mode === 'dark' ? '#ffffff' : '#000000',
    colorText: variables['font.color'],
    colorTextSecondary: mode === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.65)',
    colorTextTertiary: mode === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.55)', // AntD is applying this as Secondary color to Text
    colorTextQuaternary: mode === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',

    borderRadius: getNumericValue(variables['border.radius']),
    borderRadiusSM: getNumericValue(variables['border.radius.small']),
    borderRadiusLG: getNumericValue(variables['border.radius.large']),
    colorBorder: variables['border.color'],

    colorPrimary: variables['color.primary'],
    colorSuccess: variables['color.success'],
    colorInfo: variables['color.info'],
    colorWarning: variables['color.warning'],
    colorError: variables['color.error'],

    colorLink: variables['color.link'],
    colorLinkHover: variables['color.link.hover'],
    colorLinkActive: variables['color.link.active'],

    blue: variables['color.blue'],
    green: variables['color.green'],
    cyan: variables['color.cyan'],
    yellow: variables['color.yellow'],
    orange: variables['color.orange'],
    red: variables['color.red'],
    purple: variables['color.purple'],
    pink: variables['color.pink'],
  };

  return token;
};

const getAntDTheme = (args: {
  mode?: TMode,
  variables: TThemeConfigurationVariables,
}): ThemeConfig => {
  return {
    algorithm: args.mode === 'dark' ? AntDTheme.darkAlgorithm : AntDTheme.defaultAlgorithm,
    token: getToken(args),
    components: {
      Modal: {
        titleFontSize: (getNumericValue(args.variables['font.size']) ?? 14) * 1.5,
      },
      Menu: {
        'itemSelectedBg': '#e6f4ff',
        collapsedWidth: 44,
        activeBarBorderWidth:0
      }
    }
  };
};

export default getAntDTheme;
