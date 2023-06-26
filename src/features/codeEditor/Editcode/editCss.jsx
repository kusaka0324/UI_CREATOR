import React              from 'react';
import { useRecoilState } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { css }            from '@codemirror/lang-css';

import { CssFormatSelector } from '@/recoil/selector';

export const EditCss = () => {
  const [ formatCss, setFormatCss ] = useRecoilState(CssFormatSelector);

  const handleChange = (e) => {
    setFormatCss(e.target.value);
  };
  
  return (
		<CodeMirror
			value     = { formatCss }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= { css() }     
    />
  )
}