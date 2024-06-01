import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHeartCheck = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 12.572l-3 2.928m-5.5 3.5a8916.99 8916.99 0 0 0 -6.5 -6.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
      <path d="M15 19l2 2l4 -4" />
    </>
  ),
  displayName: 'IconHeartCheck',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
