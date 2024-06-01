import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconBrandFilezilla = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 15.824a4.062 4.062 0 0 1 -2.25 .033c-.738 -.201 -2.018 -.08 -2.75 .143l4.583 -5h-6.583" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M8 15l2 -8h5" />
    </>
  ),
  displayName: 'IconBrandFilezilla',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
