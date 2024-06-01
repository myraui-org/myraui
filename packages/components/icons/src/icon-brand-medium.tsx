import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandMedium = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 9h1l3 3l3 -3h1" />
      <path d="M8 15l2 0" />
      <path d="M14 15l2 0" />
      <path d="M9 9l0 6" />
      <path d="M15 9l0 6" />
    </>
  ),
  displayName: 'IconBrandMedium',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
