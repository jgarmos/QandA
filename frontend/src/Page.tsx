/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { FC } from 'react';
import { PageTitle } from './PageTitle';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Page: FC<Props> = ({ title, children }) => (
  <div
    css={css`
      margin: 50px auto 20px auto;
      padding: 30px 20px;
      max-width: 600px;
    `}
  >
    {title && <PageTitle>{title}</PageTitle>}
    {children}
  </div>
);
