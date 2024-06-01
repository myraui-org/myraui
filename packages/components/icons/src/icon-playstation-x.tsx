import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlaystationX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
      <path d="M8.5 8.5l7 7" />
      <path d="M8.5 15.5l7 -7" />
    </>
  ),
  displayName: 'IconPlaystationX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
