import styled from '@emotion/styled';
import ReactLogo from 'assets/react.svg';
import { useState } from 'react';

export function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <Logo src="vite.svg" alt="Vite logo" />
        </a>
        <ReactLogoWrapper href="https://react.dev" target="_blank">
          <ReactLogo />
        </ReactLogoWrapper>
      </div>
      <h1>Vite + React</h1>
      <Card>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>Click on the Vite and React logos to learn more</ReadTheDocs>
    </>
  );
}

const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
`;

const ReactLogoWrapper = styled.a`
  svg {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    & :hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @media (prefers-reduced-motion: no-preference) {
      animation: logo-spin infinite 20s linear;
    }
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Card = styled.div`
  padding: 2em;
`;

const ReadTheDocs = styled.p`
  color: #888;
`;
