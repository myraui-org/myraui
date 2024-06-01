import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconNavigationBolt = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16.559 12.882l-4.559 -9.882l-7.97 17.275c-.07 .2 -.017 .424 .135 .572c.15 .148 .374 .193 .57 .116l7.265 -2.463l1.036 .351" />
      <path d="M19 16l-2 3h4l-2 3" />
    </>
  ),
  displayName: 'IconNavigationBolt',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
