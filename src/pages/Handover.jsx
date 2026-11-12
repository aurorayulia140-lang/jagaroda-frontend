import { useState } from 'react'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Handover() {
  const [activePeriod, setActivePeriod] = useState('today')
  const [searchQuery, setSearchQuery] = useState('')
  const [scheduleType, setScheduleType] = useState('all')
  const [pickupCompleted, setPickupCompleted] = useState(false)
  const [returnCompleted, setReturnCompleted] = useState(false)
  const [inspectionOpen, setInspectionOpen] = useState(false)
  const [inspectionItems, setInspectionItems] = useState({
    exterior: false,
    fuel: false,
    documents: false,
  })
  const [inspectionSaved, setInspectionSaved] = useState(false)

  function matchesSchedule(type, vehicleDetails) {
    const matchesType = scheduleType === 'all' || scheduleType === type
    const matchesSearch = vehicleDetails.toLowerCase().includes(searchQuery.trim().toLowerCase())
    return matchesType && matchesSearch
  }

  const hasMatchingTodaySchedule = [
    matchesSchedule('pickup', 'Honda Brio Satya E L 2345 BC Dimas Saputra'),
    matchesSchedule('pickup', 'Toyota Avanza 1.3 G L 1234 AB Bpk. Bambang Sujatmiko'),
    matchesSchedule('pickup', 'Suzuki Ertiga Hybrid L 6789 FG PT Nusa Mandiri Logistik'),
    matchesSchedule('return', 'Daihatsu Xenia 1.3 R Rendy Kurniawan L 9012 EF'),
    matchesSchedule('return', 'Toyota Innova Zenix L 1122 ZZ Hendra Gunawan'),
    matchesSchedule('return', 'Honda Mobilio E CVT B 5678 EF Ibu Ratna Dewi'),
  ].some(Boolean)

  function closeInspection() {
    setInspectionOpen(false)
    setInspectionSaved(false)
    setInspectionItems({ exterior: false, fuel: false, documents: false })
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      {/* 1. Shared Unified Top Header */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari plat nomor, unit, penyewa..."
        greeting="Jadwal Handover"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
      />

      {/* Main Container */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Page Heading & Period Toolbar */}
        <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-end">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                Operasional Rental
              </span>
              <span className="text-[#94A3B8]">/</span>
              <span className="font-plusJakartaSans text-xs font-semibold text-[#0F766E]">
                Handover &amp; Dispatch
              </span>
            </div>
            <h2 className="font-plusJakartaSans text-2xl font-bold leading-tight text-[#111D23] sm:text-[26px]">
              Pengingat Pengambilan &amp; Pengembalian Armada
            </h2>
            <p className="max-w-2xl font-plusJakartaSans text-xs text-[#47607E] sm:text-sm">
              Jadwal serah terima kunci dan pengembalian unit hari ini. Pastikan ketepatan waktu serta
              kelengkapan inspeksi fisik saat checkout dan checkin.
            </p>
          </div>

          {/* Period Tabs & Dropdown Filter */}
          <div className="flex w-full flex-wrap items-center gap-2.5 rounded-xl border border-[#DDEAF2] bg-white p-2 shadow-xs sm:w-auto">
            {/* Tabs */}
            <div className="flex items-center gap-1 rounded-lg bg-[#E9F6FD] p-1">
              <button
                type="button"
                data-interaction-handled="true"
                aria-pressed={activePeriod === 'today'}
                onClick={() => setActivePeriod('today')}
                className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all sm:text-[13px] ${activePeriod === 'today'
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                  }`}
              >
                {activePeriod === 'today' && (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#9CF2E8]" />
                )}
                Hari Ini (24 Okt)
              </button>
              <button
                type="button"
                data-interaction-handled="true"
                aria-pressed={activePeriod === 'tomorrow'}
                onClick={() => setActivePeriod('tomorrow')}
                className={`rounded-md px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all sm:text-[13px] ${activePeriod === 'tomorrow'
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                  }`}
              >
                Besok
              </button>
              <button
                type="button"
                data-interaction-handled="true"
                aria-pressed={activePeriod === 'history'}
                onClick={() => setActivePeriod('history')}
                className={`rounded-md px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all sm:text-[13px] ${activePeriod === 'history'
                    ? 'bg-[#0F766E] text-white shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                  }`}
              >
                Riwayat 7 Hari
              </button>
            </div>

            {/* Separator */}
            <span className="hidden h-6 w-px bg-[#DDEAF2] sm:block" />

            {/* Schedule Type Filter */}
            <div className="flex items-center">
              <select
                aria-label="Filter jenis jadwal"
                className="cursor-pointer rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-1.5 font-plusJakartaSans text-xs font-semibold text-[#263238] transition-colors hover:bg-white focus:border-[#0F766E] focus:outline-none sm:text-[13px]"
                onChange={(event) => setScheduleType(event.target.value)}
                value={scheduleType}
              >
                <option value="all">Semua Jadwal</option>
                <option value="pickup">Pengambilan (Pick-up)</option>
                <option value="return">Pengembalian (Drop-off)</option>
              </select>
            </div>
          </div>
        </div>

        {/* 4 Metric Summary Cards */}
        {activePeriod === 'today' && (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Pengambilan */}
            <div className="flex flex-col justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Pengambilan Hari Ini
                  </p>
                  <p className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
                    4 <span className="text-sm font-normal text-[#6E7977]">Unit</span>
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#0F766E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="7" cy="12" r="3" />
                    <path d="M10 12h11" />
                    <path d="M17 12v3" />
                    <path d="M20 12v2" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="rounded bg-[#E3F0F8] px-2 py-0.5 font-semibold text-[#0F766E]">2 Selesai</span>
                <span className="text-[#94A3B8]">•</span>
                <span className="text-[#47607E]">1 Menunggu</span>
                <span className="text-[#94A3B8]">•</span>
                <span className="font-semibold text-[#B45309]">1 Segera</span>
              </div>
            </div>

            {/* Card 2: Pengembalian */}
            <div className="flex flex-col justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Pengembalian Hari Ini
                  </p>
                  <p className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
                    3 <span className="text-sm font-normal text-[#6E7977]">Unit</span>
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#47607E]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 10.8 2 11 2 11.2V16c0 .6.4 1 1 1h2" />
                    <circle cx="7" cy="17" r="2" />
                    <path d="M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs">
                <span className="rounded bg-[#E3F0F8] px-2 py-0.5 font-semibold text-[#0F766E]">1 Selesai</span>
                <span className="text-[#94A3B8]">•</span>
                <span className="font-semibold text-[#BA1A1A]">1 Terlambat</span>
                <span className="text-[#94A3B8]">•</span>
                <span className="text-[#47607E]">1 Menunggu</span>
              </div>
            </div>

            {/* Card 3: Keterlambatan */}
            <div className="flex flex-col justify-between rounded-xl border border-[#FFDAD6] bg-white p-5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-plusJakartaSans text-xs font-semibold text-[#BA1A1A]">
                    Keterlambatan Return
                  </p>
                  <p className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#BA1A1A] sm:text-3xl">
                    1 <span className="text-sm font-normal text-[#BA1A1A]/80">Kasus</span>
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FFDAD6]/60 text-[#BA1A1A]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="truncate font-medium text-[#BA1A1A]">Daihatsu Xenia (L 9012 EF)</span>
                <span className="shrink-0 font-semibold text-[#BA1A1A] underline cursor-pointer">Pantau GPS</span>
              </div>
            </div>

            {/* Card 4: Ketepatan Waktu */}
            <div className="flex flex-col justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Ketepatan Waktu Handover
                  </p>
                  <p className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
                    92.5%
                  </p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#15803D]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#15803D]">+3.2% vs minggu lalu</span>
                <span className="text-[#6E7977]">Target min. 90%</span>
              </div>
            </div>
          </div>
        )}

        {/* Not Today Content Fallback */}
        {activePeriod !== 'today' && (
          <div className="w-full rounded-2xl border border-[#DDEAF2] bg-white p-12 text-center shadow-xs">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E9F6FD] text-[#0F766E]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="mt-4 font-plusJakartaSans text-base font-bold text-[#263238]">
              {activePeriod === 'tomorrow'
                ? 'Belum ada jadwal pengambilan atau pengembalian untuk besok.'
                : 'Belum ada riwayat handover dalam 7 hari terakhir.'}
            </h3>
            <p className="mt-1 font-plusJakartaSans text-sm text-[#47607E]">
              Data jadwal pada halaman ini merupakan simulasi operasional rental armada aktif.
            </p>
          </div>
        )}

        {/* 2-Column Schedule Section (Desktop Proportional) */}
        {activePeriod === 'today' && (
          <div className="w-full">
            {!hasMatchingTodaySchedule ? (
              <div className="w-full rounded-2xl border border-[#DDEAF2] bg-white p-8 text-center">
                <p className="font-plusJakartaSans text-sm font-medium text-[#47607E]">
                  Tidak ada jadwal yang cocok dengan kata kunci &quot;{searchQuery}&quot; atau filter yang dipilih.
                </p>
              </div>
            ) : (
              <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2">
                {/* ============================================================== */}
                {/* KOLOM 1: PENGAMBILAN HARI INI (PICK-UP) */}
                {/* ============================================================== */}
                <section
                  className="flex flex-col gap-4"
                  aria-labelledby="pickup-section-title"
                >
                  {/* Section Title */}
                  <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
                      <h3
                        id="pickup-section-title"
                        className="font-plusJakartaSans text-lg font-bold text-[#111D23]"
                      >
                        Pengambilan Hari Ini (Pick-up)
                      </h3>
                      <span className="rounded-full bg-[#E3F0F8] px-2.5 py-0.5 font-plusJakartaSans text-xs font-semibold text-[#0F766E]">
                        3 Unit
                      </span>
                    </div>
                    <span className="font-plusJakartaSans text-xs text-[#6E7977]">
                      Urut: Waktu Terdekat
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Unit 1: Honda Brio Satya E */}
                    {matchesSchedule('pickup', 'Honda Brio Satya E L 2345 BC Dimas Saputra') && (
                      <article className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axubcwklhf2d3saba5rilpzxtn3xscuh8z3hrznhhb5hhvttnkcvx1lw6gy8zur9fvyavp85syjgvnm36nwy88ylrz2uooq7hyc5by64lllisbbmmlcqswwf9sxysgpaqjsar8h3wp_mqp02dcfo4p3d3kqsnhb5nuecsaggbdhhfmtmuwerv58wccpoxyiazg7ntvp8_a14zislfq2nlyyn4ekei5uegpwpfbe2dz83uk0uop9v5tgezg.png"
                              alt="Honda Brio Satya E"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#E3F0F8] bg-[#E9F6FD] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Honda Brio Satya E
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#111D23]">
                                L 2345 BC
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge */}
                          <StatusBadge status="warning" label="Akan Segera Berlangsung" size="sm" />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6E7977]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">Dimas Saputra</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <div className="flex items-center gap-1 font-liberationMono text-[#47607E]">
                            <span>0812-3456-7890</span>
                          </div>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#B45309]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#263238]">
                            10:30 WIB <span className="font-semibold text-[#B45309]">(45 Menit Lagi)</span>
                          </span>
                        </div>

                        {/* 6. Lokasi Kendaraan */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0F766E]">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-[#3E4947]">Pool Rungkut Surabaya</span>
                        </div>

                        {/* 7. Informasi Inspeksi dan Kondisi */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#DCFCE7] px-2.5 py-1 text-xs font-medium text-[#15803D]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Bahan Bakar 100% &amp; Cuci Bersih
                          </span>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            data-interaction-handled="true"
                            aria-pressed={pickupCompleted}
                            onClick={() => setPickupCompleted((prev) => !prev)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {pickupCompleted ? 'Pengambilan Terkonfirmasi' : 'Tandai Sudah Diambil'}
                          </button>
                          <button
                            type="button"
                            data-interaction-handled="true"
                            onClick={() => setInspectionOpen(true)}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#111D23] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                              <line x1="16" y1="13" x2="8" y2="13" />
                              <line x1="16" y1="17" x2="8" y2="17" />
                              <polyline points="10 9 9 9 8 9" />
                            </svg>
                            Inspeksi Keluar
                          </button>
                          <a
                            href="tel:081234567890"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-white px-3 py-2 font-plusJakartaSans text-xs font-semibold text-[#47607E] transition-colors hover:bg-[#F8FAFC] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Hubungi Penyewa
                          </a>
                        </div>
                      </article>
                    )}

                    {/* Unit 2: Toyota Avanza 1.3 G */}
                    {matchesSchedule('pickup', 'Toyota Avanza 1.3 G L 1234 AB Bpk. Bambang Sujatmiko') && (
                      <article className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axubgt84ocmdvbdruxfbgtkf5uekjuecpiebcxuxsetfoywbqim2mp9z_xagh47zodec1lv8izoji7tjtt3jkmxwch4efhwu61pyndlbsiv1sava7ucjb27mx8qve5hezy3jvtoz8oql3kcov4nvjefqhi77phq69eueraciusmssnjz0w0mu0low1ijblarvemm1arj8hrpslycd5cnhuhwgz07rjwuq6nsqe74xrc5cvxst0cfqzg.png"
                              alt="Toyota Avanza 1.3 G"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#E3F0F8] bg-[#E9F6FD] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Toyota Avanza 1.3 G
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#111D23]">
                                L 1234 AB
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge */}
                          <StatusBadge status="success" label="Selesai Diambil (08:05 WIB)" size="sm" />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6E7977]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">Bpk. Bambang Sujatmiko</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <div className="flex items-center gap-1 font-liberationMono text-[#47607E]">
                            <span>0811-2233-4455</span>
                          </div>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#15803D]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#263238]">
                            Jadwal: 08:00 WIB • <span className="font-semibold text-[#15803D]">Tepat Waktu</span>
                          </span>
                        </div>

                        {/* 6. Lokasi Kendaraan */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0F766E]">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-[#3E4947]">
                            Pool Rungkut • Staf: Wahyu (Ops Shift Pagi)
                          </span>
                        </div>

                        {/* 7. Informasi Inspeksi dan Kondisi */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#E3F0F8] px-2.5 py-1 text-xs font-medium text-[#0F766E]">
                            KTP &amp; SIM Terverifikasi
                          </span>
                          <span className="inline-flex items-center rounded-md border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#64748B]">
                            No. Kontrak: #JKR-2410-098
                          </span>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#0F766E] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            Lihat Berita Acara
                          </button>
                        </div>
                      </article>
                    )}

                    {/* Unit 3: Suzuki Ertiga Hybrid */}
                    {matchesSchedule('pickup', 'Suzuki Ertiga Hybrid L 6789 FG PT Nusa Mandiri Logistik') && (
                      <article className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axuacuow4yulmefkmkdg_buaywst_gyb4t6grgkof1cvqa7ddqu8fvlyiji1kb4cgishsmaegr8orlc1qrpmnrm3wbek0wvwetw4sfvft_zhlm0dklqghsyawbjjmdc8avacslyp0hn8uvdf8nkhbi1tskhb4kzab5qrvwvybanl8f2ncj2je7iajqr5gkgbvr30b4q8h3snfffuumjs8qudj7tkorhu5eudtoy75hipngriu3yea4ha.png"
                              alt="Suzuki Ertiga Hybrid"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#E3F0F8] bg-[#E9F6FD] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Suzuki Ertiga Hybrid
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#111D23]">
                                L 6789 FG
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge */}
                          <StatusBadge
                            status={pickupCompleted ? 'success' : 'info'}
                            label={pickupCompleted ? 'Pengambilan Dikonfirmasi' : 'Menunggu Pengambilan'}
                            size="sm"
                          />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6E7977]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">PT Nusa Mandiri Logistik</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <div className="flex items-center gap-1 font-liberationMono text-[#47607E]">
                            <span>0813-8899-0011</span>
                          </div>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0369A1]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#263238]">
                            16:00 WIB <span className="text-[#64748B]">(Sore Ini)</span>
                          </span>
                        </div>

                        {/* 6. Lokasi Kendaraan */}
                        <div className="flex flex-col gap-1 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-3 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-2">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0F766E]">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="font-medium text-[#263238]">
                              Dropzone Terminal 1 Bandara Juanda (Pick-up Langsung)
                            </span>
                          </div>
                          <div className="mt-1 flex items-center gap-2 pl-6 text-xs text-[#64748B]">
                            <span className="rounded bg-[#E2E8F0] px-2 py-0.5 font-medium text-[#334155]">
                              Driver Dispatch: Mas Joko
                            </span>
                          </div>
                        </div>

                        {/* 7. Informasi Inspeksi dan Kondisi */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 rounded-md bg-[#DCFCE7] px-2.5 py-1 text-xs font-medium text-[#15803D]">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            Unit siap di terminal
                          </span>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#0F766E] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Chat Driver
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:text-[13px]"
                          >
                            Proses Handover
                          </button>
                        </div>
                      </article>
                    )}
                  </div>
                </section>

                {/* ============================================================== */}
                {/* KOLOM 2: PENGEMBALIAN HARI INI (DROP-OFF / RETURN) */}
                {/* ============================================================== */}
                <section
                  className="flex flex-col gap-4"
                  aria-labelledby="return-section-title"
                >
                  {/* Section Title */}
                  <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-2">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#47607E]" />
                      <h3
                        id="return-section-title"
                        className="font-plusJakartaSans text-lg font-bold text-[#111D23]"
                      >
                        Pengembalian Hari Ini (Drop-off / Return)
                      </h3>
                      <span className="rounded-full bg-[#E3F0F8] px-2.5 py-0.5 font-plusJakartaSans text-xs font-semibold text-[#47607E]">
                        3 Unit
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 font-plusJakartaSans text-xs font-semibold text-[#BA1A1A]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#BA1A1A]" />
                      1 Memerlukan Perhatian
                    </span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Unit 1: Daihatsu Xenia 1.3 R (OVERDUE CASE) */}
                    {matchesSchedule('return', 'Daihatsu Xenia 1.3 R Rendy Kurniawan L 9012 EF') && (
                      <article className="flex flex-col gap-4 rounded-xl border-2 border-[#FECACA] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axudjmnx2hksvcq5xjquefazfkppnlorkyyhh_nvphoacnwwfogbxxx3s0almde41qx7kdupe_aazcsfnsugwssj4bo4fuysubspugokczhonbsy9dw_vzifxqk1fq04ptafcqtp8__fg4mo6rngca2vcip6til1xpsebk2ltqoxwa8suxek2yjiv6qtaow4k_tdcascx4xve5wqty8lylszexhqb0h9khvnhtr2pvwtfnaazrcehq.png"
                              alt="Daihatsu Xenia 1.3 R"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#FECACA] bg-[#FEF2F2] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Daihatsu Xenia 1.3 R
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#FEE2E2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#991B1B]">
                                L 9012 EF
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge: Terlambat */}
                          <StatusBadge status="danger" label="Terlambat 1j 45m" size="sm" />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#FEE2E2] bg-[#FFF5F5] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#DC2626]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">Rendy Kurniawan</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <div className="flex items-center gap-1 font-liberationMono text-[#47607E]">
                            <span>0817-5544-3322</span>
                          </div>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#DC2626]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#DC2626]">
                            Jadwal Janji: 09:00 WIB • Pool Gubeng
                          </span>
                        </div>

                        {/* 6. Lokasi & Telematika GPS Live */}
                        <div className="flex flex-col gap-2 rounded-lg border border-[#FECACA] bg-[#FEF2F2] p-3 text-xs">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 font-plusJakartaSans font-bold text-[#991B1B]">
                              <span className="h-2 w-2 animate-ping rounded-full bg-[#DC2626]" />
                              LIVE TELEMATIKA GPS JAGARODA
                            </span>
                            <span className="rounded bg-white px-2 py-0.5 font-liberationMono text-[11px] font-bold text-[#DC2626]">
                              Kecepatan: 40 km/jam
                            </span>
                          </div>
                          <p className="font-plusJakartaSans text-xs leading-relaxed text-[#7F1D1D]">
                            Terdeteksi di Jl. Ahmad Yani (Surabaya Selatan), mengarah ke utara menuju Pool Gubeng.
                            Estimasi tiba: <strong className="font-bold">11:05 WIB (±20 Menit)</strong>.
                          </p>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-[#FCA5A5]">
                            <div className="h-full rounded-full bg-[#DC2626]" style={{ width: '78%' }} />
                          </div>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            data-interaction-handled="true"
                            aria-pressed={returnCompleted}
                            onClick={() => setReturnCompleted((prev) => !prev)}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            {returnCompleted ? 'Pengembalian Terkonfirmasi' : 'Tandai Sudah Kembali'}
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#FECACA] bg-[#FEE2E2] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#991B1B] transition-colors hover:bg-[#FECACA] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                            Denda Keterlambatan
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#BBF7D0] bg-[#DCFCE7] px-3 py-2 font-plusJakartaSans text-xs font-semibold text-[#15803D] transition-colors hover:bg-[#BBF7D0] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            Kirim WA Pengingat
                          </button>
                        </div>
                      </article>
                    )}

                    {/* Unit 2: Toyota Innova Zenix */}
                    {matchesSchedule('return', 'Toyota Innova Zenix L 1122 ZZ Hendra Gunawan') && (
                      <article className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axuafzfe53axtr0cs9bngcv_elpyh0tqt1wc7oaw1duqsqxvqqmmsbx8lusyd2fw6ds6gb9o0agrhvubxyuyarbju37qvfrdolksws5o3l3ktpjdbcmcvagqsy4v8x7xz26c1yeglfhnxzz6ltevsc1bgejujajpumzg6udx8hz3kytsb3q2ezxhpk0uc8i9glsx0eiklhtcot7u6dxdmd4yqlqblgo80ofpb3hr2nvuxwnzld5lv7uua.png"
                              alt="Toyota Innova Zenix"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#E3F0F8] bg-[#E9F6FD] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Toyota Innova Zenix
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#111D23]">
                                L 1122 ZZ
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge */}
                          <StatusBadge
                            status={returnCompleted ? 'success' : 'info'}
                            label={returnCompleted ? 'Pengembalian Dikonfirmasi' : 'Menunggu Pengembalian'}
                            size="sm"
                          />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6E7977]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">Hendra Gunawan</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <div className="flex items-center gap-1 font-liberationMono text-[#47607E]">
                            <span>0812-8877-6655</span>
                          </div>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0369A1]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#263238]">
                            15:00 WIB <span className="text-[#64748B]">(Pool Jemursari)</span>
                          </span>
                        </div>

                        {/* 6. Lokasi Kendaraan */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0F766E]">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-[#3E4947]">Pool Jemursari Surabaya</span>
                        </div>

                        {/* 7. Informasi Inspeksi dan Kondisi */}
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#E3F0F8] px-2.5 py-1 text-xs font-medium text-[#0F766E]">
                            BBM Min. 75% (Awal: 100%)
                          </span>
                          <span className="inline-flex items-center rounded-md border border-[#E2E8F0] bg-white px-2.5 py-1 text-xs font-medium text-[#64748B]">
                            Deposit: Rp 500.000 (Ditahan)
                          </span>
                          <span className="inline-flex items-center rounded-md bg-[#F1F5F9] px-2 py-0.5 text-[11px] text-[#475569]">
                            Paket 3 Hari: Sby - Malang
                          </span>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#111D23] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="m9 11 3 3L22 4" />
                              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            Siapkan Checklist Masuk
                          </button>
                        </div>
                      </article>
                    )}

                    {/* Unit 3: Honda Mobilio E CVT */}
                    {matchesSchedule('return', 'Honda Mobilio E CVT B 5678 EF Ibu Ratna Dewi') && (
                      <article className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs transition-shadow hover:shadow-md">
                        {/* 1. Nama Kendaraan, 2. Plat, 4. Status */}
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <img
                              src="/Ab6axuctw4yr1c4fixmlicpevkbauoottq_hsji2seqxoxwpi5kgkfv95f8mxqvyl8zpzljqpanlyjkgahuqhfeuxspzvxsmcfgekyxsslsfy6qaijjfxnt5pisyej6oc90z6nnfg1dwtilz8jzyloto7yowcezimmmf0ecwsiu6gblvjzigwscgoczqtswbziq44bs8rqe2ejtuxtr48q1_dogu_xgic_cbe3p_kw2kfsokmacolfulnga.png"
                              alt="Honda Mobilio E CVT"
                              className="h-14 w-14 shrink-0 rounded-lg border border-[#E3F0F8] bg-[#E9F6FD] object-cover"
                            />
                            <div className="flex min-w-0 flex-col">
                              <h4 className="truncate font-plusJakartaSans text-base font-bold text-[#263238]">
                                Honda Mobilio E CVT
                              </h4>
                              <span className="mt-0.5 inline-flex w-fit items-center rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-xs font-bold tracking-wider text-[#111D23]">
                                B 5678 EF
                              </span>
                            </div>
                          </div>
                          {/* 4. Status Badge */}
                          <StatusBadge status="success" label="Kembali Tepat Waktu" size="sm" />
                        </div>

                        {/* 3. Penyewa & Nomor Telepon */}
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 rounded-lg border border-[#EEF2F6] bg-[#F8FAFC] px-3.5 py-2.5 text-xs sm:text-[13px]">
                          <div className="flex items-center gap-1.5 font-medium text-[#263238]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6E7977]">
                              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span className="font-semibold text-[#111D23]">Ibu Ratna Dewi</span>
                          </div>
                          <span className="text-[#CBD5E1]">•</span>
                          <span className="font-medium text-[#15803D]">Selesai Checkout</span>
                        </div>

                        {/* 5. Jadwal & Estimasi Waktu */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#15803D]">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                          <span className="font-medium text-[#263238]">
                            Jam Kembali: 07:45 WIB
                          </span>
                        </div>

                        {/* 6. Lokasi Kendaraan */}
                        <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#47607E]">
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-[#0F766E]">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span className="text-[#3E4947]">
                            Inspektor: Aris S. • Pool Rungkut
                          </span>
                        </div>

                        {/* 7. Informasi Inspeksi dan Kondisi */}
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#DCFCE7] px-2.5 py-1 text-xs font-medium text-[#15803D]">
                            Bensin Penuh (100%)
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#DCFCE7] px-2.5 py-1 text-xs font-medium text-[#15803D]">
                            Body Mulus / Tanpa Baret
                          </span>
                          <span className="inline-flex items-center gap-1 rounded-md bg-[#E3F0F8] px-2.5 py-1 text-xs font-medium text-[#0F766E]">
                            Deposit Dikembalikan
                          </span>
                        </div>

                        {/* 8. Tombol Tindakan */}
                        <div className="flex flex-wrap items-center gap-2 border-t border-[#F1F5F9] pt-3">
                          <button
                            type="button"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] px-3.5 py-2 font-plusJakartaSans text-xs font-semibold text-[#47607E] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
                          >
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                            Ringkasan Pengembalian
                          </button>
                        </div>
                      </article>
                    )}
                  </div>
                </section>
              </div>
            )}
          </div>
        )}

        {/* SOP Footer Banner */}
        <section
          aria-label="Standar operasional handover"
          className="flex w-full flex-col items-start justify-between gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs lg:flex-row lg:items-center"
        >
          <div className="flex items-start gap-3.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F766E] text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </div>
            <div className="flex flex-col gap-0.5">
              <h4 className="font-plusJakartaSans text-base font-bold text-[#263238]">
                Standar Operasional Handover Jagaroda
              </h4>
              <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-sm">
                Wajib ambil foto 4 sisi kendaraan (depan, belakang, sisi kanan &amp; kiri), indikator speedometer, serta
                catat level BBM digital sebelum tanda tangan Berita Acara.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center gap-2.5">
            <button
              type="button"
              className="rounded-lg border border-[#DDEAF2] bg-[#E3F0F8] px-4 py-2 font-plusJakartaSans text-xs font-semibold text-[#47607E] transition-colors hover:bg-[#DDEAF2] sm:text-[13px]"
            >
              Unduh Template SOP (.PDF)
            </button>
            <button
              type="button"
              onClick={() => setInspectionOpen(true)}
              className="rounded-lg bg-[#0F766E] px-4 py-2 font-plusJakartaSans text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E] sm:text-[13px]"
            >
              Mulai Inspeksi Baru
            </button>
          </div>
        </section>
      </div>

      {/* Modal Dialog Inspeksi */}
      {inspectionOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#17324D]/50 p-4 backdrop-blur-xs"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeInspection()
          }}
        >
          <section
            aria-labelledby="handover-inspection-title"
            aria-modal="true"
            className="w-full max-w-lg rounded-2xl border border-[#DDEAF2] bg-white p-6 shadow-2xl"
            role="dialog"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 id="handover-inspection-title" className="font-plusJakartaSans text-lg font-bold text-[#17324D]">
                  Inspeksi Keluar Kendaraan
                </h3>
                <p className="mt-1 font-plusJakartaSans text-xs leading-5 text-[#47607E] sm:text-sm">
                  Tandai pemeriksaan fisik dan kelengkapan dokumen yang sudah dilakukan sebelum serah terima.
                </p>
              </div>
              <button
                aria-label="Tutup inspeksi"
                className="rounded-lg p-1.5 font-plusJakartaSans text-xl leading-none text-[#47607E] hover:bg-[#E9F6FD]"
                data-interaction-handled="true"
                onClick={closeInspection}
                type="button"
              >
                ✕
              </button>
            </div>

            {inspectionSaved ? (
              <div className="mt-5 rounded-lg border border-[#BBF7D0] bg-[#F0FBF9] p-4 font-plusJakartaSans text-sm text-[#0F625C]">
                <p className="font-semibold">✓ Pemeriksaan berhasil disimpan!</p>
                <p className="mt-1 text-xs text-[#0F625C]/90">
                  Data checklist tercatat untuk sesi operasional ini.
                </p>
                <button
                  type="button"
                  onClick={closeInspection}
                  className="mt-4 rounded-lg bg-[#0F766E] px-4 py-1.5 text-xs font-semibold text-white"
                >
                  Selesai
                </button>
              </div>
            ) : (
              <form
                className="mt-5 space-y-3"
                onSubmit={(event) => {
                  event.preventDefault()
                  setInspectionSaved(true)
                }}
              >
                {[
                  ['exterior', 'Foto dan kondisi fisik 4 sisi kendaraan (baret, penyok)'],
                  ['fuel', 'Level indikator BBM digital dan angka odometer terkini'],
                  ['documents', 'Kelengkapan dokumen (STNK asli, polis asuransi, kunci cadangan)'],
                ].map(([key, label]) => (
                  <label
                    key={key}
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] p-3 transition-colors hover:bg-white"
                  >
                    <input
                      checked={inspectionItems[key]}
                      onChange={(event) =>
                        setInspectionItems((current) => ({ ...current, [key]: event.target.checked }))
                      }
                      required
                      type="checkbox"
                      className="mt-0.5 h-4 w-4 rounded border-[#CBD5E1] text-[#0F766E] focus:ring-[#0F766E]"
                    />
                    <span className="font-plusJakartaSans text-xs font-medium text-[#263238] sm:text-sm">
                      {label}
                    </span>
                  </label>
                ))}
                <div className="mt-5 flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={closeInspection}
                    className="rounded-lg border border-[#DDEAF2] px-4 py-2 font-plusJakartaSans text-xs font-semibold text-[#47607E] hover:bg-[#F8FAFC] sm:text-sm"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    data-interaction-handled="true"
                    className="rounded-lg bg-[#0F766E] px-4 py-2 font-plusJakartaSans text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E] sm:text-sm"
                  >
                    Simpan Inspeksi
                  </button>
                </div>
              </form>
            )}
          </section>
        </div>
      )}
    </div>
  )
}
