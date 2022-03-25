import { yupResolver } from '@hookform/resolvers/yup'
import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { ISignInProps, signInSchema } from '../../infra/repositories/auth'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { StyledText } from '../components/StyledText'
import { useAuth } from '../context/auth'
import * as S from './styles'

export const SignInPage: React.FC = () => {
  const theme = useTheme()

  const { handleCreateAccount } = useAuth()

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ISignInProps>({
    resolver: yupResolver(signInSchema)
  })

  const onSubmit = () => {
    console.log('values')
  }

  useEffect(() => {
    console.log('awdawdawawdaw')
  })

  return (
    <S.Container>
      <S.LeftBackground />

      <S.Content>
        <S.LogoConainer>
          <StyledText
            text="ADM"
            fontSize={4}
            fontWeight={900}
            style={{ marginBottom: '1rem' }}
          />
          <StyledText
            text="Estofados de qualidade"
            fontSize={1.5}
            fontWeight={400}
          />
        </S.LogoConainer>

        <S.FormContainer>
          <S.Form>
            <StyledText
              text="Criar conta"
              fontSize={2.3}
              fontWeight={700}
              align="left"
              color={theme.colors.silver_dark}
            />
            <S.InputWrapper>
              <StyledText
                text="E-mail"
                fontSize={1.2}
                fontWeight={400}
                align="left"
                color={theme.colors.silver_dark}
                style={{ marginBottom: 6 }}
              />
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    placeholder="email@gmail.com"
                    type="email"
                    {...field}
                  />
                )}
              />
            </S.InputWrapper>

            <S.InputWrapper>
              <StyledText
                text="Senha"
                fontSize={1.1}
                fontWeight={400}
                align="left"
                color={theme.colors.silver_dark}
                style={{ marginBottom: 6 }}
              />

              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input placeholder="*********" type="password" {...field} />
                )}
              />
            </S.InputWrapper>

            <S.ButtonWrapper>
              <Button
                title="Criar conta"
                type="button"
                onClick={() => console.log('awdawd')}
              />
            </S.ButtonWrapper>
            {/* <S.ForgotPassword>Esqueceu a senha?</S.ForgotPassword> */}
          </S.Form>
        </S.FormContainer>
      </S.Content>
    </S.Container>
  )
}
