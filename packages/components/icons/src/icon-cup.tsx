import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCup = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 11h14v-3h-14z" />
      <path d="M17.5 11l-1.5 10h-8l-1.5 -10" />
      <path d="M6 8v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1" />
      <path d="M15 5v-2" />
    </>
  ),
  displayName: 'IconCup',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
