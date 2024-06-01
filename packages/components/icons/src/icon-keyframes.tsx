import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconKeyframes = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248z" />
      <path d="M17 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
      <path d="M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328l-4.586 5.836" />
    </>
  ),
  displayName: 'IconKeyframes',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
