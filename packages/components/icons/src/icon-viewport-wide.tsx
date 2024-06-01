import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconViewportWide = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 12h-7l3 -3m0 6l-3 -3" />
      <path d="M14 12h7l-3 -3m0 6l3 -3" />
      <path d="M3 6v-3h18v3" />
      <path d="M3 18v3h18v-3" />
    </>
  ),
  displayName: 'IconViewportWide',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
