import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHemisphere = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9m-9 0a9 3 0 1 0 18 0a9 3 0 1 0 -18 0" />
      <path d="M3 9a9 9 0 0 0 18 0" />
    </>
  ),
  displayName: 'IconHemisphere',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
