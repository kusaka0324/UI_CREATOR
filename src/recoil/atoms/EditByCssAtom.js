import { atom } from 'recoil';

export const EditByCssAtom = atom({
  key: 'edit-css-state',
  default: `body{\n\tposition: relative;\n\theight: 100%;\n\twidth: 100%;
}`
})