import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTrashOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 3l18 18" />
      <path d="M4 7h3m4 0h9" />
      <path d="M10 11l0 6" />
      <path d="M14 14l0 3" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923" />
      <path d="M18.384 14.373l.616 -7.373" />
      <path d="M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </>
  ),
  displayName: 'IconTrashOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
