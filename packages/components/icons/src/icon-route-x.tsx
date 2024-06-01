import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRouteX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17l4 4" />
      <path d="M7 17l-4 4" />
      <path d="M17 3l4 4" />
      <path d="M21 3l-4 4" />
      <path d="M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5" />
    </>
  ),
  displayName: 'IconRouteX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
