import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInfinityOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8.165 8.174a4 4 0 0 0 -5.166 3.826a4 4 0 0 0 6.829 2.828a10 10 0 0 0 2.172 -2.828m1.677 -2.347a10 10 0 0 1 .495 -.481a4 4 0 1 1 5.129 6.1m-3.521 .537a4 4 0 0 1 -1.608 -.981a10 10 0 0 1 -2.172 -2.828" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconInfinityOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
