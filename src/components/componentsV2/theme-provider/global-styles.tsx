import React from 'react';
import { TVariables } from '../../../theme/types';
import GlobalAntDStyles from './global-antd-styles';
import GlobalBackgroundStyles from './global-background-styles';
import GlobalBorderStyles from './global-border-styles';
import GlobalColorStyles from './global-color-styles';
import GlobalFlexStyles from './global-flex-styles';
import GlobalRootStyles from './global-root-styles';
import GlobalSpacingStyles from './global-spacing-styles';
import GlobalTypographyStyles from './global-typography-styles';

const GlobalStyles: React.FC<{ variables: TVariables }> = ({ variables }) => {
  return (
    <React.Fragment>
      <GlobalRootStyles variables={variables} />
      <GlobalBackgroundStyles variables={variables} />
      <GlobalBorderStyles variables={variables} />
      <GlobalColorStyles variables={variables} />
      <GlobalFlexStyles variables={variables} />
      <GlobalSpacingStyles variables={variables} />
      <GlobalTypographyStyles variables={variables} />
      <GlobalAntDStyles variables={variables} />
    </React.Fragment>
  );
};

export default GlobalStyles;
