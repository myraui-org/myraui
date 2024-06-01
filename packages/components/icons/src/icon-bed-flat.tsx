import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBedFlat = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M10 13h11v-2a3 3 0 0 0 -3 -3h-8v5z" />
      <path d="M3 16h18" />
    </>
  ),
  displayName: 'IconBedFlat',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
