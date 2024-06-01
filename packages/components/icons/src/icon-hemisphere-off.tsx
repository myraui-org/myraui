import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHemisphereOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6.588 6.603c-2.178 .547 -3.588 1.417 -3.588 2.397c0 1.657 4.03 3 9 3m3.72 -.267c3.114 -.473 5.28 -1.518 5.28 -2.733c0 -1.657 -4.03 -3 -9 -3c-.662 0 -1.308 .024 -1.93 .07" />
      <path d="M3 9a9 9 0 0 0 13.677 7.69m2.165 -1.843a8.965 8.965 0 0 0 2.158 -5.847" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconHemisphereOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
