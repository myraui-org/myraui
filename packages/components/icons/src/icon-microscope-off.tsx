import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMicroscopeOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 21h14" />
      <path d="M6 18h2" />
      <path d="M7 18v3" />
      <path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" />
      <path d="M10.5 12.5l-1.5 1.5" />
      <path d="M17 3l3 3" />
      <path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconMicroscopeOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
