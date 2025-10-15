import React, { useState } from 'react'
import AuthCard from '@components/AuthCard'
import Input from '@ui/Input'
import Button from '@ui/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Basic validations
    if (name.trim().length < 2) {
      setError('Name must be at least 2 characters')
      return
    }
    const emailRegex = /[^@\s]+@[^@\s]+\.[^@\s]+/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    // Persist in sessionStorage for this tab session
    try {
      const raw = sessionStorage.getItem('auth:users')
      const users: Array<{ name?: string; email: string; password: string }> = raw ? JSON.parse(raw) : []
      if (users.some(u => u.email === email)) {
        setError('An account with this email already exists')
        return
      }
      users.push({ name, email, password })
      sessionStorage.setItem('auth:users', JSON.stringify(users))
    } catch {
      // if parsing fails, reset with the new user
      sessionStorage.setItem('auth:users', JSON.stringify([{ name, email, password }]))
    }

    const user = { name, email }
    localStorage.setItem('auth:user', JSON.stringify(user))
    window.dispatchEvent(new Event('auth:changed'))
    navigate('/', { replace: true })
  }

  return (
    <div className="flex h-full justify-center items-center">
      <AuthCard title="Create your account" subtitle="Join the community">
        <form onSubmit={onSubmit} className="space-y-4">
          <Input label="Name" value={name} onChange={e => setName(e.target.value)} placeholder="Jane Doe" required />
          <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" required />
          <Input label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" required />
          <Button type="submit" className="w-full">Sign up</Button>
        </form>

        {error && <div className="mt-3 text-sm text-rose-600">{error}</div>}

        <div className="mt-4 text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
        </div>
      </AuthCard>
    </div>
  )
}