import React              from 'react';
import styled             from 'styled-components';
import { useRecoilValue } from 'recoil';
import SendIcon           from '@mui/icons-material/Send';

import { Screen }                               from '../screen';
import { Header, SelectBox, Sidebar, Topber }   from '@/components/ui';
import { EditByCssAtom, IncludeButtonsIdState } from '@/recoil/atoms';
import { SelectedControllerState } from '@/recoil/atoms/SelectedControllerState';
import { defaultCss } from '@/data';

export const PreviewPage = () => {
  const selectedController= useRecoilValue(SelectedControllerState);
  const editedCss = useRecoilValue(EditByCssAtom);
  const setButtons= useRecoilValue(IncludeButtonsIdState);

  const postData= {
    controller: selectedController,
    button    : setButtons,
    css       : defaultCss.replace(/\t?\n/g, '')+editedCss.replace(/\t?\n/g, ''),
  }

  const handlePostCustom= (e) => {
    e.preventDefault();
    {console.log(JSON.stringify(postData))}
  }

  return (
    <PreviewLayout>
      <Topber />
      <ScreenLayout>
        <Sidebar />
        <ContentDiv>
          <Header title={'Preview'} subTitle={'作成したUIを設定しよう'} />
          <PreviewWrapper>
            <SelectBox/>
            <Screen mode={'preview'} />
            <ApplyButton type='submit' onClick={handlePostCustom} >
              <label>Apply</label>
              <SendIcon />
            </ApplyButton>            
          </PreviewWrapper>
        </ContentDiv>
      </ScreenLayout>      
    </PreviewLayout>
  )
}

const PreviewLayout= styled.div`
  height: 100vh;
  width : 100vw;
`;

const ScreenLayout= styled.div`
  display: flex;
  padding: 1rem;
  height : calc(100vh - 80px);
  width  : 100%;

`;

const ContentDiv= styled.div`
  margin-left: 0.75rem;
  height     : 100%;
  width      : 100%;
`;

const PreviewWrapper= styled.div`
  position       : relative;
  display        : flex;
  flex-direction : column;
  justify-content: center;
  align-items    : center;
  height         : calc(100% - 8rem);
  width          : 100%;
`;

const ApplyButton= styled.button`
  display        : flex;
  justify-content: center;
  align-items    : center;
  width          : 12.5rem;
  height         : 4.15rem;
  color          : #FEFEFE;
  border         : 0;
  outline        : 0;
  background     : #6129FF;
  border-radius  : 20px;

  > label {
    margin-right: 10px;
    font-size   : 1.75rem;
    font-weight : bold;
  }
`;