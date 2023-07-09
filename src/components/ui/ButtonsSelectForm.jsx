import { EditByCssAtom, IncludeButtonsIdState, SelectedButtonsState } from "@/recoil/atoms";
import { CssFormatSelector, DroppedAddClass, HtmlFormatSelector, SelectedItemSelector } from "@/recoil/selector";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import styled from 'styled-components';

import { SelectBox } from './';
import { defaultCss } from "@/data";

const ListItem = ({ index }) => {
  const addDefaultButtonsStyle= useSetRecoilState(DroppedAddClass);
  const [ formattedHtml, setFormattedHtml ]= useRecoilState(HtmlFormatSelector);
  const setVisibleCss= useSetRecoilState(EditByCssAtom);
  const [listItemValue, setListItemValue] = useRecoilState(SelectedItemSelector(index));
  const [ droppedButtons, setDroppedButtons ]  = useRecoilState(IncludeButtonsIdState);

  const handleClick = e => {
    let {
      target: { checked }
    } = e;
    setListItemValue(checked);
    if(checked == true){
      setDroppedButtons([...droppedButtons, Object.values(listItemValue)[0]]);
    } else {
      const filterSelected= droppedButtons.filter((id) => id !== Object.values(listItemValue)[0]);;
      setDroppedButtons(filterSelected);
      setVisibleCss(defaultCss);
    }
  };
  return (
    <CheckArea htmlFor={index}>
      <CheckBox
        type="checkbox"
        checked={listItemValue.selected}
        onChange={handleClick}
      />
      <CheckBoxLabel htmlFor={index}>{listItemValue.label}</CheckBoxLabel>
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
            { selectedController.map((_, index) => {
              return <ListItem key={index} index={index} />;
            })}
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
  gap: 40px;
`;

const CheckArea= styled.li`
  padding-left   : 1.25rem;
  display        : flex;
  align-items    : center;
  height         : 50px;
  width          : 180px;
  background     : #dddddd;
  border-radius  : 20px;
`;

const CheckBox= styled.input.attrs({ type: 'checkbox' })`
  height: 15px;
  width : 15px;
  accent-color: #6129FF;
`;

const FormContent= styled.div`

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

