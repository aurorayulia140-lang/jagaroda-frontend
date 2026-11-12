import StatusBadge from '../../components/StatusBadge'

const statistics = [
  { label: 'Total kendaraan', value: '12', note: 'Contoh unit dalam inventaris', color: 'bg-[#E3F0F8] text-[#47607E]' },
  { label: 'Total pemesanan', value: '28', note: 'Contoh pada periode berjalan', color: 'bg-[#DDEAF2] text-[#0F766E]' },
  { label: 'Total pengguna', value: '46', note: 'Angka dummy untuk pratinjau', color: 'bg-[#DCFCE7] text-[#15803D]' },
  { label: 'Pendapatan tercatat', value: 'Rp 42.850.000', note: 'Contoh nilai, bukan transaksi live', color: 'bg-[#FEF3C7] text-[#B45309]' },
]

const bookings = [
  { id: 'BK-2026-001', customer: 'Penyewa contoh A', vehicle: 'Toyota Avanza · L 1234 AB', date: '24 Okt 2026', status: 'Menunggu', tone: 'bg-[#FEF3C7] text-[#8A5A10]' },
  { id: 'BK-2026-002', customer: 'Penyewa contoh B', vehicle: 'Honda Brio · L 5678 CD', date: '25 Okt 2026', status: 'Dikonfirmasi', tone: 'bg-[#DCFCE7] text-[#15803D]' },
  { id: 'BK-2026-003', customer: 'Penyewa contoh C', vehicle: 'Mitsubishi Xpander · B 9012 EF', date: '26 Okt 2026', status: 'Perlu ditinjau', tone: 'bg-[#FFDAD6] text-[#BA1A1A]' },
]

const activity = [
  { title: 'Pemesanan baru dicatat', detail: 'Contoh aktivitas · 10:42' },
  { title: 'Status kendaraan diperbarui', detail: 'Contoh aktivitas · 09:18' },
  { title: 'Jadwal perawatan ditinjau', detail: 'Contoh aktivitas · Kemarin' },
]

const vehicles = [
  { name: 'Toyota Avanza', plate: 'L 1234 AB', status: 'Tersedia', tone: 'text-[#15803D]' },
  { name: 'Honda Brio', plate: 'L 5678 CD', status: 'Disewa', tone: 'text-[#2563EB]' },
  { name: 'Mitsubishi Xpander', plate: 'B 9012 EF', status: 'Maintenance', tone: 'text-[#B45309]' },
]

const weeklyBars = [
  { day: 'Sen', height: 'h-10' },
  { day: 'Sel', height: 'h-14' },
  { day: 'Rab', height: 'h-9' },
  { day: 'Kam', height: 'h-20' },
  { day: 'Jum', height: 'h-16' },
  { day: 'Sab', height: 'h-24' },
  { day: 'Min', height: 'h-12' },
]

function MetricCard({ label, value, note, color }) {
  const iconPath = {
    'Total kendaraan': <><path d="M3 13.5h18l-1.6-5.2a2 2 0 0 0-1.9-1.4H6.5a2 2 0 0 0-1.9 1.4L3 13.5Z" /><path d="M4 13.5v4a1.5 1.5 0 0 0 1.5 1.5H7v-2h10v2h1.5a1.5 1.5 0 0 0 1.5-1.5v-4M7 17h.01M17 17h.01" /></>,
    'Total pemesanan': <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M7 14h3M7 17h6" /></>,
    'Total pengguna': <><circle cx="9" cy="8" r="3" /><path d="M3 20v-1a6 6 0 0 1 12 0v1M16 5.5a3 3 0 0 1 0 5.8M18 14a5 5 0 0 1 3 4.6v1" /></>,
    'Pendapatan tercatat': <><path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  }[label]

  return (
    <article className="min-w-0 rounded-xl border border-[#DDEAF2] bg-white p-5">
      <div className="flex items-start justify-between gap-3">
        <p className="font-plusJakartaSans text-sm font-semibold text-[#47607E]">{label}</p>
        <span aria-hidden="true" className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${color}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            {iconPath}
          </svg>
        </span>
      </div>
      <p className="mt-5 break-words font-plusJakartaSans text-2xl font-bold text-[#17324D]">{value}</p>
      <p className="mt-1 font-plusJakartaSans text-xs leading-5 text-[#6E7977]">{note}</p>
    </article>
  )
}

export default function DashboardAdmin() {
  return (
    <div className="mx-auto max-w-[1600px] px-5 py-7 lg:px-8 lg:py-9">
      <section id="admin-summary" className="scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">RINGKASAN SISTEM</p>
            <h1 className="mt-2 font-plusJakartaSans text-2xl font-bold text-[#17324D] sm:text-3xl">Dashboard Admin</h1>
            <p className="mt-2 max-w-2xl font-plusJakartaSans text-sm leading-6 text-[#47607E]">Tinjauan contoh untuk kendaraan, pemesanan, pengguna, dan aktivitas operasional.</p>
          </div>
          <span className="rounded-lg border border-[#F4D6A4] bg-[#FFF8E8] px-3 py-2 font-plusJakartaSans text-xs font-semibold text-[#8A5A10]">DATA DUMMY · BUKAN DATA LIVE</span>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statistics.map((statistic) => <MetricCard key={statistic.label} {...statistic} />)}
        </div>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
        <article className="rounded-xl border border-[#DDEAF2] bg-white p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-plusJakartaSans text-base font-bold text-[#17324D]">Aktivitas pemesanan</h2>
              <p className="mt-1 font-plusJakartaSans text-xs text-[#6E7977]">Visual ringkasan contoh · 7 hari</p>
            </div>
            <span className="rounded-full bg-[#E9F6FD] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#47607E]">Data pratinjau</span>
          </div>
          <div className="mt-6 flex h-36 items-end justify-between gap-2 border-b border-[#DDEAF2] px-1 sm:px-4" role="img" aria-label="Grafik batang contoh aktivitas pemesanan selama tujuh hari">
            {weeklyBars.map((bar, index) => (
              <div key={bar.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className={`w-full max-w-10 rounded-t-md ${bar.height} ${index === 5 ? 'bg-[#0F766E]' : 'bg-[#BFE8E2]'}`} />
                <span className="mb-2 font-plusJakartaSans text-[10px] text-[#6E7977]">{bar.day}</span>
              </div>
            ))}
          </div>
        </article>
        <article id="recent-activity" className="scroll-mt-24 rounded-xl border border-[#DDEAF2] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-plusJakartaSans text-base font-bold text-[#17324D]">Aktivitas terbaru</h2>
            <span className="text-[10px] font-bold tracking-[0.08em] text-[#6E7977]">CONTOH</span>
          </div>
          <ul className="mt-4 divide-y divide-[#E3F0F8]">
            {activity.map((item) => (
              <li key={item.title} className="flex gap-3 py-3 first:pt-1 last:pb-0">
                <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#0F766E]" />
                <div>
                  <p className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">{item.title}</p>
                  <p className="mt-1 font-plusJakartaSans text-xs text-[#6E7977]">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)]">
        <article id="recent-bookings" className="min-w-0 scroll-mt-24 rounded-xl border border-[#DDEAF2] bg-white">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E3F0F8] px-5 py-4 sm:px-6">
            <div>
              <h2 className="font-plusJakartaSans text-base font-bold text-[#17324D]">Pemesanan terbaru</h2>
              <p className="mt-1 font-plusJakartaSans text-xs text-[#6E7977]">Baris contoh, bukan data pelanggan aktual</p>
            </div>
            <span className="rounded-full bg-[#E9F6FD] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#47607E]">3 contoh</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F7FAFC] font-plusJakartaSans text-[11px] font-bold uppercase tracking-[0.06em] text-[#6E7977]">
                  <th className="px-5 py-3 font-semibold sm:px-6">Pemesanan</th>
                  <th className="px-5 py-3 font-semibold">Kendaraan</th>
                  <th className="px-5 py-3 font-semibold">Tanggal</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3F0F8]">
                {bookings.map((booking) => (
                  <tr key={booking.id} className="font-plusJakartaSans text-xs text-[#47607E]">
                    <td className="px-5 py-4 sm:px-6">
                      <p className="font-semibold text-[#17324D]">{booking.id}</p>
                      <p className="mt-1">{booking.customer}</p>
                    </td>
                    <td className="px-5 py-4">{booking.vehicle}</td>
                    <td className="px-5 py-4">{booking.date}</td>
                    <td className="px-5 py-4">
                      <StatusBadge
                        status={booking.status === 'Dikonfirmasi' ? 'success' : booking.status === 'Menunggu' ? 'warning' : 'danger'}
                        label={booking.status}
                        size="sm"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article id="vehicle-status" className="scroll-mt-24 rounded-xl border border-[#DDEAF2] bg-white p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-plusJakartaSans text-base font-bold text-[#17324D]">Status kendaraan</h2>
              <p className="mt-1 font-plusJakartaSans text-xs text-[#6E7977]">Contoh status unit</p>
            </div>
            <span className="rounded-full bg-[#E9F6FD] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#47607E]">Dummy</span>
          </div>
          <ul className="mt-4 divide-y divide-[#E3F0F8]">
            {vehicles.map((vehicle) => (
              <li key={vehicle.plate} className="flex items-center justify-between gap-3 py-3 first:pt-1 last:pb-0">
                <div className="min-w-0">
                  <p className="truncate font-plusJakartaSans text-sm font-semibold text-[#17324D]">{vehicle.name}</p>
                  <p className="mt-1 font-plusJakartaSans text-xs text-[#6E7977]">{vehicle.plate}</p>
                </div>
                <StatusBadge
                  status={vehicle.status === 'Tersedia' ? 'success' : vehicle.status === 'Disewa' ? 'info' : 'warning'}
                  label={vehicle.status}
                  size="sm"
                />
              </li>
            ))}
          </ul>
        </article>
      </section>
    </div>
  )
}