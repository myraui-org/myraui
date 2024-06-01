import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSwitch2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6" />
      <path d="M18 4l3 3l-3 3" />
      <path d="M3 7h5l7 10h6" />
      <path d="M18 20l3 -3l-3 -3" />
    </>
  ),
  displayName: 'IconSwitch2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
