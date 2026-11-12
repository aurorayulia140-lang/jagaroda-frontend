import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Notifikasi() {
  const [searchQuery, setSearchQuery] = useState('')
  const [notificationView, setNotificationView] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [readNotifications, setReadNotifications] = useState([4])
  const unreadCount = Math.max(0, 6 - readNotifications.length)

  const notifications = [
    {
      id: 1,
      category: 'handover',
      dateGroup: 'today',
      time: '1 jam yang lalu (09:45 WIB)',
      badgeType: 'danger',
      badgeText: 'Keterlambatan Pengembalian',
      title: 'Daihatsu Xenia (L 9012 EF) Terlambat Dikembalikan',
      desc: 'Penyewa Rendy Kurniawan seharusnya mengembalikan unit di Pool Gubeng pukul 09:00 WIB. GPS telemetri mendeteksi kendaraan masih bergerak aktif di Jl. Ahmad Yani menuju selatan.',
      telematics: 'Kecepatan terkini: 42 km/jam • Posisi: Sekitar Wonokromo • Keterlambatan: 45 Menit',
      actions: [
        { label: 'Hubungi Penyewa (WhatsApp)', primary: true, link: 'https://wa.me/6281234567890' },
        { label: 'Lihat di GPS', link: '/lokasi' }
      ]
    },
    {
      id: 2,
      category: 'payment',
      dateGroup: 'today',
      time: '2 jam yang lalu',
      badgeType: 'warning',
      badgeText: 'Pembayaran Jatuh Tempo',
      title: 'Pelunasan Sewa INV-2026-1082 Belum Diterima',
      desc: 'Tagihan sisa sebesar Rp 1.300.000 untuk rental unit Daihatsu Xenia belum diselesaikan saat jadwal pengembalian.',
      actions: [
        { label: 'Kirim Notifikasi Tagihan', primary: true, link: '/pembayaran' },
        { label: 'Tandai Lunas', link: '/pembayaran' }
      ]
    },
    {
      id: 3,
      category: 'handover',
      dateGroup: 'today',
      time: '30 menit yang lalu',
      badgeType: 'warning',
      badgeText: 'Pengambilan Unit Segera',
      title: 'Persiapan Serah Terima: Honda Brio Satya (L 2345 BC)',
      desc: 'Dijadwalkan diambil oleh Bpk. Dimas Saputra pukul 10:30 WIB (kurang 45 menit). Pastikan ceklis kebersihan, bahan bakar minimal 75%, dan kelengkapan STNK sudah siap di dalam dashboard kendaraan.',
      actions: [
        { label: 'Buka Berita Acara Handover', primary: true, link: '/handover' }
      ]
    },
    {
      id: 4,
      category: 'payment',
      dateGroup: 'today',
      time: '08:30 WIB',
      badgeType: 'success',
      badgeText: 'Pembayaran Lunas',
      title: 'Pembayaran DP Berhasil Diterima via Transfer BCA',
      desc: 'Pemesanan Toyota Avanza (L 1234 AB) oleh Bpk. Hendra Gunawan sebesar Rp 2.250.000 telah terverifikasi lunas melalui auto-matching bank statement.',
      actions: [
        { label: 'Lihat Kuitansi', link: '/pembayaran' }
      ]
    },
    {
      id: 5,
      category: 'maintenance',
      dateGroup: 'previous',
      time: 'Kemarin, 16:20 WIB',
      badgeType: 'danger',
      badgeText: 'Laporan Kerusakan Masuk',
      title: 'Laporan Anomali Kampas Rem: Mitsubishi Xpander (W 3456 CD)',
      desc: 'Sensor rem dan inspeksi fisik mendeteksi ketebalan kampas di bawah 32%. Unit telah otomatis dinonaktifkan dari ketersediaan rental hingga perbaikan selesai.',
      meter: {
        label: 'Ketebalan Kampas Rem Depan',
        val: '31% (Kritis)',
        percent: 31,
        color: '#BA1A1A'
      },
      actions: [
        { label: 'Cek Jadwal Bengkel', primary: true, link: '/maintenance' }
      ]
    },
    {
      id: 6,
      category: 'maintenance',
      dateGroup: 'previous',
      time: 'Kemarin, 11:00 WIB',
      badgeType: 'info',
      badgeText: 'Pengingat Servis Rutin',
      title: 'Jadwal Servis Berkala Honda Mobilio Mendekati Waktu',
      desc: 'Odometer mendekati 75.000 KM (rekomendasi ganti oli mesin dan filter di Shop & Drive Jemursari). Estimasi sisa jarak pakai aman sekitar 340 KM.',
      meter: {
        label: 'Interval Odometer (Target: 75.000 KM)',
        val: '74.660 KM (99.5%)',
        percent: 99.5,
        color: '#0047BF'
      },
      actions: [
        { label: 'Booking Servis', link: '/maintenance' }
      ]
    }
  ]

  function isVisible(item) {
    const matchesView =
      notificationView === 'all' ||
      (notificationView === 'unread' && !readNotifications.includes(item.id)) ||
      notificationView === item.dateGroup
    const matchesCategory = categoryFilter === 'all' || categoryFilter === item.category
    const matchesSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.badgeText.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesView && matchesCategory && matchesSearch
  }

  const todayItems = notifications.filter((item) => item.dateGroup === 'today' && isVisible(item))
  const previousItems = notifications.filter((item) => item.dateGroup === 'previous' && isVisible(item))

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari notifikasi, armada, tagihan..."
        greeting="Pusat Notifikasi"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Page Subheader */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-xs font-medium text-[#47607E]">
              <span>Sistem Operasional</span>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="#47607E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-[#0F766E]">Pusat Notifikasi</span>
            </div>
            <h1 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
              Pusat Notifikasi &amp; Pengingat Operasional
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-[#47607E]">
              Semua pengingat penting terkait jadwal handover, pembayaran jatuh tempo, pengingat servis, dan laporan kerusakan armada.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setReadNotifications([1, 2, 3, 4, 5, 6])}
            className="inline-flex cursor-pointer items-center gap-2 self-start rounded-lg border border-[#DDEAF2] bg-[#E3F0F8] px-4 py-2 text-xs font-semibold text-[#111D23] transition-colors hover:bg-[#d5e7f2] sm:self-auto"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="text-[#0F766E]">
              <path d="M1 6L5.5 10.5L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Tandai Semua Sudah Dibaca
          </button>
        </div>

        {/* Filters and Views Bar */}
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-3 shadow-xs">
          {/* View Tabs */}
          <div className="flex w-full flex-wrap items-center gap-1.5 border-b border-[#E3F0F8] pb-3">
            <button
              type="button"
              onClick={() => setNotificationView('all')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                notificationView === 'all'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F4FAFF]'
              }`}
            >
              Semua Notifikasi <span className="opacity-80">(12)</span>
            </button>
            <button
              type="button"
              onClick={() => setNotificationView('unread')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                notificationView === 'unread'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F4FAFF]'
              }`}
            >
              Belum Dibaca
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${
                notificationView === 'unread' ? 'bg-white text-[#0F766E]' : 'bg-[#FFDAD6] text-[#93000A]'
              }`}>
                {unreadCount}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setNotificationView('today')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                notificationView === 'today'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F4FAFF]'
              }`}
            >
              Hari Ini <span className="opacity-70">(7)</span>
            </button>
            <button
              type="button"
              onClick={() => setNotificationView('previous')}
              className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                notificationView === 'previous'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-[#F4FAFF]'
              }`}
            >
              Kemarin &amp; Sebelumnya <span className="opacity-70">(5)</span>
            </button>
          </div>

          {/* Category Filter Pills */}
          <div className="flex w-full flex-wrap items-center gap-2 pt-1">
            <span className="text-[11px] font-semibold tracking-wider text-[#6E7977] uppercase">Kategori:</span>
            <button
              type="button"
              onClick={() => setCategoryFilter('all')}
              className={`cursor-pointer rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                categoryFilter === 'all' ? 'bg-[#DDEAF2] font-semibold text-[#111D23]' : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Semua Kategori
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('handover')}
              className={`cursor-pointer rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                categoryFilter === 'handover' ? 'bg-[#DDEAF2] font-semibold text-[#111D23]' : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Handover &amp; Jadwal
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('payment')}
              className={`cursor-pointer rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                categoryFilter === 'payment' ? 'bg-[#DDEAF2] font-semibold text-[#111D23]' : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Pembayaran
            </button>
            <button
              type="button"
              onClick={() => setCategoryFilter('maintenance')}
              className={`cursor-pointer rounded-lg px-3 py-1 text-xs font-medium transition-all ${
                categoryFilter === 'maintenance' ? 'bg-[#DDEAF2] font-semibold text-[#111D23]' : 'text-[#47607E] hover:bg-[#F5F7FA]'
              }`}
            >
              Maintenance &amp; Kerusakan
            </button>
          </div>
        </div>

        {/* Content Grid: Notification Stream (Left) vs Stats & Status (Right) */}
        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-12">
          {/* Main Notification Stream (8 cols) */}
          <div className="flex w-full flex-col gap-6 lg:col-span-8">
            {/* Hari Ini Section */}
            {todayItems.length > 0 && (
              <div className="flex w-full flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]"></span>
                    <h2 className="text-xs font-bold tracking-wider text-[#111D23] uppercase">
                      Hari Ini — 24 Oktober 2026
                    </h2>
                  </div>
                  <span className="text-[11px] font-medium text-[#47607E]">
                    {todayItems.length} Prioritas Terpantau
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {todayItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs transition-shadow hover:shadow-sm sm:flex-row sm:items-start sm:gap-4 ${
                        readNotifications.includes(item.id) ? 'opacity-85' : 'border-l-4 border-l-[#0F766E]'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        item.badgeType === 'danger' ? 'bg-[#FFDAD6] text-[#BA1A1A]' :
                        item.badgeType === 'warning' ? 'bg-[#FEF3C7] text-[#B45309]' :
                        item.badgeType === 'info' ? 'bg-[#DBEAFE] text-[#2563EB]' : 'bg-[#DCFCE7] text-[#15803D]'
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {item.badgeType === 'danger' && <circle cx="12" cy="12" r="10" />}
                          {item.badgeType === 'danger' && <line x1="12" y1="8" x2="12" y2="12" />}
                          {item.badgeType === 'danger' && <line x1="12" y1="16" x2="12.01" y2="16" />}
                          {item.badgeType === 'warning' && <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />}
                          {item.badgeType === 'warning' && <line x1="12" y1="9" x2="12" y2="13" />}
                          {item.badgeType === 'warning' && <line x1="12" y1="17" x2="12.01" y2="17" />}
                          {item.badgeType === 'success' && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />}
                          {item.badgeType === 'success' && <polyline points="22 4 12 14.01 9 11.01" />}
                          {item.badgeType === 'info' && <circle cx="12" cy="12" r="10" />}
                          {item.badgeType === 'info' && <line x1="12" y1="16" x2="12" y2="12" />}
                          {item.badgeType === 'info' && <line x1="12" y1="8" x2="12.01" y2="8" />}
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <StatusBadge status={item.badgeType} label={item.badgeText} size="sm" />
                            {!readNotifications.includes(item.id) && (
                              <span className="h-2 w-2 rounded-full bg-[#BA1A1A]"></span>
                            )}
                          </div>
                          <span className="text-[11px] font-medium text-[#47607E]">{item.time}</span>
                        </div>

                        <h3 className="font-plusJakartaSans text-sm sm:text-base font-semibold text-[#111D23]">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] leading-relaxed text-[#3E4947]">
                          {item.desc}
                        </p>

                        {/* Telematics Info */}
                        {item.telematics && (
                          <div className="flex items-center gap-2 rounded-lg bg-[#E3F0F8] p-2.5 text-xs font-semibold text-[#BA1A1A]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{item.telematics}</span>
                          </div>
                        )}

                        {/* Meter */}
                        {item.meter && (
                          <div className="flex flex-col gap-1.5 rounded-lg bg-[#E9F6FD] p-3 text-xs">
                            <div className="flex justify-between font-medium text-[#111D23]">
                              <span>{item.meter.label}</span>
                              <span className="font-bold" style={{ color: item.meter.color }}>{item.meter.val}</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-[#DDEAF2]">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{ width: `${item.meter.percent}%`, backgroundColor: item.meter.color }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {/* Action Buttons */}
                        {item.actions && item.actions.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {item.actions.map((act, i) => (
                              <Link
                                key={i}
                                to={act.link}
                                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                  act.primary
                                    ? 'bg-[#0F766E] text-white shadow-xs hover:bg-[#0D655E]'
                                    : 'border border-[#DDEAF2] bg-[#E3F0F8] text-[#111D23] hover:bg-[#d5e7f2]'
                                }`}
                              >
                                {act.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Kemarin & Sebelumnya Section */}
            {previousItems.length > 0 && (
              <div className="flex w-full flex-col gap-3 pt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#47607E]"></span>
                    <h2 className="text-xs font-bold tracking-wider text-[#47607E] uppercase">
                      Kemarin — 23 Oktober 2026
                    </h2>
                  </div>
                  <span className="text-[11px] font-medium text-[#47607E]">
                    {previousItems.length} Arsip Catatan
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {previousItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-4 shadow-xs transition-shadow hover:shadow-sm sm:flex-row sm:items-start sm:gap-4"
                    >
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        item.badgeType === 'danger' ? 'bg-[#FFDAD6] text-[#BA1A1A]' :
                        item.badgeType === 'warning' ? 'bg-[#FEF3C7] text-[#B45309]' :
                        item.badgeType === 'info' ? 'bg-[#DBEAFE] text-[#2563EB]' : 'bg-[#DCFCE7] text-[#15803D]'
                      }`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          {item.badgeType === 'danger' && <circle cx="12" cy="12" r="10" />}
                          {item.badgeType === 'danger' && <line x1="12" y1="8" x2="12" y2="12" />}
                          {item.badgeType === 'danger' && <line x1="12" y1="16" x2="12.01" y2="16" />}
                          {item.badgeType === 'info' && <circle cx="12" cy="12" r="10" />}
                          {item.badgeType === 'info' && <line x1="12" y1="16" x2="12" y2="12" />}
                          {item.badgeType === 'info' && <line x1="12" y1="8" x2="12.01" y2="8" />}
                        </svg>
                      </div>

                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <StatusBadge status={item.badgeType} label={item.badgeText} size="sm" />
                          <span className="text-[11px] font-medium text-[#47607E]">{item.time}</span>
                        </div>

                        <h3 className="font-plusJakartaSans text-sm sm:text-base font-semibold text-[#111D23]">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-[13px] leading-relaxed text-[#3E4947]">
                          {item.desc}
                        </p>

                        {/* Meter */}
                        {item.meter && (
                          <div className="flex flex-col gap-1.5 rounded-lg bg-[#E9F6FD] p-3 text-xs">
                            <div className="flex justify-between font-medium text-[#111D23]">
                              <span>{item.meter.label}</span>
                              <span className="font-bold" style={{ color: item.meter.color }}>{item.meter.val}</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-[#DDEAF2]">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{ width: `${item.meter.percent}%`, backgroundColor: item.meter.color }}
                              ></div>
                            </div>
                          </div>
                        )}

                        {item.actions && item.actions.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2 pt-1">
                            {item.actions.map((act, i) => (
                              <Link
                                key={i}
                                to={act.link}
                                className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                                  act.primary
                                    ? 'bg-[#0F766E] text-white shadow-xs hover:bg-[#0D655E]'
                                    : 'border border-[#DDEAF2] bg-[#E3F0F8] text-[#111D23] hover:bg-[#d5e7f2]'
                                }`}
                              >
                                {act.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {todayItems.length === 0 && previousItems.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[#DDEAF2] bg-white p-12 text-center shadow-xs">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#47607E" strokeWidth="1.5" className="mb-3">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                </svg>
                <p className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                  Tidak ada notifikasi yang sesuai
                </p>
                <p className="text-xs text-[#47607E]">
                  Coba ubah filter kategori atau kata kunci pencarian Anda.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Analytics & Settings (4 cols) */}
          <div className="flex w-full flex-col gap-6 lg:col-span-4">
            {/* Resolution Performance Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-wider text-[#47607E] uppercase">
                  Kinerja Resolusi Armada
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-[#E9F6FD] p-3">
                  <div className="font-plusJakartaSans text-2xl font-bold text-[#111D23]">14</div>
                  <div className="text-[11px] text-[#47607E]">Notifikasi Selesai</div>
                  <div className="mt-1 text-[10px] font-semibold text-[#15803D]">+18% dari minggu lalu</div>
                </div>

                <div className="rounded-lg bg-[#E9F6FD] p-3">
                  <div className="flex items-baseline gap-1 font-plusJakartaSans text-2xl font-bold text-[#0F766E]">
                    18<span className="text-xs font-semibold">Mnt</span>
                  </div>
                  <div className="text-[11px] text-[#47607E]">Rata-rata Respon</div>
                  <div className="mt-1 text-[10px] font-semibold text-[#0F766E]">4 mnt lebih cepat</div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#47607E]">Tren Respons Mingguan</span>
                  <span className="font-medium text-[#111D23]">Sen - Min</span>
                </div>
                <div className="h-10 w-full overflow-hidden rounded bg-[#F4FAFF] p-1">
                  <svg viewBox="0 0 240 32" className="h-full w-full" preserveAspectRatio="none">
                    <path
                      d="M 5 28 L 40 20 L 80 24 L 120 10 L 160 14 L 200 2 L 235 6"
                      fill="none"
                      stroke="#0F766E"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Reminder Composition Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                  Komposisi Pengingat
                </h3>
                <span className="text-[11px] font-medium text-[#47607E]">Bulan Berjalan</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#E3F0F8"
                      strokeWidth="4"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#0F766E"
                      strokeWidth="4"
                      strokeDasharray="45, 100"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#1E5FE7"
                      strokeWidth="4"
                      strokeDasharray="30, 100"
                      strokeDashoffset="-45"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#B45309"
                      strokeWidth="4"
                      strokeDasharray="25, 100"
                      strokeDashoffset="-75"
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="font-plusJakartaSans text-sm font-bold text-[#111D23]">38</span>
                    <span className="text-[8px] font-medium text-[#47607E]">TOTAL</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#0F766E]"></span>
                      <span className="text-[#47607E]">Jadwal Handover</span>
                    </div>
                    <span className="font-semibold text-[#111D23]">45%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#1E5FE7]"></span>
                      <span className="text-[#47607E]">Pembayaran</span>
                    </div>
                    <span className="font-semibold text-[#111D23]">30%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#B45309]"></span>
                      <span className="text-[#47607E]">Servis &amp; Rusak</span>
                    </div>
                    <span className="font-semibold text-[#111D23]">25%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Gateway Card */}
            <div className="flex flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between">
                <h3 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                  Saluran Gateway Notifikasi
                </h3>
                <StatusBadge status="success" label="Aktif" size="sm" />
              </div>
              <p className="text-xs text-[#47607E]">
                Konfigurasi penerimaan otomatis tanda bahaya dan pengingat ke perangkat pengelola.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                <div className="flex items-center justify-between rounded-lg border border-[#DDEAF2] bg-[#F4FAFF] p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[#111D23]">WhatsApp Gateway</span>
                      <span className="text-[11px] text-[#47607E]">+62 812-3456-7890</span>
                    </div>
                  </div>
                  <span className="h-4 w-4 rounded bg-[#0F766E]"></span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#DDEAF2] bg-[#F4FAFF] p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[#111D23]">Email Shift</span>
                      <span className="text-[11px] text-[#47607E]">ops.nino@jagaroda.id</span>
                    </div>
                  </div>
                  <span className="h-4 w-4 rounded bg-[#0F766E]"></span>
                </div>

                <div className="flex items-center justify-between rounded-lg border border-[#DDEAF2] bg-[#F4FAFF] p-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFDAD6] text-[#BA1A1A]">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-[#111D23]">Alarm Audio Mendesak</span>
                      <span className="text-[11px] text-[#47607E]">Bunyikan jika telat &gt;30 mnt</span>
                    </div>
                  </div>
                  <span className="h-4 w-4 rounded bg-[#0F766E]"></span>
                </div>
              </div>
            </div>

            {/* Pool Status Preview Card */}
            <div className="flex flex-col overflow-hidden rounded-xl border border-[#DDEAF2] bg-white shadow-xs">
              <div className="h-28 w-full bg-[#17324D] relative">
                <img
                  src="/Ab6axucucrvlhcukfvpxdehvbowgnfekayathdzwcykxc0fdlwkjzk54ez1uzpqw5jrxosfmh8bloula6gu1oie9r1v40xqyotzdgnx0it95wqq3edzclvjwv043u2y8wjelahiei1cgxtbhuzg7qslqpnodvmaokhfmejdoa3dg6flgkakzmnfxfij_42dt0hwvc2rj4jkz1arecgtywc9qh4eymx0lisgkduq51sjnkpfouscc2yd2st5w.png"
                  alt="Pool Surabaya"
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-2 left-3 text-xs font-bold tracking-wider text-white uppercase">
                  Pool Surabaya Gubeng
                </div>
              </div>
              <div className="p-4 text-xs text-[#47607E]">
                26 dari 30 unit beroperasi normal. 2 unit memerlukan inspeksi servis terjadwal minggu ini.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
