import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMultiplier1x = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 16v-8l-2 2" />
      <path d="M13 16l4 -4" />
      <path d="M17 16l-4 -4" />
    </>
  ),
  displayName: 'IconMultiplier1x',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
