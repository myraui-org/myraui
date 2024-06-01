import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconClockCancel = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.997 12.25a9 9 0 1 0 -8.718 8.745" />
      <path d="M19 19m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M17 21l4 -4" />
      <path d="M12 7v5l2 2" />
    </>
  ),
  displayName: 'IconClockCancel',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
