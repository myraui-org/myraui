import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMotorbike = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
      <path d="M13 6h2l1.5 3l2 4" />
    </>
  ),
  displayName: 'IconMotorbike',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
