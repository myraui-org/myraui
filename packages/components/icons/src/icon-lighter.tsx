import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLighter = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2 -2v-7h-12a2 2 0 0 1 -2 -2v-5a2 2 0 0 1 2 -2h3z" />
      <path d="M16 4l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" />
    </>
  ),
  displayName: 'IconLighter',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
