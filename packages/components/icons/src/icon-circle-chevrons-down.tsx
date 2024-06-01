import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCircleChevronsDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 9l-3 3l-3 -3" />
      <path d="M15 13l-3 3l-3 -3" />
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18z" />
    </>
  ),
  displayName: 'IconCircleChevronsDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
