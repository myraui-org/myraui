import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInboxOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.593 3.422a2 2 0 0 1 -1.407 .578h-12a2 2 0 0 1 -2 -2v-12c0 -.554 .225 -1.056 .59 -1.418" />
      <path d="M4 13h3l3 3h4l.987 -.987m2.013 -2.013h3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconInboxOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
