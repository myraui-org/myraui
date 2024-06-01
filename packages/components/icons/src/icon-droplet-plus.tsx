import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDropletPlus = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18.602 12.004a6.66 6.66 0 0 0 -.538 -1.127l-4.89 -7.26c-.42 -.625 -1.287 -.803 -1.936 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.16 7.16 0 0 0 5.033 1.56" />
      <path d="M16 19h6" />
      <path d="M19 16v6" />
    </>
  ),
  displayName: 'IconDropletPlus',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
