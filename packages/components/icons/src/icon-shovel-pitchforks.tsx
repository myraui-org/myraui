import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconShovelPitchforks = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 3h4" />
      <path d="M7 3v12" />
      <path d="M4 15h6v3a3 3 0 0 1 -6 0v-3z" />
      <path d="M14 21v-3a3 3 0 0 1 6 0v3" />
      <path d="M17 21v-18" />
    </>
  ),
  displayName: 'IconShovelPitchforks',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
