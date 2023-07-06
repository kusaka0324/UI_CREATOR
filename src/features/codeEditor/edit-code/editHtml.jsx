import React              from 'react';
import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { html }           from '@codemirror/lang-html';

import { HtmlFormatSelector } from '@/recoil/selector';

export const EditHtml = () => {    
  const [ htmlCode, setHtmlCode ] = useRecoilState(HtmlFormatSelector);
  const handleChange = (value) => {
    setHtmlCode(value);
  };
  
  return (
		<CodeMirror
			value     = { htmlCode }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { html() }
    />
  );
}

