import React from 'react'
import { useAuthGate } from '@components/AuthGate'

type ToolbarButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  label: string
  className?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export default function ToolbarButton({ children, onClick, label, className = '', ...rest }: ToolbarButtonProps) {
  const { requireAuth } = useAuthGate()
  return (
    <button
      {...rest}
      onClick={(e) => requireAuth(() => onClick?.(e))}
      className={`cursor-pointer h-9 w-9 rounded-lg text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center active:scale-95 transition ${className}`}
      title={label}
    >
      {children}
    </button>
  )
}