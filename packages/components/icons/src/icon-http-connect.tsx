import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHttpConnect = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 10a2 2 0 1 0 -4 0v4a2 2 0 1 0 4 0" />
      <path d="M17 16v-8l4 8v-8" />
      <path d="M12 8a2 2 0 0 1 2 2v4a2 2 0 1 1 -4 0v-4a2 2 0 0 1 2 -2z" />
    </>
  ),
  displayName: 'IconHttpConnect',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
