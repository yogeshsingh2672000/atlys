import React from 'react'
import { useAuthGate } from '@components/AuthGate'

type FooterIconProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent) => void
    label: string
} & React.HTMLAttributes<HTMLButtonElement>

export default function FooterIcon({ children, onClick, label, ...rest }: FooterIconProps) {
  const { requireAuth } = useAuthGate()
  return (
    <button
      {...rest}
      onClick={(e) => requireAuth(() => onClick?.(e))}
      className="cursor-pointer h-9 w-9 rounded-full text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center active:scale-95 transition"
      title={label}
    >
      {children}
    </button>
  )
}

