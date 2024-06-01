import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareRoundedPercentage = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
      <path d="M9 15.075l6 -6" />
      <path d="M9 9.105v.015" />
      <path d="M15 15.12v.015" />
    </>
  ),
  displayName: 'IconSquareRoundedPercentage',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
