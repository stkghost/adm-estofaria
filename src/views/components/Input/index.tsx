import React from 'react'
import styled from 'styled-components'

interface IInputProps {
  placeholder: string
  type: string
}

const Container = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.bege_200};
  display: flex;
  align-items: center;
`

export const Input: React.FC<IInputProps> = ({ type, placeholder }) => {
  return <Container type={type} placeholder={placeholder} />
}
