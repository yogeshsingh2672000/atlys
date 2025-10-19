import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthCard from '@components/AuthCard'
import Input from '@ui/Input'
import Button from '@ui/Button'
import ls from '@utils/localstorage'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  // Default demo credentials from prompt
  useEffect(() => {
    setEmail('demo@example.com')
    setPassword('password123')
  }, [])

  function loadUsers(): Array<{ email: string; password: string; name?: string }> {
    try {
      const raw = ls.get('auth:users')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Basic validations
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Allow demo creds; else check session users
    const isDemo =
      (email === 'demo@example.com' && password === 'password123') ||
      (email === 'test@user.com' && password === 'testpass')

    const users = loadUsers()
    const match = users.find(u => u.email === email && u.password === password)

    if (!isDemo && !match) {
      setError('Invalid email or password')
      return
    }

    const user = { email: isDemo ? 'demo@example.com' : match?.email, name: match?.name }
    ls.set('auth:user', JSON.stringify(user))
    window.dispatchEvent(new Event('auth:changed'))
    navigate('/', { replace: true })
  }

  return (
    <div className="flex h-full justify-center items-center">
      <AuthCard title="Welcome back" subtitle="Log in to your account">
        <form onSubmit={onSubmit} className="space-y-4">
          <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          <Button type="submit" className="w-full">Log in</Button>
        </form>

        {error && <div className="mt-3 text-sm text-rose-600">{error}</div>}

        <div className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        </div>
      </AuthCard>
    </div>
  )
}