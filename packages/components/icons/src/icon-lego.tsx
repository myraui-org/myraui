import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLego = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.5 11l.01 0" />
      <path d="M14.5 11l.01 0" />
      <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
      <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
    </>
  ),
  displayName: 'IconLego',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
