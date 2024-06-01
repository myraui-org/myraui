import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLayoutBottombarExpand = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 6v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2z" />
      <path d="M20 15h-16" />
      <path d="M14 10l-2 -2l-2 2" />
    </>
  ),
  displayName: 'IconLayoutBottombarExpand',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
