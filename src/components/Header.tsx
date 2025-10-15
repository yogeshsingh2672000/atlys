import React from 'react'

type Props = {
  fixed?: boolean 
}

export default function Header({ fixed = false }: Props) {
  const positionClass = fixed ? 'fixed' : 'sticky'
  return (
    <>
      <header
        className={`${positionClass} top-0 z-50 w-full h-[80px] bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60`}
      >
        <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
          <div className='text-xl font-bold'>Foo-rum</div>
          <div className='text-xl font-bold'>Login</div>
        </div>
      </header>
      {fixed && <div className="h-[80px]" />}
    </>
  )
}