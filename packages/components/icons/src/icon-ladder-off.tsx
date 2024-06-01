import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconLadderOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 3v1m0 4v13" />
      <path d="M16 3v9m0 4v5" />
      <path d="M8 14h6" />
      <path d="M8 10h2m4 0h2" />
      <path d="M10 6h6" />
      <path d="M8 18h8" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconLadderOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
