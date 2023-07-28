import React              from 'react';
import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { css }            from '@codemirror/lang-css';
import { color }          from '@uiw/codemirror-extensions-color';

import { CssFormatSelector } from '@/recoil/selector';

export const EditCss = () => {
  const [ formattedCss, setFormattedCss ]= useRecoilState(CssFormatSelector);

  const handleChange = (value) => {
    setFormattedCss(value);
  };
  
  return (
		<CodeMirror
			value     = { formattedCss }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= {[
        css(), 
        color
      ]}
    />
  )
}