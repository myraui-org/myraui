import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMailCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6" />
      <path d="M3 7l9 6l9 -6" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconMailCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
