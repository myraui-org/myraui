import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBowl = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
    </>
  ),
  displayName: 'IconBowl',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
