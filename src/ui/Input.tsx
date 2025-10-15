import React from 'react'

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string }

export default function Input({ label, className = '', ...props }: Props) {
  return (
    <label className="block">
      {label && <div className="mb-1 text-sm font-medium text-slate-700">{label}</div>}
      <input
        {...props}
        className={`w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-[15px] outline-none ring-offset-0 transition focus:border-slate-400 focus:ring-2 focus:ring-slate-200 ${className}`}
      />
    </label>
  )
}