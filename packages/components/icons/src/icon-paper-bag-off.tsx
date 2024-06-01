import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPaperBagOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7.158 3.185c.256 -.119 .542 -.185 .842 -.185h8a2 2 0 0 1 2 2v1.82a5 5 0 0 0 .528 2.236l.944 1.888a5 5 0 0 1 .528 2.236v2.82m-.177 3.824a2 2 0 0 1 -1.823 1.176h-12a2 2 0 0 1 -2 -2v-5.82a5 5 0 0 1 .528 -2.236l1.472 -2.944v-2" />
      <path d="M13.185 13.173a2 2 0 1 0 2.64 2.647" />
      <path d="M6 21a2 2 0 0 0 2 -2v-5.82a5 5 0 0 0 -.528 -2.236l-1.472 -2.944" />
      <path d="M11 7h2" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconPaperBagOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
