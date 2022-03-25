import React from 'react';
import { useTheme } from 'styled-components';
import { StyledText } from '../components/StyledText';
import * as S from './styles';

export const SignInPage: React.FC = () => {

  const theme = useTheme()

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
          <StyledText
            text="Entrar"
            fontSize={2.3}
            fontWeight={700}
            color={theme.colors.silver_dark}
          />


        </S.FormContainer>
      </S.Content>
    </S.Container>
  )
}
