import React from 'react'
import styled from 'styled-components'

export const Header = ({title, subTitle}) => {
  return (
    <HeaderStyle>
      {title}
      <SubTitle>ー{subTitle}ー</SubTitle>
    </HeaderStyle>
  )
}

const HeaderStyle= styled.header`
  margin     : 1rem 0 1rem 0;
  display    : flex;
  align-items: center;
  font-size  : 2rem;
  font-weight: bold;
  color      : #6129FF;
`;

const SubTitle= styled.span`
  margin-left: 1rem;
  font-size  : 1.2rem;
  color      :#808081;
  font-weight: 500;
`;