import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHeartPin = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 20l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 0 1 8.5 5.179" />
      <path d="M21.121 20.121a3 3 0 1 0 -4.242 0c.418 .419 1.125 1.045 2.121 1.879c1.051 -.89 1.759 -1.516 2.121 -1.879z" />
      <path d="M19 18v.01" />
    </>
  ),
  displayName: 'IconHeartPin',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
