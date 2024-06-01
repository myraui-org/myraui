import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowBarLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12l10 0" />
      <path d="M4 12l4 4" />
      <path d="M4 12l4 -4" />
      <path d="M20 4l0 16" />
    </>
  ),
  displayName: 'IconArrowBarLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
