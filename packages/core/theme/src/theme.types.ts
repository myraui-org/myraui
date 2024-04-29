import { ColorMode, ColorScale, FlatMyraColor, MyraColor } from './colors';
import { ThemeColors } from './theme/colors';
import { Dict, RecordKey, StringOrNumber } from '@myraui/shared-utils';
import { ThemeOpacity } from './theme/opacity';
import { ThemeHeight } from './theme/height';
import { ThemeWidth } from './theme/width';
import { ResolvedValue } from './resolvers';
import { CSSVariable } from './utils/css-variables';

export type ThemeEnv = {
  prefix: string;
  defaultExtendTheme: ColorMode;
};

export type Theme = ColorMode | string;

export type BaseTheme = 'light';

export type ThemeRecord<Value> = Partial<Record<`_${Theme}`, Value>> & Record<`_${BaseTheme}`, Value>;

export type ThemedValue<Value> = Value | ThemeRecord<Value>;

export type ColorValue = (ColorScale | MyraColor) | string;

export type ThemeTokenRecord<K extends RecordKey, V = StringOrNumber> = Partial<Record<K, V>> & { DEFAULT?: K };

export type ThemeUnits = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export type ThemeTokens = {
  colors: ThemeTokenRecord<ThemeColors | MyraColor | string, FlatMyraColor | MyraColor | string | ColorScale>;
  fontSize: ThemeTokenRecord<ThemeUnits>;
  lineHeight: ThemeTokenRecord<ThemeUnits>;
  borderRadius: ThemeTokenRecord<ThemeUnits>;
  borderWidth: ThemeTokenRecord<ThemeUnits>;
  boxShadow: ThemeTokenRecord<ThemeUnits>;
  opacity: ThemeTokenRecord<ThemeOpacity>;
  width: ThemeTokenRecord<ThemeWidth>;
  height: ThemeTokenRecord<ThemeHeight>;
  minWidth: ThemeTokenRecord<string>;
  minHeight: ThemeTokenRecord<string>;
  spacing: ThemeTokenRecord<string>;
  grayscale: ThemeTokenRecord<ThemeGrayscale>;
};

export type PartialThemeTokens = Partial<ThemeTokens>;

export type ComponentColorScheme = ThemedValue<Required<ConfigTheme>['colorScheme']>;

export type ThemedThemeTokens<Key extends keyof ThemeTokens> = Record<Theme, Partial<ThemeTokens[Key]>>;

export type GeneratedThemeToken<D = unknown> = Record<
  D extends Record<infer K, any> ? K : string,
  StringOrNumber | ResolvedValue<any> | Dict<ResolvedValue<any>>
>;

export type ResolvedThemeToken<D = unknown> = Record<D extends Record<infer K, any> ? K : string, ResolvedValue<any>>;

export type BuiltThemeToken<D = unknown> = Record<D extends Record<infer K, any> ? K : string, any>;

export interface ConfigTheme extends PartialThemeTokens {
  extend?: ColorMode;
  /**
   * The unit token that defines a consistent spacing scale across the components.
   * @default 4 (px)
   */
  spacingUnit?: number;

  /**
   * The default color applied to components
   */
  colorScheme?: FlatMyraColor | MyraColor | ThemeColors | string;
}

export type FullConfigTheme<C extends ConfigTheme = ConfigTheme> = {
  [K in keyof Required<ConfigTheme>]: Exclude<Required<C>[K], undefined>;
};

export type GeneratedConfigTheme<T extends FullConfigTheme<any> = FullConfigTheme<any>> = {
  [K in keyof ThemeTokens]: GeneratedThemeToken<T[K]>;
};

export type ResolvedConfigTheme<T extends GeneratedConfigTheme = GeneratedConfigTheme> = {
  [K in keyof ThemeTokens]: ResolvedThemeToken<T[K]>;
};

export type ResolvedTokenValues<T extends ResolvedConfigTheme> = {
  [K in keyof ThemeTokens]: BuiltThemeToken<T[K]>;
};

export interface BuiltConfigTheme<T extends ResolvedConfigTheme> {
  colorMode: ColorMode;
  tokens: ResolvedTokenValues<T>;
  utilities: Array<CSSVariable>;
}

export type ConfigThemes = Record<string, ConfigTheme>;