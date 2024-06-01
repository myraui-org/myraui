import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowAutofitContent = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 4l-3 3l3 3" />
      <path d="M18 4l3 3l-3 3" />
      <path d="M4 14m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M10 7h-7" />
      <path d="M21 7h-7" />
    </>
  ),
  displayName: 'IconArrowAutofitContent',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
