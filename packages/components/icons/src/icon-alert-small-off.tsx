import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconAlertSmallOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 16h.01" />
      <path d="M12 7v1" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconAlertSmallOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
