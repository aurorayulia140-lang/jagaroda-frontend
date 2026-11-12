import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Pembayaran() {
  const [paymentFilter, setPaymentFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  function isPaymentVisible(status, searchableText) {
    const matchesStatus = paymentFilter === 'all' || paymentFilter === status
    const matchesSearch = searchableText.toLowerCase().includes(searchQuery.trim().toLowerCase())
    return matchesStatus && matchesSearch
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-start overflow-x-clip bg-linear-[0deg,#F4FAFF0%,#F4FAFF100%),#FF] relative">
      <div className="flex min-h-[800px] pt-16 flex-col items-start bg-[#F5F7FA] w-full">
        <div className="flex p-8 flex-col items-start gap-6 w-full">
          <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-1 w-fit">
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Keuangan &amp; Billing
                  </p>
                </div>
                <svg
                  width="4"
                  height="6"
                  viewBox="0 0 4 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M2.3 3L0 0.7L0.7 0L3.7 3L0.7 6L0 5.3L2.3 3V3"
                    fill="#6E7977"
                  />
                </svg>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                    Pembayaran
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-2 pt-1">
                <div className="flex w-full flex-wrap items-center gap-3">
                  <h1 className="font-plusJakartaSans text-[26px] font-bold leading-8 text-[#263238] tracking-[-0.025em]">
                    Manajemen &amp; Pemantauan Pembayaran
                  </h1>
                  <span className="inline-flex rounded-full bg-[#DDEAF2] px-2 py-0.5 font-plusJakartaSans text-[11px] font-medium leading-[14px] tracking-[0.02em] text-[#47607E]">
                    Periode Okt 2026
                  </span>
                </div>
              </div>
              <div className="flex max-w-[672px] flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Pantau arus kas sewa, verifikasi uang muka, dan tagih sisa
                  pelunasan armada rental secara akurat dan real-time.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 lg:w-fit lg:justify-end">
              <div className="flex py-2.5 px-4 items-center gap-2 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M6 9L2.25 5.25L3.3 4.1625L5.25 6.1125V0H6.75V6.1125L8.7 4.1625L9.75 5.25L6 9V9M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V8.25H1.5V10.5V10.5V10.5H10.5V10.5V10.5V8.25H12V10.5C12 10.9125 11.8531 11.2656 11.5594 11.5594C11.2656 11.8531 10.9125 12 10.5 12H1.5V12"
                    fill="#47607E"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Unduh Laporan &#40;.CSV&#x2F;.PDF&#41;
                  </p>
                </div>
              </div>
              <div className="flex py-2.5 px-4 items-center gap-2 rounded-lg bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    + Catat Pembayaran Manual
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex p-6 flex-col items-start gap-[7px] rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Total Penerimaan Lunas
                    </p>
                  </div>
                  <div className="flex pt-1 flex-col items-start w-full">
                    <div className="flex items-baseline w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-fit tracking-[-0.02em]">
                        Rp 42.850.000
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-0.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        18 Transaksi Berhasil
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2.5 justify-center items-center rounded-xl bg-[#E9F6FD] w-fit">
                  <svg
                    width="22"
                    height="21"
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21V21M8.45 18.45L11 17.35L13.6 18.45L15 16.05L17.75 15.4L17.5 12.6L19.35 10.5L17.5 8.35L17.75 5.55L15 4.95L13.55 2.55L11 3.65L8.4 2.55L7 4.95L4.25 5.55L4.5 8.35L2.65 10.5L4.5 12.6L4.25 15.45L7 16.05L8.45 18.45V18.45M11 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5M9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05V14.05"
                      fill="#005C55"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="flex pt-2 justify-between items-center w-full">
                  <div className="flex py-1 px-2.5 items-center gap-1.5 rounded-full bg-[#DCFCE7] w-fit">
                    <div className="rounded-full bg-[#15803D] w-1.5 h-1.5"></div>
                    <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Tercatat Masuk
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      71.8% dari total komitmen
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pt-3 flex-col items-start w-full h-[18px]">
                <svg
                  width="258"
                  height="6"
                  viewBox="0 0 258 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex pr-[73px] items-center shrink-0 rounded-full bg-[#E3F0F8] w-full h-1.5 overflow-hidden "
                >
                  <rect width="257.333" height="6" rx="3" fill="#E3F0F8" />
                  <rect width="184.752" height="6" rx="3" fill="#005C55" />
                </svg>
              </div>
            </div>
            <div className="flex p-6 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Menunggu Pelunasan &#x2F; DP
                    </p>
                  </div>
                  <div className="flex pt-1 flex-col items-start w-full">
                    <div className="flex items-baseline w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-fit tracking-[-0.02em]">
                        Rp 14.300.000
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-0.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        7 Transaksi Tertahan
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2.5 justify-center items-center rounded-xl bg-[#DDEAF2] w-fit">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M13.3 14.7L14.7 13.3L11 9.6V5H9V10.4L13.3 14.7V14.7M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20V20M10 10V10V10V10V10V10V10V10V10V10M10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18V18"
                      fill="#B45309"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="flex pt-2 justify-between items-center w-full">
                  <div className="flex pt-1 pr-7 pb-1 pl-2.5 items-center gap-1.5 rounded-full bg-[#FEF3C7] w-fit">
                    <div className="rounded-full bg-[#B45309] w-[5px] h-1.5"></div>
                    <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Mendekati Tenggat &#x2F; Saat Handover
                    </p>
                  </div>
                  <div className="flex pr-[23px] flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      22.0% pipeline
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pt-3 flex-col items-start w-full h-[18px]">
                <svg
                  width="258"
                  height="6"
                  viewBox="0 0 258 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex pr-[201px] items-center shrink-0 rounded-full bg-[#E3F0F8] w-full h-1.5 overflow-hidden "
                >
                  <g clipPath="url(#clip0_156_2089)">
                    <rect width="257.333" height="6" rx="3" fill="#E3F0F8" />
                    <rect width="56.61" height="6" rx="3" fill="#B45309" />
                  </g>
                  <defs>
                    <clipPath id="clip0_156_2089">
                      <rect width="257.333" height="6" rx="3" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="flex p-6 flex-col items-start gap-[19px] rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
              <div className="flex justify-between items-start w-full">
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Terlambat &#x2F; Jatuh Tempo
                    </p>
                  </div>
                  <div className="flex pt-1 flex-col items-start w-full">
                    <div className="flex items-baseline w-full">
                      <p className="text-[#B91C1C] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-fit tracking-[-0.02em]">
                        Rp 3.750.000
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-0.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        2 Transaksi Menunggak
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-2.5 justify-center items-center rounded-xl bg-[#FFDAD6] w-fit">
                  <svg
                    width="22"
                    height="19"
                    viewBox="0 0 22 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M0 19L11 0L22 19H0V19M3.45 17H18.55L11 4L3.45 17V17M11 16C11.2833 16 11.5208 15.9042 11.7125 15.7125C11.9042 15.5208 12 15.2833 12 15C12 14.7167 11.9042 14.4792 11.7125 14.2875C11.5208 14.0958 11.2833 14 11 14C10.7167 14 10.4792 14.0958 10.2875 14.2875C10.0958 14.4792 10 14.7167 10 15C10 15.2833 10.0958 15.5208 10.2875 15.7125C10.4792 15.9042 10.7167 16 11 16V16M10 13H12V8H10V13V13M11 10.5V10.5V10.5V10.5V10.5"
                      fill="#BA1A1A"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="flex pt-2 justify-between items-center w-full">
                  <div className="flex pt-1 pr-[38px] pb-1 pl-2.5 items-center gap-1.5 rounded-full bg-[#FEE2E2] w-fit">
                    <div className="rounded-full bg-[#B91C1C] w-[5px] h-1.5"></div>
                    <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Perlu Tindak Lanjut Segera
                    </p>
                  </div>
                  <div className="flex pr-[38px] flex-col items-start w-fit">
                    <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Prioritas Penagihan
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pt-3 flex-col items-start w-full h-[18px]">
                <svg
                  width="258"
                  height="6"
                  viewBox="0 0 258 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex pr-[241px] items-center shrink-0 rounded-full bg-[#E3F0F8] w-full h-1.5 overflow-hidden "
                >
                  <g clipPath="url(#clip0_156_2113)">
                    <rect width="257.333" height="6" rx="3" fill="#E3F0F8" />
                    <rect width="15.95" height="6" rx="3" fill="#B91C1C" />
                  </g>
                  <defs>
                    <clipPath id="clip0_156_2113">
                      <rect width="257.333" height="6" rx="3" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-4 items-stretch gap-3 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full md:flex-row md:items-center md:gap-4">
            <div className="flex min-w-0 flex-col items-start w-full relative md:flex-1">
              <div className="flex pt-[9px] pr-4 pb-[9px] pl-10 justify-center items-start rounded-lg bg-[#E9F6FD] w-full overflow-hidden">
                <div className="flex flex-col items-start w-full overflow-hidden">
                  <input
                    aria-label="Cari nama penyewa, nomor invoice, atau plat kendaraan"
                    className="w-full bg-transparent font-plusJakartaSans text-[13px] text-[#263238] outline-none placeholder:text-[rgba(71,96,126,0.70)]"
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Cari nama penyewa, no invoice, atau plat mobil..."
                    type="search"
                    value={searchQuery}
                  />
                </div>
              </div>
              <div className="flex pl-3.5 items-center absolute w-fit h-[34px]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M13.8333 15L8.58333 9.75C8.16667 10.0833 7.6875 10.3472 7.14583 10.5417C6.60417 10.7361 6.02778 10.8333 5.41667 10.8333C3.90278 10.8333 2.62153 10.309 1.57292 9.26042C0.524305 8.21181 0 6.93056 0 5.41667C0 3.90278 0.524305 2.62153 1.57292 1.57292C2.62153 0.524305 3.90278 0 5.41667 0C6.93056 0 8.21181 0.524305 9.26042 1.57292C10.309 2.62153 10.8333 3.90278 10.8333 5.41667C10.8333 6.02778 10.7361 6.60417 10.5417 7.14583C10.3472 7.6875 10.0833 8.16667 9.75 8.58333L15 13.8333L13.8333 15V15M5.41667 9.16667C6.45833 9.16667 7.34375 8.80208 8.07292 8.07292C8.80208 7.34375 9.16667 6.45833 9.16667 5.41667C9.16667 4.375 8.80208 3.48958 8.07292 2.76042C7.34375 2.03125 6.45833 1.66667 5.41667 1.66667C4.375 1.66667 3.48958 2.03125 2.76042 2.76042C2.03125 3.48958 1.66667 4.375 1.66667 5.41667C1.66667 6.45833 2.03125 7.34375 2.76042 8.07292C3.48958 8.80208 4.375 9.16667 5.41667 9.16667V9.16667"
                    fill="#47607E"
                  />
                </svg>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center items-start gap-2 md:w-fit">
              <div className="flex max-w-full flex-wrap items-start gap-1 rounded-lg bg-[#E3F0F8] p-1 md:w-fit">
                <button aria-pressed={paymentFilter === 'all'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-md ${paymentFilter === 'all' ? 'bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setPaymentFilter('all')} type="button">
                  <p className={`${paymentFilter === 'all' ? 'text-[#FFF]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Semua &#40;27&#41;
                  </p>
                </button>
                <button aria-pressed={paymentFilter === 'paid'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-md ${paymentFilter === 'paid' ? 'bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setPaymentFilter('paid')} type="button">
                  <p className={`${paymentFilter === 'paid' ? 'text-[#FFF]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Lunas &#40;18&#41;
                  </p>
                </button>
                <button aria-pressed={paymentFilter === 'pending'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-md ${paymentFilter === 'pending' ? 'bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setPaymentFilter('pending')} type="button">
                  <p className={`${paymentFilter === 'pending' ? 'text-[#FFF]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Menunggu Pelunasan &#40;7&#41;
                  </p>
                </button>
                <button aria-pressed={paymentFilter === 'late'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-md ${paymentFilter === 'late' ? 'bg-[#FEE2E2]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setPaymentFilter('late')} type="button">
                  <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Terlambat &#40;2&#41;
                  </p>
                </button>
              </div>
              <div className="flex flex-col items-start w-fit relative">
                <div className="flex pt-2 pr-8 pb-2 pl-3.5 items-center rounded-lg bg-[#E9F6FD] w-fit">
                  <div className="flex pr-px flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Semua Metode Pembayaran
                    </p>
                  </div>
                </div>
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-2.5 top-2 w-fit h-4 "
                >
                  <path
                    d="M4 4.93333L0 0.933333L0.933333 0L4 3.06667L7.06667 0L8 0.933333L4 4.93333V4.93333"
                    fill="#47607E"
                  />
                </svg>
              </div>
            </div>
          </div>
            <div className="block min-w-0 w-full overflow-x-auto rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)]">
            <div className="w-max min-w-full">
              <div className="flex shrink-0 flex-col items-start w-[1113px]">
                <div className="flex justify-center items-start bg-[#DDEAF2] w-full">
                  <div className="flex py-3.5 px-4 flex-col items-start w-[94px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      NO. INVOICE &amp; TANGGAL
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-start w-[184px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      NAMA PENYEWA &amp; KONTAK
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-start w-[113px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      UNIT KENDARAAN
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-end w-[104px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      TOTAL BIAYA
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-end w-[103px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      UANG MUKA &#40;DP&#41;
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-end w-[101px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      SISA TAGIHAN
                    </p>
                  </div>
                  <div className="flex pt-[30px] pr-4 pb-[31px] pl-4 flex-col items-start w-[116px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      TENGGAT WAKTU
                    </p>
                  </div>
                  <div className="flex pt-[38px] pr-4 pb-[39px] pl-4 flex-col items-center w-32">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      STATUS
                    </p>
                  </div>
                  <div className="flex pt-[38px] pr-4 pb-[39px] pl-4 flex-col items-end w-[171px]">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.05em]">
                      AKSI
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <div hidden={!isPaymentVisible('late', 'INV-2026-1082 Rendy Kurniawan Daihatsu Xenia L 9012 EF')} className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-start w-[62px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-full tracking-[0.01em]">
                          INV- 2026- 1082
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          21 Okt 2026 • 09:15
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start -space-y-px w-[184px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Rendy Kurniawan
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
                            d="M8.475 9C7.43333 9 6.40417 8.77292 5.3875 8.31875C4.37083 7.86458 3.44583 7.22083 2.6125 6.3875C1.77917 5.55417 1.13542 4.62917 0.68125 3.6125C0.227083 2.59583 0 1.56667 0 0.525C0 0.375 0.05 0.25 0.15 0.15C0.25 0.05 0.375 0 0.525 0H2.55C2.66667 0 2.77083 0.0395833 2.8625 0.11875C2.95417 0.197917 3.00833 0.291667 3.025 0.4L3.35 2.15C3.36667 2.28333 3.3625 2.39583 3.3375 2.4875C3.3125 2.57917 3.26667 2.65833 3.2 2.725L1.9875 3.95C2.15417 4.25833 2.35208 4.55625 2.58125 4.84375C2.81042 5.13125 3.0625 5.40833 3.3375 5.675C3.59583 5.93333 3.86667 6.17292 4.15 6.39375C4.43333 6.61458 4.73333 6.81667 5.05 7L6.225 5.825C6.3 5.75 6.39792 5.69375 6.51875 5.65625C6.63958 5.61875 6.75833 5.60833 6.875 5.625L8.6 5.975C8.71667 6.00833 8.8125 6.06875 8.8875 6.15625C8.9625 6.24375 9 6.34167 9 6.45V8.475C9 8.625 8.95 8.75 8.85 8.85C8.75 8.95 8.625 9 8.475 9V9M1.5125 3L2.3375 2.175V2.175V2.175L2.125 1V1V1H1.0125V1V1C1.05417 1.34167 1.1125 1.67917 1.1875 2.0125C1.2625 2.34583 1.37083 2.675 1.5125 3V3M5.9875 7.475C6.3125 7.61667 6.64375 7.72917 6.98125 7.8125C7.31875 7.89583 7.65833 7.95 8 7.975V7.975V7.975V6.875V6.875V6.875L6.825 6.6375V6.6375V6.6375L5.9875 7.475V7.475M1.5125 3V3V3V3V3V3V3V3V3V3V3V3V3M5.9875 7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          0812-3498-8812
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start w-[113px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-4 w-full tracking-[0.01em]">
                          Daihatsu Xenia 1.3 R
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-fit">
                        <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            L 9012 EF
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-[43px] pr-4 pb-[43px] pl-8 flex-col items-end w-[120px]">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 1.800.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[103px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Rp 500.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[101px]">
                      <p className="text-[#B91C1C] font-plusJakartaSans text-[13px] font-bold leading-[18px] w-fit">
                        Rp 1.300.000
                      </p>
                    </div>
                    <div className="flex py-[38px] px-4 flex-col items-start w-[116px]">
                      <div className="flex items-center gap-1.5 w-full">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M4.46667 11.1333L3.53333 10.2L5.06667 8.66667L3.53333 7.13333L4.46667 6.2L6 7.73333L7.53333 6.2L8.46667 7.13333L6.93333 8.66667L8.46667 10.2L7.53333 11.1333L6 9.6L4.46667 11.1333V11.1333M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333V13.3333M1.33333 12H10.6667V12V12V5.33333H1.33333V12V12V12V12M1.33333 4H10.6667V2.66667V2.66667V2.66667H1.33333V2.66667V2.66667V4V4M1.33333 4V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V4V4V4"
                            fill="#B91C1C"
                          />
                        </svg>
                        <div className="flex pr-[23px] flex-col items-start w-fit">
                          <p className="text-[#B91C1C] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                            23 Okt 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Lewat 1 Hari
                        </p>
                      </div>
                    </div>
                    <div className="flex py-[50px] px-4 flex-col items-center w-32">
                      <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[#FEE2E2] w-fit">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M4.875 7.58333C5.02847 7.58333 5.15712 7.53142 5.26094 7.4276C5.36476 7.32378 5.41667 7.19514 5.41667 7.04167C5.41667 6.88819 5.36476 6.75955 5.26094 6.65573C5.15712 6.55191 5.02847 6.5 4.875 6.5C4.72153 6.5 4.59288 6.55191 4.48906 6.65573C4.38524 6.75955 4.33333 6.88819 4.33333 7.04167C4.33333 7.19514 4.38524 7.32378 4.48906 7.4276C4.59288 7.53142 4.72153 7.58333 4.875 7.58333V7.58333M4.33333 5.41667H5.41667V2.16667H4.33333V5.41667V5.41667M2.84375 9.75L0 6.90625V2.84375L2.84375 0H6.90625L9.75 2.84375V6.90625L6.90625 9.75H2.84375V9.75M3.30417 8.66667H6.44583L8.66667 6.44583V3.30417L6.44583 1.08333H3.30417L1.08333 3.30417V6.44583L3.30417 8.66667V8.66667M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                            fill="#B91C1C"
                          />
                        </svg>
                        <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Terlambat
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-4 justify-end items-center gap-1.5 w-[155px]">
                      <div className="flex pt-1.5 pr-1.5 pb-2.5 pl-1.5 flex-col justify-center items-center rounded-lg w-fit"></div>
                      <button className="cursor-pointer text-nowrap flex pt-1 pr-[13px] pb-1 pl-[13px] flex-col justify-center items-center rounded-md bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Tandai Lunas
                        </p>
                      </button>
                      <div className="flex pt-1.5 pr-1.5 pb-2.5 pl-1.5 flex-col justify-center items-center rounded-lg w-fit"></div>
                    </div>
                  </div>
                  <div hidden={!isPaymentVisible('pending', 'INV-2026-1085 Dimas Saputra Honda Brio L 2345 BC')} className="flex justify-center items-center bg-[#FFF] w-full">
                    <div className="flex flex-col items-start w-[62px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-full tracking-[0.01em]">
                          INV- 2026- 1085
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          23 Okt 2026 • 15:40
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start -space-y-px w-[184px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Dimas Saputra
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
                            d="M8.475 9C7.43333 9 6.40417 8.77292 5.3875 8.31875C4.37083 7.86458 3.44583 7.22083 2.6125 6.3875C1.77917 5.55417 1.13542 4.62917 0.68125 3.6125C0.227083 2.59583 0 1.56667 0 0.525C0 0.375 0.05 0.25 0.15 0.15C0.25 0.05 0.375 0 0.525 0H2.55C2.66667 0 2.77083 0.0395833 2.8625 0.11875C2.95417 0.197917 3.00833 0.291667 3.025 0.4L3.35 2.15C3.36667 2.28333 3.3625 2.39583 3.3375 2.4875C3.3125 2.57917 3.26667 2.65833 3.2 2.725L1.9875 3.95C2.15417 4.25833 2.35208 4.55625 2.58125 4.84375C2.81042 5.13125 3.0625 5.40833 3.3375 5.675C3.59583 5.93333 3.86667 6.17292 4.15 6.39375C4.43333 6.61458 4.73333 6.81667 5.05 7L6.225 5.825C6.3 5.75 6.39792 5.69375 6.51875 5.65625C6.63958 5.61875 6.75833 5.60833 6.875 5.625L8.6 5.975C8.71667 6.00833 8.8125 6.06875 8.8875 6.15625C8.9625 6.24375 9 6.34167 9 6.45V8.475C9 8.625 8.95 8.75 8.85 8.85C8.75 8.95 8.625 9 8.475 9V9M1.5125 3L2.3375 2.175V2.175V2.175L2.125 1V1V1H1.0125V1V1C1.05417 1.34167 1.1125 1.67917 1.1875 2.0125C1.2625 2.34583 1.37083 2.675 1.5125 3V3M5.9875 7.475C6.3125 7.61667 6.64375 7.72917 6.98125 7.8125C7.31875 7.89583 7.65833 7.95 8 7.975V7.975V7.975V6.875V6.875V6.875L6.825 6.6375V6.6375V6.6375L5.9875 7.475V7.475M1.5125 3V3V3V3V3V3V3V3V3V3V3V3V3M5.9875 7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          0821-8722-1090
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start w-[113px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-4 w-full tracking-[0.01em]">
                          Honda Brio Satya E
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-fit">
                        <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            L 2345 BC
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-[43px] pr-4 pb-[43px] pl-8 flex-col items-end w-[120px]">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 1.050.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[103px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Rp 350.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[101px]">
                      <p className="text-[#B45309] font-plusJakartaSans text-[13px] font-bold leading-[18px] w-fit">
                        Rp 700.000
                      </p>
                    </div>
                    <div className="flex py-[31px] px-4 flex-col items-start w-[116px]">
                      <div className="flex items-center gap-1.5 w-full">
                        <svg
                          width="15"
                          height="14"
                          viewBox="0 0 15 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.1 13.1C6.26667 13.1 5.48611 12.9417 4.75833 12.625C4.03056 12.3083 3.39722 11.8806 2.85833 11.3417C2.31944 10.8028 1.89167 10.1694 1.575 9.44167C1.25833 8.71389 1.1 7.93333 1.1 7.1C1.1 6.26667 1.25833 5.48611 1.575 4.75833C1.89167 4.03056 2.31944 3.39722 2.85833 2.85833C3.39722 2.31944 4.03056 1.89167 4.75833 1.575C5.48611 1.25833 6.26667 1.1 7.1 1.1C7.93333 1.1 8.71389 1.25833 9.44167 1.575C10.1694 1.89167 10.8028 2.31944 11.3417 2.85833C11.8806 3.39722 12.3083 4.03056 12.625 4.75833C12.9417 5.48611 13.1 6.26667 13.1 7.1C13.1 7.93333 12.9417 8.71389 12.625 9.44167C12.3083 10.1694 11.8806 10.8028 11.3417 11.3417C10.8028 11.8806 10.1694 12.3083 9.44167 12.625C8.71389 12.9417 7.93333 13.1 7.1 13.1V13.1M7.1 7.1V7.1V7.1V7.1V7.1V7.1V7.1V7.1V7.1V7.1M8.96667 9.9L9.9 8.96667L7.76667 6.83333V3.76667H6.43333V7.36667L8.96667 9.9V9.9M2.83333 0L3.76667 0.933333L0.933333 3.76667L0 2.83333L2.83333 0V0M11.3667 0L14.2 2.83333L13.2667 3.76667L10.4333 0.933333L11.3667 0V0M7.1 11.7667C8.4 11.7667 9.50278 11.3139 10.4083 10.4083C11.3139 9.50278 11.7667 8.4 11.7667 7.1C11.7667 5.8 11.3139 4.69722 10.4083 3.79167C9.50278 2.88611 8.4 2.43333 7.1 2.43333C5.8 2.43333 4.69722 2.88611 3.79167 3.79167C2.88611 4.69722 2.43333 5.8 2.43333 7.1C2.43333 8.4 2.88611 9.50278 3.79167 10.4083C4.69722 11.3139 5.8 11.7667 7.1 11.7667V11.7667"
                            fill="#B45309"
                          />
                        </svg>
                        <div className="flex pr-[3px] flex-col items-start w-fit">
                          <p className="text-[#B45309] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                            Hari Ini, 10:30 WIB
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Saat Handover Unit
                        </p>
                      </div>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-center w-32">
                      <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[#FEF3C7] w-fit">
                        <svg
                          width="9"
                          height="11"
                          viewBox="0 0 9 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M2.16667 9.75H6.5V8.125C6.5 7.52917 6.28785 7.0191 5.86354 6.59479C5.43924 6.17049 4.92917 5.95833 4.33333 5.95833C3.7375 5.95833 3.22743 6.17049 2.80312 6.59479C2.37882 7.0191 2.16667 7.52917 2.16667 8.125V9.75V9.75M0 10.8333V9.75H1.08333V8.125C1.08333 7.57431 1.21198 7.05747 1.46927 6.57448C1.72656 6.09149 2.08542 5.70556 2.54583 5.41667C2.08542 5.12778 1.72656 4.74184 1.46927 4.25885C1.21198 3.77587 1.08333 3.25903 1.08333 2.70833V1.08333H0V0H8.66667V1.08333H7.58333V2.70833C7.58333 3.25903 7.45469 3.77587 7.1974 4.25885C6.9401 4.74184 6.58125 5.12778 6.12083 5.41667C6.58125 5.70556 6.9401 6.09149 7.1974 6.57448C7.45469 7.05747 7.58333 7.57431 7.58333 8.125V9.75H8.66667V10.8333H0V10.8333"
                            fill="#B45309"
                          />
                        </svg>
                        <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Mendekati Tenggat
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-4 justify-end items-center gap-1.5 w-[155px]">
                      <button className="cursor-pointer text-nowrap flex py-1 px-2.5 flex-col justify-center items-center rounded-md bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Tandai Lunas
                        </p>
                      </button>
                      <div className="flex pt-1.5 pr-1.5 pb-2.5 pl-1.5 flex-col justify-center items-center rounded-lg w-fit"></div>
                    </div>
                  </div>
                  <div hidden={!isPaymentVisible('paid', 'INV-2026-1079 Hendra Gunawan Toyota Avanza B 1234 AB')} className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-start w-[62px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-full tracking-[0.01em]">
                          INV- 2026- 1079
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          20 Okt 2026 • 11:20
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start -space-y-px w-[184px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Bpk. Hendra Gunawan
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
                            d="M8.475 9C7.43333 9 6.40417 8.77292 5.3875 8.31875C4.37083 7.86458 3.44583 7.22083 2.6125 6.3875C1.77917 5.55417 1.13542 4.62917 0.68125 3.6125C0.227083 2.59583 0 1.56667 0 0.525C0 0.375 0.05 0.25 0.15 0.15C0.25 0.05 0.375 0 0.525 0H2.55C2.66667 0 2.77083 0.0395833 2.8625 0.11875C2.95417 0.197917 3.00833 0.291667 3.025 0.4L3.35 2.15C3.36667 2.28333 3.3625 2.39583 3.3375 2.4875C3.3125 2.57917 3.26667 2.65833 3.2 2.725L1.9875 3.95C2.15417 4.25833 2.35208 4.55625 2.58125 4.84375C2.81042 5.13125 3.0625 5.40833 3.3375 5.675C3.59583 5.93333 3.86667 6.17292 4.15 6.39375C4.43333 6.61458 4.73333 6.81667 5.05 7L6.225 5.825C6.3 5.75 6.39792 5.69375 6.51875 5.65625C6.63958 5.61875 6.75833 5.60833 6.875 5.625L8.6 5.975C8.71667 6.00833 8.8125 6.06875 8.8875 6.15625C8.9625 6.24375 9 6.34167 9 6.45V8.475C9 8.625 8.95 8.75 8.85 8.85C8.75 8.95 8.625 9 8.475 9V9M1.5125 3L2.3375 2.175V2.175V2.175L2.125 1V1V1H1.0125V1V1C1.05417 1.34167 1.1125 1.67917 1.1875 2.0125C1.2625 2.34583 1.37083 2.675 1.5125 3V3M5.9875 7.475C6.3125 7.61667 6.64375 7.72917 6.98125 7.8125C7.31875 7.89583 7.65833 7.95 8 7.975V7.975V7.975V6.875V6.875V6.875L6.825 6.6375V6.6375V6.6375L5.9875 7.475V7.475M1.5125 3V3V3V3V3V3V3V3V3V3V3V3V3M5.9875 7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          0813-7721-3990
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start w-[113px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-4 w-full tracking-[0.01em]">
                          Toyota Avanza 1.5 G
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-fit">
                        <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            L 1234 AB
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-[43px] pr-4 pb-[43px] pl-8 flex-col items-end w-[120px]">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 2.250.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[103px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Rp 2.250.000
                      </p>
                    </div>
                    <div className="flex py-[52px] px-4 flex-col items-end w-[101px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 0
                      </p>
                    </div>
                    <div className="flex py-[38px] px-4 flex-col items-start w-[116px]">
                      <div className="flex items-center gap-1.5 w-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333V9.73333M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12V12M6.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex pr-[22px] flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                            20 Okt 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Transfer BCA
                        </p>
                      </div>
                    </div>
                    <div className="flex py-[50px] px-4 flex-col items-center w-32">
                      <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[#DCFCE7] w-fit">
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M3.06042 6.51354L0 3.45312L0.771875 2.69479L3.07396 4.99687V4.99687L3.83229 5.75521L3.06042 6.51354V6.51354M6.12083 6.51354L3.06042 3.45312L3.81875 2.68125L6.12083 4.98333L11.1042 0L11.8625 0.771875L6.12083 6.51354V6.51354M6.12083 3.45312L5.34896 2.69479L8.03021 0.0135417L8.80208 0.771875L6.12083 3.45312V3.45312"
                            fill="#15803D"
                          />
                        </svg>
                        <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Lunas
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-4 justify-end items-center gap-1.5 w-[155px]">
                      <button className="cursor-pointer text-nowrap flex py-1 px-2.5 flex-col justify-center items-center rounded-md w-fit">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Lihat Invoice
                        </p>
                      </button>
                      <button className="cursor-pointer text-nowrap flex py-1 px-2 flex-col justify-center items-center rounded-md w-fit">
                        <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Kuitansi
                        </p>
                      </button>
                    </div>
                  </div>
                  <div hidden={!isPaymentVisible('paid', 'INV-2026-1076 PT Surya Abadi Suzuki Ertiga L 6789 FG')} className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-start w-[62px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-full tracking-[0.01em]">
                          INV- 2026- 1076
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          19 Okt 2026 • 14:00
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start -space-y-px w-[184px]">
                      <div className="flex items-center gap-1 w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          PT Surya Abadi
                        </p>
                        <svg
                          width="12"
                          height="11"
                          viewBox="0 0 12 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 10.5V0H5.83333V2.33333H11.6667V10.5H0V10.5M1.16667 9.33333H4.66667V8.16667H1.16667V9.33333V9.33333M1.16667 7H4.66667V5.83333H1.16667V7V7M1.16667 4.66667H4.66667V3.5H1.16667V4.66667V4.66667M1.16667 2.33333H4.66667V1.16667H1.16667V2.33333V2.33333M5.83333 9.33333H10.5V3.5H5.83333V9.33333V9.33333M7 5.83333V4.66667H9.33333V5.83333H7V5.83333M7 8.16667V7H9.33333V8.16667H7V8.16667"
                            fill="#0047BF"
                          />
                        </svg>
                      </div>
                      <div className="flex items-center gap-1 w-full">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1 8C0.725 8 0.489583 7.90208 0.29375 7.70625C0.0979166 7.51042 0 7.275 0 7V1C0 0.725 0.0979166 0.489583 0.29375 0.29375C0.489583 0.0979166 0.725 0 1 0H9C9.275 0 9.51042 0.0979166 9.70625 0.29375C9.90208 0.489583 10 0.725 10 1V7C10 7.275 9.90208 7.51042 9.70625 7.70625C9.51042 7.90208 9.275 8 9 8H1V8M5 4.5L1 2V7V7V7H9V7V7V2L5 4.5V4.5M5 3.5L9 1H1L5 3.5V3.5M1 2V1V1V2V7V7V7V7V7V7V2V2"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          billing@suryaabadi.co.id
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start w-[113px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-4 w-full tracking-[0.01em]">
                          Suzuki Ertiga GL MT
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-fit">
                        <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            L 6789 FG
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-[43px] pr-4 pb-[43px] pl-8 flex-col items-end w-[120px]">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 4.500.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[103px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Rp 4.500.000
                      </p>
                    </div>
                    <div className="flex py-[52px] px-4 flex-col items-end w-[101px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 0
                      </p>
                    </div>
                    <div className="flex py-[31px] px-4 flex-col items-start w-[116px]">
                      <div className="flex items-center gap-1.5 w-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.73333 9.73333L10.4333 5.03333L9.5 4.1L5.73333 7.86667L3.83333 5.96667L2.9 6.9L5.73333 9.73333V9.73333M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M6.66667 12C8.15556 12 9.41667 11.4833 10.45 10.45C11.4833 9.41667 12 8.15556 12 6.66667C12 5.17778 11.4833 3.91667 10.45 2.88333C9.41667 1.85 8.15556 1.33333 6.66667 1.33333C5.17778 1.33333 3.91667 1.85 2.88333 2.88333C1.85 3.91667 1.33333 5.17778 1.33333 6.66667C1.33333 8.15556 1.85 9.41667 2.88333 10.45C3.91667 11.4833 5.17778 12 6.66667 12V12M6.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex pr-[26px] flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                            19 Okt 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Mandiri Corporate
                        </p>
                      </div>
                    </div>
                    <div className="flex py-[50px] px-4 flex-col items-center w-32">
                      <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[#DCFCE7] w-fit">
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M3.06042 6.51354L0 3.45312L0.771875 2.69479L3.07396 4.99687V4.99687L3.83229 5.75521L3.06042 6.51354V6.51354M6.12083 6.51354L3.06042 3.45312L3.81875 2.68125L6.12083 4.98333L11.1042 0L11.8625 0.771875L6.12083 6.51354V6.51354M6.12083 3.45312L5.34896 2.69479L8.03021 0.0135417L8.80208 0.771875L6.12083 3.45312V3.45312"
                            fill="#15803D"
                          />
                        </svg>
                        <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Lunas
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-4 justify-end items-center gap-1.5 w-[155px]">
                      <button className="cursor-pointer text-nowrap flex py-1 px-[15px] flex-col justify-center items-center rounded-md w-fit">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Lihat Invoice
                        </p>
                      </button>
                      <button className="cursor-pointer text-nowrap flex py-1 px-2 flex-col justify-center items-center rounded-md w-fit">
                        <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Faktur
                        </p>
                      </button>
                    </div>
                  </div>
                  <div hidden={!isPaymentVisible('pending', 'INV-2026-1090 Toyota Calya L 4567 DE')} className="flex justify-center items-center w-full">
                    <div className="flex flex-col items-start w-[62px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-full tracking-[0.01em]">
                          INV- 2026- 1090
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          23 Okt 2026 • 18:25
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start -space-y-px w-[184px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Anita Rahayu
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
                            d="M8.475 9C7.43333 9 6.40417 8.77292 5.3875 8.31875C4.37083 7.86458 3.44583 7.22083 2.6125 6.3875C1.77917 5.55417 1.13542 4.62917 0.68125 3.6125C0.227083 2.59583 0 1.56667 0 0.525C0 0.375 0.05 0.25 0.15 0.15C0.25 0.05 0.375 0 0.525 0H2.55C2.66667 0 2.77083 0.0395833 2.8625 0.11875C2.95417 0.197917 3.00833 0.291667 3.025 0.4L3.35 2.15C3.36667 2.28333 3.3625 2.39583 3.3375 2.4875C3.3125 2.57917 3.26667 2.65833 3.2 2.725L1.9875 3.95C2.15417 4.25833 2.35208 4.55625 2.58125 4.84375C2.81042 5.13125 3.0625 5.40833 3.3375 5.675C3.59583 5.93333 3.86667 6.17292 4.15 6.39375C4.43333 6.61458 4.73333 6.81667 5.05 7L6.225 5.825C6.3 5.75 6.39792 5.69375 6.51875 5.65625C6.63958 5.61875 6.75833 5.60833 6.875 5.625L8.6 5.975C8.71667 6.00833 8.8125 6.06875 8.8875 6.15625C8.9625 6.24375 9 6.34167 9 6.45V8.475C9 8.625 8.95 8.75 8.85 8.85C8.75 8.95 8.625 9 8.475 9V9M1.5125 3L2.3375 2.175V2.175V2.175L2.125 1V1V1H1.0125V1V1C1.05417 1.34167 1.1125 1.67917 1.1875 2.0125C1.2625 2.34583 1.37083 2.675 1.5125 3V3M5.9875 7.475C6.3125 7.61667 6.64375 7.72917 6.98125 7.8125C7.31875 7.89583 7.65833 7.95 8 7.975V7.975V7.975V6.875V6.875V6.875L6.825 6.6375V6.6375V6.6375L5.9875 7.475V7.475M1.5125 3V3V3V3V3V3V3V3V3V3V3V3V3M5.9875 7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475V7.475"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          0857-1234-9008
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-8 flex-col items-start w-[113px]">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-4 w-full tracking-[0.01em]">
                          Toyota Calya 1.2 G
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-fit">
                        <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            L 4567 DE
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-[43px] pr-4 pb-[43px] pl-8 flex-col items-end w-[120px]">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 900.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[103px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Rp 300.000
                      </p>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-end w-[101px]">
                      <p className="text-[#0047BF] font-plusJakartaSans text-[13px] font-bold leading-[18px] w-fit">
                        Rp 600.000
                      </p>
                    </div>
                    <div className="flex py-[31px] px-4 flex-col items-start w-[116px]">
                      <div className="flex items-center gap-1.5 w-full">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M8.86667 9.8L9.8 8.86667L7.33333 6.4V3.33333H6V6.93333L8.86667 9.8V9.8M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.58889 0 8.45555 0.175 9.26667 0.525C10.0778 0.875 10.7833 1.35 11.3833 1.95C11.9833 2.55 12.4583 3.25556 12.8083 4.06667C13.1583 4.87778 13.3333 5.74444 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M6.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667M6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 5.18889 11.4806 3.93056 10.4417 2.89167C9.40278 1.85278 8.14444 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12V12"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex pr-[5px] flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                            Besok, 25 Okt 2026
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Sebelum Keberangkatan
                        </p>
                      </div>
                    </div>
                    <div className="flex py-[43px] px-4 flex-col items-center w-32">
                      <div className="flex py-1 px-2.5 items-center gap-1 rounded-full bg-[#C2DCFF] w-fit">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 11 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M2.70833 6.22917C2.93403 6.22917 3.12587 6.15017 3.28385 5.99219C3.44184 5.8342 3.52083 5.64236 3.52083 5.41667C3.52083 5.19097 3.44184 4.99913 3.28385 4.84115C3.12587 4.68316 2.93403 4.60417 2.70833 4.60417C2.48264 4.60417 2.2908 4.68316 2.13281 4.84115C1.97483 4.99913 1.89583 5.19097 1.89583 5.41667C1.89583 5.64236 1.97483 5.8342 2.13281 5.99219C2.2908 6.15017 2.48264 6.22917 2.70833 6.22917V6.22917M5.41667 6.22917C5.64236 6.22917 5.8342 6.15017 5.99219 5.99219C6.15017 5.8342 6.22917 5.64236 6.22917 5.41667C6.22917 5.19097 6.15017 4.99913 5.99219 4.84115C5.8342 4.68316 5.64236 4.60417 5.41667 4.60417C5.19097 4.60417 4.99913 4.68316 4.84115 4.84115C4.68316 4.99913 4.60417 5.19097 4.60417 5.41667C4.60417 5.64236 4.68316 5.8342 4.84115 5.99219C4.99913 6.15017 5.19097 6.22917 5.41667 6.22917V6.22917M8.125 6.22917C8.35069 6.22917 8.54253 6.15017 8.70052 5.99219C8.85851 5.8342 8.9375 5.64236 8.9375 5.41667C8.9375 5.19097 8.85851 4.99913 8.70052 4.84115C8.54253 4.68316 8.35069 4.60417 8.125 4.60417C7.89931 4.60417 7.70747 4.68316 7.54948 4.84115C7.39149 4.99913 7.3125 5.19097 7.3125 5.41667C7.3125 5.64236 7.39149 5.8342 7.54948 5.99219C7.70747 6.15017 7.89931 6.22917 8.125 6.22917V6.22917M5.41667 10.8333C4.66736 10.8333 3.96319 10.6911 3.30417 10.4068C2.64514 10.1224 2.07188 9.73646 1.58438 9.24896C1.09687 8.76146 0.710938 8.18819 0.426562 7.52917C0.142187 6.87014 0 6.16597 0 5.41667C0 4.66736 0.142187 3.96319 0.426562 3.30417C0.710938 2.64514 1.09687 2.07188 1.58438 1.58438C2.07188 1.09687 2.64514 0.710938 3.30417 0.426562C3.96319 0.142187 4.66736 0 5.41667 0C6.16597 0 6.87014 0.142187 7.52917 0.426562C8.18819 0.710938 8.76146 1.09687 9.24896 1.58438C9.73646 2.07188 10.1224 2.64514 10.4068 3.30417C10.6911 3.96319 10.8333 4.66736 10.8333 5.41667C10.8333 6.16597 10.6911 6.87014 10.4068 7.52917C10.1224 8.18819 9.73646 8.76146 9.24896 9.24896C8.76146 9.73646 8.18819 10.1224 7.52917 10.4068C6.87014 10.6911 6.16597 10.8333 5.41667 10.8333V10.8333M5.41667 9.75C6.62639 9.75 7.65104 9.33021 8.49063 8.49063C9.33021 7.65104 9.75 6.62639 9.75 5.41667C9.75 4.20694 9.33021 3.18229 8.49063 2.34271C7.65104 1.50312 6.62639 1.08333 5.41667 1.08333C4.20694 1.08333 3.18229 1.50312 2.34271 2.34271C1.50312 3.18229 1.08333 4.20694 1.08333 5.41667C1.08333 6.62639 1.50312 7.65104 2.34271 8.49063C3.18229 9.33021 4.20694 9.75 5.41667 9.75V9.75M5.41667 5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667V5.41667"
                            fill="#48617E"
                          />
                        </svg>
                        <p className="text-[#48617E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Menunggu Pelunasan
                        </p>
                      </div>
                    </div>
                    <div className="flex pl-4 justify-end items-center gap-1.5 w-[155px]">
                      <button className="cursor-pointer text-nowrap flex py-1 px-2.5 flex-col justify-center items-center rounded-md bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Tandai Lunas
                        </p>
                      </button>
                      <div className="flex pt-1.5 pr-1.5 pb-2.5 pl-1.5 flex-col justify-center items-center rounded-lg w-fit"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex py-3.5 px-4 justify-between items-center bg-[#E9F6FD] w-full">
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#111D23] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                  Menampilkan 5 dari 27 invoice transaksi
                </p>
              </div>
              <div className="flex items-center gap-1 w-fit">
                <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-md opacity-40 w-fit">
                  <svg
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-start w-fit "
                  >
                    <path
                      d="M4.5 9L0 4.5L4.5 0L5.55 1.05L2.1 4.5L5.55 7.95L4.5 9V9"
                      fill="#47607E"
                    />
                  </svg>
                </div>
                <button className="cursor-pointer text-nowrap flex justify-center items-center rounded-md bg-[#005C55] shadow-[01px2px0rgba(0,0,0,0.05)] w-8 h-8">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    1
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center rounded-md w-8 h-8">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    2
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex justify-center items-center rounded-md w-8 h-8">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    3
                  </p>
                </button>
                <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-md w-fit">
                  <svg
                    width="6"
                    height="9"
                    viewBox="0 0 6 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-start w-fit "
                  >
                    <path
                      d="M3.45 4.5L0 1.05L1.05 0L5.55 4.5L1.05 9L0 7.95L3.45 4.5V4.5"
                      fill="#47607E"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
            <div className="flex p-6 justify-between items-center rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full min-h-[98px]">
              <div className="flex items-center gap-4 w-fit">
                <div className="flex justify-center items-center rounded-xl bg-[#DDEAF2] w-12 h-12">
                  <svg
                    width="23"
                    height="21"
                    viewBox="0 0 23 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.33333 18.6667V18.6667V18.6667V18.6667V18.6667V18.6667V18.6667V18.6667V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333C2.33333 2.33333 2.33333 2.76597 2.33333 3.63125C2.33333 4.49653 2.33333 5.61944 2.33333 7V14C2.33333 15.3806 2.33333 16.5035 2.33333 17.3687C2.33333 18.234 2.33333 18.6667 2.33333 18.6667V18.6667M2.33333 21C1.69167 21 1.14236 20.7715 0.685417 20.3146C0.228472 19.8576 0 19.3083 0 18.6667V2.33333C0 1.69167 0.228472 1.14236 0.685417 0.685417C1.14236 0.228472 1.69167 0 2.33333 0H18.6667C19.3083 0 19.8576 0.228472 20.3146 0.685417C20.7715 1.14236 21 1.69167 21 2.33333V5.25H18.6667V2.33333V2.33333V2.33333H2.33333V2.33333V2.33333V18.6667V18.6667V18.6667H18.6667V18.6667V18.6667V15.75H21V18.6667C21 19.3083 20.7715 19.8576 20.3146 20.3146C19.8576 20.7715 19.3083 21 18.6667 21H2.33333V21M11.6667 16.3333C11.025 16.3333 10.4757 16.1049 10.0188 15.6479C9.56181 15.191 9.33333 14.6417 9.33333 14V7C9.33333 6.35833 9.56181 5.80903 10.0188 5.35208C10.4757 4.89514 11.025 4.66667 11.6667 4.66667H19.8333C20.475 4.66667 21.0243 4.89514 21.4813 5.35208C21.9382 5.80903 22.1667 6.35833 22.1667 7V14C22.1667 14.6417 21.9382 15.191 21.4813 15.6479C21.0243 16.1049 20.475 16.3333 19.8333 16.3333H11.6667V16.3333M19.8333 14V14V14V7V7V7H11.6667V7V7V14V14V14H19.8333V14M15.1667 12.25C15.6528 12.25 16.066 12.0799 16.4062 11.7396C16.7465 11.3993 16.9167 10.9861 16.9167 10.5C16.9167 10.0139 16.7465 9.60069 16.4062 9.26042C16.066 8.92014 15.6528 8.75 15.1667 8.75C14.6806 8.75 14.2674 8.92014 13.9271 9.26042C13.5868 9.60069 13.4167 10.0139 13.4167 10.5C13.4167 10.9861 13.5868 11.3993 13.9271 11.7396C14.2674 12.0799 14.6806 12.25 15.1667 12.25V12.25"
                      fill="#005C55"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Status Rekonsiliasi Otomatis
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      98.2% Pembayaran BCA &amp; Mandiri terverifikasi otomatis
                      via Mutasi API Gateway.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-2 w-fit">
                <div className="flex pt-1 pr-3.5 pb-1 pl-3 items-center gap-1.5 rounded-full bg-[#DCFCE7] w-fit">
                  <div className="rounded-full bg-[#15803D] w-1.5 h-2"></div>
                  <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                    API Terhubung &amp; Sinkron
                  </p>
                </div>
                <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col justify-center items-center rounded-lg w-fit">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-start w-fit "
                  >
                    <path
                      d="M6.66667 13.3333C4.80556 13.3333 3.22917 12.6875 1.9375 11.3958C0.645833 10.1042 0 8.52778 0 6.66667C0 4.80556 0.645833 3.22917 1.9375 1.9375C3.22917 0.645833 4.80556 0 6.66667 0C7.625 0 8.54167 0.197917 9.41667 0.59375C10.2917 0.989583 11.0417 1.55556 11.6667 2.29167V0H13.3333V5.83333H7.5V4.16667H11C10.5556 3.38889 9.94792 2.77778 9.17708 2.33333C8.40625 1.88889 7.56944 1.66667 6.66667 1.66667C5.27778 1.66667 4.09722 2.15278 3.125 3.125C2.15278 4.09722 1.66667 5.27778 1.66667 6.66667C1.66667 8.05556 2.15278 9.23611 3.125 10.2083C4.09722 11.1806 5.27778 11.6667 6.66667 11.6667C7.73611 11.6667 8.70139 11.3611 9.5625 10.75C10.4236 10.1389 11.0278 9.33333 11.375 8.33333H13.125C12.7361 9.80556 11.9444 11.0069 10.75 11.9375C9.55556 12.8681 8.19444 13.3333 6.66667 13.3333V13.3333"
                      fill="#47607E"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 w-fit">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M11.6667 7.5C11.9028 7.5 12.1007 7.42014 12.2604 7.26042C12.4201 7.10069 12.5 6.90278 12.5 6.66667C12.5 6.43056 12.4201 6.23264 12.2604 6.07292C12.1007 5.91319 11.9028 5.83333 11.6667 5.83333C11.4306 5.83333 11.2326 5.91319 11.0729 6.07292C10.9132 6.23264 10.8333 6.43056 10.8333 6.66667C10.8333 6.90278 10.9132 7.10069 11.0729 7.26042C11.2326 7.42014 11.4306 7.5 11.6667 7.5V7.5M5 5.83333H9.16667V4.16667H5V5.83333V5.83333M2.08333 15.8333C1.61111 14.25 1.14583 12.6701 0.6875 11.0938C0.229167 9.51736 0 7.90278 0 6.25C0 4.97222 0.444444 3.88889 1.33333 3C2.22222 2.11111 3.30556 1.66667 4.58333 1.66667H8.75C9.15278 1.13889 9.64236 0.729167 10.2188 0.4375C10.7951 0.145833 11.4167 0 12.0833 0C12.4306 0 12.7257 0.121528 12.9688 0.364583C13.2118 0.607639 13.3333 0.902778 13.3333 1.25C13.3333 1.33333 13.3229 1.41667 13.3021 1.5C13.2812 1.58333 13.2569 1.65972 13.2292 1.72917C13.1736 1.88194 13.1215 2.03819 13.0729 2.19792C13.0243 2.35764 12.9861 2.52083 12.9583 2.6875L14.8542 4.58333H16.6667V10.3958L14.3125 11.1667L12.9167 15.8333H8.33333V14.1667H6.66667V15.8333H2.08333V15.8333M3.33333 14.1667H5V12.5H10V14.1667H11.6667L12.9583 9.875L15 9.1875V6.25H14.1667L11.25 3.33333C11.25 3.05556 11.2674 2.78819 11.3021 2.53125C11.3368 2.27431 11.3889 2.01389 11.4583 1.75C11.0556 1.86111 10.7014 2.05208 10.3958 2.32292C10.0903 2.59375 9.86806 2.93056 9.72917 3.33333H4.58333C3.77778 3.33333 3.09028 3.61806 2.52083 4.1875C1.95139 4.75694 1.66667 5.44444 1.66667 6.25C1.66667 7.61111 1.85417 8.94097 2.22917 10.2396C2.60417 11.5382 2.97222 12.8472 3.33333 14.1667V14.1667M8.33333 7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833V7.95833"
                      fill="#005C55"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Rekening Kas Rental
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Aktif
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#E9F6FD] w-full">
                  <div className="flex items-center gap-2.5 w-fit">
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded bg-[#FFF] w-8 h-8">
                      <p className="text-[#0047BF] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        BCA
                      </p>
                    </button>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.025em]">
                          829-019-4451
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          a.n. PT Jagaroda Transport
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-1.5 pr-1 pb-2.5 pl-1 flex-col justify-center items-center w-fit">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex justify-center items-start w-fit "
                    >
                      <path
                        d="M4 10.6667C3.63333 10.6667 3.31944 10.5361 3.05833 10.275C2.79722 10.0139 2.66667 9.7 2.66667 9.33333V1.33333C2.66667 0.966667 2.79722 0.652778 3.05833 0.391667C3.31944 0.130556 3.63333 0 4 0H10C10.3667 0 10.6806 0.130556 10.9417 0.391667C11.2028 0.652778 11.3333 0.966667 11.3333 1.33333V9.33333C11.3333 9.7 11.2028 10.0139 10.9417 10.275C10.6806 10.5361 10.3667 10.6667 10 10.6667H4V10.6667M4 9.33333H10V9.33333V9.33333V1.33333V1.33333V1.33333H4V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667H1.33333V12V12V12H8.66667V13.3333H1.33333V13.3333M4 9.33333V9.33333V9.33333V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333V9.33333"
                        fill="#47607E"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#E9F6FD] w-full">
                  <div className="flex items-center gap-2.5 w-fit">
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded bg-[#FFF] w-8 h-8">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        MDR
                      </p>
                    </button>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.025em]">
                          142-00-99882-12
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          a.n. PT Jagaroda Transport
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-1.5 pr-1 pb-2.5 pl-1 flex-col justify-center items-center w-fit">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex justify-center items-start w-fit "
                    >
                      <path
                        d="M4 10.6667C3.63333 10.6667 3.31944 10.5361 3.05833 10.275C2.79722 10.0139 2.66667 9.7 2.66667 9.33333V1.33333C2.66667 0.966667 2.79722 0.652778 3.05833 0.391667C3.31944 0.130556 3.63333 0 4 0H10C10.3667 0 10.6806 0.130556 10.9417 0.391667C11.2028 0.652778 11.3333 0.966667 11.3333 1.33333V9.33333C11.3333 9.7 11.2028 10.0139 10.9417 10.275C10.6806 10.5361 10.3667 10.6667 10 10.6667H4V10.6667M4 9.33333H10V9.33333V9.33333V1.33333V1.33333V1.33333H4V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667H1.33333V12V12V12H8.66667V13.3333H1.33333V13.3333M4 9.33333V9.33333V9.33333V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333V9.33333"
                        fill="#47607E"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#E9F6FD] w-full">
                  <div className="flex items-center gap-2.5 w-fit">
                    <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded bg-[#FFF] w-8 h-8">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        KAS
                      </p>
                    </button>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Kas Tunai Kantor
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Saldo Operasional: Rp 3.200.000
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-1 flex-col items-start w-3 h-2 "
                  >
                    <rect width="7.92" height="8" rx="3.96" fill="#15803D" />
                  </svg>
                </div>
              </div>
              <div className="flex pt-1 justify-between items-center w-full">
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Total Likuiditas Siap Pakai:
                  </p>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                    Rp 60.350.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start absolute right-0 bg-[rgba(244,250,255,0.85)] shadow-[01px8px0rgba(0,0,0,0.04)] w-[1020px] h-16">
        <div className="flex py-0 px-8 justify-between items-center shrink-0 w-full h-16">
          <div className="flex flex-col items-start -space-y-px w-fit">
            <div className="flex flex-col items-start w-full">
              <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit tracking-[-0.025em]">
                Selamat Datang, Nino
              </p>
            </div>
            <div className="flex items-center gap-1 w-full">
              <svg
                width="11"
                height="12"
                viewBox="0 0 11 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M3.5 8.45833C3.09167 8.45833 2.74653 8.31736 2.46458 8.03542C2.18264 7.75347 2.04167 7.40833 2.04167 7C2.04167 6.59167 2.18264 6.24653 2.46458 5.96458C2.74653 5.68264 3.09167 5.54167 3.5 5.54167C3.90833 5.54167 4.25347 5.68264 4.53542 5.96458C4.81736 6.24653 4.95833 6.59167 4.95833 7C4.95833 7.40833 4.81736 7.75347 4.53542 8.03542C4.25347 8.31736 3.90833 8.45833 3.5 8.45833V8.45833M1.16667 11.6667C0.845833 11.6667 0.571181 11.5524 0.342708 11.324C0.114236 11.0955 0 10.8208 0 10.5V2.33333C0 2.0125 0.114236 1.73785 0.342708 1.50937C0.571181 1.2809 0.845833 1.16667 1.16667 1.16667H1.75V0H2.91667V1.16667H7.58333V0H8.75V1.16667H9.33333C9.65417 1.16667 9.92882 1.2809 10.1573 1.50937C10.3858 1.73785 10.5 2.0125 10.5 2.33333V10.5C10.5 10.8208 10.3858 11.0955 10.1573 11.324C9.92882 11.5524 9.65417 11.6667 9.33333 11.6667H1.16667V11.6667M1.16667 10.5H9.33333V10.5V10.5V4.66667H1.16667V10.5V10.5V10.5V10.5M1.16667 3.5H9.33333V2.33333V2.33333V2.33333H1.16667V2.33333V2.33333V3.5V3.5M1.16667 3.5V2.33333V2.33333V2.33333V2.33333V2.33333V2.33333V3.5V3.5V3.5"
                  fill="#3E4947"
                />
              </svg>
              <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                Senin, 24 Oktober 2024 • Shift Pagi Ops
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 w-fit">
            <div className="flex flex-col items-start w-fit relative">
              <div className="flex pt-[7px] pr-4 pb-[7px] pl-9 justify-center items-start rounded-lg border border-[rgba(189,201,198,0.50)] bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-64 overflow-hidden">
                <div className="flex flex-col items-start w-full overflow-hidden">
                  <p className="text-[rgba(62,73,71,0.70)] font-plusJakartaSans text-[13px] w-full">
                    Cari plat nomor, unit, penyewa...
                  </p>
                </div>
              </div>
              <div className="flex pl-3 items-center absolute w-fit h-8">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M12.45 13.5L7.725 8.775C7.35 9.075 6.91875 9.3125 6.43125 9.4875C5.94375 9.6625 5.425 9.75 4.875 9.75C3.5125 9.75 2.35938 9.27813 1.41562 8.33438C0.471875 7.39063 0 6.2375 0 4.875C0 3.5125 0.471875 2.35938 1.41562 1.41562C2.35938 0.471875 3.5125 0 4.875 0C6.2375 0 7.39063 0.471875 8.33438 1.41562C9.27813 2.35938 9.75 3.5125 9.75 4.875C9.75 5.425 9.6625 5.94375 9.4875 6.43125C9.3125 6.91875 9.075 7.35 8.775 7.725L13.5 12.45L12.45 13.5V13.5M4.875 8.25C5.8125 8.25 6.60938 7.92188 7.26562 7.26562C7.92188 6.60938 8.25 5.8125 8.25 4.875C8.25 3.9375 7.92188 3.14062 7.26562 2.48438C6.60938 1.82812 5.8125 1.5 4.875 1.5C3.9375 1.5 3.14062 1.82812 2.48438 2.48438C1.82812 3.14062 1.5 3.9375 1.5 4.875C1.5 5.8125 1.82812 6.60938 2.48438 7.26562C3.14062 7.92188 3.9375 8.25 4.875 8.25V8.25"
                    fill="#3E4947"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col items-start rounded-lg w-fit relative">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[15px] h-[18px] "
              >
                <path
                  d="M0 15.5833V13.75H1.83333V7.33333C1.83333 6.06528 2.21528 4.93854 2.97917 3.95312C3.74306 2.96771 4.73611 2.32222 5.95833 2.01667V1.375C5.95833 0.993056 6.09201 0.668403 6.35938 0.401042C6.62674 0.133681 6.95139 0 7.33333 0C7.71528 0 8.03993 0.133681 8.30729 0.401042C8.57465 0.668403 8.70833 0.993056 8.70833 1.375V2.01667C9.93056 2.32222 10.9236 2.96771 11.6875 3.95312C12.4514 4.93854 12.8333 6.06528 12.8333 7.33333V13.75H14.6667V15.5833H0V15.5833M7.33333 8.70833V8.70833V8.70833V8.70833V8.70833V8.70833V8.70833V8.70833V8.70833M7.33333 18.3333C6.82917 18.3333 6.39757 18.1538 6.03854 17.7948C5.67951 17.4358 5.5 17.0042 5.5 16.5H9.16667C9.16667 17.0042 8.98715 17.4358 8.62813 17.7948C8.2691 18.1538 7.8375 18.3333 7.33333 18.3333V18.3333M3.66667 13.75H11V7.33333C11 6.325 10.641 5.46181 9.92292 4.74375C9.20486 4.02569 8.34167 3.66667 7.33333 3.66667C6.325 3.66667 5.46181 4.02569 4.74375 4.74375C4.02569 5.46181 3.66667 6.325 3.66667 7.33333V13.75V13.75"
                  fill="#3E4947"
                />
              </svg>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-end absolute right-1.5 top-1.5 rounded-full bg-[#BA1A1A] w-2.5 h-2.5 "
              >
                <rect
                  x="2"
                  y="2"
                  width="10"
                  height="10"
                  rx="5"
                  fill="#BA1A1A"
                />
                <g filter="url(#filter0_d_156_2488)">
                  <rect
                    x="2"
                    y="2"
                    width="10"
                    height="10"
                    rx="5"
                    fill="white"
                    fillOpacity="0.01"
                    shapeRendering="crispEdges"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_156_2488"
                    x="0"
                    y="0"
                    width="14"
                    height="14"
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
                    <feMorphology
                      radius="2"
                      operator="dilate"
                      in="SourceAlpha"
                      result="effect1_dropShadow_156_2488"
                    />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.956863 0 0 0 0 0.980392 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_156_2488"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_156_2488"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="flex p-2 items-start rounded-lg w-fit">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit h-full "
              >
                <path
                  d="M0 14.6667V12.8333H2.52083L2.15417 12.5125C1.35972 11.8097 0.802083 11.0076 0.48125 10.1062C0.160417 9.20486 0 8.29583 0 7.37917C0 5.68333 0.507986 4.17465 1.52396 2.85313C2.53993 1.5316 3.86528 0.656944 5.5 0.229167V2.15417C4.4 2.55139 3.51389 3.22743 2.84167 4.18229C2.16944 5.13715 1.83333 6.20278 1.83333 7.37917C1.83333 8.06667 1.96319 8.73507 2.22292 9.38437C2.48264 10.0337 2.8875 10.6333 3.4375 11.1833L3.66667 11.4125V9.16667H5.5V14.6667H0V14.6667M9.16667 14.4375V12.5125C10.2667 12.1153 11.1528 11.4392 11.825 10.4844C12.4972 9.52951 12.8333 8.46389 12.8333 7.2875C12.8333 6.6 12.7035 5.9316 12.4438 5.28229C12.184 4.63299 11.7792 4.03333 11.2292 3.48333L11 3.25417V5.5H9.16667V0H14.6667V1.83333H12.1458L12.5125 2.15417C13.2611 2.90278 13.8073 3.71632 14.151 4.59479C14.4948 5.47326 14.6667 6.37083 14.6667 7.2875C14.6667 8.98333 14.1587 10.492 13.1427 11.8135C12.1267 13.1351 10.8014 14.0097 9.16667 14.4375V14.4375"
                  fill="#3E4947"
                />
              </svg>
            </div>
            <svg
              width="9"
              height="24"
              viewBox="0 0 9 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex py-0 px-1 flex-col items-start w-[9px] h-6 "
            >
              <rect
                x="4"
                width="1"
                height="24"
                fill="#BDC9C6"
                fillOpacity="0.4"
              />
            </svg>
            <Link to="/pemesanan/baru" className="flex py-2 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6V6"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Tambah Booking &#x2F; Pemesanan
                </p>
              </div>
            </Link>
            <img
              src="/Profile.png"
              className="max-w-[660.52px] rounded-full shadow-[0001pxrgba(189,201,198,0.60)] w-8 h-8 overflow-hidden max-w-none"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}