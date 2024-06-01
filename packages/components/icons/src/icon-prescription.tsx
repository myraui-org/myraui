import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconPrescription = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5" />
      <path d="M19 21l-9 -9" />
      <path d="M13 21l6 -6" />
    </>
  ),
  displayName: 'IconPrescription',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
