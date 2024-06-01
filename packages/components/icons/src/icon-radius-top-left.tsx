import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRadiusTopLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19v-6a8 8 0 0 1 8 -8h6" />
    </>
  ),
  displayName: 'IconRadiusTopLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
