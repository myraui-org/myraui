import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquarePlus2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 21h-7.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </>
  ),
  displayName: 'IconSquarePlus2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
