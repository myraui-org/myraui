import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandRadixUi = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.5 5.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0" />
      <path d="M6 3h5v5h-5z" />
      <path d="M11 11v10a5 5 0 0 1 -.217 -9.995l.217 -.005z" />
    </>
  ),
  displayName: 'IconBrandRadixUi',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
