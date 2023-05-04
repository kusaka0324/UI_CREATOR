import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

    
    const code = 'import React from \'react\'';
    
    export const CodeEditor = () => {    
        return (
            <CodeMirror
            value={code}
            options={{
                theme: 'monokai',
                keyMap: 'sublime',
                mode: 'jsx',
            }}
            />
        )
    }
