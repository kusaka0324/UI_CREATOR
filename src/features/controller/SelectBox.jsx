import React  			      from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { SelectedControllerState } from '@/recoil/atoms';
export const SelectBox = () => {
	const [ selectedId, setSelectedId ]= useRecoilState(SelectedControllerState);

	const handleOptionChange = (e) => {
    setSelectedId(e.target.value);
  };
  return (
    <SelectBoxStyle onChange={handleOptionChange} value={selectedId}>
			<option value='0' >controller 1</option>
			<option value='1' >controller 2</option>
			<option value='2' >controller 3</option>
			<option value='3' >controller 4</option>
			<option value='4' >controller 5</option>
		</SelectBoxStyle>
  )
}

const SelectBoxStyle= styled.select`
	margin       : 20px;
	height       : 40px;
	width        : 250px;
	text-align   : center;
	font-size    : 1.25rem;
	border-radius: 10px;
	border       : 1px solid #bebebe;
	cursor       : pointer;

	&:focus {
		outline: 2px solid #6129FF;
	}
`;