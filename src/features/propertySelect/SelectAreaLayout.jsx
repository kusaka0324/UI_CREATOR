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
  height: 21.25rem;
  width : 39rem;
`;

const SelectAreaHeader= styled.div`
  position     : relative;
  height       : 3.75rem;
  width        : 100%;
  background   : #2962FF;
  border-radius: 3px 20px 3px 3px;
  box-shadow   : 2px solid #2B2B2B;
`;

const HeaderTitle= styled.div`
  margin-left: 0.625rem;
  position   : absolute;
  top        : 50%;
  transform  : translateY(-50%);
  color      : #FEFEFE;
  font-size  : 1.25rem;
  font-weight: 600;
`;

const SelectAreaContent= styled.div`
  height       : 17.5rem;
  width        : 100%;
  opacity      : 0.8;
  border-radius: 0px 0px 20px 0px;
  background   : #2B2B2B;
`;

const ContentWrapper= styled.div`

`;