import React from 'react'

type FooterIconProps = {
    children: React.ReactNode
    onClick: (e: React.MouseEvent) => void
    label: string
} & React.HTMLAttributes<HTMLButtonElement>

export default function FooterIcon({ children, onClick, label, ...rest }: FooterIconProps) {
  return (
    <button {...rest} className="cursor-pointer h-9 w-9 rounded-full text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center active:scale-95 transition" title={label}>
      {children}
    </button>
  )
}

