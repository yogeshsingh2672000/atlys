import React from 'react'

type ToolbarButtonProps = {
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  label: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>


export default function ToolbarButton({ children, onClick, label, ...rest }: ToolbarButtonProps) {
  return (
    <button {...rest} className="cursor-pointer h-9 w-9 rounded-lg text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100 grid place-items-center active:scale-95 transition" title={label}>
      {children}
    </button>
  )
}