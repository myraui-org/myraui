import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBasketMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 10l-2 -6" />
      <path d="M7 10l2 -6" />
      <path d="M12 20h-4.756a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.833 4.75" />
      <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconBasketMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
