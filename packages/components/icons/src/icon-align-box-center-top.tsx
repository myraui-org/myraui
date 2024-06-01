import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlignBoxCenterTop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M11 13h2" />
      <path d="M9 10h6" />
      <path d="M10 7h4" />
    </>
  ),
  displayName: 'IconAlignBoxCenterTop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
