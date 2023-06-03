import React, { useEffect, useRef } from 'react';
import { useRecoilState }           from 'recoil';
import CodeMirror                   from '@uiw/react-codemirror';
import { basicSetup, minimalSetup } from '@uiw/react-codemirror';
import { EditorState }              from '@codemirror/state';
import { EditorView }               from '@codemirror/view';
import { vscodeDark }               from '@uiw/codemirror-theme-vscode';
import { css }                      from '@codemirror/lang-css';

import { EditByCssAtom } from '@/recoil/atoms';

export const EditCss = () => {
  const [ cssCode, setCssCode ] = useRecoilState(EditByCssAtom);
  const handleChange = () => {
    setCssCode(cssCode);
  };
  // const editorRef = useRef(null);

  // useEffect(() => {
  //   const formatCode = () => {
  //     const editor= editorRef.current.editor;
  //     const code  = editor.getValue();
  //     const formattedCode = prettier.format(code, {
  //       printWidth    : 100,
  //       semi          : true,
  //       singleQuote   : true,
  
  //       trailingComma : 'none',
  //       bracketSpacing: false,
  //       tabWidth      : 2,
  //       useTabs       : true,
  //     });

  //     editor.setValue(formattedCode);
  //   };

  //   formatCode();
  // }, []);
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