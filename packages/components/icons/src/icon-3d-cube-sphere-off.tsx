import { createIcon } from '@myraui/icon';
import React from 'react';

export const Icon3dCubeSphereOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 17.6l-2 -1.1v-2.5" />
      <path d="M4 10v-2.5l2 -1.1" />
      <path d="M10 4.1l2 -1.1l2 1.1" />
      <path d="M18 6.4l2 1.1v2.5" />
      <path d="M20 14v2" />
      <path d="M14 19.9l-2 1.1l-2 -1.1" />
      <path d="M18 8.6l2 -1.1" />
      <path d="M12 12v2.5" />
      <path d="M12 18.5v2.5" />
      <path d="M12 12l-2 -1.12" />
      <path d="M6 8.6l-2 -1.1" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'Icon3dCubeSphereOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
