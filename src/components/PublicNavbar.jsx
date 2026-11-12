import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

const links = [
  { label: 'Beranda', to: '/' },
  { label: 'Tentang Kami', to: '/#tentang' },
  { label: 'Layanan', to: '/#layanan' },
  { label: 'Cara Kerja', to: '/#cara-kerja' },
  { label: 'Kontak', to: '/#kontak' },
]

export default function PublicNavbar() {
  return (
    <header className="border-b border-[#DDEAF2] bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <BrandMark />
        <nav aria-label="Navigasi publik" className="order-3 flex w-full items-center gap-6 overflow-x-auto py-1 md:order-2 md:w-auto">
          {links.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="shrink-0 font-plusJakartaSans text-sm font-semibold text-[#47607E] transition-colors hover:text-[#0F766E]"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="order-2 flex items-center gap-2 md:order-3">
          <Link to="/signin" className="rounded-lg px-3 py-2 font-plusJakartaSans text-sm font-semibold text-[#17324D] hover:bg-[#E9F6FD]">
            Sign In
          </Link>
          <Link to="/signup" className="rounded-lg bg-[#0F766E] px-4 py-2.5 font-plusJakartaSans text-sm font-semibold text-white shadow-sm hover:bg-[#0B625C]">
            Daftar
          </Link>
        </div>
      </div>
    </header>
  )
}