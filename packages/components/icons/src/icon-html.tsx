import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconHtml = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M13 16v-8l2 5l2 -5v8" />
      <path d="M1 16v-8" />
      <path d="M5 8v8" />
      <path d="M1 12h4" />
      <path d="M7 8h4" />
      <path d="M9 8v8" />
      <path d="M20 8v8h3" />
    </>
  ),
  displayName: 'IconHtml',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
