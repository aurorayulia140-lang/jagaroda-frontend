import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Kendaraan() {
  const [activeStatus, setActiveStatus] = useState('Semua')
  const [searchQuery, setSearchQuery] = useState('')
  const [activePage, setActivePage] = useState(1)

  const vehicles = [
    {
      id: 'k-avanza',
      name: 'Toyota Avanza 1.3 G',
      plate: 'L 1234 AB',
      year: 'Tahun 2022',
      status: 'Tersedia',
      statusBadgeBg: 'bg-[#DCFCE7]',
      statusBadgeText: 'text-[#15803D]',
      statusDotBg: 'bg-[#15803D]',
      image:
        '/Ab6axua7enflctrgawzxbuaxw0vvkga8l5ontrgzgjdvwbsjdgrahbmateoa2kjg_tqafywm4gthvmwr9uislxzo3obancdzvtkywbhzlbku9bx1itb91dtst0c0lwlhzygcbhu0raeac8qxpb1biaarqokmfdgs64rfup0azjbrngwrwnvsydqr9normwepupyn9ikntq3hv_p4og1u0tiap7gloxe0gi1hxasrubwyy3zahbczsq.png',
      mileage: '42.580 km',
      metaTag: 'Bensin (92)',
      infoBoxBg: 'bg-[#E9F6FD]',
      infoBoxText: 'text-[#3E4947]',
      infoBoxDesc: 'Kondisi mesin sangat baik, bodi mulus siap jarak jauh.',
      infoIconColor: 'text-[#15803D]',
      footerLabel: 'Pool Rungkut',
      footerIconType: 'location',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'k-brio',
      name: 'Honda Brio Satya E',
      plate: 'L 2345 BC',
      year: 'Tahun 2023',
      status: 'Disewa',
      statusBadgeBg: 'bg-[#DBEAFE]',
      statusBadgeText: 'text-[#2563EB]',
      statusDotBg: 'bg-[#2563EB]',
      image:
        '/Ab6axuaq1sipzimmzbaqgb6cw0at1awyhgjftldrw3yogdqlreightpuo5o34j0fqgmgbksjwiwgjekp3ic2wq6kyuhvs_x1d7i7vdwiornyamnnxs3xbfnq4zgho7o363igxflk5rirpcwqxh7iubdmidtv3f6appuap8kciflyj4sflnls2jyyyafbcbrvzl6xmdroeowfjy9_hpl8rjwj9nnunxw3hbvpoqsgmschtu9bbwojnfvvdw.png',
      mileage: '28.120 km',
      metaTag: 'Dimas K.',
      infoBoxBg: 'bg-[#EBF3FF]',
      infoBoxText: 'text-[#1E40AF]',
      infoBoxDesc: 'Disewa s/d 2 Okt 2026 (Sidoarjo • Lepas Kunci)',
      infoIconColor: 'text-[#2563EB]',
      footerLabel: 'GPS Aktif • 42 km/h',
      footerIconType: 'gps',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'k-xpander',
      name: 'Mitsubishi Xpander Ultimate',
      plate: 'W 3456 CD',
      year: 'Tahun 2021',
      status: 'Maintenance',
      statusBadgeBg: 'bg-[#FEF3C7]',
      statusBadgeText: 'text-[#B45309]',
      statusDotBg: 'bg-[#B45309]',
      image:
        '/Ab6axuazx41ewy3xxnodx37hmrfkyhb3hzh2q4vnmyjrbjgdsecs5qaxxvftofrm_nswsntrmowu2_enuf__cmgd5dqu1cwfnfgkpcf_m28arzmxs7jns7rdpmvkqevfhb3ibpmjx0wbczvzoqd0tgqxyanyuaddyxqmztd8jkcr2halgcohalmw1frakzd7ypd53bsspkilkkg44bss99c0k3awuuxvmoyqqqavn19pi6enmhfhnxfcw.png',
      mileage: '61.400 km',
      metaTag: 'Kampas Rem',
      infoBoxBg: 'bg-[#FFFBEB]',
      infoBoxText: 'text-[#92400E]',
      infoBoxDesc: 'Rem perlu diperiksa (servis dijadwalkan teknisi)',
      infoIconColor: 'text-[#B45309]',
      footerLabel: 'Slot: Besok 09:00',
      footerIconType: 'calendar',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'k-calya',
      name: 'Toyota Calya 1.2 G',
      plate: 'L 4567 DE',
      year: 'Tahun 2023',
      status: 'Tersedia',
      statusBadgeBg: 'bg-[#DCFCE7]',
      statusBadgeText: 'text-[#15803D]',
      statusDotBg: 'bg-[#15803D]',
      image:
        '/Ab6axudohqtbh9wrktoozklxcrkcrkpq5rjluj788cpudw90jp3zyzi4szygkgnzf4v8sjbbslaiuaynsfr6lk1yqwmk7oqoufxpb6czvaoyfltch_ugejzufhwz3igoxo_kf83extrxss4aawcj6snlaw4vlifkl0hz7mzxhjtpjpdocth31ekjxezzyxuu7fuyrtjre3odfpubgkq5s_qrkjdpec6xtay9yeiywwbn4mormjf3h0fba.png',
      mileage: '31.050 km',
      metaTag: 'Interior Fresh',
      infoBoxBg: 'bg-[#E9F6FD]',
      infoBoxText: 'text-[#3E4947]',
      infoBoxDesc: 'Kondisi siap pakai, baru cuci & cek oli rutin',
      infoIconColor: 'text-[#15803D]',
      footerLabel: 'Pool Gubeng',
      footerIconType: 'location',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'k-mobilio',
      name: 'Honda Mobilio E CVT',
      plate: 'B 5678 EF',
      year: 'Tahun 2020',
      status: 'Maintenance',
      statusBadgeBg: 'bg-[#FEF3C7]',
      statusBadgeText: 'text-[#B45309]',
      statusDotBg: 'bg-[#B45309]',
      image:
        '/Ab6axuabbviuoj4geeklrou00occbcd09n_v4pg3jwpnqwp6pqngchrmiy9s5bmpcbffr1hztjcqdsswbas6vbhk5smezlxot6vevoeklxfidldcwjktc5bh_qfymnob3vsjipnus8er_fotvqynqicqoomxwtphuxzumoy4cotn_pbacufu9rdyrmhwpczwsoshmr7fwxllv1shlpxj7_x_jdm0r720oro7nuemb5cdvnqvyhhf74a.png',
      mileage: '74.200 km',
      metaTag: 'Sisa 400 km',
      infoBoxBg: 'bg-[#FFFBEB]',
      infoBoxText: 'text-[#92400E]',
      infoBoxDesc: 'Jadwal ganti oli 5 Okt 2026 di Bengkel Mitra',
      infoIconColor: 'text-[#B45309]',
      footerLabel: 'Bengkel AutoCare',
      footerIconType: 'wrench',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'k-ertiga',
      name: 'Suzuki Ertiga Hybrid',
      plate: 'L 6789 FG',
      year: 'Tahun 2023',
      status: 'Disewa',
      statusBadgeBg: 'bg-[#DBEAFE]',
      statusBadgeText: 'text-[#2563EB]',
      statusDotBg: 'bg-[#2563EB]',
      image:
        '/Ab6axudkekhqzzpxkunapp_e7480r6exkkvrfuqxsifixdcipk2krvz1guruksxlf_vfplw8qg9binh7nmyy8a0sndwouvtk_5bxarwoglzm_ipat8tgfp2b4s5jrxklsngvfwzcjpfhelk35ve5dorf03lfvigtmi6ebd8fc1hc3p96uq612fvdcpvxtscl6opwgdmsisf_5wzajeigoeigzplcxfuqfy_gtixu_hytmua9lhkpxr5_i1pg.png',
      mileage: '19.800 km',
      metaTag: 'Eco 94%',
      infoBoxBg: 'bg-[#EBF3FF]',
      infoBoxText: 'text-[#1E40AF]',
      infoBoxDesc: 'Disewa s/d 4 Okt 2026 (Surabaya Barat • Corporate)',
      infoIconColor: 'text-[#2563EB]',
      footerLabel: 'GPS Aktif • Parkir Aman',
      footerIconType: 'gps',
      detailUrl: '/kendaraan/detail',
    },
  ]

  const handleSearchChange = (query) => {
    setSearchQuery(query)
    setActivePage(1)
  }

  const handleStatusChange = (status) => {
    setActiveStatus(status)
    setActivePage(1)
  }

  const filteredVehicles = vehicles.filter((v) => {
    const matchesStatus =
      activeStatus === 'Semua' || v.status === activeStatus
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.plate.toLowerCase().includes(q) ||
      v.infoBoxDesc.toLowerCase().includes(q) ||
      v.metaTag.toLowerCase().includes(q)

    return matchesStatus && matchesSearch
  })

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      {/* Top Header Terpadu */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={handleSearchChange}
        searchPlaceholder="Cari kendaraan, nomor polisi..."
        greeting="Selamat Datang, Nino"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
      />

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Banner Subheader & Statistik Cepat */}
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-[#005C55]"
              >
                <path
                  d="M2.25 10.5V11.25C2.25 11.4625 2.17812 11.6406 2.03437 11.7844C1.89062 11.9281 1.7125 12 1.5 12H0.75C0.5375 12 0.359375 11.9281 0.215625 11.7844C0.071875 11.6406 0 11.4625 0 11.25V5.25L1.575 0.75C1.65 0.525 1.78437 0.34375 1.97812 0.20625C2.17188 0.06875 2.3875 0 2.625 0H10.875C11.1125 0 11.3281 0.06875 11.5219 0.20625C11.7156 0.34375 11.85 0.525 11.925 0.75L13.5 5.25V11.25C13.5 11.4625 13.4281 11.6406 13.2844 11.7844C13.1406 11.9281 12.9625 12 12.75 12H12C11.7875 12 11.6094 11.9281 11.4656 11.7844C11.3219 11.6406 11.25 11.4625 11.25 11.25V10.5H2.25V10.5M2.1 3.75H11.4L10.6125 1.5H2.8875L2.1 3.75V3.75M1.5 5.25V5.25V9V9V5.25V5.25M3.375 8.25C3.6875 8.25 3.95312 8.14062 4.17188 7.92188C4.39062 7.70312 4.5 7.4375 4.5 7.125C4.5 6.8125 4.39062 6.54688 4.17188 6.32812C3.95312 6.10938 3.6875 6 3.375 6C3.0625 6 2.79688 6.10938 2.57812 6.32812C2.35938 6.54688 2.25 6.8125 2.25 7.125C2.25 7.4375 2.35938 7.70312 2.57812 7.92188C2.79688 8.14062 3.0625 8.25 3.375 8.25V8.25M10.125 8.25C10.4375 8.25 10.7031 8.14062 10.9219 7.92188C11.1406 7.70312 11.25 7.4375 11.25 7.125C11.25 6.8125 11.1406 6.54688 10.9219 6.32812C10.7031 6.10938 10.4375 6 10.125 6C9.8125 6 9.54688 6.10938 9.32812 6.32812C9.10938 6.54688 9 6.8125 9 7.125C9 7.4375 9.10938 7.70312 9.32812 7.92188C9.54688 8.14062 9.8125 8.25 10.125 8.25V8.25M1.5 9H12V5.25H1.5V9V9"
                  fill="currentColor"
                />
              </svg>
              <p className="font-plusJakartaSans text-[11px] font-semibold tracking-wider text-[#005C55]">
                KATALOG INVENTARIS UNIT
              </p>
            </div>
            <h2 className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-[26px]">
              Kendaraan
            </h2>
            <p className="mt-0.5 font-plusJakartaSans text-sm text-[#47607E]">
              Semua unit kendaraan rental operasional dalam pengawasan sistem telemetri.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="flex w-full flex-wrap items-center gap-2 rounded-xl border border-[#E3F0F8] bg-white p-1.5 shadow-xs md:w-fit">
            <div className="flex flex-col border-r border-[#E3F0F8] px-4 py-1">
              <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                Total Armada
              </span>
              <span className="font-plusJakartaSans text-base font-bold text-[#111D23]">
                12 Unit
              </span>
            </div>
            <div className="flex flex-col border-r border-[#E3F0F8] px-4 py-1">
              <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                Tingkat Utilisasi
              </span>
              <span className="font-plusJakartaSans text-base font-bold text-[#005C55]">
                58.3%
              </span>
            </div>
            <div className="flex flex-col px-4 py-1">
              <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                Siap Sewa
              </span>
              <span className="font-plusJakartaSans text-base font-bold text-[#111D23]">
                7 Unit
              </span>
            </div>
          </div>
        </div>

        {/* Filter Card: In-Page Search & Filter Pills */}
        <div className="flex w-full flex-col items-stretch gap-3 rounded-xl border border-[#E3F0F8] bg-white p-4 shadow-xs md:flex-row md:items-center md:justify-between">
          {/* In-Page Search */}
          <div className="relative flex w-full max-w-md items-center">
            <span className="pointer-events-none absolute left-3.5 flex items-center text-[#47607E]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62153 10.309 1.57292 9.26042C0.524305 8.21181 0 6.93056 0 5.41667C0 3.90278 0.524305 2.62153 1.57292 1.57292C2.62153 0.524305 3.90278 0 5.41667 0C6.93056 0 8.21181 0.524305 9.26042 1.57292C10.309 2.62153 10.8333 3.90278 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15V15M5.41667 9.16667C6.45833 9.16667 7.34375 8.80208 8.07292 8.07292C8.80208 7.34375 9.16667 6.45833 9.16667 5.41667C9.16667 4.375 8.80208 3.48958 8.07292 2.76042C7.34375 2.03125 6.45833 1.66667 5.41667 1.66667C4.375 1.66667 3.48958 2.03125 2.76042 2.76042C2.03125 3.48958 1.66667 4.375 1.66667 5.41667C1.66667 6.45833 2.03125 7.34375 2.76042 8.07292C3.48958 8.80208 4.375 9.16667 5.41667 9.16667V9.16667"
                  fill="currentColor"
                />
              </svg>
            </span>
            <input
              type="search"
              aria-label="Cari kendaraan, nomor polisi, atau model"
              placeholder="Cari kendaraan, nomor polisi, atau model..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full rounded-lg border border-[#DDEAF2] bg-[#E9F6FD] py-2 pl-10 pr-3 font-plusJakartaSans text-xs text-[#263238] transition-colors outline-none placeholder:text-[#47607E] focus:border-[#0F766E] focus:bg-white focus:ring-1 focus:ring-[#0F766E] sm:text-[13px]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              aria-pressed={activeStatus === 'Semua'}
              onClick={() => handleStatusChange('Semua')}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activeStatus === 'Semua'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              Semua (12)
            </button>
            <button
              type="button"
              aria-pressed={activeStatus === 'Tersedia'}
              onClick={() => handleStatusChange('Tersedia')}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activeStatus === 'Tersedia'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              Tersedia (7)
            </button>
            <button
              type="button"
              aria-pressed={activeStatus === 'Disewa'}
              onClick={() => handleStatusChange('Disewa')}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activeStatus === 'Disewa'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              Disewa (3)
            </button>
            <button
              type="button"
              aria-pressed={activeStatus === 'Maintenance'}
              onClick={() => handleStatusChange('Maintenance')}
              className={`cursor-pointer rounded-full px-3.5 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activeStatus === 'Maintenance'
                  ? 'bg-[#0F766E] text-white shadow-xs'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              Maintenance (2)
            </button>
          </div>
        </div>

        {/* Grid 6 Kartu Kendaraan */}
        {activePage === 1 ? (
          <div className="grid w-full grid-cols-1 items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredVehicles.length === 0 ? (
              <div className="col-span-full rounded-xl border border-[#DDEAF2] bg-white p-8 text-center font-plusJakartaSans text-sm text-[#47607E]">
                Tidak ada kendaraan yang sesuai dengan pencarian atau status ini.
              </div>
            ) : (
              filteredVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#E3F0F8] bg-white shadow-xs transition-shadow hover:shadow-md"
                >
                  {/* Gambar Unit & Badges */}
                  <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-[#E3F0F8]">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold tracking-wide shadow-xs ${vehicle.statusBadgeBg} ${vehicle.statusBadgeText}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${vehicle.statusDotBg}`} />
                      <span>{vehicle.status === 'Maintenance' ? 'Perlu Servis' : vehicle.status === 'Disewa' ? 'Sedang Disewa' : vehicle.status}</span>
                    </div>
                    <span className="absolute bottom-3 left-3 rounded bg-[#263238]/85 px-2.5 py-0.5 font-liberationMono text-[11px] font-medium tracking-wider text-white shadow-xs">
                      {vehicle.plate}
                    </span>
                  </div>

                  {/* Body Konten */}
                  <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                    <div className="flex flex-col gap-3">
                      {/* Judul & Tahun */}
                      <div className="flex items-baseline justify-between gap-2">
                        <h3 className="font-plusJakartaSans text-base font-semibold leading-tight text-[#263238]">
                          {vehicle.name}
                        </h3>
                        <span className="shrink-0 font-plusJakartaSans text-xs font-medium text-[#47607E]">
                          {vehicle.year}
                        </span>
                      </div>

                      {/* Baris Metrik (Jarak Tempuh & Tag) */}
                      <div className="flex items-center gap-3 text-xs text-[#47607E]">
                        <div className="flex items-center gap-1">
                          <svg
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.63333 7.66667C5.9 7.93333 6.24444 8.06389 6.66667 8.05833C7.08889 8.05278 7.4 7.9 7.6 7.6L11.3333 2L5.73333 5.73333C5.43333 5.93333 5.275 6.23889 5.25833 6.65C5.24167 7.06111 5.36667 7.4 5.63333 7.66667V7.66667M6.66667 0C7.32222 0 7.95278 0.0916667 8.55833 0.275C9.16389 0.458333 9.73333 0.733333 10.2667 1.1L9 1.9C8.63333 1.71111 8.25278 1.56944 7.85833 1.475C7.46389 1.38056 7.06667 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 7.13333 1.39722 7.59444 1.525 8.05C1.65278 8.50556 1.83333 8.93333 2.06667 9.33333H11.2667C11.5222 8.91111 11.7083 8.47222 11.825 8.01667C11.9417 7.56111 12 7.08889 12 6.6C12 6.2 11.9528 5.81111 11.8583 5.43333C11.7639 5.05556 11.6222 4.68889 11.4333 4.33333L12.2333 3.06667C12.5667 3.58889 12.8306 4.14444 13.025 4.73333C13.2194 5.32222 13.3222 5.93333 13.3333 6.56667C13.3444 7.2 13.2722 7.80556 13.1167 8.38333C12.9611 8.96111 12.7333 9.51111 12.4333 10.0333C12.3111 10.2333 12.1444 10.3889 11.9333 10.5C11.7222 10.6111 11.5 10.6667 11.2667 10.6667H2.06667C1.83333 10.6667 1.61111 10.6111 1.4 10.5C1.18889 10.3889 1.02222 10.2333 0.9 10.0333C0.611111 9.53333 0.388889 9.00278 0.233333 8.44167C0.0777778 7.88056 0 7.28889 0 6.66667C0 5.74444 0.175 4.88056 0.525 4.075C0.875 3.26944 1.35278 2.56389 1.95833 1.95833C2.56389 1.35278 3.27222 0.875 4.08333 0.525C4.89444 0.175 5.75556 0 6.66667 0V0M6.78333 5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667V5.21667"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="font-plusJakartaSans font-medium">{vehicle.mileage}</span>
                        </div>
                        <span className="text-[#CBD5E1]">•</span>
                        <span className="font-plusJakartaSans font-medium text-[#47607E]">
                          {vehicle.metaTag}
                        </span>
                      </div>

                      {/* Box Info Tambahan */}
                      <div className={`flex items-start gap-2 rounded-lg p-2.5 ${vehicle.infoBoxBg}`}>
                        <div className={`shrink-0 pt-0.5 ${vehicle.infoIconColor}`}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.7 17.75L4.275 15.35L1.575 14.75L1.8375 11.975L0 9.875L1.8375 7.775L1.575 5L4.275 4.4L5.7 2L8.25 3.0875L10.8 2L12.225 4.4L14.925 5L14.6625 7.775L16.5 9.875L14.6625 11.975L14.925 14.75L12.225 15.35L10.8 17.75L8.25 16.6625L5.7 17.75V17.75M6.3375 15.8375L8.25 15.0125L10.2 15.8375L11.25 14.0375L13.3125 13.55L13.125 11.45L14.5125 9.875L13.125 8.2625L13.3125 6.1625L11.25 5.7125L10.1625 3.9125L8.25 4.7375L6.3 3.9125L5.25 5.7125L3.1875 6.1625L3.375 8.2625L1.9875 9.875L3.375 11.45L3.1875 13.5875L5.25 14.0375L6.3375 15.8375V15.8375M8.25 9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875V9.875M7.4625 12.5375L11.7 8.3L10.65 7.2125L7.4625 10.4L5.85 8.825L4.8 9.875L7.4625 12.5375V12.5375"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <p className={`font-plusJakartaSans text-[12px] leading-snug sm:text-[13px] ${vehicle.infoBoxText}`}>
                          {vehicle.infoBoxDesc}
                        </p>
                      </div>
                    </div>

                    {/* Footer Kartu */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#DDEAF2] pt-3.5">
                      <div className="flex items-center gap-1.5 font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 10C5.175 10 4.475 9.70833 3.9 9.125C3.325 8.54167 3.0375 7.84167 3.0375 7.025C3.0375 6.20833 3.325 5.50833 3.9 4.925C4.475 4.34167 5.175 4.05 6 4.05C6.825 4.05 7.525 4.34167 8.1 4.925C8.675 5.50833 8.9625 6.20833 8.9625 7.025C8.9625 7.84167 8.675 8.54167 8.1 9.125C7.525 9.70833 6.825 10 6 10ZM6 9C6.55 9 7.01667 8.80833 7.4 8.425C7.78333 8.04167 7.975 7.575 7.975 7.025C7.975 6.475 7.78333 6.00833 7.4 5.625C7.01667 5.24167 6.55 5.05 6 5.05C5.45 5.05 4.98333 5.24167 4.6 5.625C4.21667 6.00833 4.025 6.475 4.025 7.025C4.025 7.575 4.21667 8.04167 4.6 8.425C4.98333 8.80833 5.45 9 6 9Z"
                            fill="currentColor"
                          />
                        </svg>
                        <span>{vehicle.footerLabel}</span>
                      </div>

                      <Link
                        to={vehicle.detailUrl}
                        className="flex items-center gap-1 font-plusJakartaSans text-xs font-semibold text-[#0F766E] transition-colors hover:text-[#0D655E]"
                      >
                        <span>Lihat detail</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6V6"
                            fill="currentColor"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="w-full rounded-xl border border-[#DDEAF2] bg-white p-8 text-center shadow-xs">
            <p className="font-plusJakartaSans text-base font-semibold text-[#263238]">
              Data kendaraan halaman berikutnya belum tersedia.
            </p>
            <p className="mt-1 font-plusJakartaSans text-sm text-[#47607E]">
              Daftar pada halaman ini merupakan data contoh lokal armada aktif JagaRoda.
            </p>
          </div>
        )}

        {/* Footer & Paginasi */}
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-[#E3F0F8] pt-4 sm:flex-row">
          <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-[13px]">
            Menampilkan {filteredVehicles.length} kendaraan operasional • Status sinkron dengan sistem telemetri
          </p>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              aria-label="Halaman sebelumnya"
              disabled={activePage === 1}
              onClick={() => setActivePage(1)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#47607E] transition-colors hover:bg-[#D4E6F2] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 10L0 5L5 0L6.16667 1.16667L2.33333 5L6.16667 8.83333L5 10V10"
                  fill="currentColor"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-current={activePage === 1 ? 'page' : undefined}
              aria-label="Halaman 1"
              onClick={() => setActivePage(1)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activePage === 1
                  ? 'bg-[#0F766E] text-white'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              1
            </button>

            <button
              type="button"
              aria-current={activePage === 2 ? 'page' : undefined}
              aria-label="Halaman 2"
              onClick={() => setActivePage(2)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                activePage === 2
                  ? 'bg-[#0F766E] text-white'
                  : 'bg-[#E9F6FD] text-[#47607E] hover:bg-[#D4E6F2]'
              }`}
            >
              2
            </button>

            <button
              type="button"
              aria-label="Halaman berikutnya"
              disabled={activePage === 2}
              onClick={() => setActivePage(2)}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9F6FD] text-[#47607E] transition-colors hover:bg-[#D4E6F2] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg
                width="7"
                height="10"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.83333L3.83333 5V5"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
