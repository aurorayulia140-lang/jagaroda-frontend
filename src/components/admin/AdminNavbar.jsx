import { Link } from 'react-router-dom'

export default function AdminNavbar() {
  return (
    <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-[#DDEAF2] bg-white px-5 py-3 lg:px-8">
      <div>
        <p className="font-plusJakartaSans text-[11px] font-semibold tracking-[0.06em] text-[#6E7977]">JAGARODA / ADMIN</p>
        <p className="mt-0.5 font-plusJakartaSans text-sm font-bold text-[#17324D]">Panel pengelolaan</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-[#F4D6A4] bg-[#FFF8E8] px-3 py-1.5 font-plusJakartaSans text-xs font-semibold text-[#8A5A10]">Data dummy</span>
        <Link to="/" className="font-plusJakartaSans text-sm font-semibold text-[#0F766E] hover:underline">Lihat website</Link>
      </div>
    </header>
  )
}