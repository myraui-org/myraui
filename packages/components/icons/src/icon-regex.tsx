import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRegex = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.5 15a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0 -5z" />
      <path d="M17 7.875l3 -1.687" />
      <path d="M17 7.875v3.375" />
      <path d="M17 7.875l-3 -1.687" />
      <path d="M17 7.875l3 1.688" />
      <path d="M17 4.5v3.375" />
      <path d="M17 7.875l-3 1.688" />
    </>
  ),
  displayName: 'IconRegex',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
