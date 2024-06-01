import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWashDryP = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5" />
    </>
  ),
  displayName: 'IconWashDryP',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
