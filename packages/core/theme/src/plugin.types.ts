import { BaseTheme } from '@myra-ui/colors';
import { ConfigThemes } from './theme.types';

export type MyraUIPluginConfig = {
  prefix?: string;
  themes?: ConfigThemes;
  defaultTheme?: BaseTheme;
  defaultColorMode?: BaseTheme;
};