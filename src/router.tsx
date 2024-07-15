import { createHashRouter, RouteObject } from 'react-router-dom'
import ErrorPage from './components/error-page'
import { getDefaultLayout } from './components/layout'
import Home from './pages/home'
import Blog from './pages/blog'
import Login from './pages/login'
import { ResidentPanel } from './components/resident-admin/resident-panel'

export const routerObjects: RouteObject[] = [
  {
    path: '/panel',
    Component: ResidentPanel
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/blog',
    Component: Blog,
  },
  {
    path: '/',
    Component: Home,
  },
]

export function createRouter(): ReturnType<typeof createHashRouter> {
  const routeWrappers = routerObjects.map((router) => {
    const getLayout = getDefaultLayout
    const Component = router.Component!
    const page = getLayout(<Component />)
    return {
      ...router,
      element: page,
      Component: null,
      ErrorBoundary: ErrorPage,
    }
  })
  return createHashRouter(routeWrappers)
}
