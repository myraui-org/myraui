import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMeterSquare = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 5h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
      <path d="M4 12v6" />
      <path d="M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" />
      <path d="M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" />
    </>
  ),
  displayName: 'IconMeterSquare',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
