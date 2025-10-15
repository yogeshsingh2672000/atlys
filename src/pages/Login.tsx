import React, { useState } from 'react'
import AuthCard from '@components/AuthCard'
import Input from '@ui/Input'
import Button from '@ui/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = { email }
    localStorage.setItem('auth:user', JSON.stringify(user))
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

        <div className="mt-4 text-sm text-slate-600">
          Don&apos;t have an account? <Link to="/signup" className="text-indigo-600 hover:underline">Sign up</Link>
        </div>
      </AuthCard>
    </div>
  )
}