import { Link } from 'react-router-dom'

export default function BrandMark({ to = '/', light = false }) {
  return (
    <Link to={to} className="inline-flex w-fit items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F766E] text-white">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
          <path d="M3 13.5h18l-1.6-5.2a2 2 0 0 0-1.9-1.4H6.5a2 2 0 0 0-1.9 1.4L3 13.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M4 13.5v4a1.5 1.5 0 0 0 1.5 1.5H7v-2h10v2h1.5a1.5 1.5 0 0 0 1.5-1.5v-4M7 16h.01M17 16h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 7V5.5A1.5 1.5 0 0 1 7.5 4h9A1.5 1.5 0 0 1 18 5.5V7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`font-plusJakartaSans text-lg font-bold ${light ? 'text-white' : 'text-[#17324D]'}`}>
        Jaga<span className="text-[#0F766E]">Roda</span>
      </span>
    </Link>
  )
}