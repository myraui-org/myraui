import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconRobotOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2m-4 0h-4a2 2 0 0 1 -2 -2v-4" />
      <path d="M12 2v2" />
      <path d="M9 12v9" />
      <path d="M15 15v6" />
      <path d="M5 16l4 -2" />
      <path d="M9 18h6" />
      <path d="M14 8v.01" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconRobotOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
