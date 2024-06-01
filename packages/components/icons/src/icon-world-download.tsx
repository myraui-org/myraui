import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconWorldDownload = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M21 12a9 9 0 1 0 -9 9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h8.4" />
      <path d="M11.578 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9" />
      <path d="M18 14v7m-3 -3l3 3l3 -3" />
    </>
  ),
  displayName: 'IconWorldDownload',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
