import React              from 'react';
import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { html }           from '@codemirror/lang-html';

import { HtmlFormatSelector } from '@/recoil/selector';
import { defaultHtml } from '@/data';
export const EditHtml = () => {    
  const [ htmlCode, setHtmlCode ] = useRecoilState(HtmlFormatSelector);
  const handleChange = (value) => {
    setHtmlCode(value.replace(defaultHtml,'').replace('<body></body>', `<body>${htmlCode}</body>`));
  };
  
  return (
		<CodeMirror
			value     = { defaultHtml+htmlCode }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { html() }
    />
  );
}

