import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { colors } from 'constants/colors';

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        max-width: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
        height: auto;
      `}
    >
      <div
        css={css`
          background: ${colors.background};
        `}
      >
        {children}
      </div>
    </div>
  );
}
