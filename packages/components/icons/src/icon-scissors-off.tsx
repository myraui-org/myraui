import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconScissorsOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4.432 4.442a3 3 0 1 0 4.114 4.146" />
      <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M8.6 15.4l3.4 -3.4m2 -2l5 -5" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconScissorsOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
