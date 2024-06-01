import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencySom = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 18v-12h-5v10a2 2 0 0 1 -2 2" />
      <path d="M14 6v12h4a3 3 0 0 0 0 -6h-4h4a3 3 0 0 0 0 -6h-4z" />
    </>
  ),
  displayName: 'IconCurrencySom',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
