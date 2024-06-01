import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlant = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
      <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
      <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
      <path d="M12 15l0 -6" />
    </>
  ),
  displayName: 'IconPlant',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
