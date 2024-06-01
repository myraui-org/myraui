import { createIcon } from '@myraui/icon';
import React from 'react';

export const IconIroningSteamOff = createIcon({
  path: (
    <>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 4h7.459a3 3 0 0 1 2.959 2.507l.577 3.464l.81 4.865a1 1 0 0 1 -.821 1.15" />
      <path d="M16 16h-13a7 7 0 0 1 6.056 -6.937" />
      <path d="M13 9h6.8" />
      <path d="M12 19v2" />
      <path d="M8 19l-1 2" />
      <path d="M16 19l1 2" />
      <path d="M3 3l18 18" />
    </>
  ),
  displayName: 'IconIroningSteamOff',
  viewBox: '0 0 24 24',
  defaultProps: {
    stroke: 'currentColor',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  },
});
