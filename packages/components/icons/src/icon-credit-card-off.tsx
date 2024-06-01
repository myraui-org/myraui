import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCreditCardOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3l18 18" />
      <path d="M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1 -.128 .87" />
      <path d="M18.87 18.872a3 3 0 0 1 -.87 .128h-12a3 3 0 0 1 -3 -3v-8c0 -1.352 .894 -2.495 2.124 -2.87" />
      <path d="M3 11l8 0" />
      <path d="M15 11l6 0" />
      <path d="M7 15l.01 0" />
      <path d="M11 15l2 0" />
    </>
  ),
  displayName: 'IconCreditCardOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
