import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderCornerRounded = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 20v-10a6 6 0 0 1 6 -6h10" />
    </>
  ),
  displayName: 'IconBorderCornerRounded',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
