import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPencilSearch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 11l1.5 -1.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4l3 -3" />
      <path d="M13.5 6.5l4 4" />
      <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M20.2 20.2l1.8 1.8" />
    </>
  ),
  displayName: 'IconPencilSearch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
