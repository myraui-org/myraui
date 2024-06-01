import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockDollar = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.866 10.45a9 9 0 1 0 -7.815 10.488" />
      <path d="M12 7v5l1.5 1.5" />
      <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M19 21v1m0 -8v1" />
    </>
  ),
  displayName: 'IconClockDollar',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
