import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInnerShadowTop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.636 5.636a9 9 0 1 0 12.728 12.728a9 9 0 0 0 -12.728 -12.728z" />
      <path d="M16.243 7.757a6 6 0 0 0 -8.486 0" />
    </>
  ),
  displayName: 'IconInnerShadowTop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
