import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title: string
  type?: 'button' | 'submit' | 'reset'
}

const Container = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.bege_600};
  font-size: 1.2rem;
`

export const Button: React.FC<IButtonProps> = ({ title, type = 'button' }) => {
  return <Container type={type}>{title}</Container>
}
