import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { html } from '@codemirror/lang-html';
import { css }  from '@codemirror/lang-css';
import { useRecoilState } from 'recoil';
import { EditByHtmlAtom, EditByCssAtom } from '@/recoil/atoms';

export const CodeByHTML = () => {    
  const [ htmlCode, setHtmlCode ] = useRecoilState(EditByHtmlAtom);
  const handleChange = (editor, data, value) => {
    setHtmlCode(value);
  };
  return (
		<CodeMirror
			value={htmlCode}
      theme={vscodeDark}
      extensions={html()}
    />
  );
}

export const CodeByCSS = () => {
  const [ cssCode, setCssCode ] = useRecoilState(EditByCssAtom);
  const handleChange = (editor, data, value) => {
    setCssCode(value);
  };

  return (
		<CodeMirror
			value={cssCode}
      theme={vscodeDark}
      extensions={css()}
    />
  )
}
