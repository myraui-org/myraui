import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconScubaDiving = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" />
      <path d="M11 8l4.5 1.5" />
    </>
  ),
  displayName: 'IconScubaDiving',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
