import { Link, NavLink } from 'react-router-dom'
import BrandMark from '../BrandMark'

const sectionLinks = [
  { label: 'Pemesanan terbaru', href: '#recent-bookings' },
  { label: 'Status kendaraan', href: '#vehicle-status' },
  { label: 'Aktivitas', href: '#recent-activity' },
]

export default function AdminSidebar() {
  return (
    <aside className="relative z-20 flex w-full shrink-0 flex-col bg-[#17324D] text-white shadow-[0_8px_24px_rgba(23,50,77,0.12)] md:fixed md:inset-y-0 md:left-0 md:w-64">
      <div className="flex h-16 shrink-0 items-center border-b border-white/10 px-5">
        <BrandMark to="/admin/dashboard" light />
      </div>
      <div className="px-5 pb-2 pt-6 max-md:hidden">
        <p className="font-plusJakartaSans text-[10px] font-bold tracking-[0.14em] text-[#AFC2D3]">PENGELOLAAN SISTEM</p>
      </div>
      <nav aria-label="Navigasi admin" className="flex flex-1 flex-col gap-1 px-3 max-md:flex-row max-md:overflow-x-auto max-md:py-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => `flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 font-plusJakartaSans text-sm font-semibold max-md:whitespace-nowrap ${isActive ? 'bg-[#0F766E] text-white' : 'text-[#DDEAF2] hover:bg-white/10'}`}
        >
          <span aria-hidden="true" className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-xs">▦</span>
          Dashboard Admin
        </NavLink>
        <div className="mt-3 flex flex-col gap-1 max-md:mt-0 max-md:flex-row">
          {sectionLinks.map(({ label, href }) => (
            <a key={href} href={href} className="flex shrink-0 items-center rounded-lg px-3 py-2 font-plusJakartaSans text-[13px] font-medium text-[#AFC2D3] hover:bg-white/10 hover:text-white max-md:whitespace-nowrap">
              {label}
            </a>
          ))}
        </div>
      </nav>
      <div className="border-t border-white/10 p-4 max-md:hidden">
        <p className="font-plusJakartaSans text-[11px] font-semibold text-[#AFC2D3]">MODE PRATINJAU</p>
        <p className="mt-1 font-plusJakartaSans text-xs leading-5 text-[#DDEAF2]">Data contoh, belum tersambung ke backend.</p>
        <Link to="/" className="mt-4 inline-flex font-plusJakartaSans text-xs font-semibold text-[#9CF2E8] hover:text-white">Kembali ke website</Link>
      </div>
    </aside>
  )
}