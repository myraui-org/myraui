import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInnerShadowLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5.636 5.636a9 9 0 1 1 12.728 12.728a9 9 0 0 1 -12.728 -12.728z" />
      <path d="M7.757 16.243a6 6 0 0 1 0 -8.486" />
    </>
  ),
  displayName: 'IconInnerShadowLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
