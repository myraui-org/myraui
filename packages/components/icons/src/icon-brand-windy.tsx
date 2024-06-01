import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandWindy = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 4c0 5.5 -.33 16 4 16s7.546 -11.27 8 -13" />
      <path d="M3 4c.253 5.44 1.449 16 5.894 16c4.444 0 8.42 -10.036 9.106 -14" />
    </>
  ),
  displayName: 'IconBrandWindy',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
