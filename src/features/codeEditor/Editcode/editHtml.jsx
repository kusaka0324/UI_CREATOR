import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { html } from '@codemirror/lang-html';
import { useRecoilState } from 'recoil';
import { EditByHtmlAtom } from '@/recoil/atoms';

export const EditHtml = () => {    
  const [ htmlCode, setHtmlCode ] = useRecoilState(EditByHtmlAtom);
  const handleChange = (editor, data, value) => {
    setHtmlCode(value);
  };
  return (
		<CodeMirror
			value     = { htmlCode }
      theme     = { vscodeDark }
      extensions= { html() }
      readOnly  = 'true'
    />
  );
}

