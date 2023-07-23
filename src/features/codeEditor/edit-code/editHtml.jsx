import React              from 'react';
import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { html }           from '@codemirror/lang-html';

import { HtmlFormatSelector } from '@/recoil/selector';
import { defaultHtml } from '@/data';

export const EditHtml = () => {    
  const [ htmlCode, setHtmlCode ] = useRecoilState(HtmlFormatSelector);
  
  return (
		<CodeMirror
			value     = { defaultHtml.replace('<body></body>', `<body>\n${htmlCode}</body>`) }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { html() }
      readOnly  = { true }
    />
  );
}

