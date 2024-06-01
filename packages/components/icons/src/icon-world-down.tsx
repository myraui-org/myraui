import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWorldDown = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20.986 12.509a9 9 0 1 0 -8.455 8.476" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h10.9" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3c2.313 3.706 3.07 7.857 2.27 12" />
      <path d="M19 16v6" />
      <path d="M22 19l-3 3l-3 -3" />
    </>
  ),
  displayName: 'IconWorldDown',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
