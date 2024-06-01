import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronsUpLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 15v-8h8" />
      <path d="M11 19v-8h8" />
    </>
  ),
  displayName: 'IconChevronsUpLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
