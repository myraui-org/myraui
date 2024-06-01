import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBuildingChurch = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l18 0" />
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
      <path d="M10 5l4 0" />
      <path d="M12 3l0 5" />
      <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
    </>
  ),
  displayName: 'IconBuildingChurch',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
