import { lazy, Suspense } from "react"
import { Toaster } from "sonner"

import { Router, Route } from "wouter"

const SignUpPage = lazy(() => import("./pages/sign-up"))

function App() {

  return (
    <main className="flex flex-col justify-center h-full">
      <Toaster richColors />
      <Suspense fallback="loading...">
        <Router base="/authentication">
          <Route path="/sign-up" component={SignUpPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
