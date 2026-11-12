import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

export default function Booking() {
  const navigate = useNavigate()

  const [customerType, setCustomerType] = useState('pribadi') // 'pribadi' | 'perusahaan'
  const [fullName, setFullName] = useState('Darmawan Santoso')
  const [phone, setPhone] = useState('0812-9876-5432')
  const [email, setEmail] = useState('darmawan@perusahaan.co.id')
  const [nik, setNik] = useState('3578012304920003')
  const [address, setAddress] = useState('Jl. Manyar Kertoarjo No. 45, Surabaya')

  const [selectedVehicle, setSelectedVehicle] = useState('avanza')
  const [servicePackage, setServicePackage] = useState('lepas-kunci')
  const [startDate, setStartDate] = useState('2026-10-24')
  const [startTime, setStartTime] = useState('09:00')
  const [endDate, setEndDate] = useState('2026-10-26')
  const [endTime, setEndTime] = useState('18:00')
  const [pickupLocation, setPickupLocation] = useState('pool-barat')

  const [notes, setNotes] = useState('Pengambilan pagi, unit dimohon sudah bersih dan tangki bensin penuh.')
  const [savedFeedback, setSavedFeedback] = useState('')

  const vehicleRates = {
    avanza: { name: 'Toyota Avanza 1.3 G (L 1234 AB)', rate: 450000 },
    brio: { name: 'Honda Brio Satya E (L 2345 BC)', rate: 350000 },
    xpander: { name: 'Mitsubishi Xpander Ultimate (W 3456 CD)', rate: 550000 },
    calya: { name: 'Toyota Calya 1.2 G (L 4567 DE)', rate: 300000 },
  }

  const currentVehicle = vehicleRates[selectedVehicle] || vehicleRates.avanza
  const driverFee = servicePackage === 'driver' ? 150000 : 0
  const days = 3
  const dailyTotal = currentVehicle.rate + driverFee
  const subtotal = dailyTotal * days
  const deposit = 500000
  const downPayment = Math.round(subtotal * 0.3)
  const remainingPayment = subtotal - downPayment

  const handleSubmit = (e) => {
    e.preventDefault()
    setSavedFeedback('Pemesanan baru berhasil disimpan ke sistem operasional!')
    setTimeout(() => {
      navigate('/pemesanan')
    }, 1500)
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      <Header
        greeting="Tambah Pemesanan"
        subtitle="Formulir Pemesanan Armada Baru"
        showSearch={false}
        showAction={false}
      />

      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Breadcrumb & Subheader */}
        <div className="flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <div className="flex flex-col items-start gap-1">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#47607E]">
              <Link to="/pemesanan" className="font-plusJakartaSans font-medium hover:text-[#0F766E]">
                Pemesanan
              </Link>
              <span className="text-[#94A3B8]">/</span>
              <span className="font-plusJakartaSans font-semibold text-[#0F766E]">
                Tambah Pemesanan Baru
              </span>
            </nav>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <h2 className="font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-[26px]">
                Buat Pemesanan &amp; Detail Sewa
              </h2>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3F0F8] px-2.5 py-0.5 font-plusJakartaSans text-[11px] font-semibold text-[#0F766E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0F766E]" />
                Booking Engine V2.4 Active
              </span>
            </div>
            <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-sm">
              Input data penyewa, verifikasi ketersediaan unit tanpa bentrok, dan kalkulasi pembayaran uang muka.
            </p>
          </div>

          <Link
            to="/pemesanan"
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#DDEAF2] bg-white px-3.5 font-plusJakartaSans text-xs font-semibold text-[#17324D] shadow-xs transition-colors hover:bg-[#F8FAFC]"
          >
            &larr; Kembali ke Kalender
          </Link>
        </div>

        {savedFeedback && (
          <div role="status" className="w-full rounded-xl border border-[#BBF7D0] bg-[#DCFCE7] p-4 font-plusJakartaSans text-xs font-bold text-[#15803D] shadow-xs">
            {savedFeedback}
          </div>
        )}

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Left Column: Customer & Rental Information */}
          <div className="flex flex-col gap-6">
            {/* 1. Customer Information Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs sm:p-6">
              <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-plusJakartaSans text-sm font-bold text-[#111D23]">
                      1. Informasi Penyewa
                    </h3>
                    <p className="font-plusJakartaSans text-[11px] text-[#47607E]">
                      Data identitas utama untuk verifikasi kontrak rental
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 rounded-lg bg-[#E9F6FD] p-1">
                  <button
                    type="button"
                    onClick={() => setCustomerType('pribadi')}
                    className={`rounded-md px-3 py-1 font-plusJakartaSans text-xs font-semibold transition-all ${
                      customerType === 'pribadi'
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'text-[#47607E] hover:text-[#0F766E]'
                    }`}
                  >
                    Pribadi
                  </button>
                  <button
                    type="button"
                    onClick={() => setCustomerType('perusahaan')}
                    className={`rounded-md px-3 py-1 font-plusJakartaSans text-xs font-semibold transition-all ${
                      customerType === 'perusahaan'
                        ? 'bg-[#0F766E] text-white shadow-xs'
                        : 'text-[#47607E] hover:text-[#0F766E]'
                    }`}
                  >
                    Perusahaan
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Nama Lengkap Penyewa *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none transition-colors focus:border-[#0F766E] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Nomor WhatsApp / Seluler *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none transition-colors focus:border-[#0F766E] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Alamat Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none transition-colors focus:border-[#0F766E] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Nomor KTP / NIK *
                  </label>
                  <input
                    type="text"
                    required
                    value={nik}
                    onChange={(e) => setNik(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-liberationMono text-xs text-[#111D23] outline-none transition-colors focus:border-[#0F766E] focus:bg-white"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Alamat Domisili KTP
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none transition-colors focus:border-[#0F766E] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* 2. Rental Details & Fleet Selection Card */}
            <div className="flex flex-col gap-4 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs sm:p-6">
              <div className="flex items-center gap-2.5 border-b border-[#E3F0F8] pb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#0F766E]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-plusJakartaSans text-sm font-bold text-[#111D23]">
                    2. Detail Sewa &amp; Pilihan Armada
                  </h3>
                  <p className="font-plusJakartaSans text-[11px] text-[#47607E]">
                    Tentukan unit kendaraan, paket sewa, jadwal, dan lokasi serah terima
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Pilih Armada Tersedia *
                  </label>
                  <select
                    value={selectedVehicle}
                    onChange={(e) => setSelectedVehicle(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                  >
                    <option value="avanza">Toyota Avanza 1.3 G — L 1234 AB (Rp 450.000 / hari)</option>
                    <option value="brio">Honda Brio Satya E — L 2345 BC (Rp 350.000 / hari)</option>
                    <option value="xpander">Mitsubishi Xpander — W 3456 CD (Rp 550.000 / hari)</option>
                    <option value="calya">Toyota Calya 1.2 G — L 4567 DE (Rp 300.000 / hari)</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Paket Layanan Rental
                  </label>
                  <div className="mt-1 grid grid-cols-2 gap-3">
                    <label className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors ${servicePackage === 'lepas-kunci' ? 'border-[#0F766E] bg-[#F0FBF9]' : 'border-[#DDEAF2] bg-white'}`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="servicePackage"
                          checked={servicePackage === 'lepas-kunci'}
                          onChange={() => setServicePackage('lepas-kunci')}
                          className="accent-[#0F766E]"
                        />
                        <span className="font-plusJakartaSans text-xs font-semibold text-[#17324D]">Lepas Kunci</span>
                      </div>
                      <span className="font-plusJakartaSans text-[11px] text-[#47607E]">Standard</span>
                    </label>

                    <label className={`flex cursor-pointer items-center justify-between rounded-lg border p-3 transition-colors ${servicePackage === 'driver' ? 'border-[#0F766E] bg-[#F0FBF9]' : 'border-[#DDEAF2] bg-white'}`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="servicePackage"
                          checked={servicePackage === 'driver'}
                          onChange={() => setServicePackage('driver')}
                          className="accent-[#0F766E]"
                        />
                        <span className="font-plusJakartaSans text-xs font-semibold text-[#17324D]">Dengan Pengemudi</span>
                      </div>
                      <span className="font-plusJakartaSans text-[11px] text-[#0F766E] font-semibold">+Rp 150.000/hr</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Tanggal Mulai Sewa *
                  </label>
                  <div className="mt-1 flex gap-2">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                    />
                    <input
                      type="time"
                      value={startTime}
                      onChange={(e) => setStartTime(e.target.value)}
                      className="w-24 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-2 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Tanggal Selesai Sewa *
                  </label>
                  <div className="mt-1 flex gap-2">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                    />
                    <input
                      type="time"
                      value={endTime}
                      onChange={(e) => setEndTime(e.target.value)}
                      className="w-24 rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-2 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Titik Handover / Pengambilan
                  </label>
                  <select
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] px-3.5 py-2 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                  >
                    <option value="pool-barat">Pool Barat Surabaya (Gratis)</option>
                    <option value="pool-gubeng">Pool Gubeng Surabaya (Gratis)</option>
                    <option value="bandara-juanda">Bandara Juanda T1 / T2 (Antar Unit)</option>
                    <option value="alamat-penyewa">Antar Langsung ke Alamat Penyewa</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-plusJakartaSans text-xs font-medium text-[#47607E]">
                    Catatan Tambahan &amp; Permintaan Khusus
                  </label>
                  <textarea
                    rows="2"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="mt-1 w-full rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] p-3 font-plusJakartaSans text-xs text-[#111D23] outline-none focus:border-[#0F766E]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cost Calculation Summary & Action Buttons */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 rounded-xl border border-[#DDEAF2] bg-white p-5 shadow-xs sm:p-6">
              <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-3">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#0F766E]">
                    💳
                  </span>
                  <h3 className="font-plusJakartaSans text-sm font-bold text-[#111D23]">
                    Ringkasan &amp; Biaya Sewa
                  </h3>
                </div>
                <span className="rounded-full bg-[#E3F0F8] px-2.5 py-0.5 font-plusJakartaSans text-[11px] font-semibold text-[#0F766E]">
                  Kalkulasi Otomatis
                </span>
              </div>

              {/* Selected Car Details */}
              <div className="rounded-lg border border-[#DDEAF2] bg-[#F8FAFC] p-3">
                <p className="font-plusJakartaSans text-[11px] font-semibold uppercase tracking-wider text-[#47607E]">
                  Armada Dipilih
                </p>
                <p className="mt-0.5 font-plusJakartaSans text-sm font-bold text-[#111D23]">
                  {currentVehicle.name}
                </p>
                <p className="mt-1 font-plusJakartaSans text-xs text-[#64748B]">
                  Durasi: {days} Hari ({startDate} s/d {endDate})
                </p>
              </div>

              {/* Price Breakdown */}
              <div className="flex flex-col gap-2.5 text-xs">
                <div className="flex items-center justify-between text-[#47607E]">
                  <span>Tarif Harian Kendaraan</span>
                  <span className="font-liberationMono font-medium text-[#111D23]">
                    Rp {currentVehicle.rate.toLocaleString('id-ID')} × {days} hr
                  </span>
                </div>
                {driverFee > 0 && (
                  <div className="flex items-center justify-between text-[#47607E]">
                    <span>Layanan Pengemudi</span>
                    <span className="font-liberationMono font-medium text-[#111D23]">
                      Rp {driverFee.toLocaleString('id-ID')} × {days} hr
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between text-[#47607E]">
                  <span>Deposit Jaminan (Dapat Dikembalikan)</span>
                  <span className="font-liberationMono font-medium text-[#111D23]">
                    Rp {deposit.toLocaleString('id-ID')}
                  </span>
                </div>
                <div className="my-1 h-px bg-[#E3F0F8]" />
                <div className="flex items-center justify-between font-bold text-sm text-[#111D23]">
                  <span>Total Biaya Sewa</span>
                  <span className="font-liberationMono text-base text-[#0F766E]">
                    Rp {(subtotal + deposit).toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Down Payment Box */}
              <div className="flex flex-col gap-2 rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] p-3.5">
                <div className="flex items-center justify-between text-xs font-semibold text-[#17324D]">
                  <span>Uang Muka / DP Wajib (30%)</span>
                  <span className="font-liberationMono text-sm font-bold text-[#0F766E]">
                    Rp {downPayment.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[11px] text-[#47607E]">
                  Sisa pelunasan sebesar <strong className="text-[#17324D]">Rp {remainingPayment.toLocaleString('id-ID')}</strong> dibayarkan saat proses serah terima (handover).
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="submit"
                  className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0F766E] font-plusJakartaSans text-xs font-bold text-white shadow-xs transition-colors hover:bg-[#0D655E]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Simpan Pemesanan &amp; Lanjutkan</span>
                </button>
                <Link
                  to="/pemesanan"
                  className="flex h-9 w-full items-center justify-center rounded-lg border border-[#DDEAF2] bg-white font-plusJakartaSans text-xs font-semibold text-[#47607E] transition-colors hover:bg-[#F8FAFC]"
                >
                  Batal
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
