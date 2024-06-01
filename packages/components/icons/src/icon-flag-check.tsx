import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFlagCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.767 15.12a4.983 4.983 0 0 1 -1.767 -1.12a5 5 0 0 0 -7 0v-9a5 5 0 0 1 7 0a5 5 0 0 0 7 0v8.5" />
      <path d="M5 21v-7" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconFlagCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
