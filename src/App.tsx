import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"
import { useAuth } from "./hooks/useAuth"
import NotFound from "./components/not-found"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const router = createRouter(
  {
    routeTree,
    context: { authentication: undefined! },
    defaultNotFoundComponent: NotFound
  })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

function App() {
  const authentication = useAuth()
  return <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} context={{ authentication }} />
  </QueryClientProvider>
}

export default App
