import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSoupOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 19h16" />
      <path d="M15 11h6c0 1.691 -.525 3.26 -1.42 4.552m-2.034 2.032a7.963 7.963 0 0 1 -4.546 1.416h-2a8 8 0 0 1 -8 -8h8" />
      <path d="M12 5v3" />
      <path d="M15 5v3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconSoupOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
