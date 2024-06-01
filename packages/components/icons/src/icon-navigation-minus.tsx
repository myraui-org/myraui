import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationMinus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.5 15c-1.232 -2.67 -3.065 -6.67 -5.5 -12l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463" />
      <path d="M16 19h6" />
    </>
  ),
  displayName: 'IconNavigationMinus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
