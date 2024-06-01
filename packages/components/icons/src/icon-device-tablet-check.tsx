import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceTabletCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.5 21h-5.5a1 1 0 0 1 -1 -1v-16a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v9.5" />
      <path d="M12.314 16.05a1 1 0 0 0 -1.042 1.635" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconDeviceTabletCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
