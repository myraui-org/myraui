import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandElectronicArts = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M17.5 15l-3 -6l-3 6h-5l1.5 -3" />
      <path d="M17 14h-2" />
      <path d="M6.5 12h3.5" />
      <path d="M8 9h3" />
    </>
  ),
  displayName: 'IconBrandElectronicArts',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
