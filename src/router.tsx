// router.tsx
import { createHashRouter, RouteObject } from 'react-router-dom';
import ErrorPage from './components/error-page';
import { getDefaultLayout } from './components/layout';
import Home from './pages/home';
import Blog from './pages/blog';
import Login from './pages/login';
import { ResidentPanel } from './components/resident-admin/resident-panel';
import ProtectedRoute from './protectedRoute';

export const routerObjects: RouteObject[] = [
  {
    path: '/panel',
    element: <ProtectedRoute element={getDefaultLayout(<ResidentPanel />)} />,
  },
  {
    path: '/login',
    element: getDefaultLayout(<Login />),
  },
  {
    path: '/blog',
    element: getDefaultLayout(<Blog />),
  },
  {
    path: '/',
    element: getDefaultLayout(<Home />),
  },
];

export function createRouter(): ReturnType<typeof createHashRouter> {
  return createHashRouter([
    ...routerObjects,
    {
      path: '*',
      element: getDefaultLayout(<ErrorPage />),
    },
  ]);
}
