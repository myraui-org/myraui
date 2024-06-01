import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobileRotated = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M20 11v2" />
      <path d="M7 12h-.01" />
    </>
  ),
  displayName: 'IconDeviceMobileRotated',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
