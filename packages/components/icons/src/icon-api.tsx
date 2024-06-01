import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconApi = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 13h5" />
      <path d="M12 16v-8h3a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-3" />
      <path d="M20 8v8" />
      <path d="M9 16v-5.5a2.5 2.5 0 0 0 -5 0v5.5" />
    </>
  ),
  displayName: 'IconApi',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
