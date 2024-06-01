import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIroningSteam = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 19v2" />
      <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.985 1.164h-16.82a7 7 0 0 1 7 -7h9.8" />
      <path d="M8 19l-1 2" />
      <path d="M16 19l1 2" />
    </>
  ),
  displayName: 'IconIroningSteam',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
