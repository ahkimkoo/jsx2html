

// src/global.d.ts
declare module '*.jsx' {
  import { ReactElement } from 'react';
  const component: () => ReactElement;
  export default component;
}