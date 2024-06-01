import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShareOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M15.861 15.896a3 3 0 0 0 4.265 4.22m.578 -3.417a3.012 3.012 0 0 0 -1.507 -1.45" />
      <path d="M8.7 10.7l1.336 -.688m2.624 -1.352l2.64 -1.36" />
      <path d="M8.7 13.3l6.6 3.4" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconShareOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
