import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPhotoCircleMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 8h.01" />
      <path d="M20.475 15.035a9 9 0 0 0 -8.475 -12.035a9 9 0 0 0 -9 9a9 9 0 0 0 9.525 8.985" />
      <path d="M4 15l4 -4c.928 -.893 2.072 -.893 3 0l4 4" />
      <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l2 2" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconPhotoCircleMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
