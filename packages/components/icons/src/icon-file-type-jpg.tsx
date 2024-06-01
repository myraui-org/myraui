import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFileTypeJpg = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
      <path d="M11 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
      <path d="M20 15h-1a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h1v-3" />
      <path d="M5 15h3v4.5a1.5 1.5 0 0 1 -3 0" />
    </>
  ),
  displayName: 'IconFileTypeJpg',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
