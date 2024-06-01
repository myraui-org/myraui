import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCurrencyKroneCzech = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 6v12" />
      <path d="M5 12c3.5 0 6 -3 6 -6" />
      <path d="M5 12c3.5 0 6 3 6 6" />
      <path d="M19 6l-2 2l-2 -2" />
      <path d="M19 12h-2a3 3 0 0 0 0 6h2" />
    </>
  ),
  displayName: 'IconCurrencyKroneCzech',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
