import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconInputAi = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11v-2a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4" />
      <path d="M14 21v-4a2 2 0 1 1 4 0v4" />
      <path d="M14 19h4" />
      <path d="M21 15v6" />
    </>
  ),
  displayName: 'IconInputAi',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
