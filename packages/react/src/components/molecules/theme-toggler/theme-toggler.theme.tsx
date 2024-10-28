import { tv, VariantProps } from '@nextui-org/react';

const themeTogglerTheme = tv({
  slots: {
    base: 'border border-1 border-foreground/50 p-2 bg-foreground/5',
    button: [
      'group inline-flex items-center justify-center m-0 border border-transparent border-1',
      'data-[selected=true]:border-foreground/20 data-[selected=true]:bg-foreground/10',
    ],
  },
  variants: {
    size: {
      sm: {
        base: 'p-0.5 rounded-md',
        button: 'p-0 rounded-md',
      },
      md: {
        base: 'p-1 rounded-lg',
        button: 'p-1 rounded-md',
      },
      lg: {
        base: 'p-3 rounded-xl',
        button: 'p-3 rounded-lg',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type ThemeTogglerVariantProps = VariantProps<typeof themeTogglerTheme>;
export type ThemeTogglerSlots = keyof ReturnType<typeof themeTogglerTheme>;

export { themeTogglerTheme };
