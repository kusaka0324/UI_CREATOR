import { atom } from 'recoil';

export const IncludeButtonsAtom= atom({
  key    : 'include-buttons',
  default: [],
});

export const CssPropsAtom= atom({
  key    : 'css-properties',
  default: [],
});

export const ScreenStateAtom= atom({
  key    : 'screen-state',
  default: {},
});
