import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition active:scale-95'
  const primary = 'bg-indigo-600 text-white shadow hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed'
  const ghost = 'text-slate-700 ring-1 ring-slate-200 hover:bg-slate-100'
  return <button {...props} className={`${base} ${variant === 'primary' ? primary : ghost} ${className}`} />
}