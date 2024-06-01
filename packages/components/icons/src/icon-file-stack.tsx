import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFileStack = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
      <path d="M5 21h14" />
      <path d="M5 18h14" />
      <path d="M5 15h14" />
    </>
  ),
  displayName: 'IconFileStack',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
