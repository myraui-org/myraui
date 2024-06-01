import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAutomaticGearbox = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 17v4h1a2 2 0 1 0 0 -4h-1z" />
      <path d="M17 11h1.5a1.5 1.5 0 0 0 0 -3h-1.5v5" />
      <path d="M5 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3" />
      <path d="M9 11h4" />
    </>
  ),
  displayName: 'IconAutomaticGearbox',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
