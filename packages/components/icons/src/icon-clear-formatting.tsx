import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClearFormatting = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 15l4 4m0 -4l-4 4" />
      <path d="M7 6v-1h11v1" />
      <path d="M7 19l4 0" />
      <path d="M13 5l-4 14" />
    </>
  ),
  displayName: 'IconClearFormatting',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
