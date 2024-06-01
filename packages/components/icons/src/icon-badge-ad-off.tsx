import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBadgeAdOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2" />
      <path d="M14 14v1h1m2 -2v-2a2 2 0 0 0 -2 -2h-1v1" />
      <path d="M7 15v-4.5a1.5 1.5 0 0 1 2.077 -1.385m.788 .762c.087 .19 .135 .4 .135 .623v4.5" />
      <path d="M7 13h3" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconBadgeAdOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
