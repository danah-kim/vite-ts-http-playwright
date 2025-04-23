import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';

interface CustomErrorBoundaryProps extends ErrorBoundaryPropsWithRender {
  children: React.ReactNode;
}

const CustomErrorBoundary = ({ children, fallback, fallbackRender }: CustomErrorBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={
            fallbackRender ??
            (({ error, resetErrorBoundary }) => (
              <div>
                <p>데이터를 가져오는 중 문제가 발생했어요 :(</p>
                <pre>{error.message}</pre>
                <button className="mt-6" onClick={resetErrorBoundary}>
                재시도
              </button>
              </div>
            ))
          }
        >
          <Suspense fallback={fallback ?? <h1>Loading...</h1>}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default CustomErrorBoundary;
