import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconChevronUp = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 15l6 -6l6 6" />
    </>
  ),
  displayName: 'IconChevronUp',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
