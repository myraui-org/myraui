import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPointerPause = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15.72 13.163l-.942 -.941l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l.969 .969" />
      <path d="M17 17v5" />
      <path d="M21 17v5" />
    </>
  ),
  displayName: 'IconPointerPause',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
