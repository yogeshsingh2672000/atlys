import React, { useState } from 'react'
import AuthCard from '@components/AuthCard'
import Input from '@ui/Input'
import Button from '@ui/Button'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user = { name, email }
    localStorage.setItem('auth:user', JSON.stringify(user))
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

        <div className="mt-4 text-sm text-slate-600">
          Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Log in</Link>
        </div>
      </AuthCard>
    </div>
  )
}