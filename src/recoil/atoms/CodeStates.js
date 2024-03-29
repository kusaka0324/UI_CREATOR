import { atom } from 'recoil';

export const EditByHtmlAtom = atom({
  key    : 'edit-html-state',
  default: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Controller</title></head><body></body></html>`
});

export const EditByCssAtom = atom({
  key    : 'edit-css-state',
  default: 
`*{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
html{
  position:relative;
  height:100vh;
  width:100vw;
}
`,
});
