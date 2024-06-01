import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandBilibili = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 10a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4v-6z" />
      <path d="M8 3l2 3" />
      <path d="M16 3l-2 3" />
      <path d="M9 13v-2" />
      <path d="M15 11v2" />
    </>
  ),
  displayName: 'IconBrandBilibili',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
