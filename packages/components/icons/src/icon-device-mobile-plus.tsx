import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceMobilePlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12.5 21h-4.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v7" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </>
  ),
  displayName: 'IconDeviceMobilePlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
