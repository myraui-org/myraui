import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconTerminal = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 7l5 5l-5 5" />
      <path d="M12 19l7 0" />
    </>
  ),
  displayName: 'IconTerminal',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
