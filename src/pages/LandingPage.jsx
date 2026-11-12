import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Kendaraan terpantau',
    description: 'Lihat kondisi unit, status ketersediaan, dan informasi operasional dalam satu katalog.',
  },
  {
    number: '02',
    title: 'Pemesanan lebih tertata',
    description: 'Kelola jadwal sewa dan periksa potensi benturan sebelum unit diserahkan.',
  },
  {
    number: '03',
    title: 'Handover dan perawatan',
    description: 'Pantau serah terima, jadwal servis, serta laporan kondisi kendaraan.',
  },
]

const workflow = [
  { number: '01', title: 'Catat armada', description: 'Tinjau inventaris kendaraan dan status ketersediaannya.' },
  { number: '02', title: 'Atur pemesanan', description: 'Susun jadwal sewa dan periksa potensi jadwal bertabrakan.' },
  { number: '03', title: 'Pantau operasional', description: 'Lanjutkan ke handover, lokasi, dan catatan perawatan unit.' },
]

const benefits = [
  'Status unit mudah ditinjau',
  'Jadwal rental tersusun dalam kalender',
  'Riwayat perawatan tercatat per kendaraan',
]

function VehicleIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]" aria-label="Ilustrasi panel pengelolaan armada" role="img">
      <div className="relative overflow-hidden rounded-[24px] border border-[#DDEAF2] bg-white p-5 shadow-[0_24px_70px_rgba(23,50,77,0.12)] sm:p-7">
        <div className="flex items-center justify-between border-b border-[#E3F0F8] pb-4">
          <div>
            <p className="font-plusJakartaSans text-[11px] font-bold tracking-[0.12em] text-[#47607E]">JAGARODA / ARMADA</p>
            <p className="mt-1 font-plusJakartaSans text-lg font-bold text-[#17324D]">Ringkasan unit</p>
          </div>
          <span className="flex items-center gap-2 rounded-full bg-[#DCFCE7] px-3 py-1.5 font-plusJakartaSans text-xs font-semibold text-[#15803D]">
            <span className="h-2 w-2 rounded-full bg-[#15803D]" /> Terpantau
          </span>
        </div>
        <div className="relative mt-5 overflow-hidden rounded-2xl bg-[#E9F6FD] p-5 sm:p-7">
          <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute -left-8 top-12 h-24 w-[120%] -rotate-[12deg] border-y-[14px] border-white/80" />
            <div className="absolute left-[58%] -top-8 h-[180%] w-14 rotate-[28deg] border-x-[12px] border-white/80" />
            <div className="absolute left-0 top-[48%] h-px w-full border-t border-dashed border-[#AFC2D3]" />
          </div>
          <div className="relative flex min-h-44 items-center justify-center">
            <div className="absolute left-[13%] top-[24%] h-3 w-3 rounded-full border-[3px] border-white bg-[#0F766E] shadow-md" />
            <div className="absolute right-[18%] top-[22%] h-3 w-3 rounded-full border-[3px] border-white bg-[#47607E] shadow-md" />
            <div className="absolute bottom-[18%] left-[28%] h-3 w-3 rounded-full border-[3px] border-white bg-[#15803D] shadow-md" />
            <div className="relative flex h-24 w-44 items-center justify-center rounded-2xl border border-white bg-white shadow-[0_12px_30px_rgba(23,50,77,0.14)]">
              <svg viewBox="0 0 120 62" fill="none" aria-hidden="true" className="w-32 text-[#0F766E]">
                <path d="M13 39h94l-7-17a8 8 0 0 0-7-5H31a8 8 0 0 0-7 5l-11 17Z" fill="#BFE8E2" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M16 39v9a5 5 0 0 0 5 5h4v-8h70v8h4a5 5 0 0 0 5-5v-9" fill="white" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <circle cx="34" cy="48" r="7" fill="#17324D" stroke="white" strokeWidth="3" />
                <circle cx="86" cy="48" r="7" fill="#17324D" stroke="white" strokeWidth="3" />
                <path d="m30 19 5-8h48l7 8" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="absolute bottom-[12%] right-[8%] rounded-lg bg-white px-3 py-2 font-plusJakartaSans text-[11px] font-semibold text-[#17324D] shadow-sm">Lokasi armada</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 divide-x divide-[#E3F0F8] rounded-xl bg-[#F7FAFC] py-3">
          <div className="px-3 text-center">
            <p className="font-plusJakartaSans text-lg font-bold text-[#17324D]">Unit</p>
            <p className="mt-1 font-plusJakartaSans text-[11px] text-[#47607E]">Inventaris</p>
          </div>
          <div className="px-3 text-center">
            <p className="font-plusJakartaSans text-lg font-bold text-[#17324D]">Jadwal</p>
            <p className="mt-1 font-plusJakartaSans text-[11px] text-[#47607E]">Pemesanan</p>
          </div>
          <div className="px-3 text-center">
            <p className="font-plusJakartaSans text-lg font-bold text-[#17324D]">Servis</p>
            <p className="mt-1 font-plusJakartaSans text-[11px] text-[#47607E]">Perawatan</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="overflow-hidden">
      <section id="beranda" className="relative bg-[#F5F7FA]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#BFE8E2] bg-white px-3 py-1.5 font-plusJakartaSans text-xs font-bold tracking-[0.08em] text-[#0F766E]">
              <span className="h-2 w-2 rounded-full bg-[#0F766E]" /> OPERASIONAL RENTAL KENDARAAN
            </p>
            <h1 className="mt-6 max-w-2xl font-plusJakartaSans text-4xl font-bold leading-[1.12] text-[#17324D] sm:text-5xl">
              Kelola rental kendaraan dalam satu alur yang terpantau.
            </h1>
            <p className="mt-5 max-w-xl font-plusJakartaSans text-base leading-7 text-[#47607E]">
              JagaRoda membantu pengelola menata kendaraan, pemesanan, handover, lokasi, dan perawatan dari satu sistem operasional.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/signup" className="rounded-lg bg-[#0F766E] px-5 py-3 font-plusJakartaSans text-sm font-bold text-white shadow-[0_8px_18px_rgba(15,118,110,0.18)] hover:bg-[#0B625C]">
                Mulai menggunakan JagaRoda
              </Link>
              <Link to="/#layanan" className="rounded-lg border border-[#C7D6E3] bg-white px-5 py-3 font-plusJakartaSans text-sm font-semibold text-[#17324D] hover:border-[#0F766E]">
                Lihat layanan
              </Link>
            </div>
            <p className="mt-5 font-plusJakartaSans text-xs leading-5 text-[#6E7977]">
              Platform operasional untuk membantu pengelolaan armada rental.
            </p>
          </div>
          <VehicleIllustration />
        </div>
      </section>

      <section id="tentang" className="border-y border-[#DDEAF2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-14 md:grid-cols-[0.7fr_1.3fr] md:items-start lg:px-8 lg:py-16">
          <div>
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">TENTANG JAGARODA</p>
            <h2 className="mt-3 font-plusJakartaSans text-2xl font-bold leading-tight text-[#17324D] sm:text-3xl">Menjaga alur rental tetap jelas.</h2>
          </div>
          <p className="max-w-3xl font-plusJakartaSans text-base leading-7 text-[#47607E]">
            JagaRoda menyatukan informasi kendaraan dan aktivitas operasional rental. Pengelola dapat meninjau ketersediaan, jadwal pemesanan, proses serah terima, serta catatan perawatan tanpa berpindah-pindah tampilan.
          </p>
        </div>
      </section>

      <section id="layanan" className="bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">LAYANAN UTAMA</p>
            <h2 className="mt-3 font-plusJakartaSans text-3xl font-bold leading-tight text-[#17324D]">Satu gambaran untuk kerja armada sehari-hari.</h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.number} className="border-t-2 border-[#0F766E] bg-white px-5 py-6 sm:px-6">
                <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">{service.number}</p>
                <h3 className="mt-5 font-plusJakartaSans text-lg font-bold text-[#17324D]">{service.title}</h3>
                <p className="mt-2 font-plusJakartaSans text-sm leading-6 text-[#47607E]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center lg:px-8 lg:py-20">
          <div>
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">KEUNGGULAN</p>
            <h2 className="mt-3 max-w-lg font-plusJakartaSans text-3xl font-bold leading-tight text-[#17324D]">Informasi armada lebih mudah ditinjau.</h2>
            <p className="mt-4 max-w-xl font-plusJakartaSans text-sm leading-6 text-[#47607E]">
              Susunan informasi yang menghubungkan unit, kalender rental, serah terima, dan maintenance membantu tim menjaga konteks saat bekerja.
            </p>
          </div>
          <ul className="space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3 border-b border-[#E3F0F8] pb-4 font-plusJakartaSans text-sm font-semibold text-[#17324D]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#DCFCE7] text-[#15803D]" aria-hidden="true">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="cara-kerja" className="border-y border-[#DDEAF2] bg-[#F5F7FA]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">CARA KERJA</p>
            <h2 className="mt-3 font-plusJakartaSans text-3xl font-bold leading-tight text-[#17324D]">Dari inventaris hingga serah terima.</h2>
          </div>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {workflow.map((step) => (
              <li key={step.number} className="border-l-2 border-[#0F766E] pl-5">
                <p className="font-plusJakartaSans text-xs font-bold tracking-[0.1em] text-[#0F766E]">LANGKAH {step.number}</p>
                <h3 className="mt-3 font-plusJakartaSans text-lg font-bold text-[#17324D]">{step.title}</h3>
                <p className="mt-2 font-plusJakartaSans text-sm leading-6 text-[#47607E]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#E9F6FD]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-12 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-14">
          <div>
            <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">MULAI DARI SINI</p>
            <h2 className="mt-2 font-plusJakartaSans text-2xl font-bold text-[#17324D]">Siapkan alur pengelolaan armada Anda.</h2>
          </div>
          <Link to="/signup" className="w-fit rounded-lg bg-[#0F766E] px-5 py-3 font-plusJakartaSans text-sm font-bold text-white hover:bg-[#0B625C]">
            Daftar ke JagaRoda
          </Link>
        </div>
      </section>
    </div>
  )
}