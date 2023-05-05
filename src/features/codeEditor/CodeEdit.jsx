import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';

export const CodeByHTML = () => {    
  const [ htmlCode, setHtmlCode ] = useState('');
  const handleChange = (editor, data, value) => {
    setHtmlCode(value);
  };

  return (
		<CodeMirror
			value={htmlCode}
      
			options={{
        lineNumbers :true,
        lineWrapping: true,
        theme: 'material',
        mode: 'html',
      }}
    />
  )
}

export const CodeByCSS = () => {
  const [ cssCode, setCssCode ] = useState('');
  const handleChange = (editor, data, value) => {
    setCssCode(value);
  };

  return (
		<CodeMirror
			value={cssCode}
      
      options={{
        lineNumbers :true,
        lineWrapping: true,
        theme: 'material',
        mode: 'css',
      }}
    />
  )
}
