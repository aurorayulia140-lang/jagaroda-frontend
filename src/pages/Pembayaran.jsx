import { useState } from 'react'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Pembayaran() {
  const [paymentFilter, setPaymentFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const transactions = [
    {
      id: 'INV-2026-1082',
      date: '21 Okt 2026 • 09:15',
      customer: 'Rendy Kurniawan',
      phone: '0812-3498-8812',
      car: 'Daihatsu Xenia 1.3 R',
      plate: 'L 9012 EF',
      total: 'Rp 1.800.000',
      dp: 'Rp 500.000',
      remaining: 'Rp 1.300.000',
      dueDate: '23 Okt 2026',
      dueNote: 'Lewat 1 Hari',
      status: 'late',
      statusLabel: 'Terlambat',
      badgeVariant: 'danger'
    },
    {
      id: 'INV-2026-1085',
      date: '23 Okt 2026 • 15:40',
      customer: 'Dimas Saputra',
      phone: '0821-8722-1090',
      car: 'Honda Brio Satya E',
      plate: 'L 2345 BC',
      total: 'Rp 1.050.000',
      dp: 'Rp 350.000',
      remaining: 'Rp 700.000',
      dueDate: 'Hari Ini, 10:30 WIB',
      dueNote: 'Saat Handover Unit',
      status: 'pending',
      statusLabel: 'Menunggu Pelunasan',
      badgeVariant: 'warning'
    },
    {
      id: 'INV-2026-1079',
      date: '20 Okt 2026 • 11:20',
      customer: 'Bpk. Hendra Gunawan',
      phone: '0813-7721-3990',
      car: 'Toyota Avanza 1.5 G',
      plate: 'L 1234 AB',
      total: 'Rp 2.250.000',
      dp: 'Rp 2.250.000',
      remaining: 'Rp 0',
      dueDate: '20 Okt 2026',
      dueNote: 'Transfer BCA',
      status: 'paid',
      statusLabel: 'Lunas',
      badgeVariant: 'success'
    },
    {
      id: 'INV-2026-1076',
      date: '19 Okt 2026 • 14:00',
      customer: 'PT Surya Abadi',
      email: 'billing@suryaabadi.co.id',
      isCorporate: true,
      car: 'Suzuki Ertiga GL MT',
      plate: 'L 6789 FG',
      total: 'Rp 4.500.000',
      dp: 'Rp 4.500.000',
      remaining: 'Rp 0',
      dueDate: '19 Okt 2026',
      dueNote: 'Mandiri Corporate',
      status: 'paid',
      statusLabel: 'Lunas',
      badgeVariant: 'success'
    },
    {
      id: 'INV-2026-1090',
      date: '23 Okt 2026 • 18:25',
      customer: 'Anita Rahayu',
      phone: '0857-1234-9008',
      car: 'Toyota Calya 1.2 G',
      plate: 'L 4567 DE',
      total: 'Rp 900.000',
      dp: 'Rp 300.000',
      remaining: 'Rp 600.000',
      dueDate: 'Besok, 25 Okt 2026',
      dueNote: 'Sebelum Keberangkatan',
      status: 'pending',
      statusLabel: 'Menunggu Pelunasan',
      badgeVariant: 'info'
    }
  ]

  function isPaymentVisible(item) {
    const matchesStatus = paymentFilter === 'all' || paymentFilter === item.status
    const query = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !query ||
      item.id.toLowerCase().includes(query) ||
      item.customer.toLowerCase().includes(query) ||
      item.car.toLowerCase().includes(query) ||
      item.plate.toLowerCase().includes(query)
    return matchesStatus && matchesSearch
  }

  const filteredTransactions = transactions.filter(isPaymentVisible)

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari nama penyewa, nomor invoice, atau plat mobil..."
        greeting="Manajemen Pembayaran"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Page Subheader */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-xs font-medium text-[#47607E]">
              <span>Keuangan &amp; Billing</span>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="#47607E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-[#0F766E]">Pembayaran</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
                Manajemen &amp; Pemantauan Pembayaran
              </h1>
              <span className="inline-flex rounded-full border border-[#DDEAF2] bg-[#E3F0F8] px-2.5 py-0.5 text-xs font-semibold text-[#0F766E]">
                Periode Okt 2026
              </span>
            </div>
            <p className="max-w-2xl text-xs sm:text-sm text-[#47607E]">
              Pantau arus kas sewa, verifikasi uang muka, dan tagih sisa pelunasan armada rental secara akurat dan real-time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-[#DDEAF2] bg-white px-4 py-2 text-xs font-semibold text-[#47607E] shadow-xs transition-colors hover:bg-[#F4FAFF]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Unduh Laporan (.CSV/.PDF)
            </button>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              + Catat Pembayaran Manual
            </button>
          </div>
        </div>

        {/* 3 Metric Summary Cards */}
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1: Penerimaan Lunas */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-[#47607E]">Total Penerimaan Lunas</span>
                <div className="mt-1 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#111D23]">
                  Rp 42.850.000
                </div>
                <span className="text-xs text-[#47607E]">18 Transaksi Berhasil</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#DCFCE7] text-[#15803D]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <StatusBadge status="success" label="Tercatat Masuk" size="sm" />
              <span className="text-[#47607E]">71.8% dari total komitmen</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div className="h-full rounded-full bg-[#0F766E]" style={{ width: '71.8%' }}></div>
            </div>
          </div>

          {/* Card 2: Menunggu Pelunasan */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-[#47607E]">Menunggu Pelunasan / DP</span>
                <div className="mt-1 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#111D23]">
                  Rp 14.300.000
                </div>
                <span className="text-xs text-[#47607E]">7 Transaksi Tertahan</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FEF3C7] text-[#B45309]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <StatusBadge status="warning" label="Mendekati Tenggat" size="sm" />
              <span className="text-[#47607E]">22.0% pipeline</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div className="h-full rounded-full bg-[#B45309]" style={{ width: '22%' }}></div>
            </div>
          </div>

          {/* Card 3: Terlambat */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium text-[#47607E]">Terlambat / Jatuh Tempo</span>
                <div className="mt-1 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#BA1A1A]">
                  Rp 3.750.000
                </div>
                <span className="text-xs text-[#47607E]">2 Transaksi Menunggak</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFDAD6] text-[#BA1A1A]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between text-xs">
              <StatusBadge status="danger" label="Perlu Tindak Lanjut" size="sm" />
              <span className="font-semibold text-[#BA1A1A]">Prioritas Penagihan</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div className="h-full rounded-full bg-[#BA1A1A]" style={{ width: '6.2%' }}></div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-3 shadow-xs md:flex-row md:items-center md:justify-between">
          <div className="relative min-w-0 flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#47607E" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama penyewa, nomor invoice, atau plat mobil..."
              className="h-10 w-full rounded-lg border border-[#DDEAF2] bg-[#F5F7FA] pl-9 pr-4 text-xs font-medium text-[#111D23] outline-none transition-colors placeholder:text-[#47607E] focus:border-[#0F766E] focus:bg-white"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setPaymentFilter('all')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                paymentFilter === 'all'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Semua (27)
            </button>
            <button
              type="button"
              onClick={() => setPaymentFilter('paid')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                paymentFilter === 'paid'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Lunas (18)
            </button>
            <button
              type="button"
              onClick={() => setPaymentFilter('pending')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                paymentFilter === 'pending'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Menunggu Pelunasan (7)
            </button>
            <button
              type="button"
              onClick={() => setPaymentFilter('late')}
              className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                paymentFilter === 'late'
                  ? 'bg-[#FFDAD6] text-[#BA1A1A] shadow-xs'
                  : 'text-[#BA1A1A] hover:bg-[#FFDAD6]/50'
              }`}
            >
              Terlambat (2)
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="w-full overflow-hidden rounded-xl border border-[#DDEAF2] bg-white shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-xs">
              <thead>
                <tr className="border-b border-[#DDEAF2] bg-[#F5F7FA] text-[11px] font-bold tracking-wider text-[#47607E] uppercase">
                  <th className="px-4 py-3">No. Invoice &amp; Tanggal</th>
                  <th className="px-4 py-3">Penyewa &amp; Kontak</th>
                  <th className="px-4 py-3">Unit Kendaraan</th>
                  <th className="px-4 py-3 text-right">Total Biaya</th>
                  <th className="px-4 py-3 text-right">Uang Muka (DP)</th>
                  <th className="px-4 py-3 text-right">Sisa Tagihan</th>
                  <th className="px-4 py-3">Tenggat Waktu</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E3F0F8]">
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="transition-colors hover:bg-[#F4FAFF]/70">
                    <td className="px-4 py-3.5">
                      <div className="font-bold text-[#0F766E]">{tx.id}</div>
                      <div className="text-[11px] text-[#47607E]">{tx.date}</div>
                    </td>

                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5 font-semibold text-[#111D23]">
                        {tx.customer}
                        {tx.isCorporate && (
                          <span className="rounded bg-[#DBEAFE] px-1 py-0.2 text-[10px] font-bold text-[#1E5FE7]">
                            CORP
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-[#47607E]">{tx.phone || tx.email}</div>
                    </td>

                    <td className="px-4 py-3.5">
                      <div className="font-medium text-[#111D23]">{tx.car}</div>
                      <span className="inline-block rounded bg-[#E3F0F8] px-1.5 py-0.5 text-[10px] font-semibold text-[#0F766E]">
                        {tx.plate}
                      </span>
                    </td>

                    <td className="px-4 py-3.5 text-right font-medium text-[#111D23]">{tx.total}</td>
                    <td className="px-4 py-3.5 text-right text-[#47607E]">{tx.dp}</td>
                    <td className={`px-4 py-3.5 text-right font-bold ${tx.status === 'late' ? 'text-[#BA1A1A]' : tx.status === 'pending' ? 'text-[#B45309]' : 'text-[#47607E]'}`}>
                      {tx.remaining}
                    </td>

                    <td className="px-4 py-3.5">
                      <div className={`font-semibold ${tx.status === 'late' ? 'text-[#BA1A1A]' : 'text-[#111D23]'}`}>
                        {tx.dueDate}
                      </div>
                      <div className="text-[11px] text-[#47607E]">{tx.dueNote}</div>
                    </td>

                    <td className="px-4 py-3.5 text-center">
                      <StatusBadge status={tx.badgeVariant} label={tx.statusLabel} size="sm" />
                    </td>

                    <td className="px-4 py-3.5 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        {tx.status !== 'paid' ? (
                          <button
                            type="button"
                            className="cursor-pointer rounded-md bg-[#0F766E] px-2.5 py-1 text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E]"
                          >
                            Tandai Lunas
                          </button>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="cursor-pointer rounded-md px-2 py-1 text-xs font-semibold text-[#0F766E] hover:bg-[#E3F0F8]"
                            >
                              Invoice
                            </button>
                            <button
                              type="button"
                              className="cursor-pointer rounded-md px-2 py-1 text-xs font-semibold text-[#47607E] hover:bg-[#E3F0F8]"
                            >
                              Kuitansi
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Bar */}
          <div className="flex items-center justify-between border-t border-[#DDEAF2] bg-[#F5F7FA] px-4 py-3 text-xs text-[#47607E]">
            <span>Menampilkan {filteredTransactions.length} dari 27 invoice transaksi</span>
            <div className="flex items-center gap-1">
              <button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-[#DDEAF2] bg-white opacity-50">
                &lt;
              </button>
              <button type="button" className="flex h-7 w-7 items-center justify-center rounded bg-[#0F766E] font-bold text-white shadow-xs">
                1
              </button>
              <button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-[#DDEAF2] bg-white text-[#47607E] hover:bg-[#E3F0F8]">
                2
              </button>
              <button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-[#DDEAF2] bg-white text-[#47607E] hover:bg-[#E3F0F8]">
                3
              </button>
              <button type="button" className="flex h-7 w-7 items-center justify-center rounded border border-[#DDEAF2] bg-white text-[#47607E] hover:bg-[#E3F0F8]">
                &gt;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Dual Cards: Reconciliation & Bank Accounts */}
        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Card 1: Status Rekonsiliasi Otomatis (7 cols) */}
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs sm:flex-row sm:items-center lg:col-span-7">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F0F8] text-[#0F766E]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <h3 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                  Status Rekonsiliasi Otomatis
                </h3>
                <p className="mt-0.5 text-xs text-[#47607E]">
                  98.2% Pembayaran BCA &amp; Mandiri terverifikasi otomatis via Mutasi API Gateway.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <StatusBadge status="success" label="API Sinkron" size="sm" />
              <button type="button" className="cursor-pointer rounded-lg p-1.5 text-[#47607E] hover:bg-[#E3F0F8]" title="Segarkan status API">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10" />
                  <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Rekening Kas Rental (5 cols) */}
          <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs lg:col-span-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F766E" strokeWidth="2">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                </svg>
                <h3 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                  Rekening Kas Rental
                </h3>
              </div>
              <StatusBadge status="success" label="Aktif" size="sm" />
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between rounded-lg bg-[#F5F7FA] p-2.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="rounded bg-white px-1.5 py-0.5 font-bold text-[#0047BF] shadow-2xs">BCA</span>
                  <div>
                    <div className="font-semibold text-[#111D23]">829-019-4451</div>
                    <div className="text-[10px] text-[#47607E]">a.n. PT Jagaroda Transport</div>
                  </div>
                </div>
                <button type="button" className="cursor-pointer text-[#47607E] hover:text-[#0F766E]" title="Salin nomor rekening">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-[#F5F7FA] p-2.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="rounded bg-white px-1.5 py-0.5 font-bold text-[#0F766E] shadow-2xs">MDR</span>
                  <div>
                    <div className="font-semibold text-[#111D23]">142-00-99882-12</div>
                    <div className="text-[10px] text-[#47607E]">a.n. PT Jagaroda Transport</div>
                  </div>
                </div>
                <button type="button" className="cursor-pointer text-[#47607E] hover:text-[#0F766E]" title="Salin nomor rekening">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mt-1 flex items-center justify-between border-t border-[#E3F0F8] pt-2 text-xs">
              <span className="text-[#47607E]">Total Likuiditas Siap Pakai:</span>
              <span className="font-bold text-[#0F766E]">Rp 60.350.000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
