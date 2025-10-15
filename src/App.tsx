import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from '@pages/Dashboard'
import Login from '@pages/Login'
import Signup from '@pages/Signup'
import { AuthGateProvider } from '@components/AuthGate'

function App() {
  return (
    <BrowserRouter>
      <AuthGateProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthGateProvider>
    </BrowserRouter>
  )
}

export default App
