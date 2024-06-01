import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlaylistOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 14a3 3 0 1 0 3 3" />
      <path d="M17 13v-9h4" />
      <path d="M13 5h-4m-4 0h-2" />
      <path d="M3 9h6" />
      <path d="M9 13h-6" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconPlaylistOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
