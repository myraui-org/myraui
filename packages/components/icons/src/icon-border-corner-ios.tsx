import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderCornerIos = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20c0 -6.559 0 -9.838 1.628 -12.162a9 9 0 0 1 2.21 -2.21c2.324 -1.628 5.602 -1.628 12.162 -1.628" />
    </>
  ),
  displayName: 'IconBorderCornerIos',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
