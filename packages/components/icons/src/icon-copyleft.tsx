import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconCopyleft = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M10 9.75a3.016 3.016 0 0 1 4.163 .173a2.993 2.993 0 0 1 0 4.154a3.016 3.016 0 0 1 -4.163 .173" />
    </>
  ),
  displayName: 'IconCopyleft',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
