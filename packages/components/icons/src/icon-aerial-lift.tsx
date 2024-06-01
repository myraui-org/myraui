import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAerialLift = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 5l16 -2m-8 1v10m-5.106 -6h10.306c2.45 3 2.45 9 -.2 12h-10.106c-2.544 -3 -2.544 -9 0 -12zm-1.894 6h14" />
    </>
  ),
  displayName: 'IconAerialLift',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
