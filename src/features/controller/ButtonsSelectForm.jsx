import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled, { keyframes } from 'styled-components';

import { IncludeButtonsIdState, SelectedButtonsState } from "@/recoil/atoms";
import { AddedClass, AddedTags, SelectedItemSelector } from "@/recoil/selector";
import { SelectBox } from './SelectBox';

const ListItem = ({ index }) => {
  const setIncludeHtml= useSetRecoilState(AddedTags);
  const setIncludeCss = useSetRecoilState(AddedClass);
  const [ listItemValue, setListItemValue]= useRecoilState(SelectedItemSelector(index));
  const [ includedButtons, setIncludedButtons ]= useRecoilState(IncludeButtonsIdState);

  const handleClick = e => {
    let {
      target: { checked }
    } = e;
    setListItemValue(checked);
    if(checked == true){
      const newIncludedButtonsId= [...includedButtons, Object.values(listItemValue)[0]];
      setIncludedButtons(newIncludedButtonsId);
      setIncludeCss(newIncludedButtonsId);
      setIncludeHtml(newIncludedButtonsId);
    } else {
      const filterSelected= includedButtons.filter((id) => id !== Object.values(listItemValue)[0]);;
      setIncludedButtons(filterSelected);
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
  const selectedController  = useRecoilValue(SelectedButtonsState);

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

const CheckBox= styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const CheckArea= styled.label`
  position      : relative;
  padding-left   : 1.25rem;
  display        : flex;
  align-items    : center;
  height         : 50px;
  width          : 180px;
  border-radius  : 20px;
`;

const checkRotate= keyframes`
  from {
    height: 16px;
    width : 16px;
    transform: rotate(0deg);
  }
  to {
    height: 20px;
    width : 20px;
    transform: rotate(45deg);
    background: #6129ff;
  }
`;

const CheckBoxLabel= styled.label`
  position   : relative;
  padding    : 5px 30px;
  margin-left: 1rem;
  font-size  : 1.15rem;
  font-weight: 600;
  &:before {
    width:16px;
    height:16px;
    left:5px;
    border:1px solid #ccc;
    border-radius: 5px;
    margin-top:-8px;
  }
  &:after,
  &:before {
    position: absolute;
    content : '';
    top     : 50%;
  }
  &::after {
    position: absolute;
    width: 5px;
    height: 9px;
    top: 50%;
    left: 10px;
    border-right: 2px solid #fefefe;
    border-bottom: 3px solid #fefefe;
    content: '';
    margin-top: -7px;
    opacity: 0;
    transform: rotate(45deg);
  }
  ${CheckBox}:checked+&::before {
    height    : 20px;
    width     : 20px;
    left      : 2px;
    border    : 2px solid #a17fff;
    border-radius: 5px;
    margin-top: -11px;
    transform : rotate(45deg);
    background: #6129ff;
    animation : ${checkRotate} 0.5s;
  }
  ${CheckBox}:checked+&::after {
    opacity: 1;
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

const InputList= styled.ul`
  display: grid;
  grid-template-columns: 180px 180px 180px;
  gap:10px;
`;
