import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShoppingBagMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 21h-3.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.73 4.744" />
      <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconShoppingBagMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
