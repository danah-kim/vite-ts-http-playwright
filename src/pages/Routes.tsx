import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';

import { HomePage } from './Home';
import { GlobalErrorBoundary } from 'utils/GlobalErrorBoundary';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <GlobalErrorBoundary>
        <Outlet />
      </GlobalErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },

  {
    path: '*',
    element: <Navigate to="/" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
