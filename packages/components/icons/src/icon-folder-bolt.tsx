import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconFolderBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 19h-8a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v3.5" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconFolderBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
