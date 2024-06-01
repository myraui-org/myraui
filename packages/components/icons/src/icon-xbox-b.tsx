import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconXboxB = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
      <path d="M13 12a2 2 0 1 1 0 4h-3v-4" />
      <path d="M13 12h-3" />
      <path d="M13 12a2 2 0 1 0 0 -4h-3v4" />
    </>
  ),
  displayName: 'IconXboxB',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
