import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconMoodWink2 = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21a9 9 0 1 1 0 -18a9 9 0 0 1 0 18z" />
      <path d="M9 10h-.01" />
      <path d="M14.5 15a3.5 3.5 0 0 1 -5 0" />
      <path d="M15.5 8.5l-1.5 1.5l1.5 1.5" />
    </>
  ),
  displayName: 'IconMoodWink2',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
