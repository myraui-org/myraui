import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMusicUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M9 17v-13h10v8" />
      <path d="M9 8h10" />
      <path d="M19 22v-6" />
      <path d="M22 19l-3 -3l-3 3" />
    </>
  ),
  displayName: 'IconMusicUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
