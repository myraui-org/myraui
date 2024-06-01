import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShoppingCartMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M12.5 17h-6.5v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconShoppingCartMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
