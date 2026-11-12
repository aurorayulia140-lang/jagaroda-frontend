import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import StatusBadge from '../components/StatusBadge'

export default function Dashboard() {
  const [activeVehicleStatus, setActiveVehicleStatus] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Vehicle data for "Kondisi Kendaraan"
  const vehicles = [
    {
      id: 'avanza-1',
      name: 'Toyota Avanza',
      variant: 'Tipe G 1.5 M/T • Putih Metalik',
      plate: 'B 1234 AB',
      status: 'available',
      statusLabel: 'Tersedia',
      statusBadgeBg: 'bg-[#DCFCE7]',
      statusBadgeText: 'text-[#15803D]',
      image:
        '/Ab6axub2vqhda8qnmjfav8wmfignicp5jwunc4kqalfm1h4hd55qppqfhzxf70mbixy9ydrynlkesyaawc_gvfgouqdrsiy4tco9oayxgwo1pseicxmwycfwus8wez4lyb5xi80icg4s_hv9pqgval36gjxvhnyig2oufgzrojzyx8cqhtb_qo1hz09pwwsgk2cojnbspif1sb4n5bt0obzj10zkl38thgwhscsqmdy6pmgkh1h8rud9ig5g.png',
      healthCondition: 'Kondisi baik',
      healthPercent: 94,
      healthColor: 'text-[#15803D]',
      healthBarColor: 'bg-[#15803D]',
      lastService: 'Servis terakhir: 18 Okt 2024',
      location: 'Depot Pusat',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'brio-1',
      name: 'Honda Brio',
      variant: 'RS 1.2 CVT • Phoenix Orange',
      plate: 'L 5678 CD',
      status: 'rented',
      statusLabel: 'Sedang Disewa',
      statusBadgeBg: 'bg-[#DBEAFE]',
      statusBadgeText: 'text-[#2563EB]',
      image:
        '/Ab6axucxcgtfoxdv3rtklmm3fdbebj04vvhv9pvk8nxmgwapkpjgbuukmjq8qh4joejao4zrlyr2mfgc6tie6lcldlxblqobid_yc55opti4xldhh8ecaqe5dpmac_izqcfz7zs4fxcqe1ayacrp97epehji7hsihadi9jotd0wkht1k3uzlmvazjkayrfg23ms0bbd7pqqgsrhc8ih0gfwvpjriekc2cvphwa718etbzh2qipzvghqclg.png',
      renterName: 'Bpk. Dimas',
      city: 'Sidoarjo, Jawa Timur',
      returnDate: 'Return: 28 Okt 2024',
      gpsStatus: 'Live GPS On',
      detailUrl: '/kendaraan/detail',
    },
    {
      id: 'xpander-1',
      name: 'Mitsubishi Xpander',
      variant: 'Ultimate 1.5 A/T • Abu-abu Titanium',
      plate: 'B 9012 EF',
      status: 'maintenance',
      statusLabel: 'Maintenance',
      statusBadgeBg: 'bg-[#FEF3C7]',
      statusBadgeText: 'text-[#B45309]',
      image:
        '/Ab6axubnrjrjncmulncqubvuqjudl56hzsrmlltrs6g1mapiiquganqdxmn_638ilchmhylwiszvyfebnqk7eq_axjmeem6fxtt19tk_n4po2pkrnb5d55sdeotnuoa5qk0_msdik1cwmjvae0_xdpyqqlzojnybwre1zb9xav_rvwljrbbjecnukgr5xpmf6jjrlzigjjqqyoauzlza_t72sc2m3siits0l6ktvdr6gqxuz74udylo28na.png',
      issueLabel: 'Rem perlu diperiksa',
      healthPercent: 42,
      healthColor: 'text-[#B45309]',
      healthBarColor: 'bg-[#B45309]',
      scheduleInfo: 'Jadwal bengkel: Besok lusa',
      location: 'Bengkel Rekanan',
      detailUrl: '/kendaraan/detail',
    },
  ]

  const filteredVehicles = vehicles.filter((v) => {
    const matchesFilter =
      activeVehicleStatus === 'all' || v.status === activeVehicleStatus
    const q = searchQuery.trim().toLowerCase()
    const matchesSearch =
      !q ||
      v.name.toLowerCase().includes(q) ||
      v.plate.toLowerCase().includes(q) ||
      v.variant.toLowerCase().includes(q)
    return matchesFilter && matchesSearch
  })

  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      {/* Top Header Terpadu */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari kendaraan, nomor polisi..."
        greeting="Selamat Datang, Nino"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
      />

      {/* Main Content */}
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-6 p-4 sm:p-6 lg:gap-8 lg:p-8">
        {/* Banner Selamat Datang & Subheader */}
        <div className="flex w-full flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M5.2125 10.1625L9.45 5.925L8.38125 4.85625L5.2125 8.025L3.6375 6.45L2.56875 7.51875L5.2125 10.1625V10.1625M6 15C4.2625 14.5625 2.82812 13.5656 1.69687 12.0094C0.565625 10.4531 0 8.725 0 6.825V2.25L6 0L12 2.25V6.825C12 8.725 11.4344 10.4531 10.3031 12.0094C9.17188 13.5656 7.7375 14.5625 6 15V15M6 13.425C7.3 13.0125 8.375 12.1875 9.225 10.95C10.075 9.7125 10.5 8.3375 10.5 6.825V3.28125L6 1.59375L1.5 3.28125V6.825C1.5 8.3375 1.925 9.7125 2.775 10.95C3.625 12.1875 4.7 13.0125 6 13.425V13.425M6 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                  fill="#005C55"
                />
              </svg>
              <p className="font-plusJakartaSans text-[12px] font-semibold tracking-wider text-[#005C55]">
                SISTEM MANAJEMEN ARMADA AKTIF
              </p>
            </div>
            <h2 className="mt-1 font-plusJakartaSans text-2xl font-bold tracking-tight text-[#111D23] sm:text-[26px]">
              Halo, Nino!
            </h2>
            <p className="mt-0.5 font-plusJakartaSans text-sm text-[#47607E]">
              Ringkasan operasional dan kelaikan kendaraan rental hari ini.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 rounded-lg bg-[#DDEAF2] px-3.5 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#15803D]"></span>
              <p className="font-plusJakartaSans text-xs font-semibold text-[#3E4947] sm:text-[13px]">
                10 Unit Online (GPS Aktif)
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 rounded-lg bg-[#0F766E] px-3.5 py-2 text-white shadow-xs transition-colors hover:bg-[#0D655E]"
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L2.25 5.25L3.3 4.1625L5.25 6.1125V0H6.75V6.1125L8.7 4.1625L9.75 5.25L6 9V9M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V8.25H1.5V10.5V10.5V10.5H10.5V10.5V10.5V8.25H12V10.5C12 10.9125 11.8531 11.2656 11.5594 11.5594C11.2656 11.8531 10.9125 12 10.5 12H1.5V12"
                  fill="white"
                />
              </svg>
              <span className="font-plusJakartaSans text-xs font-semibold sm:text-[13px]">
                Ekspor Laporan
              </span>
            </button>
          </div>
        </div>

        {/* 4 Kartu Metrik Utama */}
        <div className="grid w-full grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Card 1: Total Kendaraan */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E3F0F8] bg-white p-5 shadow-xs transition-shadow hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-plusJakartaSans text-[13px] font-medium text-[#47607E]">
                Total Kendaraan
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#47607E]">
                <svg
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.75 12.8333V13.75C2.75 14.0097 2.66215 14.2274 2.48646 14.4031C2.31076 14.5788 2.09306 14.6667 1.83333 14.6667H0.916667C0.656944 14.6667 0.439236 14.5788 0.263542 14.4031C0.0878472 14.2274 0 14.0097 0 13.75V6.41667L1.925 0.916667C2.01667 0.641667 2.1809 0.420139 2.41771 0.252083C2.65451 0.0840278 2.91806 0 3.20833 0H13.2917C13.5819 0 13.8455 0.0840278 14.0823 0.252083C14.3191 0.420139 14.4833 0.641667 14.575 0.916667L16.5 6.41667V13.75C16.5 14.0097 16.4122 14.2274 16.2365 14.4031C16.0608 14.5788 15.8431 14.6667 15.5833 14.6667H14.6667C14.4069 14.6667 14.1892 14.5788 14.0135 14.4031C13.8378 14.2274 13.75 14.0097 13.75 13.75V12.8333H2.75V12.8333M2.56667 4.58333H13.9333L12.9708 1.83333H3.52917L2.56667 4.58333V4.58333M1.83333 6.41667V6.41667V11V11V6.41667V6.41667M4.125 10.0833C4.50694 10.0833 4.8316 9.94965 5.09896 9.68229C5.36632 9.41493 5.5 9.09028 5.5 8.70833C5.5 8.32639 5.36632 8.00174 5.09896 7.73438C4.8316 7.46701 4.50694 7.33333 4.125 7.33333C3.74306 7.33333 3.4184 7.46701 3.15104 7.73438C2.88368 8.00174 2.75 8.32639 2.75 8.70833C2.75 9.09028 2.88368 9.41493 3.15104 9.68229C3.4184 9.94965 3.74306 10.0833 4.125 10.0833V10.0833M12.375 10.0833C12.7569 10.0833 13.0816 9.94965 13.349 9.68229C13.6163 9.41493 13.75 9.09028 13.75 8.70833C13.75 8.32639 13.6163 8.00174 13.349 7.73438C13.0816 7.46701 12.7569 7.33333 12.375 7.33333C11.9931 7.33333 11.6684 7.46701 11.401 7.73438C11.1337 8.00174 11 8.32639 11 8.70833C11 9.09028 11.1337 9.41493 11.401 9.68229C11.6684 9.94965 11.9931 10.0833 12.375 10.0833V10.0833M1.83333 11H14.6667V6.41667H1.83333V11V11"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-plusJakartaSans text-3xl font-bold tracking-tight text-[#111D23]">
                12
              </span>
              <span className="rounded-full bg-[#DDEAF2] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#47607E]">
                100% Kapasitas
              </span>
            </div>
            <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div
                className="h-full rounded-full bg-[#47607E]"
                style={{ width: '100%' }}
              />
            </div>
          </div>

          {/* Card 2: Tersedia */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E3F0F8] bg-white p-5 shadow-xs transition-shadow hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-plusJakartaSans text-[13px] font-medium text-[#47607E]">
                Tersedia
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#15803D]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.88333 13.3833L14.3458 6.92083L13.0625 5.6375L7.88333 10.8167L5.27083 8.20417L3.9875 9.4875L7.88333 13.3833V13.3833M9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20312 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20312 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20312 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20312 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333V18.3333M9.16667 16.5C11.2139 16.5 12.9479 15.7896 14.3687 14.3687C15.7896 12.9479 16.5 11.2139 16.5 9.16667C16.5 7.11944 15.7896 5.38542 14.3687 3.96458C12.9479 2.54375 11.2139 1.83333 9.16667 1.83333C7.11944 1.83333 5.38542 2.54375 3.96458 3.96458C2.54375 5.38542 1.83333 7.11944 1.83333 9.16667C1.83333 11.2139 2.54375 12.9479 3.96458 14.3687C5.38542 15.7896 7.11944 16.5 9.16667 16.5V16.5M9.16667 9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-plusJakartaSans text-3xl font-bold tracking-tight text-[#111D23]">
                7
              </span>
              <span className="rounded-full bg-[#DCFCE7] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#15803D]">
                Siap Sewa
              </span>
            </div>
            <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div
                className="h-full rounded-full bg-[#15803D]"
                style={{ width: '58.3%' }}
              />
            </div>
          </div>

          {/* Card 3: Sedang Disewa */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E3F0F8] bg-white p-5 shadow-xs transition-shadow hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-plusJakartaSans text-[13px] font-medium text-[#47607E]">
                Sedang Disewa
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#DBEAFE] text-[#2563EB]">
                <svg
                  width="22"
                  height="11"
                  viewBox="0 0 22 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5 7.33333C4.99583 7.33333 4.56424 7.15382 4.20521 6.79479C3.84618 6.43576 3.66667 6.00417 3.66667 5.5C3.66667 4.99583 3.84618 4.56424 4.20521 4.20521C4.56424 3.84618 4.99583 3.66667 5.5 3.66667C6.00417 3.66667 6.43576 3.84618 6.79479 4.20521C7.15382 4.56424 7.33333 4.99583 7.33333 5.5C7.33333 6.00417 7.15382 6.43576 6.79479 6.79479C6.43576 7.15382 6.00417 7.33333 5.5 7.33333V7.33333M5.5 11C3.97222 11 2.67361 10.4653 1.60417 9.39583C0.534722 8.32639 0 7.02778 0 5.5C0 3.97222 0.534722 2.67361 1.60417 1.60417C2.67361 0.534722 3.97222 0 5.5 0C6.52361 0 7.45174 0.252083 8.28438 0.75625C9.11701 1.26042 9.77778 1.925 10.2667 2.75H18.3333L21.0833 5.5L16.9583 9.625L15.125 8.25L13.2917 9.625L11.3438 8.25H10.2667C9.77778 9.075 9.11701 9.73958 8.28438 10.2437C7.45174 10.7479 6.52361 11 5.5 11V11M5.5 9.16667C6.35556 9.16667 7.10799 8.90694 7.75729 8.3875C8.4066 7.86806 8.83819 7.21111 9.05208 6.41667H11.9167L13.2458 7.35625L15.125 5.95833L16.7521 7.21875L18.4708 5.5L17.5542 4.58333H9.05208C8.83819 3.78889 8.4066 3.13194 7.75729 2.6125C7.10799 2.09306 6.35556 1.83333 5.5 1.83333C4.49167 1.83333 3.62847 2.19236 2.91042 2.91042C2.19236 3.62847 1.83333 4.49167 1.83333 5.5C1.83333 6.50833 2.19236 7.37153 2.91042 8.08958C3.62847 8.80764 4.49167 9.16667 5.5 9.16667V9.16667"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-plusJakartaSans text-3xl font-bold tracking-tight text-[#111D23]">
                3
              </span>
              <span className="rounded-full bg-[#DBEAFE] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#2563EB]">
                On-Trip
              </span>
            </div>
            <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div
                className="h-full rounded-full bg-[#2563EB]"
                style={{ width: '25%' }}
              />
            </div>
          </div>

          {/* Card 4: Maintenance */}
          <div className="flex flex-col justify-between rounded-xl border border-[#E3F0F8] bg-white p-5 shadow-xs transition-shadow hover:shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-plusJakartaSans text-[13px] font-medium text-[#47607E]">
                Maintenance
              </span>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#B45309]">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9708 16.225L7.425 10.6333C7.11944 10.7556 6.81007 10.8472 6.49687 10.9083C6.18368 10.9694 5.85139 11 5.5 11C3.97222 11 2.67361 10.4653 1.60417 9.39583C0.534722 8.32639 0 7.02778 0 5.5C0 4.95 0.0763889 4.42674 0.229167 3.93021C0.381944 3.43368 0.595833 2.96389 0.870833 2.52083L4.21667 5.86667L5.86667 4.21667L2.52083 0.870833C2.96389 0.595833 3.43368 0.381944 3.93021 0.229167C4.42674 0.0763889 4.95 0 5.5 0C7.02778 0 8.32639 0.534722 9.39583 1.60417C10.4653 2.67361 11 3.97222 11 5.5C11 5.85139 10.9694 6.18368 10.9083 6.49687C10.8472 6.81007 10.7556 7.11944 10.6333 7.425L16.225 12.9708C16.4083 13.1542 16.5 13.3757 16.5 13.6354C16.5 13.8951 16.4083 14.1167 16.225 14.3L14.3 16.225C14.1167 16.4083 13.8951 16.5 13.6354 16.5C13.3757 16.5 13.1542 16.4083 12.9708 16.225V16.225M13.6354 14.2771L14.2542 13.6583L8.3875 7.79167C8.6625 7.48611 8.86111 7.1309 8.98333 6.72604C9.10556 6.32118 9.16667 5.9125 9.16667 5.5C9.16667 4.58333 8.87257 3.78507 8.28438 3.10521C7.69618 2.42535 6.96667 2.01667 6.09583 1.87917L7.79167 3.575C7.975 3.75833 8.06667 3.97222 8.06667 4.21667C8.06667 4.46111 7.975 4.675 7.79167 4.85833L4.85833 7.79167C4.675 7.975 4.46111 8.06667 4.21667 8.06667C3.97222 8.06667 3.75833 7.975 3.575 7.79167L1.87917 6.09583C2.01667 6.96667 2.42535 7.69618 3.10521 8.28438C3.78507 8.87257 4.58333 9.16667 5.5 9.16667C5.89722 9.16667 6.29444 9.10556 6.69167 8.98333C7.08889 8.86111 7.44792 8.67014 7.76875 8.41042L13.6354 14.2771V14.2771M8.06667 8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667V8.06667"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="font-plusJakartaSans text-3xl font-bold tracking-tight text-[#111D23]">
                2
              </span>
              <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 font-plusJakartaSans text-[11px] font-semibold text-[#B45309]">
                Perlu Servis
              </span>
            </div>
            <div className="mt-3.5 h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
              <div
                className="h-full rounded-full bg-[#B45309]"
                style={{ width: '16.7%' }}
              />
            </div>
          </div>
        </div>

        {/* 2 Kolom Layout Utama: Kondisi Kendaraan & Maintenance Terdekat */}
        <div className="grid w-full grid-cols-1 items-start gap-6 xl:grid-cols-[minmax(0,1.55fr)_minmax(320px,1fr)] xl:gap-8">
          {/* Kolom Kiri: Kondisi Kendaraan */}
          <div className="flex min-w-0 flex-col items-start gap-4">
            {/* Header Section & Filter */}
            <div className="flex w-full flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-plusJakartaSans text-lg font-semibold tracking-tight text-[#111D23] sm:text-xl">
                  Kondisi Kendaraan
                </h3>
                <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-[13px]">
                  Status kelaikan dan riwayat operasional terkini.
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-pressed={activeVehicleStatus === 'all'}
                  onClick={() => setActiveVehicleStatus('all')}
                  className={`cursor-pointer rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                    activeVehicleStatus === 'all'
                      ? 'bg-white text-[#111D23] shadow-xs'
                      : 'bg-[#E3F0F8] text-[#47607E] hover:bg-[#D4E6F2]'
                  }`}
                >
                  Semua
                </button>
                <button
                  type="button"
                  aria-pressed={activeVehicleStatus === 'available'}
                  onClick={() => setActiveVehicleStatus('available')}
                  className={`cursor-pointer rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                    activeVehicleStatus === 'available'
                      ? 'bg-white text-[#111D23] shadow-xs'
                      : 'bg-[#E3F0F8] text-[#47607E] hover:bg-[#D4E6F2]'
                  }`}
                >
                  Tersedia
                </button>
                <button
                  type="button"
                  aria-pressed={activeVehicleStatus === 'rented'}
                  onClick={() => setActiveVehicleStatus('rented')}
                  className={`cursor-pointer rounded-lg px-3 py-1.5 font-plusJakartaSans text-xs font-semibold transition-colors sm:text-[13px] ${
                    activeVehicleStatus === 'rented'
                      ? 'bg-white text-[#111D23] shadow-xs'
                      : 'bg-[#E3F0F8] text-[#47607E] hover:bg-[#D4E6F2]'
                  }`}
                >
                  Disewa
                </button>
                <Link
                  to="/kendaraan"
                  className="ml-1 flex items-center gap-1 font-plusJakartaSans text-xs font-semibold text-[#005C55] transition-colors hover:text-[#0F766E] sm:text-[13px]"
                >
                  <span>Lihat Semua</span>
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

            {/* Grid 3 Kendaraan */}
            <div className="grid w-full grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
              {filteredVehicles.length === 0 ? (
                <div className="col-span-full rounded-xl border border-[#DDEAF2] bg-white p-8 text-center">
                  <p className="font-plusJakartaSans text-sm text-[#47607E]">
                    Tidak ada kendaraan yang sesuai dengan filter atau kata kunci pencarian.
                  </p>
                </div>
              ) : (
                filteredVehicles.map((vehicle) => (
                  <div
                    key={vehicle.id}
                    className="flex flex-col justify-between overflow-hidden rounded-xl border border-[#E3F0F8] bg-white p-4 shadow-xs transition-shadow hover:shadow-md"
                  >
                    <div className="flex flex-col gap-3">
                      {/* Gambar Unit */}
                      <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg bg-[#E3F0F8] sm:h-44">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute right-2.5 top-2.5 shadow-xs">
                          <StatusBadge
                            status={
                              vehicle.status === 'available'
                                ? 'success'
                                : vehicle.status === 'rented'
                                ? 'info'
                                : 'warning'
                            }
                            label={vehicle.statusLabel}
                            size="sm"
                          />
                        </div>
                        <span className="absolute bottom-2.5 left-2.5 rounded bg-white/90 px-2 py-0.5 font-plusJakartaSans text-[11px] font-semibold tracking-wider text-[#111D23] shadow-xs">
                          {vehicle.plate}
                        </span>
                      </div>

                      {/* Info Utama */}
                      <div>
                        <h4 className="font-plusJakartaSans text-base font-semibold leading-snug text-[#111D23]">
                          {vehicle.name}
                        </h4>
                        <p className="mt-0.5 font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                          {vehicle.variant}
                        </p>
                      </div>

                      {/* Detail spesifik per status */}
                      {vehicle.status === 'available' && (
                        <div className="flex flex-col gap-1.5 pt-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1 font-plusJakartaSans text-[13px] text-[#3E4947]">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#15803D]"
                              >
                                <path
                                  d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333V9.73333M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.6C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12V12M6.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                                  fill="currentColor"
                                />
                              </svg>
                              {vehicle.healthCondition}
                            </span>
                            <span className="font-plusJakartaSans font-semibold text-[#111D23]">
                              {vehicle.healthPercent}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
                            <div
                              className="h-full rounded-full bg-[#15803D]"
                              style={{ width: `${vehicle.healthPercent}%` }}
                            />
                          </div>
                          <p className="mt-1 flex items-center gap-1 font-plusJakartaSans text-[11px] text-[#47607E]">
                            <svg
                              width="11"
                              height="12"
                              viewBox="0 0 11 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H1.75V0H2.91667V1.16667H7.58333V0H8.75V1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V10.5C10.5 10.8208 10.3858 11.0955 10.1573 11.324C9.92882 11.5524 9.65417 11.6667 9.33333 11.6667H1.16667V11.6667M1.16667 10.5H9.33333V10.5V10.5V4.66667H1.16667V10.5V10.5V10.5V10.5M1.16667 3.5H9.33333V2.33333V2.33333V2.33333H1.16667V2.33333V2.33333V3.5V3.5M1.16667 3.5V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V3.5V3.5V3.5"
                                fill="currentColor"
                              />
                            </svg>
                            {vehicle.lastService}
                          </p>
                        </div>
                      )}

                      {vehicle.status === 'rented' && (
                        <div className="flex flex-col gap-1.5 rounded-lg bg-[#E3F0F8] p-2.5">
                          <div className="flex items-center gap-1.5 font-plusJakartaSans text-xs font-semibold text-[#111D23]">
                            <svg
                              width="11"
                              height="11"
                              viewBox="0 0 11 11"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.33333 5.33333C4.6 5.33333 3.97222 5.07222 3.45 4.55C2.92778 4.02778 2.66667 3.4 2.66667 2.66667C2.66667 1.93333 2.92778 1.30556 3.45 0.783333C3.97222 0.261111 4.6 0 5.33333 0C6.06667 0 6.69444 0.261111 7.21667 0.783333C7.73889 1.30556 8 1.93333 8 2.66667C8 3.4 7.73889 4.02778 7.21667 4.55C6.69444 5.07222 6.06667 5.33333 5.33333 5.33333V5.33333M0 10.6667V8.8C0 8.42222 0.0972222 8.075 0.291667 7.75833C0.486111 7.44167 0.744444 7.2 1.06667 7.03333C1.75556 6.68889 2.45556 6.43056 3.16667 6.25833C3.87778 6.08611 4.6 6 5.33333 6C6.06667 6 6.78889 6.08611 7.5 6.25833C8.21111 6.43056 8.91111 6.68889 9.6 7.03333C9.92222 7.2 10.1806 7.44167 10.375 7.75833C10.5694 8.075 10.6667 8.42222 10.6667 8.8V10.6667H0V10.6667M1.33333 9.33333H9.33333V8.8C9.33333 8.67778 9.30278 8.56667 9.24167 8.46667C9.18056 8.36667 9.1 8.28889 9 8.23333C8.4 7.93333 7.79444 7.70833 7.18333 7.55833C6.57222 7.40833 5.95556 7.33333 5.33333 7.33333C4.71111 7.33333 4.09444 7.40833 3.48333 7.55833C2.87222 7.70833 2.26667 7.93333 1.66667 8.23333C1.56667 8.28889 1.48611 8.36667 1.425 8.46667C1.36389 8.56667 1.33333 8.67778 1.33333 8.8V9.33333V9.33333M5.33333 4C5.7 4 6.01389 3.86944 6.275 3.60833C6.53611 3.34722 6.66667 3.03333 6.66667 2.66667C6.66667 2.3 6.53611 1.98611 6.275 1.725C6.01389 1.46389 5.7 1.33333 5.33333 1.33333C4.96667 1.33333 4.65278 1.46389 4.39167 1.725C4.13056 1.98611 4 2.3 4 2.66667C4 3.03333 4.13056 3.34722 4.39167 3.60833C4.65278 3.86944 4.96667 4 5.33333 4V4M5.33333 2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667M5.33333 9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333"
                                fill="currentColor"
                              />
                            </svg>
                            <span>{vehicle.renterName}</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-plusJakartaSans text-[11px] text-[#47607E]">
                            <svg
                              width="9"
                              height="12"
                              viewBox="0 0 9 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4.08333 8.44375C5.04583 7.66597 5.77257 6.91736 6.26354 6.19792C6.75451 5.47847 7 4.80278 7 4.17083C7 3.29583 6.72778 2.57639 6.18333 2.0125C5.63889 1.44861 4.93889 1.16667 4.08333 1.16667C3.22778 1.16667 2.52778 1.44861 1.98333 2.0125C1.43889 2.57639 1.16667 3.29583 1.16667 4.17083C1.16667 4.80278 1.41215 5.47847 1.90313 6.19792C2.3941 6.91736 3.12083 7.66597 4.08333 8.44375V8.44375M4.08333 9.91667C2.7125 8.90556 1.68924 7.92361 1.01354 6.97083C0.337847 6.01806 0 5.08472 0 4.17083C0 2.95556 0.379167 1.9566 1.1375 1.17396C1.89583 0.391319 2.87778 0 4.08333 0C5.28889 0 6.27083 0.391319 7.02917 1.17396C7.7875 1.9566 8.16667 2.95556 8.16667 4.17083C8.16667 5.08472 7.82882 6.01806 7.15312 6.97083C6.47743 7.92361 5.45417 8.90556 4.08333 9.91667V9.91667M4.08333 5.25C4.40417 5.25 4.67882 5.13576 4.90729 4.90729C5.13576 4.67882 5.25 4.40417 5.25 4.08333C5.25 3.7625 5.13576 3.48785 4.90729 3.25938C4.67882 3.0309 4.40417 2.91667 4.08333 2.91667C3.7625 2.91667 3.48785 3.0309 3.25938 3.25938C3.0309 3.48785 2.91667 3.7625 2.91667 4.08333C2.91667 4.40417 3.0309 4.67882 3.25938 4.90729C3.48785 5.13576 3.7625 5.25 4.08333 5.25V5.25M0 11.6667V10.5H8.16667V11.6667H0V11.6667M4.08333 4.08333V4.08333V4.08333V4.08333V4.08333V4.08333V4.08333V4.08333V4.08333V4.08333"
                                fill="currentColor"
                              />
                            </svg>
                            <span>{vehicle.city}</span>
                          </div>
                          <div className="flex items-center gap-1.5 font-plusJakartaSans text-[11px] text-[#47607E]">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H1.75V0H2.91667V1.16667H7.58333V0H8.75V1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V5.83333H9.33333V4.66667H1.16667V10.5V10.5V10.5H5.25V11.6667H1.16667V11.6667M9.33333 12.8333C8.62361 12.8333 8.00382 12.6122 7.47396 12.1698C6.9441 11.7274 6.61111 11.1708 6.475 10.5H7.37917C7.50556 10.9278 7.74618 11.2778 8.10104 11.55C8.4559 11.8222 8.86667 11.9583 9.33333 11.9583C9.89722 11.9583 10.3785 11.759 10.7771 11.3604C11.1757 10.9618 11.375 10.4806 11.375 9.91667C11.375 9.35278 11.1757 8.87153 10.7771 8.47292C10.3785 8.07431 9.89722 7.875 9.33333 7.875C9.05139 7.875 8.78889 7.92604 8.54583 8.02812C8.30278 8.13021 8.08889 8.27361 7.90417 8.45833H8.75V9.33333H6.41667V7H7.29167V7.83125C7.55417 7.57847 7.86042 7.37674 8.21042 7.22604C8.56042 7.07535 8.93472 7 9.33333 7C10.1403 7 10.8281 7.28438 11.3969 7.85313C11.9656 8.42188 12.25 9.10972 12.25 9.91667C12.25 10.7236 11.9656 11.4115 11.3969 11.9802C10.8281 12.549 10.1403 12.8333 9.33333 12.8333V12.8333M1.16667 3.5H9.33333V2.33333V2.33333V2.33333H1.16667V2.33333V2.33333V3.5V3.5M1.16667 3.5V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V3.5V3.5V3.5"
                                fill="currentColor"
                              />
                            </svg>
                            <span>{vehicle.returnDate}</span>
                          </div>
                        </div>
                      )}

                      {vehicle.status === 'maintenance' && (
                        <div className="flex flex-col gap-1.5 pt-1">
                          <div className="flex items-center justify-between text-xs">
                            <span className="flex items-center gap-1 font-plusJakartaSans text-[13px] text-[#B45309]">
                              <svg
                                width="15"
                                height="13"
                                viewBox="0 0 15 13"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-[#B45309]"
                              >
                                <path
                                  d="M0 12.6667L7.33333 0L14.6667 12.6667H0V12.6667M2.3 11.3333H12.3667L7.33333 2.66667L2.3 11.3333V11.3333M7.33333 10.6667C7.52222 10.6667 7.68056 10.6028 7.80833 10.475C7.93611 10.3472 8 10.1889 8 10C8 9.81111 7.93611 9.65278 7.80833 9.525C7.68056 9.39722 7.52222 9.33333 7.33333 9.33333C7.14444 9.33333 6.98611 9.39722 6.85833 9.525C6.73056 9.65278 6.66667 9.81111 6.66667 10C6.66667 10.1889 6.73056 10.3472 6.85833 10.475C6.98611 10.6028 7.14444 10.6667 7.33333 10.6667V10.6667M6.66667 8.66667H8V5.33333H6.66667V8.66667V8.66667M7.33333 7V7V7V7V7"
                                  fill="currentColor"
                                />
                              </svg>
                              {vehicle.issueLabel}
                            </span>
                            <span className="font-plusJakartaSans font-semibold text-[#B45309]">
                              {vehicle.healthPercent}%
                            </span>
                          </div>
                          <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E3F0F8]">
                            <div
                              className="h-full rounded-full bg-[#B45309]"
                              style={{ width: `${vehicle.healthPercent}%` }}
                            />
                          </div>
                          <p className="mt-1 flex items-center gap-1 font-plusJakartaSans text-[11px] text-[#B45309]">
                            <svg
                              width="13"
                              height="12"
                              viewBox="0 0 13 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M6.2125 11.4625C5.48333 11.4625 4.80035 11.324 4.16354 11.0469C3.52674 10.7698 2.97257 10.3955 2.50104 9.92396C2.02951 9.45243 1.65521 8.89826 1.37812 8.26146C1.10104 7.62465 0.9625 6.94167 0.9625 6.2125C0.9625 5.48333 1.10104 4.80035 1.37812 4.16354C1.65521 3.52674 2.02951 2.97257 2.50104 2.50104C2.97257 2.02951 3.52674 1.65521 4.16354 1.37812C4.80035 1.10104 5.48333 0.9625 6.2125 0.9625C6.94167 0.9625 7.62465 1.10104 8.26146 1.37812C8.89826 1.65521 9.45243 2.02951 9.92396 2.50104C10.3955 2.97257 10.7698 3.52674 11.0469 4.16354C11.324 4.80035 11.4625 5.48333 11.4625 6.2125C11.4625 6.94167 11.324 7.62465 11.0469 8.26146C10.7698 8.89826 10.3955 9.45243 9.92396 9.92396C9.45243 10.3955 8.89826 10.7698 8.26146 11.0469C7.62465 11.324 6.94167 11.4625 6.2125 11.4625V11.4625M6.2125 6.2125V6.2125V6.2125V6.2125V6.2125V6.2125V6.2125V6.2125V6.2125V6.2125M7.84583 8.6625L8.6625 7.84583L6.79583 5.97917V3.29583H5.62917V6.44583L7.84583 8.6625V8.6625M2.47917 0L3.29583 0.816667L0.816667 3.29583L0 2.47917L2.47917 0V0M9.94583 0L12.425 2.47917L11.6083 3.29583L9.12917 0.816667L9.94583 0V0M6.2125 10.2958C7.35 10.2958 8.31493 9.89965 9.10729 9.10729C9.89965 8.31493 10.2958 7.35 10.2958 6.2125C10.2958 5.075 9.89965 4.11007 9.10729 3.31771C8.31493 2.52535 7.35 2.12917 6.2125 2.12917C5.075 2.12917 4.11007 2.52535 3.31771 3.31771C2.52535 4.11007 2.12917 5.075 2.12917 6.2125C2.12917 7.35 2.52535 8.31493 3.31771 9.10729C4.11007 9.89965 5.075 10.2958 6.2125 10.2958V10.2958"
                                fill="currentColor"
                              />
                            </svg>
                            {vehicle.scheduleInfo}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-4 flex items-center justify-between border-t border-[#E3F0F8] pt-3.5">
                      <div className="flex items-center gap-1.5 font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                        {vehicle.status === 'rented' ? (
                          <>
                            <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                            <span className="text-[#2563EB]">{vehicle.gpsStatus}</span>
                          </>
                        ) : (
                          <span>{vehicle.location}</span>
                        )}
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
                ))
              )}
            </div>

            {/* Banner Efisiensi Bahan Bakar */}
            <div className="flex w-full flex-col items-start justify-between gap-3 rounded-xl bg-[#E3F0F8] p-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#005C55] shadow-xs">
                  <svg
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.85833 13.4167C10.325 13.8833 10.9278 14.1118 11.6667 14.1021C12.4056 14.0924 12.95 13.825 13.3 13.3L19.8333 3.5L10.0333 10.0333C9.50833 10.3833 9.23125 10.9181 9.20208 11.6375C9.17292 12.3569 9.39167 12.95 9.85833 13.4167V13.4167M11.6667 0C12.8139 0 13.9174 0.160417 14.9771 0.48125C16.0368 0.802083 17.0333 1.28333 17.9667 1.925L15.75 3.325C15.1083 2.99444 14.4424 2.74653 13.7521 2.58125C13.0618 2.41597 12.3667 2.33333 11.6667 2.33333C9.08056 2.33333 6.87847 3.24236 5.06042 5.06042C3.24236 6.87847 2.33333 9.08056 2.33333 11.6667C2.33333 12.4833 2.44514 13.2903 2.66875 14.0875C2.89236 14.8847 3.20833 15.6333 3.61667 16.3333H19.7167C20.1639 15.5944 20.4896 14.8264 20.6938 14.0292C20.8979 13.2319 21 12.4056 21 11.55C21 10.85 20.9174 10.1694 20.7521 9.50833C20.5868 8.84722 20.3389 8.20556 20.0083 7.58333L21.4083 5.36667C21.9917 6.28056 22.4535 7.25278 22.7938 8.28333C23.134 9.31389 23.3139 10.3833 23.3333 11.4917C23.3528 12.6 23.2264 13.6597 22.9542 14.6708C22.6819 15.6819 22.2833 16.6444 21.7583 17.5583C21.5444 17.9083 21.2528 18.1806 20.8833 18.375C20.5139 18.5694 20.125 18.6667 19.7167 18.6667H3.61667C3.20833 18.6667 2.81944 18.5694 2.45 18.375C2.08056 18.1806 1.78889 17.9083 1.575 17.5583C1.06944 16.6833 0.680556 15.7549 0.408333 14.7729C0.136111 13.791 0 12.7556 0 11.6667C0 10.0528 0.30625 8.54097 0.91875 7.13125C1.53125 5.72153 2.36736 4.48681 3.42708 3.42708C4.48681 2.36736 5.72639 1.53125 7.14583 0.91875C8.56528 0.30625 10.0722 0 11.6667 0V0M11.8708 9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-plusJakartaSans text-sm font-semibold text-[#111D23] sm:text-base">
                    Efisiensi Bahan Bakar & Jarak Tempuh Armada
                  </h4>
                  <p className="font-plusJakartaSans text-[11px] text-[#47607E] sm:text-xs">
                    Total akumulasi perjalanan minggu ini: 4.820 km • Rata-rata konsumsi BBM: 13.8 km/L
                  </p>
                </div>
              </div>
              <div className="shrink-0 rounded-lg bg-white px-3 py-1.5 shadow-xs">
                <span className="font-plusJakartaSans text-xs font-semibold text-[#111D23]">
                  +8.4% Utilisasi
                </span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Maintenance Terdekat */}
          <div className="flex min-w-0 flex-col items-start gap-4">
            <div className="flex w-full items-center justify-between">
              <div>
                <h3 className="font-plusJakartaSans text-lg font-semibold tracking-tight text-[#111D23] sm:text-xl">
                  Maintenance Terdekat
                </h3>
                <p className="font-plusJakartaSans text-xs text-[#47607E] sm:text-[13px]">
                  Jadwal perawatan pencegahan.
                </p>
              </div>
              <Link
                to="/maintenance"
                className="flex items-center gap-1 font-plusJakartaSans text-xs font-semibold text-[#005C55] transition-colors hover:text-[#0F766E] sm:text-[13px]"
              >
                <span>Kalender</span>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4V4"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>

            {/* Card Container Maintenance */}
            <div className="flex w-full flex-col items-start gap-3.5 rounded-xl border border-[#E3F0F8] bg-white p-4 shadow-xs">
              {/* Item 1 */}
              <div className="flex w-full flex-col gap-2 rounded-lg bg-[#E9F6FD] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#B45309]">
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0417 17.4792C13.9306 17.4792 13.8264 17.4618 13.7292 17.4271C13.6319 17.3924 13.5417 17.3333 13.4583 17.25L9.20833 13C9.125 12.9167 9.06597 12.8264 9.03125 12.7292C8.99653 12.6319 8.97917 12.5278 8.97917 12.4167C8.97917 12.3056 8.99653 12.2014 9.03125 12.1042C9.06597 12.0069 9.125 11.9167 9.20833 11.8333L10.9792 10.0625C11.0625 9.97917 11.1528 9.92014 11.25 9.88542C11.3472 9.85069 11.4514 9.83333 11.5625 9.83333C11.6736 9.83333 11.7778 9.85069 11.875 9.88542C11.9722 9.92014 12.0625 9.97917 12.1458 10.0625L16.3958 14.3125C16.4792 14.3958 16.5382 14.4861 16.5729 14.5833C16.6076 14.6806 16.625 14.7847 16.625 14.8958C16.625 15.0069 16.6076 15.1111 16.5729 15.2083C16.5382 15.3056 16.4792 15.3958 16.3958 15.4792L14.625 17.25C14.5417 17.3333 14.4514 17.3924 14.3542 17.4271C14.2569 17.4618 14.1528 17.4792 14.0417 17.4792V17.4792M14.0417 15.5L14.6458 14.8958L11.5833 11.8333L10.9792 12.4375L14.0417 15.5V15.5M2.60417 17.5C2.49306 17.5 2.38542 17.4792 2.28125 17.4375C2.17708 17.3958 2.08333 17.3333 2 17.25L0.25 15.5C0.166667 15.4167 0.104167 15.3229 0.0625 15.2188C0.0208333 15.1146 0 15.0069 0 14.8958C0 14.7847 0.0208333 14.6806 0.0625 14.5833C0.104167 14.4861 0.166667 14.3958 0.25 14.3125L4.66667 9.89583H6.4375L7.14583 9.1875L3.70833 5.75H2.52083L0 3.22917L2.35417 0.875L4.875 3.39583V4.58333L8.3125 8.02083L10.7292 5.60417L9.83333 4.70833L11 3.54167H8.64583L8.0625 2.95833L11.0208 0L11.6042 0.583333V2.9375L12.7708 1.77083L15.7292 4.72917C15.9653 4.96528 16.1458 5.23264 16.2708 5.53125C16.3958 5.82986 16.4583 6.14583 16.4583 6.47917C16.4583 6.8125 16.3958 7.13194 16.2708 7.4375C16.1458 7.74306 15.9653 8.01389 15.7292 8.25L13.9583 6.47917L12.7917 7.64583L11.9167 6.77083L7.60417 11.0833V12.8333L3.1875 17.25C3.10417 17.3333 3.01389 17.3958 2.91667 17.4375C2.81944 17.4792 2.71528 17.5 2.60417 17.5V17.5M2.60417 15.5L6.14583 11.9583V11.3542H5.54167L2 14.8958L2.60417 15.5V15.5M2.60417 15.5L2 14.8958V14.8958L2.3125 15.1875L2.60417 15.5V15.5V15.5M14.0417 15.5V15.5L14.6458 14.8958V14.8958L14.0417 15.5V15.5"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                        Mitsubishi Xpander
                      </h4>
                      <p className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                        B 9012 EF
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 font-plusJakartaSans text-[11px] font-bold text-[#B45309]">
                    2 hari lagi
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-[#DDEAF2]/60 pt-2 text-xs">
                  <div className="flex items-center gap-1.5 font-plusJakartaSans text-[12px] text-[#111D23]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B45309]" />
                    <span>Servis rem & penggantian kampas</span>
                  </div>
                  <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    26 Okt
                  </span>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex w-full flex-col gap-2 rounded-lg bg-[#E9F6FD] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#E3F0F8] text-[#47607E]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.66667 15V10H8.33333V11.6667H15V13.3333H8.33333V15H6.66667V15M0 13.3333V11.6667H5V13.3333H0V13.3333M3.33333 10V8.33333H0V6.66667H3.33333V5H5V10H3.33333V10M6.66667 8.33333V6.66667H15V8.33333H6.66667V8.33333M10 5V0H11.6667V1.66667H15V3.33333H11.6667V5H10V5M0 3.33333V1.66667H8.33333V3.33333H0V3.33333"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                        Toyota Avanza
                      </h4>
                      <p className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                        B 1234 AB
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#DDEAF2] px-2.5 py-1 font-plusJakartaSans text-[11px] font-bold text-[#47607E]">
                    16 hari lagi
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-[#DDEAF2]/60 pt-2 text-xs">
                  <div className="flex items-center gap-1.5 font-plusJakartaSans text-[12px] text-[#111D23]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#47607E]" />
                    <span>Servis rutin berkala 20.000 KM</span>
                  </div>
                  <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    09 Nov
                  </span>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex w-full flex-col gap-2 rounded-lg bg-[#E9F6FD] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#B45309]">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.833333 15C0.597222 15 0.399306 14.9201 0.239583 14.7604C0.0798611 14.6007 0 14.4028 0 14.1667C0 13.9306 0.0798611 13.7326 0.239583 13.5729C0.399306 13.4132 0.597222 13.3333 0.833333 13.3333H1.66667V8.33333H0.833333C0.597222 8.33333 0.399306 8.25347 0.239583 8.09375C0.0798611 7.93403 0 7.73611 0 7.5C0 7.26389 0.0798611 7.06597 0.239583 6.90625C0.399306 6.74653 0.597222 6.66667 0.833333 6.66667H1.66667V1.66667H0.833333C0.597222 1.66667 0.399306 1.58681 0.239583 1.42708C0.0798611 1.26736 0 1.06944 0 0.833333C0 0.597222 0.0798611 0.399306 0.239583 0.239583C0.399306 0.0798611 0.597222 0 0.833333 0H14.1667C14.4028 0 14.6007 0.0798611 14.7604 0.239583C14.9201 0.399306 15 0.597222 15 0.833333C15 1.06944 14.9201 1.26736 14.7604 1.42708C14.4028 1.66667 14.1667 1.66667 14.1667 1.66667H13.3333V6.66667H14.1667C14.4028 6.66667 14.6007 6.74653 14.7604 6.90625C14.9201 7.06597 15 7.26389 15 7.5C15 7.73611 14.9201 7.93403 14.7604 8.09375C14.6007 8.25347 14.4028 8.33333 14.1667 8.33333H13.3333V13.3333H14.1667C14.4028 13.3333 14.6007 13.4132 14.7604 13.5729C14.9201 13.7326 15 13.9306 15 14.1667C15 14.4028 14.9201 14.6007 14.7604 14.7604C14.6007 14.9201 14.4028 15 14.1667 15H0.833333V15M3.33333 13.3333H11.6667V8.33333V8.33333C11.4306 8.33333 11.2326 8.25347 11.0729 8.09375C10.9132 7.93403 10.8333 7.73611 10.8333 7.5C10.8333 7.26389 10.9132 7.06597 11.0729 6.90625C11.2326 6.74653 11.4306 6.66667 11.6667 6.66667V6.66667V1.66667H3.33333V6.66667V6.66667C3.56944 6.66667 3.76736 6.74653 3.92708 6.90625C4.08681 7.06597 4.16667 7.26389 4.16667 7.5C4.16667 7.73611 4.08681 7.93403 3.92708 8.09375C3.76736 8.25347 3.56944 8.33333 3.33333 8.33333V8.33333V13.3333V13.3333M7.5 10.8333C8.19444 10.8333 8.78472 10.5938 9.27083 10.1146C9.75694 9.63542 10 9.05556 10 8.375C10 7.83333 9.84375 7.36806 9.53125 6.97917C9.21875 6.59028 8.54167 5.79167 7.5 4.58333C6.45833 5.77778 5.78125 6.57292 5.46875 6.96875C5.15625 7.36458 5 7.83333 5 8.375C5 9.05556 5.24306 9.63542 5.72917 10.1146C6.21528 10.5938 6.80556 10.8333 7.5 10.8333V10.8333M3.33333 13.3333V1.66667V1.66667V13.3333V13.3333V13.3333"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-plusJakartaSans text-sm font-semibold text-[#111D23]">
                        Honda Mobilio
                      </h4>
                      <p className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                        W 4321 MN
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#FEF3C7] px-2.5 py-1 font-plusJakartaSans text-[11px] font-bold text-[#B45309]">
                    3 hari lagi
                  </span>
                </div>
                <div className="flex items-center justify-between border-t border-[#DDEAF2]/60 pt-2 text-xs">
                  <div className="flex items-center gap-1.5 font-plusJakartaSans text-[12px] text-[#111D23]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#B45309]" />
                    <span>Ganti oli mesin & filter oli</span>
                  </div>
                  <span className="font-plusJakartaSans text-[11px] font-medium text-[#47607E]">
                    27 Okt
                  </span>
                </div>
              </div>

              {/* Tombol Jadwalkan Servis Baru */}
              <Link
                to="/maintenance"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#E3F0F8] py-2.5 font-plusJakartaSans text-xs font-semibold text-[#111D23] transition-colors hover:bg-[#D4E6F2] sm:text-[13px]"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                    fill="currentColor"
                  />
                </svg>
                <span>Jadwalkan Servis Baru</span>
              </Link>
            </div>

            {/* Tips Card */}
            <div className="flex w-full items-start gap-3 rounded-xl bg-[#0F766E] p-4 text-white shadow-xs">
              <svg
                width="20"
                height="22"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-[#A3FAEF]"
              >
                <path
                  d="M7.5 20C6.95 20 6.47917 19.8042 6.0875 19.4125C5.69583 19.0208 5.5 18.55 5.5 18H9.5C9.5 18.55 9.30417 19.0208 8.9125 19.4125C8.52083 19.8042 8.05 20 7.5 20V20M3.5 17V15H11.5V17H3.5V17M3.75 14C2.6 13.3167 1.6875 12.4 1.0125 11.25C0.3375 10.1 0 8.85 0 7.5C0 5.41667 0.729167 3.64583 2.1875 2.1875C3.64583 0.729167 5.41667 0 7.5 0C9.58333 0 11.3542 0.729167 12.8125 2.1875C14.2708 3.64583 15 5.41667 15 7.5C15 8.85 14.6625 10.1 13.9875 11.25C13.3125 12.4 12.4 13.3167 11.25 14H3.75V14M4.35 12H10.65C11.4 11.4667 11.9792 10.8083 12.3875 10.025C12.7958 9.24167 13 8.4 13 7.5C13 5.96667 12.4667 4.66667 11.4 3.6C10.3333 2.53333 9.03333 2 7.5 2C5.96667 2 4.66667 2.53333 3.6 3.6C2.53333 4.66667 2 5.96667 2 7.5C2 8.4 2.20417 9.24167 2.6125 10.025C3.02083 10.8083 3.6 11.4667 4.35 12V12M7.5 12V12V12V12V12V12V12V12V12V12"
                  fill="currentColor"
                />
              </svg>
              <div>
                <h4 className="font-plusJakartaSans text-xs font-semibold sm:text-[13px]">
                  Tips Kesiapan Akhir Pekan
                </h4>
                <p className="mt-1 font-plusJakartaSans text-[11px] leading-relaxed text-white/90">
                  Permintaan rental diproyeksikan naik 35% hari Jumat ini. Pastikan servis Honda Mobilio dan Xpander selesai sebelum Kamis sore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
