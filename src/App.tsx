import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@lib/AppRoutes'
import { ErrorBoundary } from '@lib/ErrorBoundary'
import { AuthGateProvider } from '@components/AuthGate'

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthGateProvider>
          <AppRoutes />
        </AuthGateProvider>
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
