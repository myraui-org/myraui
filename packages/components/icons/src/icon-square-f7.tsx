import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareF7 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M13 9h3l-1.5 6" />
      <path d="M8 12h2" />
      <path d="M10 9h-2v6" />
    </>
  ),
  displayName: 'IconSquareF7',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
