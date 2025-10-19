import { lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import SuspenseWrapper from './SuspenseWrapper'

const Dashboard = lazy(() => import('@pages/Dashboard'))
const Login = lazy(() => import('@pages/Login'))
const Signup = lazy(() => import('@pages/Signup'))

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SuspenseWrapper><Dashboard /></SuspenseWrapper>} />
      <Route path="/login" element={<SuspenseWrapper><Login /></SuspenseWrapper>} />
      <Route path="/signup" element={<SuspenseWrapper><Signup /></SuspenseWrapper>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}