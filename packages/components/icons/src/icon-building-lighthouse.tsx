import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBuildingLighthouse = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 3l2 3l2 15h-8l2 -15z" />
      <path d="M8 9l8 0" />
      <path d="M3 11l2 -2l-2 -2" />
      <path d="M21 11l-2 -2l2 -2" />
    </>
  ),
  displayName: 'IconBuildingLighthouse',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
