import React, { useMemo } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import { createRouter } from './router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { AuthProvider } from './authContext'

export default function App() {
  const queryClient = useMemo(() => new QueryClient({}), [])
  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
      <AuthProvider> {/* Wrap your app with AuthProvider */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createRouter()} />
      </QueryClientProvider>
      </AuthProvider>
    </Provider>
  )
}
