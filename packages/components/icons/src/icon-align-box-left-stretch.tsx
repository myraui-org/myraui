import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlignBoxLeftStretch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" />
      <path d="M9 17h-2" />
      <path d="M13 12h-6" />
      <path d="M11 7h-4" />
    </>
  ),
  displayName: 'IconAlignBoxLeftStretch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
