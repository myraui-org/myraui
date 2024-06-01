import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHomeExclamation = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 12l-9 -9l-9 9h2v7a2 2 0 0 0 2 2h8" />
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.857 1.257" />
      <path d="M19 16v3" />
      <path d="M19 22v.01" />
    </>
  ),
  displayName: 'IconHomeExclamation',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
