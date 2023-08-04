import React           from 'react'
import styled, { css } from 'styled-components';
import { useRecoilValue }    from 'recoil';
import { MergeCodeSelector } from '@/recoil/selector';

export const Screen = ({ mode }) => {
  const mergeHtml= useRecoilValue(MergeCodeSelector);

  return (
    <ScreenStyle mode={mode} >
        <ScreenContent >
          <iframe srcDoc={mergeHtml}/>
        </ScreenContent>        
    </ScreenStyle>
  );
};

const ScreenStyle = styled.div`
  margin       : 1.25rem;
  position     : relative;
  background   : #4C4B4B;
  border-radius: 30px;
  ${(props)=> 
    props.mode === 'preview' 
    ? css`
        padding: 10px 40px 10px 40px;
        height : 50vh;
        width  : 100vh;       
      `
    : css`
        padding: 10px 30px 10px 30px;
        height : 40vh;
        width  : 80vh;       
    `
    };
`;

const ScreenContent = styled.div`
  position     : relative;
  top          : 50%;
  left         : 50%;
  background   : #f0efef;
  transform    : translate(-50%, -50%);
  height       : 100%;
  width        : 100%;
  > div {
    position     : absolute;
    width        : 100%;
    height       : 100%;
    border-radius: 30px;
  }

  > iframe {
    width        : 100%;
    height       : 100%;
    border       : none;
  }
`;