import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCoinPound = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M15 9a2 2 0 1 0 -4 0v5a2 2 0 0 1 -2 2h6" />
      <path d="M9 12h4" />
    </>
  ),
  displayName: 'IconCoinPound',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
