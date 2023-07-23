import { EditByCssAtom, IncludeButtonsIdState, SelectedButtonsState } from "@/recoil/atoms";
import { CssFormatSelector, DroppedAddClass, DroppedAddTags, HtmlFormatSelector, SelectedItemSelector } from "@/recoil/selector";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import styled from 'styled-components';

import { SelectBox } from './';
import { css } from "@emotion/react";

const ListItem = ({ index }) => {
  const [ includeHtml, setIncludeHtml ]= useRecoilState(DroppedAddTags);
  const [ includeCss, setIncludeCss ] = useRecoilState(DroppedAddClass);
  const [listItemValue, setListItemValue] = useRecoilState(SelectedItemSelector(index));
  const [ droppedButtons, setDroppedButtons ]  = useRecoilState(IncludeButtonsIdState);

  const handleClick = e => {
    let {
      target: { checked }
    } = e;
    setListItemValue(checked);
    if(checked == true){
      setDroppedButtons([...droppedButtons, Object.values(listItemValue)[0]]);
      setIncludeCss([...droppedButtons, Object.values(listItemValue)[0]]);
      setIncludeHtml([...droppedButtons, Object.values(listItemValue)[0]]);
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
            { selectedController.map((_, index, item) => (
              <div key={index}>
                <ListItem  index={index} />                
              </div>              
            ))}
          </InputList>
        </FormContent>
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
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const CheckArea= styled.li`
  padding-left   : 1.25rem;
  display        : flex;
  align-items    : center;
  height         : 50px;
  width          : 180px;
  border-radius  : 20px;

  ${(props)=> props.activeClassName === 'active' 
    ? css`
        color: #fefefe;
        background: #6129FF;     
      `
    : css`
      color: #6129FF;
      background : #dddddd;
    `
  }
`;

const CheckBox= styled.input.attrs({ type: 'checkbox' })`
  height: 15px;
  width : 15px;
  accent-color: #6129FF;
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
