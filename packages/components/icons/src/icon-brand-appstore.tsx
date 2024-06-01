import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandAppstore = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488" />
      <path d="M7 14h5m2.9 0h2.1" />
      <path d="M16 16l-2.51 -4.518m-1.487 -2.677l-1 -1.805" />
    </>
  ),
  displayName: 'IconBrandAppstore',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
