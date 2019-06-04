import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const isDebug = false;

const Wrapper = styled.div`
  margin: 20px;
`;

const themeDecorator = storyFunc => (
  <Wrapper>
    <GlobalStyle isDebug={ isDebug } />
    <ThemeProvider theme={ theme }>
      { storyFunc() }
    </ThemeProvider>
  </Wrapper>
);

export default themeDecorator;
