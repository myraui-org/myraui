import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandTeams = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7h10v10h-10z" />
      <path d="M6 10h4" />
      <path d="M8 10v4" />
      <path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5 -5v-7h-5" />
      <path d="M18 18a4 4 0 0 0 4 -4v-5h-4" />
      <path d="M13.003 8.83a3 3 0 1 0 -1.833 -1.833" />
      <path d="M15.83 8.36a2.5 2.5 0 1 0 .594 -4.117" />
    </>
  ),
  displayName: 'IconBrandTeams',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
