import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import { SignInPage } from './src/views/SignInPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignInPage />      
    </ThemeProvider>
  )
}