import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconH6 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19 14a2 2 0 1 0 0 4a2 2 0 0 0 0 -4z" />
      <path d="M21 12a2 2 0 1 0 -4 0v4" />
      <path d="M4 6v12" />
      <path d="M12 6v12" />
      <path d="M11 18h2" />
      <path d="M3 18h2" />
      <path d="M4 12h8" />
      <path d="M3 6h2" />
      <path d="M11 6h2" />
    </>
  ),
  displayName: 'IconH6',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
