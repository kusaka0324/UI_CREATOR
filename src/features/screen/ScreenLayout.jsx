import React  from 'react'
import styled from 'styled-components';

export const ScreenLayout = ({className, children}) => {
  return (
    <ScreenStyle classes={className} >
      <ScreenContent classes={className} >
        {children}
      </ScreenContent>
    </ScreenStyle>
  )
}


const ScreenStyle = styled.div`
  position     : relative;
  background   : #4C4B4B;
  border-radius: 30px;

  height: ${({ setBackground, setStyling }) =>
    setBackground || setStyling ? '400px' : '500px'
  };
  width: ${({ setBackground, setStyling }) =>
    setBackground || setStyling ? '800px' : '1000px'
  };
`;

const ScreenContent = styled.div`
  padding      : 10px;
  position     : absolute;
  top          : 50%;
  left         : 50%;
  background   : #f0efef;
  border-radius: 30px;
  transform    : translate(-50%, -50%);

  height: ${({ setBackground, setStyling }) =>
    setBackground || setStyling ? '354px' : '443px'
  };
  width: ${({ setBackground, setStyling }) =>
    setBackground || setStyling ? '754px' : '942px'
  };
`;