import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMicrowaveOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 18h-14a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h2m4 0h10a1 1 0 0 1 1 1v10" />
      <path d="M15 6v5m0 4v3" />
      <path d="M18 12h.01" />
      <path d="M18 9h.01" />
      <path d="M6.5 10.5c1 -.667 1.5 -.667 2.5 0c.636 .265 1.272 .665 1.907 .428" />
      <path d="M6.5 13.5c1 -.667 1.5 -.667 2.5 0c.833 .347 1.667 .926 2.5 0" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconMicrowaveOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
