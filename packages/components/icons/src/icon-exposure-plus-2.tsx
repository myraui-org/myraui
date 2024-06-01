import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconExposurePlus2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 9a4 4 0 1 1 8 0c0 1.098 -.564 2.025 -1.159 2.815l-6.841 7.185h8" />
      <path d="M3 12h6" />
      <path d="M6 9v6" />
    </>
  ),
  displayName: 'IconExposurePlus2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
