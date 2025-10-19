import { Link, useNavigate } from 'react-router-dom'
import { useAuthGate } from '@components/AuthGate'
import Logo from '@svgs/Logo'
import ls from '@utils/localstorage'

type Props = {
  fixed?: boolean 
}

export default function Header({ fixed = false }: Props) {
  const { isAuthed } = useAuthGate()
  const positionClass = fixed ? 'fixed' : 'sticky'
  const router = useNavigate()

  const logout = () => {
    ls.remove('auth:user')
    window.dispatchEvent(new Event('auth:changed'))
    router('/login')
  }

  return (
    <>
      <header
        className={`${positionClass} top-0 z-50 w-full h-[72px] bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/60`}
      >
        <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
          {/* Brand */}
          <Link to="/" className="inline-flex items-center text-slate-900">
            <span className="inline-grid h-7 w-6 place-items-center rounded-xl">
            <Logo/>
            </span>
            <span className="text-[18px] font-semibold tracking-tight">foo-rum</span>
          </Link>

          {/* Right actions */}
          {isAuthed ? <div onClick={logout} className="cursor-pointer text-sm font-medium" >Logout</div> : (
            <Link to="/login" className="group inline-flex items-center text-slate-800 hover:text-slate-900">
              <span className="text-sm font-medium">Login</span>
              <span className="grid h-7 w-6 place-items-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {/* arrow entering from left */}
                  <path d="M3 12h11" />
                  <path d="M10 8l4 4-4 4" />
                  {/* open rounded box on the right (no left side) */}
                  <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
                </svg>
              </span>
            </Link>
          )}
        </div>
      </header>
      {fixed && <div className="h-[80px]" />}
    </>
  )
}