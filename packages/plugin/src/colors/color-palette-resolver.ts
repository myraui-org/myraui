import { ColorValueFunction, generateColorValueFn, Resolver } from '@myraui/theme';
import { pipe } from 'fp-ts/function';
import * as RE from 'fp-ts/ReaderEither';
import { generateColorVariables } from './generate-color-variables';

export const colorPaletteResolver: Resolver<ColorValueFunction> = (colorName, colorValue) => {
  return pipe(
    generateColorVariables(colorName, colorValue),
    RE.map(([colorVariable, opacityVariable]) => ({
      [colorName]: {
        value: generateColorValueFn(colorVariable.value || '', opacityVariable),
        utilities: [colorVariable, opacityVariable],
      },
    }))
  );
};