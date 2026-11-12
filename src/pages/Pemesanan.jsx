import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Pemesanan() {
  const [viewMode, setViewMode] = useState('monthly') // 'monthly' | 'weekly' | 'daily'
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFleet, setSelectedFleet] = useState('all')
  const [conflictResolved, setConflictResolved] = useState(false)

  // Booking events for the calendar
  const calendarDays = [
    { day: 28, isPrevMonth: true },
    { day: 29, isPrevMonth: true },
    { day: 30, isPrevMonth: true },
    { day: 1, bookings: [{ car: 'Avanza', client: 'PT Megah', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 2, bookings: [{ car: 'Avanza', client: 'PT Megah', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 3, bookings: [{ car: 'Brio', client: 'Bpk. Dimas', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 4, bookings: [{ car: 'Brio', client: 'Bpk. Dimas', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 5, bookings: [{ car: 'Xpander', client: 'Sewa Wisata', tone: 'bg-[#FEF3C7] text-[#B45309]' }] },
    { day: 6 },
    { day: 7, bookings: [{ car: 'Calya', client: 'Bpk. Bambang', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 8, bookings: [{ car: 'Calya', client: 'Bpk. Bambang', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 9 },
    { day: 10 },
    { day: 11, bookings: [{ car: 'Innova', client: 'Ibu Ratna', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 12, bookings: [{ car: 'Innova', client: 'Ibu Ratna', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 13 },
    {
      day: 14,
      isConflict: true,
      bookings: [
        { car: 'Avanza', client: 'Hendra G.', tone: 'bg-[#FEE2E2] text-[#B91C1C]' },
        { car: 'Avanza', client: 'PT Maju', tone: 'bg-[#FEE2E2] text-[#B91C1C]' },
      ],
    },
    {
      day: 15,
      isConflict: true,
      bookings: [
        { car: 'Avanza', client: 'Hendra G.', tone: 'bg-[#FEE2E2] text-[#B91C1C]' },
        { car: 'Avanza', client: 'PT Maju', tone: 'bg-[#FEE2E2] text-[#B91C1C]' },
      ],
    },
    {
      day: 16,
      isConflict: true,
      bookings: [{ car: 'Avanza', client: 'Konflik Sewa', tone: 'bg-[#FEE2E2] text-[#B91C1C]' }],
    },
    { day: 17 },
    { day: 18, bookings: [{ car: 'Mobilio', client: 'PT Surya', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 19, bookings: [{ car: 'Mobilio', client: 'PT Surya', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 20 },
    { day: 21 },
    { day: 22, bookings: [{ car: 'Xenia', client: 'Keluarga Budi', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 23, bookings: [{ car: 'Xenia', client: 'Keluarga Budi', tone: 'bg-[#DCFCE7] text-[#15803D]' }] },
    { day: 24, isToday: true, bookings: [{ car: 'Ertiga', client: 'PT Nusantara', tone: 'bg-[#0F766E] text-white' }] },
    { day: 25, bookings: [{ car: 'Ertiga', client: 'PT Nusantara', tone: 'bg-[#0F766E] text-white' }] },
    { day: 26 },
    { day: 27 },
    { day: 28 },
    { day: 29, bookings: [{ car: 'Xpander', client: 'Weekend Trip', tone: 'bg-[#FEF3C7] text-[#B45309]' }] },
    { day: 30, bookings: [{ car: 'Avanza', client: 'PT Wira', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 31, bookings: [{ car: 'Avanza', client: 'PT Wira', tone: 'bg-[#C2DCFF] text-[#1E3A8A]' }] },
    { day: 1, isNextMonth: true },
  ]

  const activeBookings = [
    {
      id: 'BK-001',
      unit: 'Toyota Avanza 1.3 G (L 1234 AB)',
      client: 'Bpk. Hendra Gunawan',
      period: '14 Okt - 16 Okt 2026',
      status: 'Konflik Jadwal',
      variant: 'danger',
      amount: 'Rp 1.350.000',
    },
    {
      id: 'BK-002',
      unit: 'Suzuki Ertiga Hybrid (L 6789 FG)',
      client: 'PT Nusantara Logistik',
      period: '24 Okt - 25 Okt 2026',
      status: 'Sedang Berjalan',
      variant: 'success',
      amount: 'Rp 900.000',
    },
    {
      id: 'BK-003',
      unit: 'Honda Brio Satya E (L 2345 BC)',
      client: 'Dimas Saputra',
      period: '03 Okt - 04 Okt 2026',
      status: 'Selesai',
      variant: 'neutral',
      amount: 'Rp 650.000',
    },
    {
      id: 'BK-004',
      unit: 'Mitsubishi Xpander (W 3456 CD)',
      client: 'Ibu Maya Anggraini',
      period: '29 Okt - 31 Okt 2026',
      status: 'Dikonfirmasi',
      variant: 'info',
      amount: 'Rp 1.500.000',
    },
  ]

  const filteredBookings = activeBookings.filter((b) => {
    const q = searchQuery.toLowerCase().trim()
    return b.unit.toLowerCase().includes(q) || b.client.toLowerCase().includes(q) || b.status.toLowerCase().includes(q)
  })

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari jadwal, plat nomor, penyewa..."
        greeting="Kalender Pemesanan"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
        actionText="Tambah Booking"
        actionTo="/pemesanan/baru"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Subheader & Breadcrumbs */}
        <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-1">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#47607E]">
              <span className="font-plusJakartaSans font-medium">Operasional Rental</span>
              <span className="text-[#94A3B8]">/</span>
              <span className="font-plusJakartaSans font-semibold text-[#0F766E]">Pemesanan</span>
            </nav>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <h2 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-[26px]">
                Kalender Pemesanan Armada
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3F0F8] px-2.5 py-0.5 font-plusJakartaSans text-[11px] font-semibold text-[#0F766E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E] animate-pulse" />
                Fleet Live Sync
              </span>
            </div>
            <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-sm">
              Kelola jadwal pemesanan armada, pantau ketersediaan secara real-time, dan cegah benturan sewa otomatis.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-white px-3.5 font-plusJakartaSans text-xs font-semibold text-[#17324D] shadow-xs transition-colors hover:bg-[#F8FAFC]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Ekspor Jadwal</span>
            </button>
            <Link
              to="/pemesanan/baru"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#0F766E] px-4 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Tambah Pemesanan</span>
            </Link>
          </div>
        </div>

        {/* Conflict Warning Alert */}
        {!conflictResolved && (
          <div className="flex w-full flex-col items-start justify-between gap-4 rounded-xl border border-[#F0D2CF] border-l-4 border-l-[#BA1A1A] bg-white p-4 shadow-xs sm:flex-row sm:items-center">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#BA1A1A]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="flex flex-col gap-0.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-plusJakartaSans text-xs font-bold uppercase tracking-wider text-[#BA1A1A]">
                    Terdeteksi 1 Jadwal Bertabrakan (Konflik Booking)
                  </span>
                  <span className="rounded-full bg-[#BA1A1A] px-2 py-0.5 font-plusJakartaSans text-[10px] font-semibold text-white">
                    Prioritas Tinggi
                  </span>
                </div>
                <p className="font-plusJakartaSans text-xs font-semibold text-[#111D23] sm:text-[13px]">
                  Toyota Avanza (L 1234 AB) dipesan ganda pada rentang 14–16 Okt 2026 antara penyewa Bpk. Hendra Gunawan dan PT Maju Sentosa.
                </p>
                <p className="mt-0.5 font-plusJakartaSans text-xs text-[#0F766E]">
                  Saran sistem: Alihkan booking PT Maju Sentosa ke Daihatsu Xenia (L 9012 EF) yang 100% Tersedia di tanggal yang sama.
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => setConflictResolved(true)}
                className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[#0F766E] px-3 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
              >
                <span>Atur Pengalihan Unit</span>
              </button>
              <button
                type="button"
                onClick={() => setConflictResolved(true)}
                className="inline-flex h-8 items-center rounded-lg border border-[#DDEAF2] bg-white px-3 font-plusJakartaSans text-xs font-medium text-[#47607E] transition-colors hover:bg-[#F8FAFC]"
              >
                <span>Abaikan</span>
              </button>
            </div>
          </div>
        )}

        {/* Calendar Control Toolbar */}
        <div className="flex w-full flex-wrap items-center justify-between gap-4 rounded-xl border border-[#DDEAF2] bg-white p-3.5 shadow-xs">
          {/* View Tabs */}
          <div className="flex items-center gap-1 rounded-lg bg-[#E3F0F8] p-1">
            <button
              type="button"
              onClick={() => setViewMode('monthly')}
              className={`rounded-md px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                viewMode === 'monthly'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:text-[#0F766E]'
              }`}
            >
              Bulanan
            </button>
            <button
              type="button"
              onClick={() => setViewMode('weekly')}
              className={`rounded-md px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                viewMode === 'weekly'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:text-[#0F766E]'
              }`}
            >
              Mingguan
            </button>
            <button
              type="button"
              onClick={() => setViewMode('daily')}
              className={`rounded-md px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                viewMode === 'daily'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:text-[#0F766E]'
              }`}
            >
              Harian
            </button>
          </div>

          {/* Month Navigator */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Bulan sebelumnya"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] hover:bg-[#E9F6FD]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="flex items-center gap-2 rounded-lg bg-[#E9F6FD] px-3 py-1.5">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#0F766E]" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-plusJakartaSans text-sm font-bold text-[#17324D]">
                Oktober 2026
              </span>
            </div>
            <button
              type="button"
              aria-label="Bulan berikutnya"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#DDEAF2] bg-white text-[#47607E] hover:bg-[#E9F6FD]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
            <button
              type="button"
              className="rounded-lg border border-[#DDEAF2] bg-white px-3 py-1.5 font-plusJakartaSans text-xs font-semibold text-[#47607E] hover:bg-[#E9F6FD] hover:text-[#0F766E]"
            >
              Hari Ini
            </button>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex items-center gap-2">
            <select
              value={selectedFleet}
              onChange={(e) => setSelectedFleet(e.target.value)}
              aria-label="Filter armada"
              className="h-9 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 font-plusJakartaSans text-xs font-medium text-[#17324D] outline-none focus:border-[#0F766E]"
            >
              <option value="all">Semua Armada (24 Unit)</option>
              <option value="avanza">Toyota Avanza</option>
              <option value="brio">Honda Brio</option>
              <option value="xpander">Mitsubishi Xpander</option>
              <option value="calya">Toyota Calya</option>
            </select>
          </div>
        </div>

        {/* Main Grid: Calendar on Left, Quick Tool & Bookings on Right */}
        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-[1.55fr_1fr]">
          {/* Left Column: Responsive Calendar View */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs">
            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 border-b border-[#E3F0F8] pb-2 text-center font-plusJakartaSans text-xs font-bold text-[#47607E]">
              <span>Sen</span>
              <span>Sel</span>
              <span>Rab</span>
              <span>Kam</span>
              <span>Jum</span>
              <span className="text-[#BA1A1A]">Sab</span>
              <span className="text-[#BA1A1A]">Min</span>
            </div>

            {/* Calendar Cells Grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {calendarDays.map((cDay, idx) => {
                const isMuted = cDay.isPrevMonth || cDay.isNextMonth
                return (
                  <div
                    key={idx}
                    className={`flex min-h-[90px] flex-col justify-between rounded-lg border p-1.5 transition-colors sm:min-h-[105px] ${
                      cDay.isToday
                        ? 'border-[#0F766E] bg-[#F0FBF9] shadow-xs'
                        : isMuted
                        ? 'border-[#E3F0F8]/60 bg-[#F8FAFC]/60 text-[#94A3B8]'
                        : cDay.isConflict
                        ? 'border-[#FECACA] bg-[#FEF2F2]'
                        : 'border-[#E3F0F8] bg-white hover:border-[#CBD5E1]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-plusJakartaSans text-xs font-semibold ${
                          cDay.isToday
                            ? 'flex h-5 w-5 items-center justify-center rounded-full bg-[#0F766E] text-white text-[11px]'
                            : isMuted
                            ? 'text-[#94A3B8]'
                            : 'text-[#263238]'
                        }`}
                      >
                        {cDay.day}
                      </span>
                      {cDay.isConflict && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#BA1A1A]" title="Konflik booking" />
                      )}
                    </div>

                    <div className="flex flex-col gap-1 overflow-hidden">
                      {cDay.bookings?.map((b, bIdx) => (
                        <div
                          key={bIdx}
                          className={`truncate rounded px-1.5 py-0.5 font-plusJakartaSans text-[10px] font-semibold leading-tight shadow-2xs ${b.tone}`}
                          title={`${b.car} - ${b.client}`}
                        >
                          {b.car} • {b.client}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Active Rental Highlight Footnote */}
            <div className="mt-2 flex items-center justify-between rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] p-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#0F766E] shadow-2xs">
                  🚗
                </span>
                <div>
                  <p className="font-plusJakartaSans text-xs font-bold text-[#17324D]">
                    Toyota Avanza (L 1234 AB)
                  </p>
                  <p className="font-plusJakartaSans text-[11px] text-[#47607E]">
                    Penyewa: PT Megah Nusantara • 08:00 - 18:00 WIB • Rp 450.000 / hari
                  </p>
                </div>
              </div>
              <StatusBadge status="Aktif Disewa" variant="info" size="sm" />
            </div>
          </div>

          {/* Right Column: Quick Availability Check & Active Bookings List */}
          <div className="flex flex-col gap-6">
            {/* Quick Check Form Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <h3 className="font-plusJakartaSans text-sm font-bold text-[#17324D]">
                    Cek Cepat Ketersediaan
                  </h3>
                </div>
                <span className="rounded-full bg-[#DCFCE7] px-2.5 py-0.5 font-plusJakartaSans text-[10px] font-semibold text-[#15803D]">
                  Instant Check
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <label className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    Tanggal Mulai
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-10-24"
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-1.5 font-plusJakartaSans text-xs text-[#17324D] outline-none focus:border-[#0F766E]"
                  />
                </div>
                <div>
                  <label className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    Tanggal Selesai
                  </label>
                  <input
                    type="date"
                    defaultValue="2026-10-26"
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-1.5 font-plusJakartaSans text-xs text-[#17324D] outline-none focus:border-[#0F766E]"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    Pilih Tipe Kendaraan
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-1.5 font-plusJakartaSans text-xs text-[#17324D] outline-none focus:border-[#0F766E]">
                    <option>MPV (Avanza, Xenia, Ertiga)</option>
                    <option>City Car (Brio, Agya)</option>
                    <option>SUV (Xpander, Rush)</option>
                    <option>Premium (Innova Zenix, Fortuner)</option>
                  </select>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-[#0F766E] py-2.5 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
              >
                Hitung Estimasi &amp; Cek Slot
              </button>
            </div>

            {/* Active Bookings List Card */}
            <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-3">
                <h3 className="font-plusJakartaSans text-sm font-bold text-[#17324D]">
                  Pemesanan Periode Aktif
                </h3>
                <span className="font-plusJakartaSans text-xs font-semibold text-[#0F766E]">
                  {filteredBookings.length} Terdata
                </span>
              </div>

              <div className="flex flex-col divide-y divide-[#E3F0F8]">
                {filteredBookings.map((b) => (
                  <div key={b.id} className="flex items-center justify-between py-3 first:pt-1 last:pb-1">
                    <div className="flex flex-col gap-0.5">
                      <p className="font-plusJakartaSans text-xs font-bold text-[#17324D]">
                        {b.unit}
                      </p>
                      <p className="font-plusJakartaSans text-[11px] text-[#47607E]">
                        Penyewa: {b.client} • {b.period}
                      </p>
                      <p className="font-liberationMono text-xs font-semibold text-[#0F766E]">
                        {b.amount}
                      </p>
                    </div>
                    <StatusBadge status={b.status} variant={b.variant} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
