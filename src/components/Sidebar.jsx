import { NavLink } from 'react-router-dom'
import BrandMark from './BrandMark'

const navigationItems = [
  { label: 'Dashboard', to: '/dashboard', end: true },
  { label: 'Pemesanan', to: '/pemesanan' },
  { label: 'Jadwal Handover', to: '/handover' },
  { label: 'Kendaraan', to: '/kendaraan' },
  { label: 'Maintenance & Kerusakan', to: '/maintenance' },
  { label: 'Pembayaran', to: '/pembayaran' },
  { label: 'Notifikasi', to: '/notifikasi' },
  { label: 'Lokasi', to: '/lokasi' },
]

export default function Sidebar() {
  return (
    <aside className="relative z-30 flex h-auto w-full flex-col items-start bg-[#17324D] shadow-[01px8px0rgba(0,0,0,0.04)] lg:fixed lg:inset-y-0 lg:left-0 lg:h-screen lg:w-[260px]">
      <div className="flex h-auto w-full flex-col items-start overflow-hidden lg:h-full">
        <div className="flex h-16 w-full shrink-0 items-center border-b border-b-[#1E3A5F] px-4">
          <BrandMark to="/dashboard" light />
        </div>
        <div className="flex w-full flex-col items-start px-4 pb-2 pt-[23px] max-lg:hidden">
          <p className="w-full font-plusJakartaSans text-[11px] font-semibold leading-[14px] tracking-[0.05em] text-[#94A3B8]">
            NAVIGASI RENTAL
          </p>
        </div>
        <nav
          aria-label="Navigasi rental"
          className="flex h-auto w-full flex-row items-start gap-1 overflow-x-auto px-2 py-2 lg:h-full lg:flex-col lg:overflow-x-hidden lg:py-0"
        >
          {navigationItems.map(({ label, to, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex w-fit shrink-0 items-center rounded-lg px-4 py-2.5 font-plusJakartaSans text-[13px] font-semibold leading-4 tracking-[0.01em] whitespace-nowrap lg:w-full lg:whitespace-normal ${
                  isActive
                    ? 'bg-[#0F766E] text-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)]'
                    : 'text-[#94A3B8]'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="hidden w-full flex-col items-start border-t border-t-[#1E3A5F] bg-[#142C44] p-2 lg:flex">
        <div className="flex w-full items-center justify-between rounded-lg p-2">
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0F766E] font-plusJakartaSans text-xs font-bold text-white">N</span>
            <div className="flex flex-col items-start overflow-hidden">
              <p className="font-plusJakartaSans text-[13px] font-semibold leading-[16.25px] tracking-[0.01em] text-[#FFF]">
                Nino
              </p>
              <p className="font-plusJakartaSans text-[11px] font-medium leading-[13.75px] tracking-[0.02em] text-[#94A3B8]">
                Pengelola Rental
              </p>
            </div>
          </div>
          <span aria-hidden="true" className="text-[#94A3B8]">
            &#8942;
          </span>
        </div>
      </div>
    </aside>
  )
}