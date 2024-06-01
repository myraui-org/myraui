import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMathPiDivide2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 15h3a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h3" />
      <path d="M5 12h14" />
      <path d="M10 9v-6" />
      <path d="M14 3v6" />
      <path d="M15 3h-6" />
    </>
  ),
  displayName: 'IconMathPiDivide2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
