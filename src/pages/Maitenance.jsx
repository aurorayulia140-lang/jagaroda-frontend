import { useState } from 'react'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Maintenance() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('damage') // 'damage' | 'service'

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari riwayat servis, plat nomor..."
        greeting="Perawatan & Kerusakan Armada"
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Page Subheader */}
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 text-xs font-medium text-[#47607E]">
              <span>Kendaraan &amp; Armada</span>
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none">
                <path d="M1.5 1.5L4.5 4L1.5 6.5" stroke="#47607E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-semibold text-[#0F766E]">Maintenance &amp; Kerusakan</span>
            </div>
            <h1 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-3xl">
              Riwayat Servis &amp; Laporan Kerusakan Armada
            </h1>
            <p className="max-w-2xl text-xs sm:text-sm text-[#47607E]">
              Catat inspeksi kondisi fisik mobil, riwayat perbaikan berkala, dan penanganan kerusakan aktif agar armada aman beroperasi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#FFDAD6] bg-[#FFDAD6]/60 px-4 py-2 text-xs font-semibold text-[#93000A] shadow-xs transition-colors hover:bg-[#FFDAD6]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              + Lapor Kerusakan Baru
            </button>

            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0F766E] px-4 py-2 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              + Jadwalkan Servis Berkala
            </button>
          </div>
        </div>

        {/* Global Warning Banner */}
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#FFDAD6] bg-linear-to-r from-[#FFDAD6]/60 via-[#DDEAF2]/40 to-[#E9F6FD]/60 p-4 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#BA1A1A] shadow-xs">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold tracking-wider text-[#93000A] uppercase">
                  Peringatan Ketersediaan Armada
                </span>
                <span className="rounded-full bg-[#BA1A1A] px-2 py-0.5 text-[10px] font-bold text-white">
                  Auto-Lock
                </span>
              </div>
              <p className="mt-1 text-xs text-[#111D23]">
                Beberapa kendaraan mengalami gangguan dan memerlukan pemeriksaan sebelum dapat disewakan kembali.
              </p>
              <p className="text-xs text-[#3E4947]">
                Mitsubishi Xpander <span className="font-bold text-[#0F766E]">W 3456 CD</span> sedang menjalani perbaikan rem di Bengkel Berlian Motors dan tidak tersedia hingga 04 Nov 2026.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-white px-3 py-1.5 text-xs font-semibold text-[#47607E] shadow-xs hover:bg-[#F5F7FA]"
            >
              Bengkel Rekanan
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[#0F766E] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E]"
            >
              Cek Kalender
            </button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div>
              <span className="text-xs font-medium text-[#47607E]">Kerusakan Aktif</span>
              <div className="mt-1 flex items-baseline gap-1.5 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#111D23]">
                2 <span className="text-xs font-semibold text-[#BA1A1A]">Unit Off</span>
              </div>
              <span className="text-[11px] text-[#47607E]">1 Bengkel, 1 Antre Inspeksi</span>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFDAD6] text-[#93000A]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div>
              <span className="text-xs font-medium text-[#47607E]">Jadwal Servis Minggu Ini</span>
              <div className="mt-1 flex items-baseline gap-1.5 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#111D23]">
                3 <span className="text-xs font-semibold text-[#0F766E]">Unit</span>
              </div>
              <span className="text-[11px] text-[#47607E]">2 Rutin Oli, 1 Balancing</span>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E3F0F8] text-[#0F766E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div>
              <span className="text-xs font-medium text-[#47607E]">Total Biaya Bulan Ini</span>
              <div className="mt-1 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#111D23]">
                Rp 2,88 Jt
              </div>
              <span className="text-[11px] text-[#47607E]">75% Dicover Klaim / Deposito</span>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E9F6FD] text-[#0F766E]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <line x1="6" y1="12" x2="18" y2="12" />
              </svg>
            </div>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div>
              <span className="text-xs font-medium text-[#47607E]">Health Index Armada</span>
              <div className="mt-1 font-plusJakartaSans text-2xl sm:text-3xl font-bold text-[#0F766E]">
                94.2%
              </div>
              <span className="text-[11px] text-[#47607E]">32 dari 34 Unit Siap Jalan</span>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#DCFCE7] text-[#15803D]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
          </div>
        </div>

        {/* Tab switcher & Branch filter */}
        <div className="flex w-full flex-col gap-3 rounded-xl border border-[#DDEAF2] bg-white p-3 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-1.5 rounded-lg bg-[#E3F0F8] p-1">
            <button
              type="button"
              onClick={() => setActiveTab('damage')}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${activeTab === 'damage'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-white/50'
                }`}
            >
              Laporan Kerusakan Aktif
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${activeTab === 'damage' ? 'bg-[#BA1A1A] text-white' : 'bg-[#FFDAD6] text-[#BA1A1A]'
                }`}>
                2
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('service')}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-md px-3.5 py-1.5 text-xs font-semibold transition-all ${activeTab === 'service'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'text-[#47607E] hover:bg-white/50'
                }`}
            >
              Riwayat Servis &amp; Perawatan Berkala
              <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-bold ${activeTab === 'service' ? 'bg-white text-[#0F766E]' : 'bg-[#D7E4EC] text-[#3E4947]'
                }`}>
                18
              </span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#47607E]">Status Armada:</span>
            <span className="font-semibold text-[#111D23]">Semua Cabang (Surabaya &amp; Sekitar)</span>
          </div>
        </div>

        {/* Damage Cards Grid */}
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Damage Card 1: Mitsubishi Xpander */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#E3F0F8] pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#E3F0F8] px-2 py-0.5 text-xs font-bold text-[#0F766E]">
                    W 3456 CD
                  </span>
                  <StatusBadge status="warning" label="Dalam Perbaikan" size="sm" />
                </div>
                <h3 className="mt-1 font-plusJakartaSans text-lg font-bold text-[#111D23]">
                  Mitsubishi Xpander Ultimate
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#BA1A1A]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <span>Otomatis Dinonaktifkan dari Kalender Pemesanan</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#47607E]">Estimasi Biaya</span>
                <div className="font-plusJakartaSans text-base font-bold text-[#111D23]">Rp 850.000</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="flex flex-col gap-2.5 sm:col-span-7">
                <div className="rounded-lg bg-[#F5F7FA] p-3 text-xs">
                  <span className="font-bold text-[#47607E] uppercase">Jenis Kerusakan</span>
                  <p className="mt-1 text-[#111D23]">
                    Kampas rem depan aus berbunyi &amp; indikasi minyak rem rembes pada kaliper kiri.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[11px] text-[#47607E]">Tanggal Lapor</span>
                    <div className="font-semibold text-[#111D23]">22 Okt 2026</div>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#47607E]">Pelapor</span>
                    <div className="font-semibold text-[#111D23]">Nino (Inspeksi Masuk)</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[11px] text-[#47607E]">Bengkel Rekanan</span>
                    <div className="font-semibold text-[#0F766E]">Berlian Motors (Est: 04 Nov 2026)</div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 overflow-hidden rounded-lg bg-[#E3F0F8] sm:col-span-5">
                <img
                  src="/Ab6axudgxcbw4i1promnhb7pg82ow2xasfaczpxgzt7fb4fxtin7hjfm2xb1wzlbl4uvvnmv9reni0uuklulwhmrpgd7gkzej6qcjgf2ek6emb_weq2uzvcahkvfuiw7xthvaron3lnfltyrxquwhppd8du3rbxs8vjxvq5t5t21dfvo1b9ei6lgmtsydipwsjhv7xxfyg0dvdbwuuczkjnxmrxzn9w_oqtfacvn419daayhfjnho4jc6a.png"
                  alt="Bukti Kerusakan"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white">
                  Bukti: Kampas &amp; Rem
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex justify-between text-xs">
                <span className="text-[#47607E]">Progres Pengerjaan Suku Cadang</span>
                <span className="font-semibold text-[#B45309]">65% (Menunggu Part OEM)</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
                <div className="h-full rounded-full bg-[#B45309]" style={{ width: '65%' }}></div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E3F0F8]">
              <button
                type="button"
                className="cursor-pointer rounded-lg border border-[#DDEAF2] bg-[#E3F0F8] px-3.5 py-1.5 text-xs font-semibold text-[#111D23] hover:bg-[#d5e7f2]"
              >
                Perbarui Progres Servis
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#0F766E] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E]"
              >
                Selesaikan Perbaikan
              </button>
            </div>
          </div>

          {/* Damage Card 2: Daihatsu Xenia */}
          <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#E3F0F8] pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="rounded bg-[#E3F0F8] px-2 py-0.5 text-xs font-bold text-[#0F766E]">
                    L 9012 EF
                  </span>
                  <StatusBadge status="danger" label="Menunggu Inspeksi" size="sm" />
                </div>
                <h3 className="mt-1 font-plusJakartaSans text-lg font-bold text-[#111D23]">
                  Daihatsu Xenia 1.3 R
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#47607E]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <span>Ketersediaan Sewa: Masih Terbuka (Perlu Keputusan)</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-[#47607E]">Estimasi Klaim</span>
                <div className="font-plusJakartaSans text-base font-bold text-[#BA1A1A]">Rp 350.000</div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
              <div className="flex flex-col gap-2.5 sm:col-span-7">
                <div className="rounded-lg bg-[#F5F7FA] p-3 text-xs">
                  <span className="font-bold text-[#47607E] uppercase">Jenis Kerusakan</span>
                  <p className="mt-1 text-[#111D23]">
                    Goresan baret bumper belakang kiri setelah sewa luar kota (indikasi gesekan trotoar).
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[11px] text-[#47607E]">Tanggal Lapor</span>
                    <div className="font-semibold text-[#111D23]">Hari Ini, 09:15 WIB</div>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#47607E]">Pelapor</span>
                    <div className="font-semibold text-[#111D23]">Driver Rental (Check-in)</div>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[11px] text-[#47607E]">Penyewa Terkait</span>
                    <div className="font-semibold text-[#111D23]">Rendy K. (Deposit: Rp 500.000)</div>
                  </div>
                </div>
              </div>

              <div className="relative h-40 overflow-hidden rounded-lg bg-[#E3F0F8] sm:col-span-5">
                <img
                  src="/Ab6axudyrjsbzmsiwdwphefwt2hrtl0t_rs2norzzk1i6nj6er4zry_eboz6leplwpptb0qftgetypqwq_talttgf1n6mwfp92uqw3viriphjhokyv3achmmutrpbojqc09_uuzjfholn89mw76qftywcufhktc1v6cp0qxmjolqabofly48qjjn2stq_k_bsvjvc1khklck2ctns9bg4p2vfgywpjhhu4puscmoyhwhhgxhklyqlcfynq.png"
                  alt="Bukti Kerusakan Bumper"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-[10px] font-semibold text-white">
                  Bukti: Bumper Belakang Kiri
                </span>
              </div>
            </div>

            <div className="rounded-lg bg-[#DDEAF2]/60 p-2.5 text-xs text-[#111D23]">
              Uang jaminan penyewa dapat langsung dipotong sesuai estimasi bengkel rekanan cat oven.
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E3F0F8]">
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#FFDAD6] px-3.5 py-1.5 text-xs font-semibold text-[#93000A] hover:bg-[#FFDAD6]/80"
              >
                Klaim Uang Jaminan
              </button>
              <button
                type="button"
                className="cursor-pointer rounded-lg bg-[#0F766E] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E]"
              >
                Bawa ke Body Repair
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Service Reminder Banner */}
        <div className="flex w-full flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3.5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E3F0F8] text-[#0F766E]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-wider text-[#0F766E] uppercase">
                  Pengingat Servis Mendatang
                </span>
                <StatusBadge status="success" label="Siaga Rutin" size="sm" />
              </div>
              <p className="mt-1 text-xs text-[#111D23]">
                Servis Berkala Toyota Avanza (<strong>L 1234 AB</strong>) tersisa <strong>2.420 KM</strong> lagi / batas waktu kalender <strong>18 Nov 2026</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              type="button"
              className="cursor-pointer rounded-lg border border-[#DDEAF2] bg-[#E3F0F8] px-3.5 py-2 text-xs font-semibold text-[#111D23] hover:bg-[#d5e7f2]"
            >
              Riwayat Mesin Avanza
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-lg bg-[#0F766E] px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#0D655E]"
            >
              Setel Pengingat Odometer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
