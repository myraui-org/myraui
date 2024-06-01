import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceHeartMonitor = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M4 9h6l1 -2l2 4l1 -2h6" />
      <path d="M4 14h16" />
      <path d="M14 17v.01" />
      <path d="M17 17v.01" />
    </>
  ),
  displayName: 'IconDeviceHeartMonitor',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
