import React from 'react'

type EmojiBadgeProps = {
  onClick: (e: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLDivElement>

export default function EmojiBadge({ onClick, ...rest }: EmojiBadgeProps) {
  return (  
    <div {...rest} className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow-100 shadow-inner ring-1 ring-black/5 select-none">
      <span className="text-xl">😊</span>
    </div>
  )
}


