import React              from 'react';
import styled             from 'styled-components';
import { useRecoilValue } from 'recoil';
import SendIcon           from '@mui/icons-material/Send';

import { Screen }                         from '../screen';
import { SidebarMenuList }                from '@/components/Layouts';
import { Header, Sidebar, Topber }        from '@/components/ui';
import { postCustom }                     from '../preview';
import { EditByCssAtom, IncludeButtonsAtom } from '@/recoil/atoms';


export const PreviewPage = () => {
  const editedCss = useRecoilValue(EditByCssAtom);
  const setButtons= useRecoilValue(IncludeButtonsAtom);

  const postData= {
    controller: "0",
    button    : setButtons,
    css       : editedCss,
  }

  const handlePostCustom= () => {
   
    {console.log(JSON.stringify(postData))}
  }

  return (
    <PreviewLayout>
      <Topber />
      <ScreenLayout>
        <Sidebar menuList={SidebarMenuList} />
        <ContentDiv>
          <Header title={'Preview'} subTitle={'作成したUIを設定しよう'} />
          <PreviewWrapper>
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