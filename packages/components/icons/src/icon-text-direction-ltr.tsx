import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTextDirectionLtr = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 19h14" />
      <path d="M17 21l2 -2l-2 -2" />
      <path d="M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5" />
      <path d="M14 15v-11" />
      <path d="M10 15v-11" />
    </>
  ),
  displayName: 'IconTextDirectionLtr',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
