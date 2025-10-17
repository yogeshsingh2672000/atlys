import React from 'react'
import { useAuthGate } from '@components/AuthGate'

type FooterIconProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent) => void
    label: string
} & React.HTMLAttributes<HTMLButtonElement>

export default function FooterIcon({ children, onClick, label, className = '', ...rest }: FooterIconProps) {
  const { requireAuth } = useAuthGate()
  const base = 'cursor-pointer grid place-items-center active:scale-95 transition'
  return (
    <button
      {...rest}
      onClick={(e) => requireAuth(() => onClick?.(e))}
      className={`${base} ${className}`}
      title={label}
      aria-label={label}
    >
      {children}
    </button>
  )
}

