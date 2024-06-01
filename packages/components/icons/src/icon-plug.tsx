import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlug = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z" />
      <path d="M4 20l3.5 -3.5" />
      <path d="M15 4l-3.5 3.5" />
      <path d="M20 9l-3.5 3.5" />
    </>
  ),
  displayName: 'IconPlug',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
