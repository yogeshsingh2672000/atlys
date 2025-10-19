import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { AuthGateProvider } from '@components/AuthGate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthGateProvider>
      <App />
    </AuthGateProvider>
  </StrictMode>,
)
