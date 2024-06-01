import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowAutofitLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8" />
      <path d="M20 18h-17" />
      <path d="M6 15l-3 3l3 3" />
    </>
  ),
  displayName: 'IconArrowAutofitLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
