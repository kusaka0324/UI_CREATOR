import React              from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import CodeMirror         from '@uiw/react-codemirror';
import { vscodeDark }     from '@uiw/codemirror-theme-vscode';
import { css }            from '@codemirror/lang-css';
import { color }          from '@uiw/codemirror-extensions-color';

import { CssFormatSelector } from '@/recoil/selector';
import { EditByCssAtom } from '@/recoil/atoms';
import { defaultCss } from '@/data';

export const EditCss = () => {
  const [ formattedCss, setFormattedCss ]= useRecoilState(CssFormatSelector);

  const handleChange = (value) => {
    setFormattedCss(value.replace(defaultCss,''));
  };
  
  return (
		<CodeMirror
			value     = { defaultCss+formattedCss }
      onChange  = { handleChange }
      theme     = { vscodeDark }
      extensions= {[
        css(), 
        color
      ]}
    />
  )
}