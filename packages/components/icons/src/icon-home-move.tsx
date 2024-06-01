import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHomeMove = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2" />
      <path d="M19 12h2l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h5.5" />
      <path d="M16 19h6" />
      <path d="M19 16l3 3l-3 3" />
    </>
  ),
  displayName: 'IconHomeMove',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
