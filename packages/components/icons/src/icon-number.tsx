import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNumber = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 17v-10l7 10v-10" />
      <path d="M15 17h5" />
      <path d="M17.5 10m-2.5 0a2.5 3 0 1 0 5 0a2.5 3 0 1 0 -5 0" />
    </>
  ),
  displayName: 'IconNumber',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
