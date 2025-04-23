import { css, Global } from '@emotion/react';
import normalize from 'emotion-normalize';

import { PageLayout } from 'pages/PageLayout';
import { Routes } from 'pages/Routes';
import { ReactQueryProvider } from 'providers/ReactQueryProvider';
import { GlobalPortal } from 'utils/GlobalPortal';

export default function App() {
  return (
    <ReactQueryProvider>
      <GlobalPortal.Provider>
        <Global
          styles={css`
            ${normalize}
            h1, h2, h3, h4, h5, h6 {
              font-size: 1em;
              font-weight: normal;
              margin: 0;
            }
          `}
        />
        <PageLayout>
          <Routes />
        </PageLayout>
      </GlobalPortal.Provider>
    </ReactQueryProvider>
  );
}
