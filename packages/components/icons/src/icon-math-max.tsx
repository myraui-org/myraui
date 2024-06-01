import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathMax = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 6a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M3 15s.616 -5.544 2.332 -7.93" />
      <path d="M8.637 7.112c2.717 3.313 5.882 12.888 8.363 12.888c2 0 3.333 -3 4 -9" />
    </>
  ),
  displayName: 'IconMathMax',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
