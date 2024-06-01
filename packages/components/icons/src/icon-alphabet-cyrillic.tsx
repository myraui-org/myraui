import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlphabetCyrillic = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 10h2a2 2 0 0 1 2 2v5h-3a2 2 0 1 1 0 -4h3" />
      <path d="M19 7h-3a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h1a2 2 0 0 0 2 -2v-3a2 2 0 0 0 -2 -2h-3" />
    </>
  ),
  displayName: 'IconAlphabetCyrillic',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
