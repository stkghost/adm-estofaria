import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.silver_light};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const LeftBackground = styled.div`
  position: absolute;
  left: 0;
  width: 40%;
  height: 100%;
  background: ${({ theme }) => theme.colors.bege_600};
`

export const Content = styled.div`
  position: relative;
  width: 70%;
  height: 80%;
  max-width: 1000px;
  min-width: 700px;
  display: flex;
  box-shadow: 0px 0px 40px -8px rgba(0, 0, 0, 0.7);
  -webkit-box-shadow: 0px 0px 40px -8px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 0px 0px 40px -8px rgba(0, 0, 0, 0.7);
  padding-left: 0.5%;
`

export const LogoConainer = styled.div`
  width: 36%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FormContainer = styled.div`
  width: 64%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  width: 90%;
  height: 60%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.bege_200};
  display: flex;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 40px;
`

export const ForgotPassword = styled.button`
  background: transparent;
  border: none;
  padding: 1;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black_opacity};
`
