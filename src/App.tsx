import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from '@lib/AppRoutes'
import { ErrorBoundary } from '@lib/ErrorBoundary'


function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </BrowserRouter>
  )
}

export default App
