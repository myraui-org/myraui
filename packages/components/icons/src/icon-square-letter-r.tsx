import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareLetterR = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
    </>
  ),
  displayName: 'IconSquareLetterR',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
