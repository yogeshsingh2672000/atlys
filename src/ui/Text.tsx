import React from 'react'

type TextProps = React.PropsWithChildren<{ className?: string }>

export function Name({ children, className = '' }: TextProps) {
  return <div className={`text-[15px] font-semibold text-slate-900 ${className}`}>{children}</div>
}

export function Timestamp({ children, className = '' }: TextProps) {
  return <div className={`text-[12px] text-slate-500 ${className}`}>{children}</div>
}

export function Paragraph({ children, className = '' }: TextProps) {
  return (
    <p className={`text-[15px] leading-6 text-slate-700 ${className}`}>{children}</p>
  )
}


