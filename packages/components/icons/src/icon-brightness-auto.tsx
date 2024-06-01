import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrightnessAuto = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 6h3.5l2.5 -2.5l2.5 2.5h3.5v3.5l2.5 2.5l-2.5 2.5v3.5h-3.5l-2.5 2.5l-2.5 -2.5h-3.5v-3.5l-2.5 -2.5l2.5 -2.5z" />
      <path d="M10 14.5v-3.5a2 2 0 1 1 4 0v3.5" />
      <path d="M10 13h4" />
    </>
  ),
  displayName: 'IconBrightnessAuto',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
