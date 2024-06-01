import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBowlFilled = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M20 7h-16a2 2 0 0 0 -2 2v.5l.007 .18c.134 1.806 2.169 5.275 3.928 6.771l.065 .053v.496a2 2 0 0 0 2 2h8l.15 -.005a2 2 0 0 0 1.85 -1.995v-.504l.017 -.013c1.736 -1.494 3.983 -5.289 3.983 -6.983v-.5a2 2 0 0 0 -2 -2z"
        fill="currentColor"
        style={{ strokeWidth: 'var(--myraui-icon-stroke-width, 0' }}
      />
    </>
  ),
  displayName: 'IconBowlFilled',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
