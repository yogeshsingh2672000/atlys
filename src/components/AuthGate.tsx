import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type AuthGateContextValue = {
  isAuthed: boolean
  requireAuth: (action?: () => void) => void
}

const AuthGateContext = createContext<AuthGateContextValue | undefined>(undefined)

export function useAuthGate(): AuthGateContextValue {
  const ctx = useContext(AuthGateContext)
  if (!ctx) throw new Error('useAuthGate must be used within <AuthGateProvider>')
  return ctx
}

export function AuthGateProvider({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [isAuthed, setIsAuthed] = useState<boolean>(!!localStorage.getItem('auth:user'))

  useEffect(() => {
    const sync = () => setIsAuthed(!!localStorage.getItem('auth:user'))
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'auth:user') sync()
    }
    window.addEventListener('storage', onStorage)
    window.addEventListener('auth:changed', sync as EventListener)
    window.addEventListener('focus', sync)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('auth:changed', sync as EventListener)
      window.removeEventListener('focus', sync)
    }
  }, [])

  useEffect(() => {
    if (isAuthed && modalOpen) setModalOpen(false)
  }, [isAuthed, modalOpen])

  const requireAuth = (action?: () => void) => {
    if (isAuthed) {
      action?.()
    } else {
      setModalOpen(true)
    }
  }

  return (
    <AuthGateContext.Provider value={{ isAuthed, requireAuth }}>
      {children}
      {modalOpen && <AuthModal onClose={() => setModalOpen(false)} />}
    </AuthGateContext.Provider>
  )
}

function AuthModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
        <h2 className="text-lg font-semibold text-slate-900">Please log in</h2>
        <p className="mt-2 text-sm text-slate-600">You need to be logged in to use this action.</p>
        <div className="mt-4 flex justify-end gap-2">
            <Link to="/login" className="inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 active:scale-95 transition">
                Go to Login
            </Link>
          <button onClick={onClose} className="cursor-pointer inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100 active:scale-95 transition">Close</button>
        </div>
      </div>
    </div>
  )
}


