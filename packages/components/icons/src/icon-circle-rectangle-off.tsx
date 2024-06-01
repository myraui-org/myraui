import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleRectangleOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 10h3v3m-3 1h-7v-4h3" />
      <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconCircleRectangleOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
