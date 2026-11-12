import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header({
  searchQuery = '',
  setSearchQuery,
  searchPlaceholder = 'Cari plat nomor, unit, penyewa...',
  onRefresh,
  showSearch = true,
  greeting = 'Selamat Datang, Nino',
  subtitle = 'Senin, 24 Oktober 2024 • Shift Pagi Ops',
  showAction = true,
  actionText = 'Tambah Booking',
  actionTo = '/pemesanan/baru',
  actionIcon,
  unreadCount = 3,
}) {
  const [localSearch, setLocalSearch] = useState('')
  const [isRefreshing, setIsRefreshing] = useState(false)

  const activeSearch = setSearchQuery ? searchQuery : localSearch
  const handleSearchChange = (e) => {
    if (setSearchQuery) {
      setSearchQuery(e.target.value)
    } else {
      setLocalSearch(e.target.value)
    }
  }

  const handleRefresh = () => {
    setIsRefreshing(true)
    if (onRefresh) {
      onRefresh()
    }
    setTimeout(() => {
      setIsRefreshing(false)
    }, 600)
  }

  return (
    <header className="sticky top-0 z-20 flex min-h-16 w-full shrink-0 items-center justify-between gap-3 border-b border-[#E3F0F8] bg-white/95 px-4 py-2.5 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Sisi Kiri: Greeting, Tanggal, & Shift */}
      <div className="flex min-w-0 flex-col items-start justify-center">
        <h1 className="truncate font-plusJakartaSans text-base font-bold leading-tight text-[#111D23] sm:text-lg">
          {greeting}
        </h1>
        <div className="mt-0.5 flex items-center gap-1.5 text-[#47607E]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-[#0F766E]"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="truncate font-plusJakartaSans text-xs font-medium leading-none tracking-[0.01em] text-[#47607E]">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Sisi Kanan: Search Bar, Notifikasi, Refresh, Action Button, Profile */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 lg:gap-3">
        {showSearch && (
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3 flex items-center text-[#6E7977]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="search"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={activeSearch}
              onChange={handleSearchChange}
              className="h-9 w-32 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] py-1.5 pl-8 pr-2.5 font-plusJakartaSans text-xs text-[#263238] transition-all outline-none placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:bg-white focus:ring-1 focus:ring-[#0F766E] sm:w-48 sm:text-[13px] md:w-56 lg:w-64"
            />
          </div>
        )}

        {/* Notifikasi */}
        <Link
          to="/notifikasi"
          aria-label="Pusat Notifikasi"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] transition-colors hover:bg-[#E9F6FD] hover:text-[#0F766E]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          {unreadCount > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BA1A1A] opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-[#BA1A1A]"></span>
            </span>
          )}
        </Link>

        {/* Refresh */}
        <button
          type="button"
          aria-label="Segarkan data"
          onClick={handleRefresh}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] transition-colors hover:bg-[#E9F6FD] hover:text-[#0F766E]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-500 ${isRefreshing ? 'rotate-180 text-[#0F766E]' : ''}`}
            aria-hidden="true"
          >
            <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
          </svg>
        </button>

        {/* Action Button (e.g. Tambah Booking) */}
        {showAction && (
          <>
            <span aria-hidden="true" className="h-5 w-px bg-[#DDEAF2]" />
            <Link
              to={actionTo}
              className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-[#0F766E] px-3.5 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:text-[13px]"
            >
              {actionIcon || (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              )}
              <span className="whitespace-nowrap">{actionText}</span>
            </Link>
          </>
        )}

        {/* Divider before Profile */}
        <span aria-hidden="true" className="h-5 w-px bg-[#DDEAF2]" />

        {/* Profile Avatar */}
        <Link
          to="/dashboard"
          aria-label="Profil Nino"
          className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#DDEAF2] bg-[#E3F0F8] shadow-xs transition-transform hover:scale-105"
        >
          <img
            src="/Profile.png"
            alt="Profil Nino"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
              if (e.currentTarget.nextSibling) {
                e.currentTarget.nextSibling.style.display = 'flex'
              }
            }}
          />
          <span
            style={{ display: 'none' }}
            className="flex h-full w-full items-center justify-center bg-[#0F766E] font-plusJakartaSans text-xs font-bold text-white"
          >
            N
          </span>
        </Link>
      </div>
    </header>
  )
}
