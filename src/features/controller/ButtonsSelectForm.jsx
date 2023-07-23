import { EditByCssAtom, IncludeButtonsIdState, SelectedButtonsState } from "@/recoil/atoms";
import { CssFormatSelector, DroppedAddClass, DroppedAddTags, HtmlFormatSelector, SelectedItemSelector } from "@/recoil/selector";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import styled, { css, keyframes } from 'styled-components';

import { SelectBox } from './SelectBox';

const ListItem = ({ index }) => {
  const [ includeHtml, setIncludeHtml ]= useRecoilState(DroppedAddTags);
  const [ includeCss, setIncludeCss ] = useRecoilState(DroppedAddClass);
  const [ listItemValue, setListItemValue] = useRecoilState(SelectedItemSelector(index));
  const [ droppedButtons, setDroppedButtons ]  = useRecoilState(IncludeButtonsIdState);

  const handleClick = e => {
    let {
      target: { checked }
    } = e;
    setListItemValue(checked);
    if(checked == true){
      const newIncludedButtonsId= [...droppedButtons, Object.values(listItemValue)[0]];
      setDroppedButtons(newIncludedButtonsId);
      setIncludeCss(newIncludedButtonsId);
      setIncludeHtml(newIncludedButtonsId);
    } else {
      const filterSelected= droppedButtons.filter((id) => id !== Object.values(listItemValue)[0]);;
      setDroppedButtons(filterSelected);
      setIncludeCss(filterSelected);
      setIncludeHtml(filterSelected);
      
    }
  };
  return (
    <CheckArea htmlFor={listItemValue.id} >
      <CheckBox
        id={listItemValue.id}
        type="checkbox"
        checked={listItemValue.selected}
        onChange={handleClick}
      />
      <CheckBoxLabel htmlFor={listItemValue.id}>{listItemValue.label}</CheckBoxLabel>
    </CheckArea>
  );
};

export const ButtonsSelectForm = () => {
  const selectedController= useRecoilValue(SelectedButtonsState);
  

  const handleReset= (e) => {

  }
  const handleAllCheck= (e) => {

  }

  return (
    <FormContainer>
      <FormWrapper>
        <FormContent>
          <SectionLabel>コントローラ選択</SectionLabel>
          <SelectBox />
        </FormContent>
        <FormContent>
          <SectionLabel>操作ボタン選択</SectionLabel>
          <InputList>
            { selectedController.map((_, index) => (
              <div key={index}>
                <ListItem  index={index} />                
              </div>              
            ))}
          </InputList>
        </FormContent>      
        <AllCheckBoxChange>
          <ResetButton onClick={handleReset} >リセット</ResetButton>
          <AllCheckButton onClick={handleAllCheck}>すべて選択</AllCheckButton>
        </AllCheckBoxChange>
      </FormWrapper>
    </FormContainer>    
  );
};

const FormContainer= styled.div`
  padding-top    : 1rem;
  height         : 100%;
  width          : 100%;
  display        : flex;
  justify-content: center;
`;

const FormWrapper= styled.section`
  display       : flex;
  flex-direction: column;
  gap           : 50px;
`;

const CheckArea= styled.label`
  padding-left   : 1.25rem;
  display        : flex;
  align-items    : center;
  height         : 50px;
  width          : 180px;
  border-radius  : 20px;
`;

const checkRotate= keyframes`
  from {
    height: 20px;
    width : 20px;
    border-radius: 4px;
    transform: rotate(0deg);
  }
  to {    
    height: 20px;
    width : 20px;
    border-radius: 4px;
    transform: rotate(45deg);
  }
`; 

const CheckBox= styled.input.attrs({ type: 'checkbox' })`
  height: 15px;
  width : 15px;
  &:checked {
    height: 20px;
    width : 20px;
    accent-color: #6129FF;
    border-radius: 4px;
    transform: rotate(45deg);
    animation: ${checkRotate} .5s ease-in-out;
    svg {
      transform: rotate(-45deg);
    }
  }
`;

const FormContent= styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const SectionLabel= styled.h3`
  font-size: 1rem;
  color: #a3a3a3;

`;

const CheckBoxLabel= styled.label`
  margin-left: 1rem;
  font-size  : 1.15rem;
  font-weight: 600;
`;

const InputList= styled.ul`
  display: grid;
  grid-template-columns: 180px 180px 180px;
  gap:10px;
`;

const AllCheckBoxChange= styled.div`
  display        : flex;
  justify-content: end;
  column-gap     : 0.75rem;
`;

const ResetButton= styled.button`
  width        : 8.5rem;
  height       : 2.75rem;
  font-size    : 12px;
  color        : #6129ff;
  border       : 3px solid #6129ff;
  background   : #fefefe;
  border-radius: 20px;
`;

const AllCheckButton= styled.button`
  width        : 8.5rem;
  height       : 2.75rem;
  font-size    : 12px;
  color        : #fefefe;
  border       : none;
  background   : #6129ff;
  border-radius: 20px;
`;