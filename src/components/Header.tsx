import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthGate } from '@components/AuthGate'

type Props = {
  fixed?: boolean 
}

export default function Header({ fixed = false }: Props) {
  const { isAuthed } = useAuthGate()
  const positionClass = fixed ? 'fixed' : 'sticky'
  return (
    <>
      <header
        className={`${positionClass} top-0 z-50 w-full h-[80px] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60`}
      >
        <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
          <div className='text-xl font-bold'>Foo-rum</div>
          {!isAuthed && (
            <Link to="/login" className='text-sm font-medium text-indigo-600 hover:underline'>Login</Link>
          )}
        </div>
      </header>
      {fixed && <div className="h-[80px]" />}
    </>
  )
}