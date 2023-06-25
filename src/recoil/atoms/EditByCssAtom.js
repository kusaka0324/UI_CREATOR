import { atom } from 'recoil';

export const EditByCssAtom = atom({
  key    : 'edit-css-state',
  default: 
`html {
  position: relative;
  height: 100%;
  width: 100%;
}`
})