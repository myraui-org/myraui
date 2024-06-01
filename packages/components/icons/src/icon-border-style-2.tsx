import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBorderStyle2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18v.01" />
      <path d="M8 18v.01" />
      <path d="M12 18v.01" />
      <path d="M16 18v.01" />
      <path d="M20 18v.01" />
      <path d="M18 12h2" />
      <path d="M11 12h2" />
      <path d="M4 12h2" />
      <path d="M4 6h16" />
    </>
  ),
  displayName: 'IconBorderStyle2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
