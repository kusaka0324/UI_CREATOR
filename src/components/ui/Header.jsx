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
  margin     : 0.75rem 0;
  display    : flex;
  align-items: center;
  font-size  : 2.45rem;
  font-weight: bold;
  color      : #6129FF;
`;

const SubTitle= styled.span`
  margin-left: 1rem;
  font-size: 1.25rem;
  color    :#808081;
  font-weight: 500;
`;