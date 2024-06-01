import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAntennaBars2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 18l0 -3" />
      <path d="M10 18l0 .01" />
      <path d="M14 18l0 .01" />
      <path d="M18 18l0 .01" />
    </>
  ),
  displayName: 'IconAntennaBars2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
