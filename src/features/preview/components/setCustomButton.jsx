import React from 'react'
import { postCustom } from '../api/postCustom'
import styled from 'styled-components'

export const SetCustomButton = () => {

  const handleSubmit= (e) => {
    e.preventDefault();
    {postCustom}
  }

  return (
    <ButtonStyle onClick={handleSubmit} >
      
    </ButtonStyle>
  )
}

const ButtonStyle= styled.button`
  
`;