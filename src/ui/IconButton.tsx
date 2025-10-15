import React from 'react'
import { useAuthGate } from '@components/AuthGate'

type IconButtonProps = {
  children: React.ReactNode
  ariaLabel: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function IconButton({ children, ariaLabel, ...rest }: IconButtonProps) {
  const { requireAuth } = useAuthGate()
  return (
    <button
      aria-label={ariaLabel}
      onClick={(e) => requireAuth(() => rest.onClick?.(e))}
      className="cursor-pointer h-9 w-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-slate-100 active:scale-95 transition-all duration-150 shadow-sm ring-1 ring-black/5"
      {...rest}
    >
      {children}
    </button>
  )
}


