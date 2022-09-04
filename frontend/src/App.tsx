import React, { Component } from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css } from '@emotion/react'

const App: React.FC = () => {
  return (
    <div
      css={css`
      font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
      font-size: 16px;
      color #5c5a5a;
      `}
    >
      <Header />
      <HomePage />
    </div>
  );
};

export default App;
