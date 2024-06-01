import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconQuotes = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
      <path d="M8 12c-1.333 -1.854 -1.333 -4.146 0 -6" />
      <path d="M16 18c1.333 -1.854 1.333 -4.146 0 -6" />
      <path d="M20 18c1.333 -1.854 1.333 -4.146 0 -6" />
    </>
  ),
  displayName: 'IconQuotes',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
