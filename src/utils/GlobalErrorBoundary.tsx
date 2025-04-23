import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';

export const GlobalErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <main>
          <h1>{error.message}</h1>
          <button
            onClick={() => {
              resetErrorBoundary();
              navigate('/');
            }}
          >
            메인화면 이동
          </button>
        </main>
      )}
    >
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
};
