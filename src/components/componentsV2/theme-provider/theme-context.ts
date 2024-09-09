import { createContext } from 'react';
import variables from '../../theme/variables/light';
import { TThemeContext } from './types';

const ThemeContext = createContext<TThemeContext>({
  mode: 'light',
  variables: {...variables},
});

export default ThemeContext;
