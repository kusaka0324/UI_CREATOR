import React  from 'react';
import styled from 'styled-components';

export const SelectAreaLayout = ({ areaTitle, children }) => {
  return (
    <SelectAreaStyle >
      <SelectAreaHeader >
        {/*あとでアコーディオンのアイコンいれる*/}
        <HeaderTitle >
          {areaTitle}
        </HeaderTitle>
      </SelectAreaHeader>
      <SelectAreaContent >
        <ContentWrapper >
          {children}
        </ContentWrapper>        
      </SelectAreaContent>
    </SelectAreaStyle>
  )
}

const SelectAreaStyle= styled.div`
  height: 340px;
  width : 625px;
`;

const SelectAreaHeader= styled.div`
  position     : relative;
  height       : 60px;
  width        : 100%;
  background   : #2962FF;
  border-radius: 3px 20px 3px 3px;
  box-shadow   : 2px solid #2B2B2B;
`;

const HeaderTitle= styled.div`
  margin-left: 10px;
  position   : absolute;
  top        : 50%;
  transform  : translateY(-50%);
  color      : #FEFEFE;
  font-size  : 20px;
  font-weight: 600;
`;

const SelectAreaContent= styled.div`
  height: 280px;
  width: 100%;
  opacity: 0.8;
  border-radius: 0px 0px 20px 0px;
  background-color: #2B2B2B;
`;

const ContentWrapper= styled.div`

`;