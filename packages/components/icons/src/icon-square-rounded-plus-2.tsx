import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareRoundedPlus2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.54 20.996c-.176 .004 -.356 .004 -.54 .004c-7.2 0 -9 -1.8 -9 -9s1.8 -9 9 -9s9 1.8 9 9c0 .185 -.001 .366 -.004 .544" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </>
  ),
  displayName: 'IconSquareRoundedPlus2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
