import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceAirtag = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12a8 8 0 1 0 16 0a8 8 0 0 0 -16 0" />
      <path d="M9 15v.01" />
      <path d="M15 15a6 6 0 0 0 -6 -6" />
      <path d="M12 15a3 3 0 0 0 -3 -3" />
    </>
  ),
  displayName: 'IconDeviceAirtag',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
