import { NavLink } from 'react-router-dom'
import BrandMark from './BrandMark'

const navigationItems = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    end: true,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: 'Pemesanan',
    to: '/pemesanan',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="m9 16 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Jadwal Handover',
    to: '/handover',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    label: 'Kendaraan',
    to: '/kendaraan',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" />
        <path d="M5 17H3v-5l2-5h10l2 5v5h-2M9 17h6" />
        <circle cx="7" cy="17" r="1" />
        <circle cx="17" cy="17" r="1" />
      </svg>
    ),
  },
  {
    label: 'Maintenance & Kerusakan',
    to: '/maintenance',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: 'Pembayaran',
    to: '/pembayaran',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    label: 'Notifikasi',
    to: '/notifikasi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    label: 'Lokasi',
    to: '/lokasi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  return (
    <aside className="relative z-30 flex h-auto w-full flex-col items-start bg-[#17324D] shadow-[0_1px_8px_0_rgba(0,0,0,0.06)] lg:fixed lg:inset-y-0 lg:left-0 lg:h-screen lg:w-[260px]">
      <div className="flex h-auto w-full flex-col items-start overflow-hidden lg:h-full">
        {/* Brand Header */}
        <div className="flex h-16 w-full shrink-0 items-center border-b border-b-[#1E3A5F] px-4">
          <BrandMark to="/dashboard" light />
        </div>

        {/* Section Label */}
        <div className="flex w-full flex-col items-start px-4 pb-2 pt-5 max-lg:hidden">
          <p className="w-full font-plusJakartaSans text-[11px] font-bold uppercase leading-none tracking-[0.08em] text-[#94A3B8]">
            Navigasi Rental
          </p>
        </div>

        {/* Navigation Items */}
        <nav
          aria-label="Navigasi rental"
          className="flex h-auto w-full flex-row items-center gap-1 overflow-x-auto px-2 py-2 lg:h-full lg:flex-col lg:items-start lg:overflow-x-hidden lg:py-1"
        >
          {navigationItems.map(({ label, to, end, icon }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-lg px-3.5 py-2.5 font-plusJakartaSans text-[13px] font-semibold leading-4 tracking-[0.01em] transition-all whitespace-nowrap lg:w-full lg:whitespace-normal ${
                  isActive
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'text-[#94A3B8] hover:bg-white/10 hover:text-white'
                }`
              }
            >
              <span className="shrink-0 opacity-90">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* User Profile Footer */}
      <div className="hidden w-full flex-col items-start border-t border-t-[#1E3A5F] bg-[#142C44] p-3 lg:flex">
        <div className="flex w-full items-center justify-between rounded-lg p-1.5 transition-colors hover:bg-white/5">
          <div className="flex items-center gap-2.5 min-w-0">
            <span
              aria-hidden="true"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F766E] font-plusJakartaSans text-xs font-bold text-white shadow-xs"
            >
              N
            </span>
            <div className="flex flex-col items-start min-w-0 overflow-hidden">
              <p className="truncate font-plusJakartaSans text-[13px] font-bold leading-tight text-white">
                Nino
              </p>
              <p className="truncate font-plusJakartaSans text-[11px] font-medium leading-tight text-[#94A3B8]">
                Pengelola Rental
              </p>
            </div>
          </div>
          <span aria-hidden="true" className="shrink-0 px-1 text-sm text-[#94A3B8]">
            &#8942;
          </span>
        </div>
      </div>
    </aside>
  )
}
