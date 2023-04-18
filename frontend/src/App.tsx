/** @jsxImportSource @emotion/react */

import React, { lazy, Suspense } from 'react';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { css } from '@emotion/react';
import { fontFamily, fontSize, gray2 } from './Styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { NotFoundPage } from './NotFoundPage';
import { QuestionPage } from './QuestionPage';

const AskPage = lazy(() => import('./AskPage'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
      >
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/questions/:questionId" element={<QuestionPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="ask"
            element={
              <Suspense
                fallback={
                  <div
                    css={css`
                      margin-top: 100px;
                      text-align: center;
                    `}
                  >
                    Loading...
                  </div>
                }
              >
                <AskPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
