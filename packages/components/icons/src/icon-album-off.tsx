import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlbumOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h10a2 2 0 0 1 2 2v10m-.581 3.41c-.362 .364 -.864 .59 -1.419 .59h-12a2 2 0 0 1 -2 -2v-12c0 -.552 .224 -1.052 .585 -1.413" />
      <path d="M12 4v4m1.503 1.497l.497 -.497l2 2v-7" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconAlbumOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
