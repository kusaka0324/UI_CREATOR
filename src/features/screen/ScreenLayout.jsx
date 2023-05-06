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
  margin       : 1.25rem;
  position     : relative;
  background   : #4C4B4B;
  border-radius: 30px;

  height: ${({className}) =>
    className === 'setBackground' || 'setStyling' ? '21.875rem' : '31.25rem'
  };
  width: ${({className}) =>
    className === 'setBackground' || 'setStyling' ? '43.75rem' : '62.5rem'
  };
`;

const ScreenContent = styled.div`
  padding      : 0.625rem;
  position     : absolute;
  top          : 50%;
  left         : 50%;
  background   : #f0efef;
  border-radius: 30px;
  transform    : translate(-50%, -50%);

  height: ${({className}) =>
    className === 'setBackground' || 'setStyling' ? '19.375rem' : '27.5rem'
  };
  width: ${({className}) =>
    className === 'setBackground' || 'setStyling'? '40rem' : '58.75rem'
  };
`;