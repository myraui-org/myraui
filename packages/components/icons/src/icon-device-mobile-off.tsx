import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobileOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7.159 3.185c.256 -.119 .54 -.185 .841 -.185h8a2 2 0 0 1 2 2v9m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-13" />
      <path d="M11 4h2" />
      <path d="M3 3l18 18" />
      <path d="M12 17v.01" />
    </>
  ),
  displayName: 'IconDeviceMobileOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
