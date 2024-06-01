import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconDeviceImacQuestion = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 17h-10a1 1 0 0 1 -1 -1v-12a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v7.5" />
      <path d="M3 13h11.5" />
      <path d="M8 21h7" />
      <path d="M10 17l-.5 4" />
      <path d="M14 17l.5 4" />
      <path d="M19 22v.01" />
      <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
    </>
  ),
  displayName: 'IconDeviceImacQuestion',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
