import { lazy, Suspense } from "react"
import { Toaster } from "sonner"

import { Router, Route } from "wouter"

const SignUpPage = lazy(() => import("./pages/sign-up"))
const LoginPage = lazy(() => import("./pages/login"))

function App() {

  return (
    <main className="flex flex-col justify-center h-full">
      <Toaster richColors />
      <Suspense fallback="loading...">
        <Router base="/authentication">
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
