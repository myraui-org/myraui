import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMoodPuzzled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14.986 3.51a9 9 0 1 0 1.514 16.284c2.489 -1.437 4.181 -3.978 4.5 -6.794" />
      <path d="M10 10h.01" />
      <path d="M14 8h.01" />
      <path d="M12 15c1 -1.333 2 -2 3 -2" />
      <path d="M20 9v.01" />
      <path d="M20 6a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </>
  ),
  displayName: 'IconMoodPuzzled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
