import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconOutlet = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <circle cx="9" cy="12" r=".5" fill="currentColor" />
      <circle cx="15" cy="12" r=".5" fill="currentColor" />
    </>
  ),
  displayName: 'IconOutlet',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
