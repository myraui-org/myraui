import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRouteAltLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 3h-5v5" />
      <path d="M16 3h5v5" />
      <path d="M3 3l7.536 7.536a5 5 0 0 1 1.464 3.534v6.93" />
      <path d="M18 6.01v-.01" />
      <path d="M16 8.02v-.01" />
      <path d="M14 10v.01" />
    </>
  ),
  displayName: 'IconRouteAltLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
