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
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 text-[#0F766E]"
            aria-hidden="true"
          >
            <path
              d="M3.5 8.5C3.1 8.5 2.75 8.35 2.5 8.05C2.2 7.75 2 7.4 2 7C2 6.6 2.2 6.25 2.5 5.95C2.75 5.7 3.1 5.5 3.5 5.5C3.9 5.5 4.25 5.7 4.5 5.95C4.8 6.25 5 6.6 5 7C5 7.4 4.8 7.75 4.5 8.05C4.25 8.35 3.9 8.5 3.5 8.5ZM1.5 11.5C1.1 11.5 0.75 11.35 0.5 11.1C0.2 10.8 0 10.5 0 10V2.5C0 2 0.2 1.7 0.5 1.4C0.75 1.15 1.1 1 1.5 1H2V0H3V1H8V0H9V1H9.5C10 1 10.3 1.15 10.6 1.4C10.85 1.7 11 2 11 2.5V10C11 10.5 10.85 10.8 10.6 11.1C10.3 11.35 10 11.5 9.5 11.5H1.5ZM1.5 10.5H9.5V5H1.5V10.5ZM1.5 4H9.5V2.5H1.5V4Z"
              fill="currentColor"
            />
          </svg>
          <span className="truncate font-plusJakartaSans text-xs font-medium leading-none tracking-[0.01em] text-[#47607E]">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Sisi Kanan: Search Bar, Notifikasi, Refresh, Tambah Booking, Profile */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-2.5 lg:gap-3">
        {showSearch && (
          <div className="relative flex items-center">
            <span className="pointer-events-none absolute left-3 flex items-center text-[#6E7977]">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12.45 13.5L7.725 8.775C7.35 9.075 6.91875 9.3125 6.43125 9.4875C5.94375 9.6625 5.425 9.75 4.875 9.75C3.5125 9.75 2.35938 9.27813 1.41562 8.33438C0.471875 7.39063 0 6.2375 0 4.875C0 3.5125 0.471875 2.35938 1.41562 1.41562C2.35938 0.471875 3.5125 0 4.875 0C6.2375 0 7.39063 0.471875 8.33438 1.41562C9.27813 2.35938 9.75 3.5125 9.75 4.875C9.75 5.425 9.6625 5.94375 9.4875 6.43125C9.3125 6.91875 9.075 7.35 8.775 7.725L13.5 12.45L12.45 13.5V13.5M4.875 8.25C5.8125 8.25 6.60938 7.92188 7.26562 7.26562C7.92188 6.60938 8.25 5.8125 8.25 4.875C8.25 3.9375 7.92188 3.14062 7.26562 2.48438C6.60938 1.82812 5.8125 1.5 4.875 1.5C3.9375 1.5 3.14062 1.82812 2.48438 2.48438C1.82812 3.14062 1.5 3.9375 1.5 4.875C1.5 5.8125 1.82812 6.60938 2.48438 7.26562C3.14062 7.92188 3.9375 8.25 4.875 8.25V8.25Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <input
              type="search"
              aria-label={searchPlaceholder}
              placeholder={searchPlaceholder}
              value={activeSearch}
              onChange={handleSearchChange}
              className="w-32 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] py-1.5 pl-8 pr-2.5 font-plusJakartaSans text-xs text-[#263238] transition-all outline-none placeholder:text-[#94A3B8] focus:border-[#0F766E] focus:bg-white focus:ring-1 focus:ring-[#0F766E] sm:w-48 sm:text-[13px] md:w-56 lg:w-64"
            />
          </div>
        )}

        {/* Notifikasi */}
        <Link
          to="/notifikasi"
          aria-label="Pusat Notifikasi"
          className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] transition-colors hover:bg-[#E9F6FD] hover:text-[#0F766E]"
        >
          <svg
            width="15"
            height="18"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 15.5833V13.75H1.83333V7.33333C1.83333 6.06528 2.21528 4.93854 2.97917 3.95312C3.74306 2.96771 4.73611 2.32222 5.95833 2.01667V1.375C5.95833 0.993056 6.09201 0.668403 6.35938 0.401042C6.62674 0.133681 6.95139 0 7.33333 0C7.71528 0 8.03993 0.133681 8.30729 0.401042C8.57465 0.668403 8.70833 0.993056 8.70833 1.375V2.01667C9.93056 2.32222 10.9236 2.96771 11.6875 3.95312C12.4514 4.93854 12.8333 6.06528 12.8333 7.33333V13.75H14.6667V15.5833H0ZM7.33333 18.3333C6.82917 18.3333 6.39757 18.1538 6.03854 17.7948C5.67951 17.4358 5.5 17.0042 5.5 16.5H9.16667C9.16667 17.0042 8.98715 17.4358 8.62813 17.7948C8.2691 18.1538 7.8375 18.3333 7.33333 18.3333ZM3.66667 13.75H11V7.33333C11 6.325 10.641 5.46181 9.92292 4.74375C9.20486 4.02569 8.34167 3.66667 7.33333 3.66667C6.325 3.66667 5.46181 4.02569 4.74375 4.74375C4.02569 5.46181 3.66667 6.325 3.66667 7.33333V13.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#BA1A1A] opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-[#BA1A1A]"></span>
          </span>
        </Link>

        {/* Refresh */}
        <button
          type="button"
          aria-label="Segarkan data"
          onClick={handleRefresh}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] transition-colors hover:bg-[#E9F6FD] hover:text-[#0F766E]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-500 ${isRefreshing ? 'rotate-180 text-[#0F766E]' : ''}`}
            aria-hidden="true"
          >
            <path
              d="M0 14.6667V12.8333H2.52083L2.15417 12.5125C1.35972 11.8097 0.802083 11.0076 0.48125 10.1062C0.160417 9.20486 0 8.29583 0 7.37917C0 5.68333 0.507986 4.17465 1.52396 2.85313C2.53993 1.5316 3.86528 0.656944 5.5 0.229167V2.15417C4.4 2.55139 3.51389 3.22743 2.84167 4.18229C2.16944 5.13715 1.83333 6.20278 1.83333 7.37917C1.83333 8.06667 1.96319 8.73507 2.22292 9.38437C2.48264 10.0337 2.8875 10.6333 3.4375 11.1833L3.66667 11.4125V9.16667H5.5V14.6667H0ZM9.16667 14.4375V12.5125C10.2667 12.1153 11.1528 11.4392 11.825 10.4844C12.4972 9.52951 12.8333 8.46389 12.8333 7.2875C12.8333 6.6 12.7035 5.9316 12.4438 5.28229C12.184 4.63299 11.7792 4.03333 11.2292 3.48333L11 3.25417V5.5H9.16667V0H14.6667V1.83333H12.1458L12.5125 2.15417C13.2611 2.90278 13.8073 3.71632 14.151 4.59479C14.4948 5.47326 14.6667 6.37083 14.6667 7.2875C14.6667 8.98333 14.1587 10.492 13.1427 11.8135C12.1267 13.1351 10.8014 14.0097 9.16667 14.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>

        {/* Divider */}
        <span aria-hidden="true" className="h-6 w-px bg-[#DDEAF2]" />

        {/* Tombol Tambah Booking / Pemesanan */}
        <Link
          to="/pemesanan/baru"
          className="flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-[#0F766E] px-3 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:px-3.5 sm:text-[13px]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6Z"
              fill="currentColor"
            />
          </svg>
          <span className="whitespace-nowrap">
            <span className="hidden sm:inline">Tambah </span>Booking
            <span className="hidden xl:inline"> / Pemesanan</span>
          </span>
        </Link>

        {/* Profile Avatar */}
        <Link
          to="/dashboard"
          aria-label="Profil Nino"
          className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#DDEAF2] bg-[#E3F0F8] shadow-xs"
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
