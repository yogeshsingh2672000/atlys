type Props = {
  size?: number
  strokeWidth?: number
  className?: string
}

export default function ListNumberedIcon({ size = 20, strokeWidth = 1.8, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* left numbers, rendered as text for clarity */}
      <text x="5" y="8" textAnchor="middle" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="7" fontWeight="600" fill="currentColor">1</text>
      <text x="5" y="13" textAnchor="middle" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="7" fontWeight="600" fill="currentColor">2</text>
      <text x="5" y="18" textAnchor="middle" fontFamily="system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="7" fontWeight="600" fill="currentColor">3</text>

      {/* lines */}
      <path d="M9 7h10" />
      <path d="M9 12h10" />
      <path d="M9 17h10" />
    </svg>
  )
}


