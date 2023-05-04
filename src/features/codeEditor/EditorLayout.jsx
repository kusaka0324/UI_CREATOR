import React  from 'react';
import { TabMenu } from '../../components/ui';
import styled from 'styled-components';

export const EditorLayout = (props) => {
  const { children } = props;

  return (
    <EditLayoutStyle>
      <EditorHead >
        <TabMenu/>
      </EditorHead>
      <EditArea>
        {children}  
      </EditArea>
    </EditLayoutStyle>
  );
};

const EditLayoutStyle= styled.div`
    height : 340px;
    width  : 560px;
    border-radius   : 20px 0px 0px 20px;
    background-color: #1C1C1C;
`;

const EditorHead= styled.div`
  
`; 

const EditArea= styled.div`
  padding: 5px 0px 20px 0px;
  height: 270px;
  width : 560px;
  background-color: #0D0E10;
`;

