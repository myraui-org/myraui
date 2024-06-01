import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
      <path d="M12 7v5l3 3" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconClockBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
