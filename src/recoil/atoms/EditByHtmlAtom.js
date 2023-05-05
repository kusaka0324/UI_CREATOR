import { atom } from 'recoil';

export const EditByHtmlAtom = atom({
  key: 'edit-html-state',
  default:`<!DOCTYPE html>\n<html lang="en">\n\t<head>\n\t\t<meta charset="UTF-8">\n\t\t<meta http-equiv="X-UA-Compatible" content="IE=edge">\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t<title>Controller</title>\n\t</head>\n\t<body>\n\n\t</body>\n</html>`
});