import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDrone = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 10h4v4h-4z" />
      <path d="M10 10l-3.5 -3.5" />
      <path d="M9.96 6a3.5 3.5 0 1 0 -3.96 3.96" />
      <path d="M14 10l3.5 -3.5" />
      <path d="M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96" />
      <path d="M14 14l3.5 3.5" />
      <path d="M14.04 18a3.5 3.5 0 1 0 3.96 -3.96" />
      <path d="M10 14l-3.5 3.5" />
      <path d="M6 14.04a3.5 3.5 0 1 0 3.96 3.96" />
    </>
  ),
  displayName: 'IconDrone',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
