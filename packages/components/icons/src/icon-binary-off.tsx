import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBinaryOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11 7v-2h-1" />
      <path d="M18 19v-1" />
      <path d="M15.5 5h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5z" />
      <path d="M10.5 14h2a.5 .5 0 0 1 .5 .5v4a.5 .5 0 0 1 -.5 .5h-2a.5 .5 0 0 1 -.5 -.5v-4a.5 .5 0 0 1 .5 -.5z" />
      <path d="M6 10v.01" />
      <path d="M6 19v.01" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconBinaryOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
