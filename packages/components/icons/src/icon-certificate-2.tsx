import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCertificate2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M10 7h4" />
      <path d="M10 18v4l2 -1l2 1v-4" />
      <path d="M10 19h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2" />
    </>
  ),
  displayName: 'IconCertificate2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
