import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconArrowCurveLeft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 7l-4 -4l-4 4" />
      <path d="M10 3v4.394a6.737 6.737 0 0 0 3 5.606a6.737 6.737 0 0 1 3 5.606v2.394" />
    </>
  ),
  displayName: 'IconArrowCurveLeft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
