import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconReceiptYen = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
      <path d="M9 11h6" />
      <path d="M9 14h6" />
      <path d="M9 7l3 4.5" />
      <path d="M15 7l-3 4.5v4.5" />
    </>
  ),
  displayName: 'IconReceiptYen',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
