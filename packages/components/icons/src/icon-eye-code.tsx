import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconEyeCode = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
      <path d="M11.11 17.958c-3.209 -.307 -5.91 -2.293 -8.11 -5.958c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6c-.21 .352 -.427 .688 -.647 1.008" />
      <path d="M20 21l2 -2l-2 -2" />
      <path d="M17 17l-2 2l2 2" />
    </>
  ),
  displayName: 'IconEyeCode',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
