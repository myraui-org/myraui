import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAsterisk = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12l8 -4.5" />
      <path d="M12 12v9" />
      <path d="M12 12l-8 -4.5" />
      <path d="M12 12l8 4.5" />
      <path d="M12 3v9" />
      <path d="M12 12l-8 4.5" />
    </>
  ),
  displayName: 'IconAsterisk',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
