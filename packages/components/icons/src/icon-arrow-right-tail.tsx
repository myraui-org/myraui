import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowRightTail = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 15l3 -3l-3 -3" />
      <path d="M3 15l3 -3l-3 -3" />
      <path d="M6 12l15 0" />
    </>
  ),
  displayName: 'IconArrowRightTail',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
