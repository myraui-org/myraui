import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceWatchPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 18h-4a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v4" />
      <path d="M9 18v3h4" />
      <path d="M9 6v-3h6v3" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </>
  ),
  displayName: 'IconDeviceWatchPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
