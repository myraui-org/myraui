import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCsv = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1" />
      <path d="M17 8l2 8l2 -8" />
      <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
    </>
  ),
  displayName: 'IconCsv',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
