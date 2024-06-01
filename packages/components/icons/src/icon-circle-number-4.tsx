import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleNumber4 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 8v3a1 1 0 0 0 1 1h3" />
      <path d="M14 8v8" />
    </>
  ),
  displayName: 'IconCircleNumber4',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
