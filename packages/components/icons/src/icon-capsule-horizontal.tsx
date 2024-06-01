import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCapsuleHorizontal = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 6m0 6a6 6 0 0 1 6 -6h6a6 6 0 0 1 6 6v0a6 6 0 0 1 -6 6h-6a6 6 0 0 1 -6 -6z" />
    </>
  ),
  displayName: 'IconCapsuleHorizontal',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
