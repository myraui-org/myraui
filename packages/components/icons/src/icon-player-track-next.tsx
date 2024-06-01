import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPlayerTrackNext = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 5v14l8 -7z" />
      <path d="M14 5v14l8 -7z" />
    </>
  ),
  displayName: 'IconPlayerTrackNext',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
