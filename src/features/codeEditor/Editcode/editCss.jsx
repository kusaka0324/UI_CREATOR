import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView }  from '@codemirror/view';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { css }  from '@codemirror/lang-css';
import { useRecoilState } from 'recoil';

import { EditByCssAtom } from '@/recoil/atoms';

const EditCssState= EditorState.create({
  doc: 'my code',
  extensions: [

  ],
});

const ViewCode= new EditorView({
  parent: document.querySelector('#editor'),
  EditCssState,
});

export const EditCss = () => {
  const [ cssCode, setCssCode ] = useRecoilState(EditByCssAtom);
  const handleChange = () => {
    setCssCode(cssCode);
  };

  return (
		<CodeMirror
			value     = { cssCode }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { css() }
    />
  )
}