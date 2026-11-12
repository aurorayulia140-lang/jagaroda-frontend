import { useState } from 'react'
import Header from '../components/Header'

export default function Main() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="maintenance-page flex min-h-screen w-full flex-col items-start bg-[#F5F7FA]">
      {/* Top Header Terpadu */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchPlaceholder="Cari riwayat servis, plat nomor..."
        greeting="Selamat Datang, Nino"
        subtitle="Senin, 24 Oktober 2024 • Shift Pagi Ops"
      />

      <div className="mx-auto flex max-w-[1600px] py-6 px-4 sm:px-6 lg:px-8 flex-col items-start gap-6 w-full">
        <div className="flex w-full flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col items-start gap-1 w-fit">
            <div className="flex items-center gap-1.5 w-full">
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  Kendaraan &amp; Armada
                </p>
              </div>
              <svg
                width="5"
                height="7"
                viewBox="0 0 5 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M2.68333 3.5L0 0.816667L0.816667 0L4.31667 3.5L0.816667 7L0 6.18333L2.68333 3.5V3.5"
                  fill="#47607E"
                />
              </svg>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                  Maintenance &amp; Kerusakan
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start w-full">
              <p className="text-[#263238] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.025em]">
                Riwayat Servis &amp; Laporan Kerusakan Armada
              </p>
            </div>
            <div className="flex max-w-[768px] flex-col items-start w-full">
              <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                Catat inspeksi kondisi fisik mobil, riwayat perbaikan berkala,
                dan penanganan kerusakan aktif agar armada aman beroperasi.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center items-start gap-2 md:w-fit">
            <div className="flex py-2.5 px-4 items-center gap-1.5 rounded-lg bg-[#FFDAD6] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit "
              >
                <path
                  d="M0 14.25L8.25 0L16.5 14.25H0V14.25M2.5875 12.75H13.9125L8.25 3L2.5875 12.75V12.75M8.25 12C8.4625 12 8.64062 11.9281 8.78438 11.7844C8.92813 11.6406 9 11.4625 9 11.25C9 11.0375 8.92813 10.8594 8.78438 10.7156C8.64062 10.5719 8.4625 10.5 8.25 10.5C8.0375 10.5 7.85938 10.5719 7.71562 10.7156C7.57187 10.8594 7.5 11.0375 7.5 11.25C7.5 11.4625 7.57187 11.6406 7.71562 11.7844C7.85938 11.9281 8.0375 12 8.25 12V12M7.5 9.75H9V6H7.5V9.75V9.75M8.25 7.875V7.875V7.875V7.875V7.875"
                  fill="#93000A"
                />
              </svg>
              <div className="flex flex-col items-center w-fit">
                <p className="text-[#93000A] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  + Lapor Kerusakan Baru
                </p>
              </div>
            </div>
            <div className="flex py-2.5 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
              <svg
                width="14"
                height="15"
                viewBox="0 0 14 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit "
              >
                <path
                  d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5V15M1.5 13.5H12V13.5V13.5V6H1.5V13.5V13.5V13.5V13.5M1.5 4.5H12V3V3V3H1.5V3V3V4.5V4.5M1.5 4.5V3V3V3V3V3V3V4.5V4.5V4.5M6.75 9C6.5375 9 6.35938 8.92813 6.21562 8.78438C6.07187 8.64062 6 8.4625 6 8.25C6 8.0375 6.07187 7.85938 6.21562 7.71562C6.35938 7.57187 6.5375 7.5 6.75 7.5C6.9625 7.5 7.14062 7.57187 7.28438 7.71562C7.42813 7.85938 7.5 8.0375 7.5 8.25C7.5 8.4625 7.42813 8.64062 7.28438 8.78438C7.14062 8.92813 6.9625 9 6.75 9V9M3.75 9C3.5375 9 3.35938 8.92813 3.21563 8.78438C3.07188 8.64062 3 8.4625 3 8.25C3 8.0375 3.07188 7.85938 3.21563 7.71562C3.35938 7.57187 3.5375 7.5 3.75 7.5C3.9625 7.5 4.14062 7.57187 4.28438 7.71562C4.42813 7.85938 4.5 8.0375 4.5 8.25C4.5 8.4625 4.42813 8.64062 4.28438 8.78438C4.14062 8.92813 3.9625 9 3.75 9V9M9.75 9C9.5375 9 9.35938 8.92813 9.21562 8.78438C9.07187 8.64062 9 8.4625 9 8.25C9 8.0375 9.07187 7.85938 9.21562 7.71562C9.35938 7.57187 9.5375 7.5 9.75 7.5C9.9625 7.5 10.1406 7.57187 10.2844 7.71562C10.4281 7.85938 10.5 8.0375 10.5 8.25C10.5 8.4625 10.4281 8.64062 10.2844 8.78438C10.1406 8.92813 9.9625 9 9.75 9V9M6.75 12C6.5375 12 6.35938 11.9281 6.21562 11.7844C6.07187 11.6406 6 11.4625 6 11.25C6 11.0375 6.07187 10.8594 6.21562 10.7156C6.35938 10.5719 6.5375 10.5 6.75 10.5C6.9625 10.5 7.14062 10.5719 7.28438 10.7156C7.42813 10.8594 7.5 11.0375 7.5 11.25C7.5 11.4625 7.42813 11.6406 7.28438 11.7844C7.14062 11.9281 6.9625 12 6.75 12V12M3.75 12C3.5375 12 3.35938 11.9281 3.21563 11.7844C3.07188 11.6406 3 11.4625 3 11.25C3 11.0375 3.07188 10.8594 3.21563 10.7156C3.35938 10.5719 3.5375 10.5 3.75 10.5C3.9625 10.5 4.14062 10.5719 4.28438 10.7156C4.42813 10.8594 4.5 11.0375 4.5 11.25C4.5 11.4625 4.42813 11.6406 4.28438 11.7844C4.14062 11.9281 3.9625 12 3.75 12V12M9.75 12C9.5375 12 9.35938 11.9281 9.21562 11.7844C9.07187 11.6406 9 11.4625 9 11.25C9 11.0375 9.07187 10.8594 9.21562 10.7156C9.35938 10.5719 9.5375 10.5 9.75 10.5C9.9625 10.5 10.1406 10.5719 10.2844 10.7156C10.4281 10.8594 10.5 11.0375 10.5 11.25C10.5 11.4625 10.4281 11.6406 10.2844 11.7844C10.1406 11.9281 9.9625 12 9.75 12V12"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col items-center w-fit">
                <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  + Jadwalkan Servis Berkala
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex p-4 flex-col items-start rounded-xl bg-linear-[90deg,#FFDAD60%,#DDEAF250%,#E9F6FD100%] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2 w-fit">
              <svg
                width="40"
                height="46"
                viewBox="0 0 40 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col items-start rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit "
              >
                <g filter="url(#filter0_d_156_1673)">
                  <rect
                    x="2"
                    y="1"
                    width="36"
                    height="42"
                    rx="8"
                    fill="white"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M12 25V20V20C12 20.4167 12 20.7042 12 20.8625C12 21.0208 12 21.0417 12 20.925V25V25V25M10 20L12.1 14C12.2 13.7 12.3792 13.4583 12.6375 13.275C12.8958 13.0917 13.1833 13 13.5 13H18.075C18.025 13.3333 18 13.6667 18 14C18 14.3333 18.025 14.6667 18.075 15H13.85L12.8 18H19.275C19.5583 18.4 19.875 18.7708 20.225 19.1125C20.575 19.4542 20.9667 19.75 21.4 20H12V25H26V20.925C26.35 20.875 26.6917 20.8 27.025 20.7C27.3583 20.6 27.6833 20.475 28 20.325V28C28 28.2833 27.9042 28.5208 27.7125 28.7125C27.5208 28.9042 27.2833 29 27 29H26C25.7167 29 25.4792 28.9042 25.2875 28.7125C25.0958 28.5208 25 28.2833 25 28V27H13V28C13 28.2833 12.9042 28.5208 12.7125 28.7125C12.5208 28.9042 12.2833 29 12 29H11C10.7167 29 10.4792 28.9042 10.2875 28.7125C10.0958 28.5208 10 28.2833 10 28V20V20M23.5 24C23.9167 24 24.2708 23.8542 24.5625 23.5625C24.8542 23.2708 25 22.9167 25 22.5C25 22.0833 24.8542 21.7292 24.5625 21.4375C24.2708 21.1458 23.9167 21 23.5 21C23.0833 21 22.7292 21.1458 22.4375 21.4375C22.1458 21.7292 22 22.0833 22 22.5C22 22.9167 22.1458 23.2708 22.4375 23.5625C22.7292 23.8542 23.0833 24 23.5 24V24M14.5 24C14.9167 24 15.2708 23.8542 15.5625 23.5625C15.8542 23.2708 16 22.9167 16 22.5C16 22.0833 15.8542 21.7292 15.5625 21.4375C15.2708 21.1458 14.9167 21 14.5 21C14.0833 21 13.7292 21.1458 13.4375 21.4375C13.1458 21.7292 13 22.0833 13 22.5C13 22.9167 13.1458 23.2708 13.4375 23.5625C13.7292 23.8542 14.0833 24 14.5 24V24M25 19C23.6167 19 22.4375 18.5125 21.4625 17.5375C20.4875 16.5625 20 15.3833 20 14C20 12.6333 20.4833 11.4583 21.45 10.475C22.4167 9.49167 23.6 9 25 9C26.3833 9 27.5625 9.4875 28.5375 10.4625C29.5125 11.4375 30 12.6167 30 14C30 15.3833 29.5125 16.5625 28.5375 17.5375C27.5625 18.5125 26.3833 19 25 19V19M24.5 15H25.5V11H24.5V15V15M25 17C25.1333 17 25.25 16.95 25.35 16.85C25.45 16.75 25.5 16.6333 25.5 16.5C25.5 16.3667 25.45 16.25 25.35 16.15C25.25 16.05 25.1333 16 25 16C24.8667 16 24.75 16.05 24.65 16.15C24.55 16.25 24.5 16.3667 24.5 16.5C24.5 16.6333 24.55 16.75 24.65 16.85C24.75 16.95 24.8667 17 25 17V17"
                    fill="#BA1A1A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_156_1673"
                    x="0"
                    y="0"
                    width="40"
                    height="46"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_156_1673"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_156_1673"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
                <div className="flex w-full flex-wrap items-center gap-2">
                  <p className="font-plusJakartaSans text-sm font-semibold leading-5 text-[#93000A]">
                    PERINGATAN KETERSEDIAAN ARMADA
                  </p>
                  <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#BA1A1A] w-fit">
                    <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Auto-Lock
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-1">
                  <p className="font-plusJakartaSans text-sm leading-5 text-[#111D23]">
                    Beberapa kendaraan mengalami gangguan dan memerlukan pemeriksaan sebelum dapat disewakan kembali.
                  </p>
                  <p className="font-plusJakartaSans text-xs leading-[18px] text-[#3E4947]">
                    Mitsubishi Xpander <span className="font-liberationMono font-bold text-[#005C55]">W 3456 CD</span> sedang menjalani perbaikan rem di Bengkel Berlian Motors dan tidak tersedia hingga 04 Nov 2026.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 w-fit">
              <div className="flex py-1.5 px-2 items-center gap-1 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M0.583333 1.16667V0H9.91667V1.16667H0.583333V1.16667M0.583333 9.33333V5.83333H0V4.66667L0.583333 1.75H9.91667L10.5 4.66667V5.83333H9.91667V9.33333H8.75V5.83333H6.41667V9.33333H0.583333V9.33333M1.75 8.16667H5.25V5.83333H1.75V8.16667V8.16667M1.19583 4.66667V4.66667H9.30417V4.66667H1.19583V4.66667M1.19583 4.66667H9.30417L8.95417 2.91667H1.54583L1.19583 4.66667V4.66667"
                    fill="#47607E"
                  />
                </svg>
                <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  Bengkel Rekanan
                </p>
              </div>
              <div className="flex py-1.5 px-2 items-center gap-1 rounded-lg bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M3.90833 9.74167L3.09167 8.925L4.43333 7.58333L3.09167 6.24167L3.90833 5.425L5.25 6.76667L6.59167 5.425L7.40833 6.24167L6.06667 7.58333L7.40833 8.925L6.59167 9.74167L5.25 8.4L3.90833 9.74167V9.74167M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H1.75V0H2.91667V1.16667H7.58333V0H8.75V1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V10.5C10.5 10.8208 10.3858 11.0955 10.1573 11.324C9.92882 11.5524 9.65417 11.6667 9.33333 11.6667H1.16667V11.6667M1.16667 10.5H9.33333V10.5V10.5V4.66667H1.16667V10.5V10.5V10.5V10.5M1.16667 3.5H9.33333V2.33333V2.33333V2.33333H1.16667V2.33333V2.33333V3.5V3.5M1.16667 3.5V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V3.5V3.5V3.5"
                    fill="white"
                  />
                </svg>
                <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  Cek Kalender
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex py-[25px] px-4 justify-between items-center rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex flex-col items-start w-fit">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Kerusakan Aktif
                </p>
              </div>
              <div className="w-full h-[38px] relative">
                <p className="text-[#263238] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-6 h-[38px] absolute left-0 top-0 tracking-[-0.02em]">
                  2{" "}
                </p>
                <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-11 h-3.5 absolute left-6 top-[21px] tracking-[0.02em]">
                  Unit Off
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  1 Bengkel, 1 Antre Inspeksi
                </p>
              </div>
            </div>
            <svg
              width="44"
              height="50"
              viewBox="0 0 44 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex pt-3 pr-3 pb-[18px] pl-3 flex-col items-start rounded-full bg-[#FFDAD6] w-fit "
            >
              <rect width="44" height="50" rx="22" fill="#FFDAD6" />
              <path
                d="M25.5 26.9L26.9 25.5C27 25.4 27.05 25.2833 27.05 25.15C27.05 25.0167 27 24.9 26.9 24.8L23.5 21.375C23.5667 21.1917 23.6167 21.0083 23.65 20.825C23.6833 20.6417 23.7 20.4333 23.7 20.2C23.7 19.25 23.3625 18.4375 22.6875 17.7625C22.0125 17.0875 21.2 16.75 20.25 16.75C19.9667 16.75 19.6833 16.7875 19.4 16.8625C19.1167 16.9375 18.8417 17.0417 18.575 17.175L20.925 19.525L19.525 20.925L17.175 18.575C17.0417 18.8417 16.9375 19.1167 16.8625 19.4C16.7875 19.6833 16.75 19.9667 16.75 20.25C16.75 21.2 17.0875 22.0125 17.7625 22.6875C18.4375 23.3625 19.25 23.7 20.2 23.7C20.4167 23.7 20.6208 23.6833 20.8125 23.65C21.0042 23.6167 21.1917 23.5667 21.375 23.5L24.8 26.9C24.9 27 25.0167 27.05 25.15 27.05C25.2833 27.05 25.4 27 25.5 26.9V26.9M22 32C20.6167 32 19.3167 31.7375 18.1 31.2125C16.8833 30.6875 15.825 29.975 14.925 29.075C14.025 28.175 13.3125 27.1167 12.7875 25.9C12.2625 24.6833 12 23.3833 12 22C12 20.6167 12.2625 19.3167 12.7875 18.1C13.3125 16.8833 14.025 15.825 14.925 14.925C15.825 14.025 16.8833 13.3125 18.1 12.7875C19.3167 12.2625 20.6167 12 22 12C23.3833 12 24.6833 12.2625 25.9 12.7875C27.1167 13.3125 28.175 14.025 29.075 14.925C29.975 15.825 30.6875 16.8833 31.2125 18.1C31.7375 19.3167 32 20.6167 32 22C32 23.3833 31.7375 24.6833 31.2125 25.9C30.6875 27.1167 29.975 28.175 29.075 29.075C28.175 29.975 27.1167 30.6875 25.9 31.2125C24.6833 31.7375 23.3833 32 22 32V32M22 30C24.2333 30 26.125 29.225 27.675 27.675C29.225 26.125 30 24.2333 30 22C30 19.7667 29.225 17.875 27.675 16.325C26.125 14.775 24.2333 14 22 14C19.7667 14 17.875 14.775 16.325 16.325C14.775 17.875 14 19.7667 14 22C14 24.2333 14.775 26.125 16.325 27.675C17.875 29.225 19.7667 30 22 30V30M22 22V22V22V22V22V22V22V22V22V22"
                fill="#93000A"
              />
            </svg>
          </div>
          <div className="flex p-4 justify-between items-center rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex flex-col items-start w-fit">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Jadwal Servis Minggu Ini
                </p>
              </div>
              <div className="w-full h-[38px] relative">
                <p className="text-[#263238] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-6 h-[38px] absolute left-0 top-0 tracking-[-0.02em]">
                  3{" "}
                </p>
                <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-[22px] h-3.5 absolute left-6 top-[21px] tracking-[0.02em]">
                  Unit
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  2 Rutin Oli, 1 Balancing
                </p>
              </div>
            </div>
            <svg
              width="45"
              height="52"
              viewBox="0 0 45 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex pt-3 pr-3 pb-[18px] pl-3 flex-col items-start rounded-full bg-[#C2DCFF] w-fit "
            >
              <rect width="45" height="52" rx="22.5" fill="#C2DCFF" />
              <path
                d="M14 32C13.45 32 12.9792 31.8042 12.5875 31.4125C12.1958 31.0208 12 30.55 12 30V16C12 15.45 12.1958 14.9792 12.5875 14.5875C12.9792 14.1958 13.45 14 14 14H15V12H17V14H25V12H27V14H28C28.55 14 29.0208 14.1958 29.4125 14.5875C29.8042 14.9792 30 15.45 30 16V22H28V20H14V30V30V30H21V32H14V32M28 34C26.7833 34 25.7208 33.6208 24.8125 32.8625C23.9042 32.1042 23.3333 31.15 23.1 30H24.65C24.8667 30.7333 25.2792 31.3333 25.8875 31.8C26.4958 32.2667 27.2 32.5 28 32.5C28.9667 32.5 29.7917 32.1583 30.475 31.475C31.1583 30.7917 31.5 29.9667 31.5 29C31.5 28.0333 31.1583 27.2083 30.475 26.525C29.7917 25.8417 28.9667 25.5 28 25.5C27.5167 25.5 27.0667 25.5875 26.65 25.7625C26.2333 25.9375 25.8667 26.1833 25.55 26.5H27V28H23V24H24.5V25.425C24.95 24.9917 25.475 24.6458 26.075 24.3875C26.675 24.1292 27.3167 24 28 24C29.3833 24 30.5625 24.4875 31.5375 25.4625C32.5125 26.4375 33 27.6167 33 29C33 30.3833 32.5125 31.5625 31.5375 32.5375C30.5625 33.5125 29.3833 34 28 34V34M14 18H28V16V16V16H14V16V16V18V18M14 18V16V16V16V16V16V16V18V18V18"
                fill="#48617E"
              />
            </svg>
          </div>
          <div className="flex py-[21px] px-4 justify-between items-center rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex flex-col items-start w-fit">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Total Biaya Bulan Ini
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#263238] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.015em]">
                  Rp 2,88 Jt
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  75% Dicover Klaim &#x2F; Deposito
                </p>
              </div>
            </div>
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex pt-3 pr-3 pb-[18px] pl-3 flex-col items-start rounded-full bg-[#E3F0F8] w-fit "
            >
              <rect width="46" height="46" rx="23" fill="#E3F0F8" />
              <path
                d="M25 21C24.1667 21 23.4583 20.7083 22.875 20.125C22.2917 19.5417 22 18.8333 22 18C22 17.1667 22.2917 16.4583 22.875 15.875C23.4583 15.2917 24.1667 15 25 15C25.8333 15 26.5417 15.2917 27.125 15.875C27.7083 16.4583 28 17.1667 28 18C28 18.8333 27.7083 19.5417 27.125 20.125C26.5417 20.7083 25.8333 21 25 21V21M18 24C17.45 24 16.9792 23.8042 16.5875 23.4125C16.1958 23.0208 16 22.55 16 22V14C16 13.45 16.1958 12.9792 16.5875 12.5875C16.9792 12.1958 17.45 12 18 12H32C32.55 12 33.0208 12.1958 33.4125 12.5875C33.8042 12.9792 34 13.45 34 14V22C34 22.55 33.8042 23.0208 33.4125 23.4125C33.0208 23.8042 32.55 24 32 24H18V24M20 22H30C30 21.45 30.1958 20.9792 30.5875 20.5875C30.9792 20.1958 31.45 20 32 20V16C31.45 16 30.9792 15.8042 30.5875 15.4125C30.1958 15.0208 30 14.55 30 14H20C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16V20C18.55 20 19.0208 20.1958 19.4125 20.5875C19.8042 20.9792 20 21.45 20 22V22M31 28H14C13.45 28 12.9792 27.8042 12.5875 27.4125C12.1958 27.0208 12 26.55 12 26V15H14V26V26V26H31V28V28M18 22V22V22V22V14V14V14V14V14V14V22V22V22V22"
                fill="#005C55"
              />
            </svg>
          </div>
          <div className="flex py-[25px] px-4 justify-between items-center rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex flex-col items-start w-fit">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Health Index Armada
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#005C55] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-fit tracking-[-0.02em]">
                  94.2%
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  32 dari 34 Unit Siap Jalan
                </p>
              </div>
            </div>
            <svg
              width="46"
              height="51"
              viewBox="0 0 46 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex pt-3 pr-3 pb-[18px] pl-3 flex-col items-start rounded-full bg-[#9CF2E8] w-fit "
            >
              <rect width="46" height="51" rx="23" fill="#9CF2E8" />
              <path
                d="M19.6 33L17.7 29.8L14.1 29L14.45 25.3L12 22.5L14.45 19.7L14.1 16L17.7 15.2L19.6 12L23 13.45L26.4 12L28.3 15.2L31.9 16L31.55 19.7L34 22.5L31.55 25.3L31.9 29L28.3 29.8L26.4 33L23 31.55L19.6 33V33M20.45 30.45L23 29.35L25.6 30.45L27 28.05L29.75 27.4L29.5 24.6L31.35 22.5L29.5 20.35L29.75 17.55L27 16.95L25.55 14.55L23 15.65L20.4 14.55L19 16.95L16.25 17.55L16.5 20.35L14.65 22.5L16.5 24.6L16.25 27.45L19 28.05L20.45 30.45V30.45M23 22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5V22.5M21.95 26.05L27.6 20.4L26.2 18.95L21.95 23.2L19.8 21.1L18.4 22.5L21.95 26.05V26.05"
                fill="#00504A"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 w-full">
          <div className="flex p-1 items-start rounded-xl bg-[#DDEAF2] shadow-[02px4px0rgba(0,0,0,0.05)inset] w-fit">
            <div className="flex py-2 px-4 items-center gap-2 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit "
              >
                <path
                  d="M5.25 14.25V12H0V10.5H12V12H6.75V14.25H5.25V14.25M3.75 6.375C3.9625 6.375 4.14062 6.30313 4.28438 6.15938C4.42813 6.01562 4.5 5.8375 4.5 5.625C4.5 5.4125 4.42813 5.23438 4.28438 5.09062C4.14062 4.94687 3.9625 4.875 3.75 4.875C3.5375 4.875 3.35938 4.94687 3.21563 5.09062C3.07188 5.23438 3 5.4125 3 5.625C3 5.8375 3.07188 6.01562 3.21563 6.15938C3.35938 6.30313 3.5375 6.375 3.75 6.375V6.375M8.25 6.375C8.4625 6.375 8.64062 6.30313 8.78438 6.15938C8.92813 6.01562 9 5.8375 9 5.625C9 5.4125 8.92813 5.23438 8.78438 5.09062C8.64062 4.94687 8.4625 4.875 8.25 4.875C8.0375 4.875 7.85938 4.94687 7.71562 5.09062C7.57187 5.23438 7.5 5.4125 7.5 5.625C7.5 5.8375 7.57187 6.01562 7.71562 6.15938C7.85938 6.30313 8.0375 6.375 8.25 6.375V6.375M0.75 4.2L1.9875 0.6C2.05 0.425 2.15313 0.28125 2.29688 0.16875C2.44062 0.05625 2.6 0 2.775 0H9.225C9.4 0 9.55937 0.05625 9.70312 0.16875C9.84688 0.28125 9.95 0.425 10.0125 0.6L11.25 4.2V9.15C11.25 9.325 11.1938 9.46875 11.0813 9.58125C10.9688 9.69375 10.825 9.75 10.65 9.75H10.35C10.175 9.75 10.0312 9.69375 9.91875 9.58125C9.80625 9.46875 9.75 9.325 9.75 9.15V8.25H2.25V9.15C2.25 9.325 2.19375 9.46875 2.08125 9.58125C1.96875 9.69375 1.825 9.75 1.65 9.75H1.35C1.175 9.75 1.03125 9.69375 0.91875 9.58125C0.80625 9.46875 0.75 9.325 0.75 9.15V4.2V4.2M2.7375 3H9.2625L8.7375 1.5H3.2625L2.7375 3V3M2.25 4.5V4.5V6.75V6.75V4.5V4.5M2.25 6.75H9.75V4.5H2.25V6.75V6.75"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col items-center w-fit">
                <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Laporan Kerusakan Aktif &#40;Inspeksi &amp; Klaim&#41;
                </p>
              </div>
              <div className="flex pl-1 flex-col items-start w-fit">
                <div className="flex py-0.5 px-1.5 flex-col items-center rounded-full bg-[#BA1A1A] w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    2
                  </p>
                </div>
              </div>
            </div>
            <div className="flex py-2 px-4 items-center gap-2 rounded-lg w-fit">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit "
              >
                <path
                  d="M6.75 13.5C5.025 13.5 3.52187 12.9281 2.24062 11.7844C0.959375 10.6406 0.225 9.2125 0.0375 7.5H1.575C1.75 8.8 2.32812 9.875 3.30938 10.725C4.29063 11.575 5.4375 12 6.75 12C8.2125 12 9.45312 11.4906 10.4719 10.4719C11.4906 9.45312 12 8.2125 12 6.75C12 5.2875 11.4906 4.04688 10.4719 3.02813C9.45312 2.00938 8.2125 1.5 6.75 1.5C5.8875 1.5 5.08125 1.7 4.33125 2.1C3.58125 2.5 2.95 3.05 2.4375 3.75H4.5V5.25H0V0.75H1.5V2.5125C2.1375 1.7125 2.91562 1.09375 3.83437 0.65625C4.75312 0.21875 5.725 0 6.75 0C7.6875 0 8.56562 0.178125 9.38437 0.534375C10.2031 0.890625 10.9156 1.37188 11.5219 1.97812C12.1281 2.58437 12.6094 3.29688 12.9656 4.11562C13.3219 4.93437 13.5 5.8125 13.5 6.75C13.5 7.6875 13.3219 8.56562 12.9656 9.38437C12.6094 10.2031 12.1281 10.9156 11.5219 11.5219C10.9156 12.1281 10.2031 12.6094 9.38437 12.9656C8.56562 13.3219 7.6875 13.5 6.75 13.5V13.5M8.85 9.9L6 7.05V3H7.5V6.45L9.9 8.85L8.85 9.9V9.9"
                  fill="#47607E"
                />
              </svg>
              <div className="flex flex-col items-center w-fit">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Riwayat Servis &amp; Perawatan Berkala
                </p>
              </div>
              <div className="flex pl-1 flex-col items-start w-fit">
                <div className="flex py-0.5 px-1.5 flex-col items-center rounded-full bg-[#D7E4EC] w-fit">
                  <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    18
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-1.5 px-3 items-center gap-1.5 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex flex-col items-start w-fit "
            >
              <path
                d="M5.25 9V7.5H8.25V9H5.25V9M2.25 5.25V3.75H11.25V5.25H2.25V5.25M0 1.5V0H13.5V1.5H0V1.5"
                fill="#6E7977"
              />
            </svg>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                Status Armada:
              </p>
            </div>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                Semua Cabang &#40;Surabaya &amp; Sekitar&#41;
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 w-full">
          <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 2xl:grid-cols-4">
            <div className="flex pb-[52px] flex-col items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
              <div className="flex p-6 flex-col items-start gap-4 w-full">
                <div className="flex justify-between items-start flex-wrap w-full">
                  <div className="flex flex-col items-start gap-1 w-fit">
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex py-0.5 px-2.5 flex-col items-start rounded-md bg-[#DDEAF2] w-fit">
                        <p className="text-[#47607E] font-liberationMono text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                          W 3456 CD
                        </p>
                      </div>
                      <div className="flex py-0.5 px-2.5 items-center gap-1 rounded-full bg-[#FEF3C7] w-fit">
                        <div className="rounded-full bg-[#B45309] w-1.5 h-1.5"></div>
                        <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Dalam Perbaikan
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xl font-bold leading-[26px] w-fit tracking-[-0.01em]">
                        Mitsubishi Xpander Ultimate
                      </p>
                    </div>
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="10"
                        height="13"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M1.16667 12.25C0.845833 12.25 0.571181 12.1358 0.342708 11.9073C0.114236 11.6788 0 11.4042 0 11.0833V5.25C0 4.92917 0.114236 4.65451 0.342708 4.42604C0.571181 4.19757 0.845833 4.08333 1.16667 4.08333H1.75V2.91667C1.75 2.10972 2.03438 1.42188 2.60313 0.853125C3.17188 0.284375 3.85972 0 4.66667 0C5.47361 0 6.16146 0.284375 6.73021 0.853125C7.29896 1.42188 7.58333 2.10972 7.58333 2.91667V4.08333H8.16667C8.4875 4.08333 8.76215 4.19757 8.99063 4.42604C9.2191 4.65451 9.33333 4.92917 9.33333 5.25V11.0833C9.33333 11.4042 9.2191 11.6788 8.99063 11.9073C8.76215 12.1358 8.4875 12.25 8.16667 12.25H1.16667V12.25M1.16667 11.0833H8.16667V11.0833V11.0833V5.25V5.25V5.25H1.16667V5.25V5.25V11.0833V11.0833V11.0833V11.0833M4.66667 9.33333C4.9875 9.33333 5.26215 9.2191 5.49062 8.99063C5.7191 8.76215 5.83333 8.4875 5.83333 8.16667C5.83333 7.84583 5.7191 7.57118 5.49062 7.34271C5.26215 7.11424 4.9875 7 4.66667 7C4.34583 7 4.07118 7.11424 3.84271 7.34271C3.61424 7.57118 3.5 7.84583 3.5 8.16667C3.5 8.4875 3.61424 8.76215 3.84271 8.99063C4.07118 9.2191 4.34583 9.33333 4.66667 9.33333V9.33333M2.91667 4.08333H6.41667V2.91667C6.41667 2.43056 6.24653 2.01736 5.90625 1.67708C5.56597 1.33681 5.15278 1.16667 4.66667 1.16667C4.18056 1.16667 3.76736 1.33681 3.42708 1.67708C3.08681 2.01736 2.91667 2.43056 2.91667 2.91667V4.08333V4.08333M1.16667 11.0833V11.0833V11.0833V5.25V5.25V5.25V5.25V5.25V5.25V11.0833V11.0833V11.0833V11.0833V11.0833"
                          fill="#BA1A1A"
                        />
                      </svg>
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Otomatis Dinonaktifkan dari Kalender Pemesanan
                      </p>
                    </div>
                  </div>
                  <div className="flex pb-0.5 flex-col items-start gap-px w-fit">
                    <div className="flex flex-col items-end w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Estimasi Biaya
                      </p>
                    </div>
                    <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                      Rp 850.000
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-4 w-full lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className="order-2 flex min-w-0 flex-col items-start gap-1 w-full lg:order-2">
                    <div className="flex p-2.5 flex-col items-start gap-1 rounded-lg bg-[#E9F6FD] w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-full tracking-[0.02em]">
                          JENIS KERUSAKAN
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-full">
                          Kampas rem depan aus berbunyi &amp; indikasi minyak
                          rem rembes pada kaliper kiri.
                        </p>
                      </div>
                    </div>
                    <div className="maintenance-meta-grid inline-grid pt-1 w-full relative">
                      <div className="flex pb-7 flex-col items-start -space-y-px w-full absolute left-0 top-1">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Tanggal Lapor
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="10"
                            height="11"
                            viewBox="0 0 10 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.08333 10.8333C0.785417 10.8333 0.530382 10.7273 0.318229 10.5151C0.106076 10.303 0 10.0479 0 9.75V2.16667C0 1.86875 0.106076 1.61372 0.318229 1.40156C0.530382 1.18941 0.785417 1.08333 1.08333 1.08333H1.625V0H2.70833V1.08333H7.04167V0H8.125V1.08333H8.66667C8.96458 1.08333 9.21962 1.18941 9.43177 1.40156C9.64392 1.61372 9.75 1.86875 9.75 2.16667V9.75C9.75 10.0479 9.64392 10.303 9.43177 10.5151C9.21962 10.7273 8.96458 10.8333 8.66667 10.8333H1.08333V10.8333M1.08333 9.75H8.66667V9.75V9.75V4.33333H1.08333V9.75V9.75V9.75V9.75M1.08333 3.25H8.66667V2.16667V2.16667V2.16667H1.08333V2.16667V2.16667V3.25V3.25M1.08333 3.25V2.16667V2.16667V2.16667V2.16667V2.16667V2.16667V3.25V3.25V3.25"
                              fill="#6E7977"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            22 Okt 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start -space-y-px w-full absolute left-[123px] top-1">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Pelapor
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.08333 10.8333C0.785417 10.8333 0.530382 10.7273 0.318229 10.5151C0.106076 10.303 0 10.0479 0 9.75V3.79167C0 3.49375 0.106076 3.23872 0.318229 3.02656C0.530382 2.81441 0.785417 2.70833 1.08333 2.70833H3.79167V1.08333C3.79167 0.785417 3.89774 0.530382 4.1099 0.318229C4.32205 0.106076 4.57708 0 4.875 0H5.95833C6.25625 0 6.51128 0.106076 6.72344 0.318229C6.93559 0.530382 7.04167 0.785417 7.04167 1.08333V2.70833H9.75C10.0479 2.70833 10.303 2.81441 10.5151 3.02656C10.7273 3.23872 10.8333 3.49375 10.8333 3.79167V9.75C10.8333 10.0479 10.7273 10.303 10.5151 10.5151C10.303 10.7273 10.0479 10.8333 9.75 10.8333H1.08333V10.8333M1.08333 9.75H9.75V9.75V9.75V3.79167V3.79167V3.79167H7.04167V3.79167C7.04167 4.08958 6.93559 4.34462 6.72344 4.55677C6.51128 4.76892 6.25625 4.875 5.95833 4.875H4.875C4.57708 4.875 4.32205 4.76892 4.1099 4.55677C3.89774 4.34462 3.79167 4.08958 3.79167 3.79167V3.79167H1.08333V3.79167V3.79167V9.75V9.75V9.75V9.75M2.16667 8.66667H5.41667V8.42292C5.41667 8.26944 5.37378 8.12726 5.28802 7.99635C5.20226 7.86545 5.08264 7.76389 4.92917 7.69167C4.74861 7.61042 4.5658 7.54948 4.38073 7.50885C4.19566 7.46823 3.99931 7.44792 3.79167 7.44792C3.58403 7.44792 3.38767 7.46823 3.2026 7.50885C3.01753 7.54948 2.83472 7.61042 2.65417 7.69167C2.50069 7.76389 2.38108 7.86545 2.29531 7.99635C2.20955 8.12726 2.16667 8.26944 2.16667 8.42292V8.66667V8.66667M6.5 7.85417H8.66667V7.04167H6.5V7.85417V7.85417M3.79167 7.04167C4.01736 7.04167 4.2092 6.96267 4.36719 6.80469C4.52517 6.6467 4.60417 6.45486 4.60417 6.22917C4.60417 6.00347 4.52517 5.81163 4.36719 5.65365C4.2092 5.49566 4.01736 5.41667 3.79167 5.41667C3.56597 5.41667 3.37413 5.49566 3.21615 5.65365C3.05816 5.81163 2.97917 6.00347 2.97917 6.22917C2.97917 6.45486 3.05816 6.6467 3.21615 6.80469C3.37413 6.96267 3.56597 7.04167 3.79167 7.04167V7.04167M6.5 6.22917H8.66667V5.41667H6.5V6.22917V6.22917M4.875 3.79167H5.95833V1.08333H4.875V3.79167V3.79167M5.41667 6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083V6.77083"
                              fill="#6E7977"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            Nino &#40;Pemeriksaan Masuk&#41;
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start -space-y-px w-full absolute left-0 top-[68px]">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Bengkel Rekanan
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M10.3171 4.36042V8.66667C10.3171 8.96458 10.211 9.21962 9.99886 9.43177C9.78671 9.64392 9.53168 9.75 9.23376 9.75H1.65043C1.35251 9.75 1.09747 9.64392 0.885321 9.43177C0.673168 9.21962 0.567092 8.96458 0.567092 8.66667V4.36042C0.359453 4.17083 0.19921 3.92708 0.0863627 3.62917C-0.0264846 3.33125 -0.0287415 3.00625 0.0795918 2.65417L0.648342 0.8125C0.720564 0.577778 0.84921 0.383681 1.03428 0.230208C1.21935 0.0767361 1.43376 0 1.67751 0H9.20668C9.45043 0 9.66258 0.0744792 9.84313 0.223438C10.0237 0.372396 10.1546 0.56875 10.2358 0.8125L10.8046 2.65417C10.9129 3.00625 10.9107 3.32674 10.7978 3.61562C10.685 3.90451 10.5247 4.15278 10.3171 4.36042V4.36042M6.63376 3.79167C6.87751 3.79167 7.06258 3.70816 7.18897 3.54115C7.31536 3.37413 7.36501 3.18681 7.33792 2.97917L7.04001 1.08333H5.98376V3.0875C5.98376 3.27708 6.04695 3.44184 6.17334 3.58177C6.29973 3.7217 6.4532 3.79167 6.63376 3.79167V3.79167M4.19626 3.79167C4.4039 3.79167 4.57317 3.7217 4.70407 3.58177C4.83497 3.44184 4.90042 3.27708 4.90042 3.0875V1.08333H3.84418L3.54626 2.97917C3.51015 3.19583 3.55754 3.38542 3.68845 3.54792C3.81935 3.71042 3.98862 3.79167 4.19626 3.79167V3.79167M1.78584 3.79167C1.94834 3.79167 2.09053 3.73299 2.2124 3.61562C2.33428 3.49826 2.40876 3.34931 2.43584 3.16875L2.73376 1.08333H1.67751V1.08333V1.08333L1.13584 2.89792C1.08168 3.07847 1.11102 3.27257 1.22386 3.48021C1.33671 3.68785 1.52404 3.79167 1.78584 3.79167V3.79167M9.09834 3.79167C9.36015 3.79167 9.54973 3.68785 9.66709 3.48021C9.78445 3.27257 9.81154 3.07847 9.74834 2.89792L9.17959 1.08333V1.08333V1.08333H8.15042L8.44834 3.16875C8.47542 3.34931 8.5499 3.49826 8.67178 3.61562C8.79365 3.73299 8.93584 3.79167 9.09834 3.79167V3.79167M1.65043 8.66667H9.23376V8.66667V8.66667V4.84792C9.18862 4.86597 9.15928 4.875 9.14574 4.875C9.1322 4.875 9.1164 4.875 9.09834 4.875C8.85459 4.875 8.64018 4.83438 8.45511 4.75313C8.27004 4.67188 8.08723 4.54097 7.90668 4.36042C7.74418 4.52292 7.55911 4.64931 7.35147 4.73958C7.14383 4.82986 6.92265 4.875 6.68793 4.875C6.44418 4.875 6.21622 4.82986 6.00407 4.73958C5.79192 4.64931 5.60459 4.52292 5.44209 4.36042C5.28862 4.52292 5.11032 4.64931 4.9072 4.73958C4.70407 4.82986 4.48515 4.875 4.25043 4.875C3.98862 4.875 3.75164 4.82986 3.53949 4.73958C3.32733 4.64931 3.14001 4.52292 2.97751 4.36042C2.78793 4.55 2.6006 4.68316 2.41553 4.7599C2.23046 4.83663 2.02056 4.875 1.78584 4.875C1.76779 4.875 1.74747 4.875 1.7249 4.875C1.70233 4.875 1.67751 4.86597 1.65043 4.84792V8.66667V8.66667V8.66667V8.66667M9.23376 8.66667H1.65043V8.66667V8.66667V8.66667C1.67751 8.66667 1.70233 8.66667 1.7249 8.66667C1.74747 8.66667 1.76779 8.66667 1.78584 8.66667C2.02056 8.66667 2.23046 8.66667 2.41553 8.66667C2.6006 8.66667 2.78793 8.66667 2.97751 8.66667C3.05876 8.66667 3.14678 8.66667 3.24157 8.66667C3.33636 8.66667 3.43793 8.66667 3.54626 8.66667C3.65459 8.66667 3.76744 8.66667 3.8848 8.66667C4.00216 8.66667 4.12404 8.66667 4.25043 8.66667C4.36779 8.66667 4.48063 8.66667 4.58897 8.66667C4.6973 8.66667 4.80338 8.66667 4.9072 8.66667C5.01102 8.66667 5.10806 8.66667 5.19834 8.66667C5.28862 8.66667 5.36987 8.66667 5.44209 8.66667C5.60459 8.66667 5.79192 8.66667 6.00407 8.66667C6.21622 8.66667 6.44418 8.66667 6.68793 8.66667C6.80529 8.66667 6.91813 8.66667 7.02647 8.66667C7.1348 8.66667 7.24088 8.66667 7.3447 8.66667C7.44852 8.66667 7.54782 8.66667 7.64261 8.66667C7.7374 8.66667 7.82543 8.66667 7.90668 8.66667C8.08723 8.66667 8.27004 8.66667 8.45511 8.66667C8.64018 8.66667 8.85459 8.66667 9.09834 8.66667C9.1164 8.66667 9.1322 8.66667 9.14574 8.66667C9.15928 8.66667 9.18862 8.66667 9.23376 8.66667V8.66667V8.66667V8.66667V8.66667"
                              fill="#005C55"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            Berlian Motors Surabaya &#40;Est. Selesai: 04 Nov
                            2026&#41;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 flex min-w-0 flex-col justify-center items-start rounded-lg bg-[#E3F0F8] w-full h-44 overflow-hidden relative lg:order-1">
                    <img
                      src="/Ab6axudgxcbw4i1promnhb7pg82ow2xasfaczpxgzt7fb4fxtin7hjfm2xb1wzlbl4uvvnmv9reni0uuklulwhmrpgd7gkzej6qcjgf2ek6emb_weq2uzvcahkvfuiw7xthvaron3lnfltyrxquwhppd8du3rbxs8vjxvq5t5t21dfvo1b9ei6lgmtsydipwsjhv7xxfyg0dvdbwuuczkjnxmrxzn9w_oqtfacvn419daayhfjnho4jc6a.png"
                      className="w-full h-full overflow-hidden max-w-none"
                      alt="AB6AXuDgXcbw4i1promnHb7-pG82OW2xAsFaCZpXgzT7FB4fxtIn-7Hjfm2xb1Wzlbl4UVVNmv9RENi0UUKLULWHMRPGd7GKzEJ6Qcjgf2Ek6EMb_wEq-2uzVcAhkVfuiW7xtHvaROn3LNfLtyRxQUWHppd8Du3RBxS8vjxVq5t5T21DfVO1B9ei6lGmtSYDIpWsjHV7xxfyg0DVdBWuuczkjnXMrxzn9W_O-qtFAcvn419daayHfJnho4JC6A"
                    />
                    <div className="flex p-2.5 items-end absolute bg-linear-[0deg,rgba(0,0,0,0.60)0%,rgba(0,0,0,0.00)50%,rgba(0,0,0,0.00)100%] w-[165px] h-44">
                      <div className="flex pr-9 items-center gap-1 shadow-[01px2px0rgba(0,0,0,0.06),01px4px0rgba(0,0,0,0.10)] w-fit">
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.83333 8.45833C6.5625 8.45833 7.18229 8.20312 7.69271 7.69271C8.20312 7.18229 8.45833 6.5625 8.45833 5.83333C8.45833 5.10417 8.20312 4.48438 7.69271 3.97396C7.18229 3.46354 6.5625 3.20833 5.83333 3.20833C5.10417 3.20833 4.48438 3.46354 3.97396 3.97396C3.46354 4.48438 3.20833 5.10417 3.20833 5.83333C3.20833 6.5625 3.46354 7.18229 3.97396 7.69271C4.48438 8.20312 5.10417 8.45833 5.83333 8.45833V8.45833M5.83333 7.29167C5.425 7.29167 5.07986 7.15069 4.79792 6.86875C4.51597 6.58681 4.375 6.24167 4.375 5.83333C4.375 5.425 4.51597 5.07986 4.79792 4.79792C5.07986 4.51597 5.425 4.375 5.83333 4.375C6.24167 4.375 6.58681 4.51597 6.86875 4.79792C7.15069 5.07986 7.29167 5.425 7.29167 5.83333C7.29167 6.24167 7.15069 6.58681 6.86875 6.86875C6.58681 7.15069 6.24167 7.29167 5.83333 7.29167V7.29167M1.16667 10.5C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H3.00417L4.08333 0H7.58333L8.6625 1.16667H10.5C10.8208 1.16667 11.0955 1.2809 11.324 1.50937C11.5524 1.73785 11.6667 2.0125 11.6667 2.33333V9.33333C11.6667 9.65417 11.5524 9.92882 11.324 10.1573C11.0955 10.3858 10.8208 10.5 10.5 10.5H1.16667V10.5M1.16667 9.33333H10.5V9.33333V9.33333V2.33333V2.33333V2.33333H8.1375L7.07292 1.16667H4.59375L3.52917 2.33333H1.16667V2.33333V2.33333V9.33333V9.33333V9.33333V9.33333M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333"
                            fill="white"
                          />
                        </svg>
                        <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Bukti Kerusakan: Kampas &amp; Rem
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-1 flex-col items-start gap-1 w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex pr-[22px] flex-col items-start w-fit h-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Progres Pengerjaan Suku Cadang &amp; Uji Jalan
                      </p>
                    </div>
                    <div className="flex pr-[27px] flex-col items-start w-fit h-full">
                      <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        65% &#40;Menunggu Part Kampas OEM&#41;
                      </p>
                    </div>
                  </div>
                  <svg
                    width="418"
                    height="8"
                    viewBox="0 0 418 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[146px] items-center rounded-full bg-[#DDEAF2] w-full h-2 overflow-hidden "
                  >
                    <rect width="418" height="8" rx="4" fill="#DDEAF2" />
                    <rect width="271.69" height="8" rx="4" fill="#B45309" />
                  </svg>
                </div>
                <div className="flex w-full flex-wrap items-center justify-end gap-2 pt-2">
                  <button className="cursor-pointer text-nowrap flex py-2 px-4 flex-col justify-center items-center rounded-lg bg-[#DDEAF2] w-fit">
                    <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Perbarui Progres Servis
                    </p>
                  </button>
                  <div className="flex py-2 px-4 items-center gap-1 rounded-lg bg-[#0F766E] w-fit">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333V9.73333M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12V12M6.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                        fill="white"
                      />
                    </svg>
                    <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Selesaikan Perbaikan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
              <div className="flex p-6 flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex flex-col items-start gap-1 w-fit">
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex py-0.5 px-2.5 flex-col items-start rounded-md bg-[#DDEAF2] w-fit">
                        <p className="text-[#47607E] font-liberationMono text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                          L 9012 EF
                        </p>
                      </div>
                      <div className="flex py-0.5 px-2.5 items-center gap-1 rounded-full bg-[#FEE2E2] w-fit">
                        <div className="rounded-full bg-[#B91C1C] w-1.5 h-1.5"></div>
                        <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Dilaporkan &#40;Menunggu Inspeksi&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xl font-bold leading-[26px] w-fit tracking-[-0.01em]">
                        Daihatsu Xenia 1.3 R
                      </p>
                    </div>
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="10"
                        height="13"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M1.16667 4.08333H6.41667V2.91667C6.41667 2.43056 6.24653 2.01736 5.90625 1.67708C5.56597 1.33681 5.15278 1.16667 4.66667 1.16667C4.18056 1.16667 3.76736 1.33681 3.42708 1.67708C3.08681 2.01736 2.91667 2.43056 2.91667 2.91667H1.75C1.75 2.10972 2.03438 1.42188 2.60313 0.853125C3.17188 0.284375 3.85972 0 4.66667 0C5.47361 0 6.16146 0.284375 6.73021 0.853125C7.29896 1.42188 7.58333 2.10972 7.58333 2.91667V4.08333H8.16667C8.4875 4.08333 8.76215 4.19757 8.99063 4.42604C9.2191 4.65451 9.33333 4.92917 9.33333 5.25V11.0833C9.33333 11.4042 9.2191 11.6788 8.99063 11.9073C8.76215 12.1358 8.4875 12.25 8.16667 12.25H1.16667C0.845833 12.25 0.571181 12.1358 0.342708 11.9073C0.114236 11.6788 0 11.4042 0 11.0833V5.25C0 4.92917 0.114236 4.65451 0.342708 4.42604C0.571181 4.19757 0.845833 4.08333 1.16667 4.08333V4.08333M1.16667 11.0833H8.16667V11.0833V11.0833V5.25V5.25V5.25H1.16667V5.25V5.25V11.0833V11.0833V11.0833V11.0833M4.66667 9.33333C4.9875 9.33333 5.26215 9.2191 5.49062 8.99063C5.7191 8.76215 5.83333 8.4875 5.83333 8.16667C5.83333 7.84583 5.7191 7.57118 5.49062 7.34271C5.26215 7.11424 4.9875 7 4.66667 7C4.34583 7 4.07118 7.11424 3.84271 7.34271C3.61424 7.57118 3.5 7.84583 3.5 8.16667C3.5 8.4875 3.61424 8.76215 3.84271 8.99063C4.07118 9.2191 4.34583 9.33333 4.66667 9.33333V9.33333M1.16667 11.0833V11.0833V11.0833V5.25V5.25V5.25V5.25V5.25V5.25V11.0833V11.0833V11.0833V11.0833V11.0833"
                          fill="#47607E"
                        />
                      </svg>
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Ketersediaan Sewa: Masih Terbuka &#40;Perlu Keputusan
                        Pengelola&#41;
                      </p>
                    </div>
                  </div>
                  <div className="flex pb-0.5 flex-col items-end gap-px w-fit">
                    <div className="flex flex-col items-end w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Estimasi Klaim Kerusakan
                      </p>
                    </div>
                    <p className="text-[#BA1A1A] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                      Rp 350.000
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-4 w-full lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <div className="order-2 flex min-w-0 flex-col items-start gap-1 w-full lg:order-2">
                    <div className="flex p-2.5 flex-col items-start gap-1 rounded-lg bg-[#E9F6FD] w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-full tracking-[0.02em]">
                          JENIS KERUSAKAN
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-full">
                          Goresan baret bumper belakang kiri setelah sewa luar
                          kota &#40;indikasi gesekan trotoar&#41;.
                        </p>
                      </div>
                    </div>
                    <div className="maintenance-meta-grid inline-grid pt-1 w-full relative">
                      <div className="flex flex-col items-start -space-y-px w-full absolute left-0 top-1">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Tanggal Lapor
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="11"
                            height="11"
                            viewBox="0 0 11 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M7.20417 7.9625L7.9625 7.20417L5.95833 5.2V2.70833H4.875V5.63333L7.20417 7.9625V7.9625M5.41667 10.8333C4.66736 10.8333 3.96319 10.6911 3.30417 10.4068C2.64514 10.1224 2.07188 9.73646 1.58438 9.24896C1.09687 8.76146 0.710938 8.18819 0.426562 7.52917C0.142187 6.87014 0 6.16597 0 5.41667C0 4.66736 0.142187 3.96319 0.426562 3.30417C0.710938 2.64514 1.09687 2.07188 1.58438 1.58438C2.07188 1.09687 2.64514 0.710938 3.30417 0.426562C3.96319 0.142187 4.66736 0 5.41667 0C6.16597 0 6.87014 0.142187 7.52917 0.426562C8.18819 0.710938 8.76146 1.09687 9.24896 1.58438C9.73646 2.07188 10.1224 2.64514 10.4068 3.30417C10.6911 3.96319 10.8333 4.66736 10.8333 5.41667C10.8333 6.16597 10.6911 6.87014 10.4068 7.52917C10.1224 8.18819 9.73646 8.76146 9.24896 9.24896C8.76146 9.73646 8.18819 10.1224 7.52917 10.4068C6.87014 10.6911 6.16597 10.8333 5.41667 10.8333V10.8333M5.41667 5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667M5.41667 9.75C6.61736 9.75 7.63976 9.32795 8.48385 8.48385C9.32795 7.63976 9.75 6.61736 9.75 5.41667C9.75 4.21597 9.32795 3.19358 8.48385 2.34948C7.63976 1.50538 6.61736 1.08333 5.41667 1.08333C4.21597 1.08333 3.19358 1.50538 2.34948 2.34948C1.50538 3.19358 1.08333 4.21597 1.08333 5.41667C1.08333 6.61736 1.50538 7.63976 2.34948 8.48385C3.19358 9.32795 4.21597 9.75 5.41667 9.75V9.75"
                              fill="#BA1A1A"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            Hari Ini, 09:15 WIB
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start -space-y-px w-full absolute left-[123px] top-1">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Pelapor
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M4.33333 4.33333C3.7375 4.33333 3.22743 4.12118 2.80312 3.69688C2.37882 3.27257 2.16667 2.7625 2.16667 2.16667C2.16667 1.57083 2.37882 1.06076 2.80312 0.636458C3.22743 0.212153 3.7375 0 4.33333 0C4.92917 0 5.43924 0.212153 5.86354 0.636458C6.28785 1.06076 6.5 1.57083 6.5 2.16667C6.5 2.7625 6.28785 3.27257 5.86354 3.69688C5.43924 4.12118 4.92917 4.33333 4.33333 4.33333V4.33333M0 8.66667V7.15C0 6.84306 0.0789931 6.56094 0.236979 6.30365C0.394965 6.04635 0.604861 5.85 0.866667 5.71458C1.42639 5.43472 1.99514 5.22483 2.57292 5.0849C3.15069 4.94496 3.7375 4.875 4.33333 4.875C4.92917 4.875 5.51597 4.94496 6.09375 5.0849C6.67153 5.22483 7.24028 5.43472 7.8 5.71458C8.06181 5.85 8.2717 6.04635 8.42969 6.30365C8.58767 6.56094 8.66667 6.84306 8.66667 7.15V8.66667H0V8.66667M1.08333 7.58333H7.58333V7.15C7.58333 7.05069 7.55851 6.96042 7.50885 6.87917C7.4592 6.79792 7.39375 6.73472 7.3125 6.68958C6.825 6.44583 6.33299 6.26302 5.83646 6.14115C5.33993 6.01927 4.83889 5.95833 4.33333 5.95833C3.82778 5.95833 3.32674 6.01927 2.83021 6.14115C2.33368 6.26302 1.84167 6.44583 1.35417 6.68958C1.27292 6.73472 1.20747 6.79792 1.15781 6.87917C1.10816 6.96042 1.08333 7.05069 1.08333 7.15V7.58333V7.58333M4.33333 3.25C4.63125 3.25 4.88628 3.14392 5.09844 2.93177C5.31059 2.71962 5.41667 2.46458 5.41667 2.16667C5.41667 1.86875 5.31059 1.61372 5.09844 1.40156C4.88628 1.18941 4.63125 1.08333 4.33333 1.08333C4.03542 1.08333 3.78038 1.18941 3.56823 1.40156C3.35608 1.61372 3.25 1.86875 3.25 2.16667C3.25 2.46458 3.35608 2.71962 3.56823 2.93177C3.78038 3.14392 4.03542 3.25 4.33333 3.25V3.25M4.33333 2.16667V2.16667V2.16667V2.16667V2.16667V2.16667V2.16667V2.16667V2.16667V2.16667M4.33333 7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333V7.58333"
                              fill="#6E7977"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            Driver Rental &#40;Check-in&#41;
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start -space-y-px w-full absolute left-0 top-[54px]">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Penyewa Terakhir Terkait
                          </p>
                        </div>
                        <div className="flex items-center gap-1 w-full">
                          <svg
                            width="11"
                            height="10"
                            viewBox="0 0 11 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.08333 8.66667V8.66667V8.66667V8.66667V8.66667V8.66667V8.66667V8.66667V1.08333V1.08333V1.08333V1.08333V1.08333V1.08333V1.08333V1.08333C1.08333 1.08333 1.08333 1.2842 1.08333 1.68594C1.08333 2.08767 1.08333 2.60903 1.08333 3.25V6.5C1.08333 7.14097 1.08333 7.66233 1.08333 8.06406C1.08333 8.4658 1.08333 8.66667 1.08333 8.66667V8.66667M1.08333 9.75C0.785417 9.75 0.530382 9.64392 0.318229 9.43177C0.106076 9.21962 0 8.96458 0 8.66667V1.08333C0 0.785417 0.106076 0.530382 0.318229 0.318229C0.530382 0.106076 0.785417 0 1.08333 0H8.66667C8.96458 0 9.21962 0.106076 9.43177 0.318229C9.64392 0.530382 9.75 0.785417 9.75 1.08333V2.4375H8.66667V1.08333V1.08333V1.08333H1.08333V1.08333V1.08333V8.66667V8.66667V8.66667H8.66667V8.66667V8.66667V7.3125H9.75V8.66667C9.75 8.96458 9.64392 9.21962 9.43177 9.43177C9.21962 9.64392 8.96458 9.75 8.66667 9.75H1.08333V9.75M5.41667 7.58333C5.11875 7.58333 4.86372 7.47726 4.65156 7.2651C4.43941 7.05295 4.33333 6.79792 4.33333 6.5V3.25C4.33333 2.95208 4.43941 2.69705 4.65156 2.4849C4.86372 2.27274 5.11875 2.16667 5.41667 2.16667H9.20833C9.50625 2.16667 9.76128 2.27274 9.97344 2.4849C10.1856 2.69705 10.2917 2.95208 10.2917 3.25V6.5C10.2917 6.79792 10.1856 7.05295 9.97344 7.2651C9.76128 7.47726 9.50625 7.58333 9.20833 7.58333H5.41667V7.58333M9.20833 6.5V6.5V6.5V3.25V3.25V3.25H5.41667V3.25V3.25V6.5V6.5V6.5H9.20833V6.5M7.04167 5.6875C7.26736 5.6875 7.4592 5.60851 7.61719 5.45052C7.77517 5.29253 7.85417 5.10069 7.85417 4.875C7.85417 4.64931 7.77517 4.45747 7.61719 4.29948C7.4592 4.14149 7.26736 4.0625 7.04167 4.0625C6.81597 4.0625 6.62413 4.14149 6.46615 4.29948C6.30816 4.45747 6.22917 4.64931 6.22917 4.875C6.22917 5.10069 6.30816 5.29253 6.46615 5.45052C6.62413 5.60851 6.81597 5.6875 7.04167 5.6875V5.6875"
                              fill="#47607E"
                            />
                          </svg>
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                            Rendy K. &#40;Deposit tersimpan: Rp 500.000&#41;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 flex min-w-0 flex-col justify-center items-start rounded-lg bg-[#E3F0F8] w-full h-44 overflow-hidden relative lg:order-1">
                    <img
                      src="/Ab6axudyrjsbzmsiwdwphefwt2hrtl0t_rs2norzzk1i6nj6er4zry_eboz6leplwpptb0qftgetypqwq_talttgf1n6mwfp92uqw3viriphjhokyv3achmmutrpbojqc09_uuzjfholn89mw76qftywcufhktc1v6cp0qxmjolqabofly48qjjn2stq_k_bsvjvc1khklck2ctns9bg4p2vfgywpjhhu4puscmoyhwhhgxhklyqlcfynq.png"
                      className="w-full h-full overflow-hidden max-w-none"
                      alt="AB6AXuDyrJSBzMSIwdwpHEFWT2hRtL0T_RS2nOrZZk1i6Nj6eR4zRY_EboZ6-lePlwppTB0qfTgETYpqWq_TaLTTg-F1n6-MwfP92uQW3vIriphJhokyv3ACHMmUTRPboJQc09_UUzJfH-oln89mW76qftyWcufhkTC1V6cp0qxmJoLQABOFLY48qjjn2stQ_k_BsvjVc1khkLck2cTnS9bg4P2VFgYwPJhHU4PuscmoYhWHHgxHkLyqLcFynQ"
                    />
                    <div className="flex p-2.5 items-end absolute bg-linear-[0deg,rgba(0,0,0,0.60)0%,rgba(0,0,0,0.00)50%,rgba(0,0,0,0.00)100%] w-[165px] h-44">
                      <div className="flex pr-[23px] items-center gap-1 shadow-[01px2px0rgba(0,0,0,0.06),01px4px0rgba(0,0,0,0.10)] w-fit">
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.83333 8.45833C6.5625 8.45833 7.18229 8.20312 7.69271 7.69271C8.20312 7.18229 8.45833 6.5625 8.45833 5.83333C8.45833 5.10417 8.20312 4.48438 7.69271 3.97396C7.18229 3.46354 6.5625 3.20833 5.83333 3.20833C5.10417 3.20833 4.48438 3.46354 3.97396 3.97396C3.46354 4.48438 3.20833 5.10417 3.20833 5.83333C3.20833 6.5625 3.46354 7.18229 3.97396 7.69271C4.48438 8.20312 5.10417 8.45833 5.83333 8.45833V8.45833M5.83333 7.29167C5.425 7.29167 5.07986 7.15069 4.79792 6.86875C4.51597 6.58681 4.375 6.24167 4.375 5.83333C4.375 5.425 4.51597 5.07986 4.79792 4.79792C5.07986 4.51597 5.425 4.375 5.83333 4.375C6.24167 4.375 6.58681 4.51597 6.86875 4.79792C7.15069 5.07986 7.29167 5.425 7.29167 5.83333C7.29167 6.24167 7.15069 6.58681 6.86875 6.86875C6.58681 7.15069 6.24167 7.29167 5.83333 7.29167V7.29167M1.16667 10.5C0.845833 10.5 0.571181 10.3858 0.342708 10.1573C0.114236 9.92882 0 9.65417 0 9.33333V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H3.00417L4.08333 0H7.58333L8.6625 1.16667H10.5C10.8208 1.16667 11.0955 1.2809 11.324 1.50937C11.5524 1.73785 11.6667 2.0125 11.6667 2.33333V9.33333C11.6667 9.65417 11.5524 9.92882 11.324 10.1573C11.0955 10.3858 10.8208 10.5 10.5 10.5H1.16667V10.5M1.16667 9.33333H10.5V9.33333V9.33333V2.33333V2.33333V2.33333H8.1375L7.07292 1.16667H4.59375L3.52917 2.33333H1.16667V2.33333V2.33333V9.33333V9.33333V9.33333V9.33333M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333"
                            fill="white"
                          />
                        </svg>
                        <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Bukti Fisik: Bumper Belakang Kiri
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-2.5 items-center rounded-lg bg-[rgba(221,234,242,0.60)] w-full">
                  <div className="flex items-center gap-2 w-fit">
                    <svg
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M6 15C4.2625 14.5625 2.82812 13.5656 1.69687 12.0094C0.565625 10.4531 0 8.725 0 6.825V2.25L6 0L12 2.25V6.825C12 8.725 11.4344 10.4531 10.3031 12.0094C9.17188 13.5656 7.7375 14.5625 6 15V15M6 13.425C7.3 13.0125 8.375 12.1875 9.225 10.95C10.075 9.7125 10.5 8.3375 10.5 6.825V3.28125L6 1.59375L1.5 3.28125V6.825C1.5 8.3375 1.925 9.7125 2.775 10.95C3.625 12.1875 4.7 13.0125 6 13.425V13.425M6 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                        fill="#BA1A1A"
                      />
                    </svg>
                    <div className="flex pr-[22px] flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Uang jaminan penyewa dapat langsung dipotong sesuai
                        estimasi bengkel rekanan cat oven.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-center justify-end gap-2 pt-2">
                  <div className="flex pt-2 pr-[42px] pb-2 pl-4 items-center gap-[30px] rounded-lg bg-[#FFDAD6] w-fit">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M1.33333 10.6667V10.6667V10.6667V10.6667V10.6667V10.6667V10.6667V10.6667V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333C1.33333 1.33333 1.33333 1.58056 1.33333 2.075C1.33333 2.56944 1.33333 3.21111 1.33333 4V8C1.33333 8.78889 1.33333 9.43056 1.33333 9.925C1.33333 10.4194 1.33333 10.6667 1.33333 10.6667V10.6667M1.33333 12C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H10.6667C11.0333 0 11.3472 0.130556 11.6083 0.391667C11.8694 0.652778 12 0.966667 12 1.33333V3H10.6667V1.33333V1.33333V1.33333H1.33333V1.33333V1.33333V10.6667V10.6667V10.6667H10.6667V10.6667V10.6667V9H12V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H1.33333V12M6.66667 9.33333C6.3 9.33333 5.98611 9.20278 5.725 8.94167C5.46389 8.68056 5.33333 8.36667 5.33333 8V4C5.33333 3.63333 5.46389 3.31944 5.725 3.05833C5.98611 2.79722 6.3 2.66667 6.66667 2.66667H11.3333C11.7 2.66667 12.0139 2.79722 12.275 3.05833C12.5361 3.31944 12.6667 3.63333 12.6667 4V8C12.6667 8.36667 12.5361 8.68056 12.275 8.94167C12.0139 9.20278 11.7 9.33333 11.3333 9.33333H6.66667V9.33333M11.3333 8V8V8V4V4V4H6.66667V4V4V8V8V8H11.3333V8M8.66667 7C8.94444 7 9.18056 6.90278 9.375 6.70833C9.56944 6.51389 9.66667 6.27778 9.66667 6C9.66667 5.72222 9.56944 5.48611 9.375 5.29167C9.18056 5.09722 8.94444 5 8.66667 5C8.38889 5 8.15278 5.09722 7.95833 5.29167C7.76389 5.48611 7.66667 5.72222 7.66667 6C7.66667 6.27778 7.76389 6.51389 7.95833 6.70833C8.15278 6.90278 8.38889 7 8.66667 7V7"
                        fill="#93000A"
                      />
                    </svg>
                    <p className="text-[#93000A] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Klaim Uang Jaminan
                    </p>
                  </div>
                  <div className="flex pt-2 pr-9 pb-2 pl-4 items-center gap-6 rounded-lg bg-[#47607E] w-fit">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M10.9333 12.0167L7.28333 8.36667L8.68333 6.96667L12.3333 10.6167L10.9333 12.0167V12.0167M1.73333 12.0167L0.333333 10.6167L4.93333 6.01667L3.8 4.88333L3.33333 5.35L2.48333 4.5V5.86667L2.01667 6.33333L0 4.31667L0.466667 3.85H1.83333L1 3.01667L3.36667 0.65C3.58889 0.427778 3.82778 0.266667 4.08333 0.166667C4.33889 0.0666667 4.6 0.0166667 4.86667 0.0166667C5.13333 0.0166667 5.39444 0.0666667 5.65 0.166667C5.90556 0.266667 6.14444 0.427778 6.36667 0.65L4.83333 2.18333L5.66667 3.01667L5.2 3.48333L6.33333 4.61667L7.83333 3.11667C7.78889 2.99444 7.75278 2.86667 7.725 2.73333C7.69722 2.6 7.68333 2.46667 7.68333 2.33333C7.68333 1.67778 7.90833 1.125 8.35833 0.675C8.80833 0.225 9.36111 0 10.0167 0C10.1833 0 10.3417 0.0166667 10.4917 0.05C10.6417 0.0833333 10.7944 0.133333 10.95 0.2L9.3 1.85L10.5 3.05L12.15 1.4C12.2278 1.55556 12.2806 1.70833 12.3083 1.85833C12.3361 2.00833 12.35 2.16667 12.35 2.33333C12.35 2.98889 12.125 3.54167 11.675 3.99167C11.225 4.44167 10.6722 4.66667 10.0167 4.66667C9.88333 4.66667 9.75 4.65556 9.61667 4.63333C9.48333 4.61111 9.35556 4.57222 9.23333 4.51667L1.73333 12.0167V12.0167"
                        fill="white"
                      />
                    </svg>
                    <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Bawa ke Bengkel Body Repair
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="flex flex-col items-start gap-4 rounded-xl bg-[#FFF] p-6 shadow-[01px2px0rgba(0,0,0,0.05)] w-full md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 w-fit">
              <div className="flex justify-center items-center rounded-xl bg-[rgba(15,118,110,0.10)] w-12 h-12">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M9.85833 13.4167C10.325 13.8833 10.9278 14.1118 11.6667 14.1021C12.4056 14.0924 12.95 13.825 13.3 13.3L19.8333 3.5L10.0333 10.0333C9.50833 10.3833 9.23125 10.9181 9.20208 11.6375C9.17292 12.3569 9.39167 12.95 9.85833 13.4167V13.4167M11.6667 0C12.8139 0 13.9174 0.160417 14.9771 0.48125C16.0368 0.802083 17.0333 1.28333 17.9667 1.925L15.75 3.325C15.1083 2.99444 14.4424 2.74653 13.7521 2.58125C13.0618 2.41597 12.3667 2.33333 11.6667 2.33333C9.08056 2.33333 6.87847 3.24236 5.06042 5.06042C3.24236 6.87847 2.33333 9.08056 2.33333 11.6667C2.33333 12.4833 2.44514 13.2903 2.66875 14.0875C2.89236 14.8847 3.20833 15.6333 3.61667 16.3333H19.7167C20.1639 15.5944 20.4896 14.8264 20.6938 14.0292C20.8979 13.2319 21 12.4056 21 11.55C21 10.85 20.9174 10.1694 20.7521 9.50833C20.5868 8.84722 20.3389 8.20556 20.0083 7.58333L21.4083 5.36667C21.9917 6.28056 22.4535 7.25278 22.7938 8.28333C23.134 9.31389 23.3139 10.3833 23.3333 11.4917C23.3528 12.6 23.2264 13.6597 22.9542 14.6708C22.6819 15.6819 22.2833 16.6444 21.7583 17.5583C21.5444 17.9083 21.2528 18.1806 20.8833 18.375C20.5139 18.5694 20.125 18.6667 19.7167 18.6667H3.61667C3.20833 18.6667 2.81944 18.5694 2.45 18.375C2.08056 18.1806 1.78889 17.9083 1.575 17.5583C1.06944 16.6833 0.680556 15.7549 0.408333 14.7729C0.136111 13.791 0 12.7556 0 11.6667C0 10.0528 0.30625 8.54097 0.91875 7.13125C1.53125 5.72153 2.36736 4.48681 3.42708 3.42708C4.48681 2.36736 5.72639 1.53125 7.14583 0.91875C8.56528 0.30625 10.0722 0 11.6667 0V0M11.8708 9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917V9.12917"
                    fill="#005C55"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start gap-0.5 w-fit">
                <div className="flex items-center gap-2 w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.025em]">
                      PENGINGAT SERVIS MENDATANG
                    </p>
                  </div>
                  <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#DCFCE7] w-fit">
                    <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Siaga Rutin
                    </p>
                  </div>
                </div>
                <div className="maintenance-service-note flex w-full flex-wrap items-start gap-x-1 gap-y-0.5">
                  <p className="text-[#263238] font-plusJakartaSans text-sm font-semibold leading-5">
                    Servis Berkala Toyota Avanza &#40;
                  </p>
                  <p className="text-[#47607E] font-liberationMono text-sm font-bold leading-5">
                    L 1234 AB
                  </p>
                  <p className="text-[#005C55] font-plusJakartaSans text-sm font-bold leading-5">
                    &#41; tersisa 2.420 KM lagi &#x2F;
                  </p>
                  <p className="w-full text-[#263238] font-plusJakartaSans text-sm font-semibold leading-5">
                    batas waktu kalender 18 Nov 2026.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex max-w-full flex-wrap items-center gap-2">
              <button className="cursor-pointer text-nowrap flex py-2 px-4 flex-col justify-center items-center rounded-lg bg-[#DDEAF2] w-fit">
                <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Riwayat Mesin Avanza
                </p>
              </button>
              <div className="flex py-2 px-4 items-center gap-1 rounded-lg bg-[#0F766E] w-fit">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M0 5.36667C0 4.25556 0.247222 3.23611 0.741667 2.30833C1.23611 1.38056 1.9 0.611111 2.73333 0L3.51667 1.06667C2.85 1.55556 2.31944 2.17222 1.925 2.91667C1.53056 3.66111 1.33333 4.47778 1.33333 5.36667H0V5.36667M12 5.36667C12 4.47778 11.8028 3.66111 11.4083 2.91667C11.0139 2.17222 10.4833 1.55556 9.81667 1.06667L10.6 0C11.4333 0.611111 12.0972 1.38056 12.5917 2.30833C13.0861 3.23611 13.3333 4.25556 13.3333 5.36667H12V5.36667M1.33333 11.3667V10.0333H2.66667V5.36667C2.66667 4.44444 2.94444 3.625 3.5 2.90833C4.05556 2.19167 4.77778 1.72222 5.66667 1.5V1.03333C5.66667 0.755556 5.76389 0.519444 5.95833 0.325C6.15278 0.130556 6.38889 0.0333333 6.66667 0.0333333C6.94444 0.0333333 7.18056 0.130556 7.375 0.325C7.56944 0.519444 7.66667 0.755556 7.66667 1.03333V1.5C8.55556 1.72222 9.27778 2.19167 9.83333 2.90833C10.3889 3.625 10.6667 4.44444 10.6667 5.36667V10.0333H12V11.3667H1.33333V11.3667M6.66667 6.36667V6.36667V6.36667V6.36667V6.36667V6.36667V6.36667V6.36667V6.36667M6.66667 13.3667C6.3 13.3667 5.98611 13.2361 5.725 12.975C5.46389 12.7139 5.33333 12.4 5.33333 12.0333H8C8 12.4 7.86944 12.7139 7.60833 12.975C7.34722 13.2361 7.03333 13.3667 6.66667 13.3667V13.3667M4 10.0333H9.33333V5.36667C9.33333 4.63333 9.07222 4.00556 8.55 3.48333C8.02778 2.96111 7.4 2.7 6.66667 2.7C5.93333 2.7 5.30556 2.96111 4.78333 3.48333C4.26111 4.00556 4 4.63333 4 5.36667V10.0333V10.0333"
                    fill="white"
                  />
                </svg>
                <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Setel Pengingat Odometer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}