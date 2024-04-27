import { tv } from '../utils/tv';
import { VariantProps } from 'tailwind-variants';

const button = tv({
  base: [
    'appearance-none',
    'box-border',
    'font-normal',
    'inline-flex',
    'items-center',
    'justify-center',
    'min-w-max',
    'outline-none',
    'overflow-hidden',
    'relative',
    'select-none',
    'whitespace-nowrap',
    'z-0',
  ],
  variants: {
    variant: {
      filled: 'bg-color-scheme-9 text-foreground-1 hover:bg-color-scheme-9/90',
      light: 'bg-color-scheme-3 hover:bg-color-scheme-3/90 text-color-scheme',
      outline: 'border-color-scheme border-small text-color-scheme hover:bg-color-scheme-2/90',
      subtle: 'text-color-scheme hover:bg-color-scheme-2/90',
      link: 'text-color-scheme hover:underline',
    },
    size: {
      tiny: 'px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1',
      small: 'px-unit-3 min-w-unit-16 h-unit-8 text-small gap-unit-2',
      medium: 'px-unit-5 min-w-unit-20 h-unit-10 text-medium gap-unit-4',
      large: 'px-unit-6 min-w-unit-24 h-unit-12 text-large gap-unit-6',
      huge: 'px-unit-8 min-w-unit-28 h-unit-14 text-huge gap-unit-8',
    },
    radius: {
      tiny: 'rounded-tiny',
      small: 'rounded-small',
      medium: 'rounded-medium',
      large: 'rounded-large',
      huge: 'rounded-huge',
    },
  },
  defaultVariants: {
    variant: 'filled',
    size: 'medium',
    radius: 'medium',
  },
  compoundVariants: [],
});

export type ButtonVariantProps = VariantProps<typeof button>;

export { button };
