import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLollipop = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
      <path d="M21 10a3.5 3.5 0 0 0 -7 0" />
      <path d="M14 10a3.5 3.5 0 0 1 -7 0" />
      <path d="M14 17a3.5 3.5 0 0 0 0 -7" />
      <path d="M14 3a3.5 3.5 0 0 0 0 7" />
      <path d="M3 21l6 -6" />
    </>
  ),
  displayName: 'IconLollipop',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
