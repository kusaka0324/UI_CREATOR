import React, { useEffect, useRef } from 'react';
import { useRecoilState }           from 'recoil';
import CodeMirror                   from '@uiw/react-codemirror';
import { basicSetup, minimalSetup } from '@uiw/react-codemirror';
import { EditorState }              from '@codemirror/state';
import { EditorView }               from '@codemirror/view';
import { vscodeDark }               from '@uiw/codemirror-theme-vscode';
import { css }                      from '@codemirror/lang-css';

import { CssFormatSelector } from '@/recoil/selector';

export const EditCss = () => {
  const [ cssCode, setCssCode ] = useRecoilState(CssFormatSelector);
  const handleChange = () => {
    setCssCode(cssCode);
  };
  
  return (
		<CodeMirror
			value     = { cssCode }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { css() }     
      basicSetup= {
        {
          lineNumbers  : true,
          searchKeymap : true,
          foldGutter   : true,
          dropCursor   : true,
          indentOnInput: true,
          lintKeymap   : true,
          tabsize      : 2,
        }
      }
    />
  )
}