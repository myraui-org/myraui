import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFilterX = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13.758 19.414l-4.758 1.586v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227h16v2.172a2 2 0 0 1 -.586 1.414l-4.414 4.414v1.5" />
      <path d="M22 22l-5 -5" />
      <path d="M17 22l5 -5" />
    </>
  ),
  displayName: 'IconFilterX',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
