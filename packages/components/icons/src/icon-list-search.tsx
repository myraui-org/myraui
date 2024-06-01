import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconListSearch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M18.5 18.5l2.5 2.5" />
      <path d="M4 6h16" />
      <path d="M4 12h4" />
      <path d="M4 18h4" />
    </>
  ),
  displayName: 'IconListSearch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
