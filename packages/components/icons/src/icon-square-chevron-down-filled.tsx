import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconSquareChevronDownFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-9.387 8.21a1 1 0 0 0 -1.32 1.497l3 3l.094 .083a1 1 0 0 0 1.32 -.083l3 -3l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292l-2.293 -2.292z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconSquareChevronDownFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
