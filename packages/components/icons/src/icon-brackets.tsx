import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrackets = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 4h-3v16h3" />
      <path d="M16 4h3v16h-3" />
    </>
  ),
  displayName: 'IconBrackets',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
