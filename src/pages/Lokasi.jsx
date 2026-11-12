import { useState } from 'react'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Lokasi() {
  const [locationFilter, setLocationFilter] = useState('all') // 'all' | 'moving' | 'parked'
  const [searchQuery, setSearchQuery] = useState('')
  const [isUpdating, setIsUpdating] = useState(false)
  const [selectedPin, setSelectedPin] = useState('brio') // 'brio' | 'ertiga' | 'innova' | 'garage'

  const vehicles = [
    {
      id: 'brio',
      name: 'Honda Brio Satya E',
      plate: 'L 2345 BC',
      type: 'Compact City',
      status: 'Bergerak • 35 km/h',
      statusVariant: 'success',
      isMoving: true,
      driver: 'Ahmad Faisal (Penyewa)',
      location: 'Jl. Raya Darmo No. 82, Surabaya Pusat',
      speed: '35 km/h',
      fuel: '65% Tangki',
      updated: '1 menit yang lalu',
      pinPos: { left: '38%', top: '44%' },
    },
    {
      id: 'ertiga',
      name: 'Suzuki Ertiga Hybrid',
      plate: 'L 6789 FG',
      type: 'MPV Keluarga',
      status: 'Bergerak • 65 km/h',
      statusVariant: 'info',
      isMoving: true,
      driver: 'Bpk. Bambang (Driver)',
      location: 'Tol Waru - Juanda KM 12, Sidoarjo',
      speed: '65 km/h',
      fuel: '85% Tangki',
      updated: '2 menit yang lalu',
      pinPos: { left: '26%', top: '24%' },
    },
    {
      id: 'innova',
      name: 'Toyota Innova Zenix',
      plate: 'L 1122 ZZ',
      type: 'Premium MPV',
      status: 'Parkir Standby',
      statusVariant: 'neutral',
      isMoving: false,
      driver: 'Standby Unit',
      location: 'Pool Gubeng Surabaya',
      speed: '0 km/h',
      fuel: '90% Tangki',
      updated: 'Baru saja',
      pinPos: { left: '72%', top: '68%' },
    },
    {
      id: 'avanza',
      name: 'Toyota Avanza 1.3 G',
      plate: 'L 1234 AB',
      type: 'MPV 7-Seater',
      status: 'Garasi Utama',
      statusVariant: 'success',
      isMoving: false,
      driver: 'Standby Garasi',
      location: 'Pool Barat Surabaya',
      speed: '0 km/h',
      fuel: '100% Tangki',
      updated: '5 menit yang lalu',
      pinPos: { left: '46%', top: '58%' },
    },
  ]

  const filteredVehicles = vehicles.filter((v) => {
    const matchesFilter =
      locationFilter === 'all' ||
      (locationFilter === 'moving' && v.isMoving) ||
      (locationFilter === 'parked' && !v.isMoving)

    const q = searchQuery.toLowerCase().trim()
    const matchesSearch =
      v.name.toLowerCase().includes(q) ||
      v.plate.toLowerCase().includes(q) ||
      v.location.toLowerCase().includes(q)

    return matchesFilter && matchesSearch
  })

  const activeVehicle = vehicles.find((v) => v.id === selectedPin) || vehicles[0]

  const handleRefresh = () => {
    setIsUpdating(true)
    setTimeout(() => setIsUpdating(false), 800)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari plat nomor, unit, lokasi armada..."
        greeting="Lokasi &amp; GPS Armada"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
        onRefresh={handleRefresh}
        actionText="Tambah Booking"
        actionTo="/pemesanan/baru"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Subheader & Period Toolbar */}
        <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-1.5 text-xs text-[#47607E]">
              <span className="font-plusJakartaSans font-bold uppercase tracking-wider text-[#0F766E]">
                Telematika GPS Terpadu
              </span>
              <span className="text-[#94A3B8]">•</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-0.5 font-semibold text-[#15803D]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#15803D] animate-ping" />
                Live Feed
              </span>
            </div>
            <h2 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-[26px]">
              Lokasi Armada &amp; Pelacakan Real-Time
            </h2>
            <p className="max-w-2xl font-plusJakartaSans text-xs text-[#47607E] sm:text-sm">
              Pelacakan GPS aktif dan riwayat posisi armada rental untuk memastikan keamanan kendaraan serta ketepatan rute.
            </p>
          </div>

          {/* Filter Pills & Refresh */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1 rounded-xl border border-[#DDEAF2] bg-[#E9F6FD] p-1 shadow-2xs">
              <button
                type="button"
                onClick={() => setLocationFilter('all')}
                className={`rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                  locationFilter === 'all'
                    ? 'bg-white text-[#0F766E] shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                }`}
              >
                Semua Kendaraan (12)
              </button>
              <button
                type="button"
                onClick={() => setLocationFilter('moving')}
                className={`rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                  locationFilter === 'moving'
                    ? 'bg-white text-[#0F766E] shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                }`}
              >
                Aktif Bergerak (3)
              </button>
              <button
                type="button"
                onClick={() => setLocationFilter('parked')}
                className={`rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-all ${
                  locationFilter === 'parked'
                    ? 'bg-white text-[#0F766E] shadow-xs'
                    : 'text-[#47607E] hover:text-[#0F766E]'
                }`}
              >
                Parkir di Garasi (7)
              </button>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-white px-3.5 font-plusJakartaSans text-xs font-semibold text-[#17324D] shadow-xs transition-colors hover:bg-[#F8FAFC]"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={isUpdating ? 'animate-spin text-[#0F766E]' : ''}
                aria-hidden="true"
              >
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              <span>{isUpdating ? 'Memperbarui...' : 'Perbarui Lokasi'}</span>
            </button>
          </div>
        </div>

        {/* Main Grid: Map on Left, Vehicle List on Right */}
        <div className="grid w-full grid-cols-1 items-start gap-6 xl:grid-cols-[1.4fr_1fr]">
          {/* Left Column: Interactive Map View & Telematics Stat Cards */}
          <div className="flex flex-col gap-6">
            {/* Map Container */}
            <div className="relative h-[480px] w-full overflow-hidden rounded-2xl border border-[#DDEAF2] bg-[#D7E4EC] shadow-xs sm:h-[540px]">
              {/* Map background image with fallback */}
              <img
                src="/Image.png"
                alt="Peta Lokasi Armada Surabaya"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 540"%3E%3Crect width="640" height="540" fill="%23D7E4EC"/%3E%3Cpath d="M0 120 L640 400 M0 380 L640 180" stroke="%23fff" stroke-width="28"/%3E%3C/svg%3E'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 via-transparent to-[#0F172A]/10 pointer-events-none" />

              {/* Map Top Bar Controls */}
              <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-1.5 shadow-sm backdrop-blur-xs">
                  <span className="h-2 w-2 rounded-full bg-[#0F766E]" />
                  <span className="font-plusJakartaSans text-xs font-semibold text-[#111D23]">
                    Surabaya &amp; Sekitarnya
                  </span>
                  <span className="text-[11px] text-[#47607E]">• Akurasi GPS ±3m</span>
                </div>

                <div className="flex items-center gap-1 rounded-lg border border-white/80 bg-white/90 p-1 shadow-sm backdrop-blur-xs">
                  <button type="button" aria-label="Perbesar peta" className="flex h-7 w-7 items-center justify-center rounded font-bold text-[#47607E] hover:bg-[#E9F6FD]">
                    +
                  </button>
                  <button type="button" aria-label="Perkecil peta" className="flex h-7 w-7 items-center justify-center rounded font-bold text-[#47607E] hover:bg-[#E9F6FD]">
                    &minus;
                  </button>
                </div>
              </div>

              {/* Vehicle Pins on the Map */}
              {vehicles.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setSelectedPin(v.id)}
                  style={{ left: v.pinPos.left, top: v.pinPos.top }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 rounded-full p-1.5 shadow-md transition-all ${
                    selectedPin === v.id
                      ? 'scale-110 bg-[#0F766E] text-white ring-4 ring-[#0F766E]/30 z-20'
                      : 'bg-[#17324D] text-white hover:scale-105 z-10'
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-xs">
                    🚗
                  </span>
                  <span className="pr-2 font-plusJakartaSans text-[11px] font-bold whitespace-nowrap">
                    {v.plate}
                  </span>
                </button>
              ))}

              {/* Selected Pin Details Popup Floating in Map */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:w-80 rounded-xl border border-white/80 bg-white/95 p-4 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-plusJakartaSans text-xs font-bold text-[#111D23]">
                      {activeVehicle.name}
                    </span>
                    <span className="font-liberationMono text-[11px] font-semibold text-[#0F766E]">
                      {activeVehicle.plate}
                    </span>
                  </div>
                  <StatusBadge status={activeVehicle.status} variant={activeVehicle.statusVariant} size="sm" />
                </div>

                <div className="mt-2.5 flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between text-[#47607E]">
                    <span>Penyewa / Driver:</span>
                    <span className="font-semibold text-[#111D23]">{activeVehicle.driver}</span>
                  </div>
                  <div className="flex items-center justify-between text-[#47607E]">
                    <span>Kecepatan:</span>
                    <span className="font-semibold text-[#0F766E]">{activeVehicle.speed}</span>
                  </div>
                  <div className="flex items-start justify-between text-[#47607E]">
                    <span>Posisi:</span>
                    <span className="text-right font-medium text-[#111D23] max-w-[170px] truncate">
                      {activeVehicle.location}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-[#E3F0F8] pt-2 text-[11px] text-[#64748B]">
                  <span>{activeVehicle.updated}</span>
                  <span className="font-semibold text-[#0F766E]">{activeVehicle.fuel}</span>
                </div>
              </div>
            </div>

            {/* 3 Telematics Stat Cards */}
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3.5 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#0F766E]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 14 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-plusJakartaSans text-[11px] font-bold uppercase tracking-wider text-[#47607E]">
                    Kecepatan Rata-Rata
                  </p>
                  <p className="font-plusJakartaSans text-xl font-bold text-[#111D23]">
                    48.2 <span className="text-xs font-normal text-[#64748B]">km/h</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#0F766E]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 2v6h6" />
                    <path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
                  </svg>
                </div>
                <div>
                  <p className="font-plusJakartaSans text-[11px] font-bold uppercase tracking-wider text-[#47607E]">
                    Bahan Bakar Rata-Rata
                  </p>
                  <p className="font-plusJakartaSans text-xl font-bold text-[#111D23]">
                    78% <span className="text-xs font-semibold text-[#15803D]">Optimal</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#15803D]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <p className="font-plusJakartaSans text-[11px] font-bold uppercase tracking-wider text-[#47607E]">
                    Geofence Garasi
                  </p>
                  <p className="font-plusJakartaSans text-xl font-bold text-[#15803D]">
                    Aman <span className="text-xs font-normal text-[#64748B]">(0 Pelanggaran)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fleet List */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-3">
              <div>
                <h3 className="font-plusJakartaSans text-base font-bold text-[#111D23]">
                  Daftar Armada Terkini
                </h3>
                <p className="font-plusJakartaSans text-xs text-[#47607E]">
                  Menampilkan {filteredVehicles.length} armada dalam jangkauan radar GPS
                </p>
              </div>
              <span className="font-plusJakartaSans text-[11px] font-medium text-[#64748B]">
                Urut: Waktu Terkini
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {filteredVehicles.map((v) => (
                <div
                  key={v.id}
                  onClick={() => setSelectedPin(v.id)}
                  className={`flex cursor-pointer flex-col gap-2 rounded-xl border p-4 transition-all ${
                    selectedPin === v.id
                      ? 'border-[#0F766E] bg-[#F0FBF9] shadow-xs'
                      : 'border-[#DDEAF2] bg-white hover:border-[#CBD5E1] hover:bg-[#F8FAFC]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-plusJakartaSans text-sm font-bold text-[#111D23]">
                        {v.name}
                      </span>
                      <span className="rounded bg-[#DDEAF2] px-2 py-0.5 font-liberationMono text-[11px] font-semibold text-[#17324D]">
                        {v.plate}
                      </span>
                    </div>
                    <StatusBadge status={v.status} variant={v.statusVariant} size="sm" />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#47607E]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="truncate">{v.location}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#E3F0F8]/60 pt-2 text-[11px] text-[#64748B]">
                    <span>Driver: {v.driver}</span>
                    <span className="font-semibold text-[#0F766E]">{v.fuel}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
