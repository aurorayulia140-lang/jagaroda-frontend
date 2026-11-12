import { Link } from 'react-router-dom'
import './Pemesanan.css'

export default function Pemesanan() {
  return (
    <div className="reservation-page flex min-h-screen w-full flex-col items-start bg-linear-[0deg,#F4FAFF0%,#F4FAFF100%),#FF] relative">
      <div className="reservation-content flex min-h-[800px] pt-16 flex-col items-start bg-[#F5F7FA] w-full">
        <div className="flex py-6 px-8 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-4 w-full md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col items-start gap-1 w-fit">
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Operasional Rental
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
                    fill="#3E4947"
                  />
                </svg>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                    Pemesanan
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-wrap items-end gap-2">
                <p className="max-w-full font-plusJakartaSans text-[26px] font-bold leading-8 text-[#263238] tracking-[-0.025em]">
                  Kalender Pemesanan Armada
                </p>
                <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#E3F0F8] w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                    Fleet Live Sync
                  </p>
                </div>
              </div>
              <div className="flex max-w-[672px] flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Kelola jadwal pemesanan, cek ketersediaan real-time, dan cegah
                  tabrakan booking rental secara otomatis.
                </p>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 md:w-fit">
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
                    Ekspor Jadwal
                  </p>
                </div>
              </div>
              <Link to="/pemesanan/baru" className="flex py-2.5 px-6 items-center gap-2 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M4.5 6H0V4.5H4.5V0H6V4.5H10.5V6H6V10.5H4.5V6V6"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Tambah Pemesanan
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="reservation-alert flex flex-col gap-4 p-4 rounded-xl bg-[#FFDAD6] shadow-[01px2px0rgba(0,0,0,0.05)] w-full sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 w-full items-start gap-2 sm:flex-1">
              <div className="flex p-2 justify-center items-center rounded-lg bg-[#BA1A1A] w-fit">
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
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex min-w-0 w-full max-w-[498px] flex-col justify-center items-start gap-[3px]">
                <div className="flex w-full flex-wrap items-center gap-2">
                  <div className="flex min-w-0 flex-col items-start">
                    <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.05em]">
                      TERDETEKSI 1 JADWAL BERTABRAKAN &#40;KONFLIK BOOKING&#41;
                    </p>
                  </div>
                  <div className="flex pt-0.5 pr-[42px] pb-0.5 pl-2 flex-col items-start rounded-full bg-[#BA1A1A] w-fit">
                    <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Prioritas Tinggi
                    </p>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start pb-px">
                  <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-bold leading-[17.88px] w-fit">
                    Toyota Avanza &#40;L 1234 AB&#41; dipesan ganda pada rentang
                    14–16 Okt 2026 antara penyewa Bpk. Hendra Gunawan dan PT
                    Maju Sentosa.
                  </p>
                </div>
                <div className="flex w-full flex-col items-start pt-0.5">
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
                        d="M12 4L11.3667 2.63333L10 2L11.3667 1.36667L12 0L12.6333 1.36667L14 2L12.6333 2.63333L12 4V4M4.33333 4L3.7 2.63333L2.33333 2L3.7 1.36667L4.33333 0L4.96667 1.36667L6.33333 2L4.96667 2.63333L4.33333 4V4M12 11.6667L11.3667 10.3L10 9.66667L11.3667 9.03333L12 7.66667L12.6333 9.03333L14 9.66667L12.6333 10.3L12 11.6667V11.6667M2.06667 13.8L0.2 11.9333C0.0666667 11.8 0 11.6389 0 11.45C0 11.2611 0.0666667 11.1 0.2 10.9667L7.63333 3.53333C7.76667 3.4 7.92778 3.33333 8.11667 3.33333C8.30556 3.33333 8.46667 3.4 8.6 3.53333L10.4667 5.4C10.6 5.53333 10.6667 5.69444 10.6667 5.88333C10.6667 6.07222 10.6 6.23333 10.4667 6.36667L3.03333 13.8C2.9 13.9333 2.73889 14 2.55 14C2.36111 14 2.2 13.9333 2.06667 13.8V13.8M2.56667 12.4L7.33333 7.6L6.4 6.66667L1.6 11.4333L2.56667 12.4V12.4"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pr-[33px] flex-col items-start w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Saran sistem: Alihkan booking PT Maju Sentosa ke
                        Daihatsu Xenia &#40;L 9012 EF&#41; yang 100% Tersedia di
                        tanggal yang sama.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 sm:w-fit">
              <div className="flex py-2 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M3.33333 10.6667L0 7.33333L3.33333 4L4.26667 4.95L2.55 6.66667H7.33333V8H2.55L4.26667 9.71667L3.33333 10.6667V10.6667M10 6.66667L9.06667 5.71667L10.7833 4H6V2.66667H10.7833L9.06667 0.95L10 0L13.3333 3.33333L10 6.66667V6.66667"
                    fill="white"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Atur Pengalihan Unit
                  </p>
                </div>
              </div>
              <div className="flex py-2 px-4 items-center gap-1.5 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M4 10.6667L3.06667 9.71667L4.78333 8H0V6.66667H4.78333L3.06667 4.95L4 4L7.33333 7.33333L4 10.6667V10.6667M9.33333 6.66667L6 3.33333L9.33333 0L10.2667 0.95L8.55 2.66667H13.3333V4H8.55L10.2667 5.71667L9.33333 6.66667V6.66667"
                    fill="#47607E"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Bandingkan Jadwal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="reservation-calendar-panel flex p-4 flex-col justify-center items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex items-center gap-4 flex-wrap w-fit">
              <div className="flex p-1 items-start rounded-lg bg-[#E3F0F8] w-fit">
                <button className="cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg bg-[#0F766E] w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Bulanan
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Mingguan
                  </p>
                </button>
                <button className="cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Harian
                  </p>
                </button>
              </div>
              <div className="flex items-center gap-2 w-fit">
                <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-lg w-fit">
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-start w-fit "
                  >
                    <path
                      d="M5 10L0 5L5 0L6.16667 1.16667L2.33333 5L6.16667 8.83333L5 10V10"
                      fill="#47607E"
                    />
                  </svg>
                </div>
                <div className="flex py-1.5 px-3 items-center gap-2 rounded-lg bg-[#E9F6FD] w-fit">
                  <svg
                    width="14"
                    height="15"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5V15M1.5 13.5H12V13.5V13.5V6H1.5V13.5V13.5V13.5V13.5M1.5 4.5H12V3V3V3H1.5V3V3V4.5V4.5M1.5 4.5V3V3V3V3V3V3V4.5V4.5V4.5M6.75 9C6.5375 9 6.35938 8.92813 6.21562 8.78438C6.07187 8.64062 6 8.4625 6 8.25C6 8.0375 6.07187 7.85938 6.21562 7.71562C6.35938 7.57187 6.5375 7.5 6.75 7.5C6.9625 7.5 7.14062 7.57187 7.28438 7.71562C7.42813 7.85938 7.5 8.0375 7.5 8.25C7.5 8.4625 7.42813 8.64062 7.28438 8.78438C7.14062 8.92813 6.9625 9 6.75 9V9M3.75 9C3.5375 9 3.35938 8.92813 3.21563 8.78438C3.07188 8.64062 3 8.4625 3 8.25C3 8.0375 3.07188 7.85938 3.21563 7.71562C3.35938 7.57187 3.5375 7.5 3.75 7.5C3.9625 7.5 4.14062 7.57187 4.28438 7.71562C4.42813 7.85938 4.5 8.0375 4.5 8.25C4.5 8.4625 4.42813 8.64062 4.28438 8.78438C4.14062 8.92813 3.9625 9 3.75 9V9M9.75 9C9.5375 9 9.35938 8.92813 9.21562 8.78438C9.07187 8.64062 9 8.4625 9 8.25C9 8.0375 9.07187 7.85938 9.21562 7.71562C9.35938 7.57187 9.5375 7.5 9.75 7.5C9.9625 7.5 10.1406 7.57187 10.2844 7.71562C10.4281 7.85938 10.5 8.0375 10.5 8.25C10.5 8.4625 10.4281 8.64062 10.2844 8.78438C10.1406 8.92813 9.9625 9 9.75 9V9M6.75 12C6.5375 12 6.35938 11.9281 6.21562 11.7844C6.07187 11.6406 6 11.4625 6 11.25C6 11.0375 6.07187 10.8594 6.21562 10.7156C6.35938 10.5719 6.5375 10.5 6.75 10.5C6.9625 10.5 7.14062 10.5719 7.28438 10.7156C7.42813 10.8594 7.5 11.0375 7.5 11.25C7.5 11.4625 7.42813 11.6406 7.28438 11.7844C7.14062 11.9281 6.9625 12 6.75 12V12M3.75 12C3.5375 12 3.35938 11.9281 3.21563 11.7844C3.07188 11.6406 3 11.4625 3 11.25C3 11.0375 3.07188 10.8594 3.21563 10.7156C3.35938 10.5719 3.5375 10.5 3.75 10.5C3.9625 10.5 4.14062 10.5719 4.28438 10.7156C4.42813 10.8594 4.5 11.0375 4.5 11.25C4.5 11.4625 4.42813 11.6406 4.28438 11.7844C4.14062 11.9281 3.9625 12 3.75 12V12M9.75 12C9.5375 12 9.35938 11.9281 9.21562 11.7844C9.07187 11.6406 9 11.4625 9 11.25C9 11.0375 9.07187 10.8594 9.21562 10.7156C9.35938 10.5719 9.5375 10.5 9.75 10.5C9.9625 10.5 10.1406 10.5719 10.2844 10.7156C10.4281 10.8594 10.5 11.0375 10.5 11.25C10.5 11.4625 10.4281 11.6406 10.2844 11.7844C10.1406 11.9281 9.9625 12 9.75 12V12"
                      fill="#005C55"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                      Oktober 2026
                    </p>
                  </div>
                </div>
                <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-lg w-fit">
                  <svg
                    width="7"
                    height="10"
                    viewBox="0 0 7 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex justify-center items-start w-fit "
                  >
                    <path
                      d="M3.83333 5L0 1.16667L1.16667 0L6.16667 5L1.16667 10L0 8.83333L3.83333 5V5"
                      fill="#47607E"
                    />
                  </svg>
                </div>
                <button className="cursor-pointer text-nowrap flex py-1 px-2.5 flex-col justify-center items-center rounded-lg bg-[#DDEAF2] w-fit">
                  <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Hari Ini
                  </p>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap w-fit">
              <div className="flex flex-col items-start w-fit relative">
                <div className="flex pt-2 pr-8 pb-2 pl-9 items-center rounded-lg bg-[#E9F6FD] w-fit">
                  <div className="flex pr-[50px] flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                      Semua Armada &#40;24 Unit&#41;
                    </p>
                  </div>
                </div>
                <svg
                  width="14"
                  height="18"
                  viewBox="0 0 14 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute left-2.5 top-2 w-fit h-[18px] "
                >
                  <path
                    d="M2.25 10.5V11.25C2.25 11.4625 2.17812 11.6406 2.03437 11.7844C1.89062 11.9281 1.7125 12 1.5 12H0.75C0.5375 12 0.359375 11.9281 0.215625 11.7844C0.071875 11.6406 0 11.4625 0 11.25V5.25L1.575 0.75C1.65 0.525 1.78437 0.34375 1.97812 0.20625C2.17188 0.06875 2.3875 0 2.625 0H10.875C11.1125 0 11.3281 0.06875 11.5219 0.20625C11.7156 0.34375 11.85 0.525 11.925 0.75L13.5 5.25V11.25C13.5 11.4625 13.4281 11.6406 13.2844 11.7844C13.1406 11.9281 12.9625 12 12.75 12H12C11.7875 12 11.6094 11.9281 11.4656 11.7844C11.3219 11.6406 11.25 11.4625 11.25 11.25V10.5H2.25V10.5M2.1 3.75H11.4L10.6125 1.5H2.8875L2.1 3.75V3.75M1.5 5.25V5.25V9V9V5.25V5.25M3.375 8.25C3.6875 8.25 3.95312 8.14062 4.17188 7.92188C4.39062 7.70312 4.5 7.4375 4.5 7.125C4.5 6.8125 4.39062 6.54688 4.17188 6.32812C3.95312 6.10938 3.6875 6 3.375 6C3.0625 6 2.79688 6.10938 2.57812 6.32812C2.35938 6.54688 2.25 6.8125 2.25 7.125C2.25 7.4375 2.35938 7.70312 2.57812 7.92188C2.79688 8.14062 3.0625 8.25 3.375 8.25V8.25M10.125 8.25C10.4375 8.25 10.7031 8.14062 10.9219 7.92188C11.1406 7.70312 11.25 7.4375 11.25 7.125C11.25 6.8125 11.1406 6.54688 10.9219 6.32812C10.7031 6.10938 10.4375 6 10.125 6C9.8125 6 9.54688 6.10938 9.32812 6.32812C9.10938 6.54688 9 6.8125 9 7.125C9 7.4375 9.10938 7.70312 9.32812 7.92188C9.54688 8.14062 9.8125 8.25 10.125 8.25V8.25M1.5 9H12V5.25H1.5V9V9"
                    fill="#47607E"
                  />
                </svg>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-2.5 top-2 w-fit h-[18px] "
                >
                  <path
                    d="M4.5 5.55L0 1.05L1.05 0L4.5 3.45L7.95 0L9 1.05L4.5 5.55V5.55"
                    fill="#47607E"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-start w-fit relative">
                <div className="flex pt-2 pr-8 pb-2 pl-9 items-center rounded-lg bg-[#E9F6FD] w-fit">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                      Semua Status Pemesanan
                    </p>
                  </div>
                </div>
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute left-2.5 top-2 w-fit h-[18px] "
                >
                  <path
                    d="M5.26544 12C5.05294 12 4.87482 11.9281 4.73107 11.7844C4.58732 11.6406 4.51544 11.4625 4.51544 11.25V6.75L0.165441 1.2C-0.0220588 0.95 -0.0501838 0.6875 0.0810662 0.4125C0.212316 0.1375 0.440441 0 0.765441 0H11.2654C11.5904 0 11.8186 0.1375 11.9498 0.4125C12.0811 0.6875 12.0529 0.95 11.8654 1.2L7.51544 6.75V11.25C7.51544 11.4625 7.44357 11.6406 7.29982 11.7844C7.15607 11.9281 6.97794 12 6.76544 12H5.26544V12M6.01544 6.225L9.72794 1.5H2.30294L6.01544 6.225V6.225M6.01544 6.225V6.225V6.225V6.225V6.225"
                    fill="#47607E"
                  />
                </svg>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-2.5 top-2 w-fit h-[18px] "
                >
                  <path
                    d="M4.5 5.55L0 1.05L1.05 0L4.5 3.45L7.95 0L9 1.05L4.5 5.55V5.55"
                    fill="#47607E"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid min-w-0 w-full grid-cols-1 items-start gap-5 overflow-x-clip lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,1fr)]">
            <div className="flex min-w-0 flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                <div className="flex py-2.5 px-0 justify-center items-start bg-[#E9F6FD] w-full">
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Senin
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Selasa
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Rabu
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Kamis
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Jumat
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Sabtu
                    </p>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Minggu
                    </p>
                  </div>
                </div>
                <div className="reservation-calendar-scroll block min-w-0 w-full overflow-x-auto rounded-lg bg-[#E3F0F8]">
                  <div className="reservation-calendar relative min-w-[640px] p-2">
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[90px] pl-1.5 flex-col items-start rounded-lg opacity-50 bg-[rgba(255,255,255,0.60)] w-full absolute left-2 top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#6E7977] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        28
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[90px] pl-1.5 flex-col items-start rounded-lg opacity-50 bg-[rgba(255,255,255,0.60)] w-full absolute left-24 top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#6E7977] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        29
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[90px] pl-1.5 flex-col items-start rounded-lg opacity-50 bg-[rgba(255,255,255,0.60)] w-full absolute left-[184px] top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#6E7977] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        30
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[273px] top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        1
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Megah
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[361px] top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        2
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Megah
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[449px] top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        3
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Brio - Bpk. Dimas
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[537px] top-2">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        4
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Brio - Selesai Sewa
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-2 top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        5
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-24 top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        6
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#D1E4FF] w-full overflow-hidden">
                      <p className="text-[#001D36] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Xpander - Menunggu DP
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[184px] top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        7
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded opacity-80 bg-[#D1E4FF] w-full overflow-hidden">
                      <p className="text-[#001D36] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Xpander - Verif DP
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-[273px] top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        8
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[361px] top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        9
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Megah
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[449px] top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        10
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Megah
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[66px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[537px] top-[122px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        11
                      </p>
                    </div>
                    <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#E3F0F8] w-full overflow-hidden">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Inspeksi Fleet Rutin
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-2 top-[236px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        12
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-24 top-[236px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        13
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Innova - Bpk. Arya
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[18px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[rgba(255,218,214,0.40)] w-full absolute left-[184px] top-[236px] relative">
                    <div className="absolute rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[0001pxrgba(186,26,26,0.30)] w-[84px] h-[110px]"></div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                          14
                        </p>
                      </div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.83333 8.75C5.99861 8.75 6.13715 8.6941 6.24896 8.58229C6.36076 8.47049 6.41667 8.33194 6.41667 8.16667C6.41667 8.00139 6.36076 7.86285 6.24896 7.75104C6.13715 7.63924 5.99861 7.58333 5.83333 7.58333C5.66806 7.58333 5.52951 7.63924 5.41771 7.75104C5.3059 7.86285 5.25 8.00139 5.25 8.16667C5.25 8.33194 5.3059 8.47049 5.41771 8.58229C5.52951 8.6941 5.66806 8.75 5.83333 8.75V8.75M5.25 6.41667H6.41667V2.91667H5.25V6.41667V6.41667M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5V10.5M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333"
                          fill="#BA1A1A"
                        />
                      </svg>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#BA1A1A] w-full overflow-hidden">
                      <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        ⚠️ KONFLIK: Avanza
                      </p>
                    </div>
                    <div className="flex py-0.5 px-1 flex-col items-start rounded bg-[rgba(255,255,255,0.80)] w-full overflow-hidden">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        1&#41; Bpk Hendra &#40;08:00&#41;
                      </p>
                    </div>
                    <div className="flex py-0.5 px-1 flex-col items-start rounded bg-[rgba(255,255,255,0.80)] w-full overflow-hidden">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        2&#41; PT Maju &#40;10:00&#41;
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-10 pl-1.5 flex-col items-start gap-1 rounded-lg bg-[rgba(255,218,214,0.40)] w-full absolute left-[273px] top-[236px] relative">
                    <div className="absolute rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[0001pxrgba(186,26,26,0.30)] w-[84px] h-[110px]"></div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                          15
                        </p>
                      </div>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.83333 8.75C5.99861 8.75 6.13715 8.6941 6.24896 8.58229C6.36076 8.47049 6.41667 8.33194 6.41667 8.16667C6.41667 8.00139 6.36076 7.86285 6.24896 7.75104C6.13715 7.63924 5.99861 7.58333 5.83333 7.58333C5.66806 7.58333 5.52951 7.63924 5.41771 7.75104C5.3059 7.86285 5.25 8.00139 5.25 8.16667C5.25 8.33194 5.3059 8.47049 5.41771 8.58229C5.52951 8.6941 5.66806 8.75 5.83333 8.75V8.75M5.25 6.41667H6.41667V2.91667H5.25V6.41667V6.41667M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5V10.5M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333"
                          fill="#BA1A1A"
                        />
                      </svg>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#BA1A1A] w-full overflow-hidden">
                      <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        ⚠️ Booking Tumpang Tindih
                      </p>
                    </div>
                    <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Calya - Siap Booking
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[30px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[rgba(255,218,214,0.40)] w-full absolute left-[361px] top-[236px] relative">
                    <div className="absolute rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[0001pxrgba(186,26,26,0.30)] w-[84px] h-[110px]"></div>
                    <div className="flex justify-between items-center w-full">
                      <svg
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M1.725 8.94V1.389H0V0H3.36V8.94H1.725V8.94M7.986 9.084C7.384 9.084 6.849 8.955 6.381 8.697C5.913 8.439 5.546 8.0865 5.28 7.6395C5.014 7.1925 4.881 6.687 4.881 6.123C4.881 5.833 4.9115 5.544 4.9725 5.256C5.0335 4.968 5.1465 4.66 5.3115 4.332C5.4765 4.004 5.713 3.64 6.021 3.24L8.514 0H10.467L7.431 3.906L7.161 3.618C7.275 3.526 7.391 3.4545 7.509 3.4035C7.627 3.3525 7.748 3.315 7.872 3.291C7.996 3.267 8.128 3.255 8.268 3.255C8.812 3.255 9.2965 3.3785 9.7215 3.6255C10.1465 3.8725 10.481 4.2095 10.725 4.6365C10.969 5.0635 11.091 5.548 11.091 6.09C11.091 6.662 10.9575 7.174 10.6905 7.626C10.4235 8.078 10.0575 8.434 9.5925 8.694C9.1275 8.954 8.592 9.084 7.986 9.084V9.084M7.986 7.614C8.264 7.614 8.5125 7.5505 8.7315 7.4235C8.9505 7.2965 9.126 7.1185 9.258 6.8895C9.39 6.6605 9.456 6.4 9.456 6.108C9.456 5.808 9.3905 5.5475 9.2595 5.3265C9.1285 5.1055 8.9535 4.9315 8.7345 4.8045C8.5155 4.6775 8.266 4.614 7.986 4.614C7.714 4.614 7.4665 4.6775 7.2435 4.8045C7.0205 4.9315 6.8435 5.1055 6.7125 5.3265C6.5815 5.5475 6.516 5.808 6.516 6.108C6.516 6.4 6.582 6.6605 6.714 6.8895C6.846 7.1185 7.023 7.2965 7.245 7.4235C7.467 7.5505 7.714 7.614 7.986 7.614V7.614"
                          fill="#BA1A1A"
                        />
                      </svg>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.83333 8.75C5.99861 8.75 6.13715 8.6941 6.24896 8.58229C6.36076 8.47049 6.41667 8.33194 6.41667 8.16667C6.41667 8.00139 6.36076 7.86285 6.24896 7.75104C6.13715 7.63924 5.99861 7.58333 5.83333 7.58333C5.66806 7.58333 5.52951 7.63924 5.41771 7.75104C5.3059 7.86285 5.25 8.00139 5.25 8.16667C5.25 8.33194 5.3059 8.47049 5.41771 8.58229C5.52951 8.6941 5.66806 8.75 5.83333 8.75V8.75M5.25 6.41667H6.41667V2.91667H5.25V6.41667V6.41667M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 10.5C7.13611 10.5 8.23958 10.0479 9.14375 9.14375C10.0479 8.23958 10.5 7.13611 10.5 5.83333C10.5 4.53056 10.0479 3.42708 9.14375 2.52292C8.23958 1.61875 7.13611 1.16667 5.83333 1.16667C4.53056 1.16667 3.42708 1.61875 2.52292 2.52292C1.61875 3.42708 1.16667 4.53056 1.16667 5.83333C1.16667 7.13611 1.61875 8.23958 2.52292 9.14375C3.42708 10.0479 4.53056 10.5 5.83333 10.5V10.5M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333"
                          fill="#BA1A1A"
                        />
                      </svg>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#BA1A1A] w-full overflow-hidden">
                      <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        ⚠️ Konflik Avanza &#40;Hari 3&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Pengembalian ganda
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[449px] top-[236px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        17
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Brio Satya - Bpk. Dimas
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[537px] top-[236px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        18
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Brio Satya - Lepas Kunci
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-2 top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        19
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-24 top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        20
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#D1E4FF] w-full overflow-hidden">
                      <p className="text-[#001D36] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Xpander - Menunggu DP
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-[184px] top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        21
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[273px] top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        22
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Innova - Dinas Pariwisata
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[361px] top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        23
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Innova - Dinas Pariwisata
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-6 pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[449px] top-[350px] relative">
                    <div className="absolute rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[0002px#005C55] w-[84px] h-[110px]"></div>
                    <div className="flex pr-0 justify-between items-center w-full">
                      <div className="flex pt-0.5 pr-5 pb-0.5 pl-1.5 flex-col items-start rounded-full bg-[#005C55] w-fit">
                        <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                          24 Hari Ini
                        </p>
                      </div>
                      <div className="rounded-full bg-[#005C55] w-2 h-2"></div>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - Handover Pagi
                      </p>
                    </div>
                    <div className="flex py-0.5 px-1.5 flex-col items-start rounded bg-[#E3F0F8] w-full overflow-hidden">
                      <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Shift Operasional Nino
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[537px] top-[350px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        25
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Ertiga - Bpk. Wahyu
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-2 top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        26
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-24 top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        27
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#9CF2E8] w-full overflow-hidden">
                      <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Calya - Ibu Siti
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[88px] pl-1.5 flex-col items-start rounded-lg bg-[#FFF] w-full absolute left-[184px] top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        28
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[273px] top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        29
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#D1E4FF] w-full overflow-hidden">
                      <p className="text-[#001D36] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Xpander - Booking Weekend
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[361px] top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        30
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Wira Kencana
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[62px] pl-1.5 flex-col items-start gap-1 rounded-lg bg-[#FFF] w-full absolute left-[449px] top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-xs font-semibold leading-4 w-full">
                        31
                      </p>
                    </div>
                    <div className="flex py-1 px-1.5 flex-col items-start rounded bg-[#C2DCFF] w-full overflow-hidden">
                      <p className="text-[#2F4865] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Avanza - PT Wira Kencana
                      </p>
                    </div>
                  </div>
                  <div className="flex min-h-[110px] pt-1.5 pr-1.5 pb-[90px] pl-1.5 flex-col items-start rounded-lg opacity-50 bg-[rgba(255,255,255,0.60)] w-full absolute left-[537px] top-[464px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#6E7977] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        1 Nov
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 justify-between items-center rounded-xl border border-[rgba(189,201,198,0.30)] bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex justify-center items-center rounded-xl bg-[#E9F6FD] w-12 h-12">
                    <svg
                      width="24"
                      height="19"
                      viewBox="0 0 24 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M9.33333 17.9083V11.2583L10.9667 6.59167C11.0639 6.37778 11.2049 6.19792 11.3896 6.05208C11.5743 5.90625 11.8028 5.83333 12.075 5.83333H20.5917C20.8639 5.83333 21.0972 5.90625 21.2917 6.05208C21.4861 6.19792 21.6222 6.37778 21.7 6.59167L23.3333 11.2583V17.9083C23.3333 18.1222 23.2604 18.3021 23.1146 18.4479C22.9688 18.5938 22.7889 18.6667 22.575 18.6667H21.7583C21.5444 18.6667 21.3646 18.5938 21.2188 18.4479C21.0729 18.3021 21 18.1222 21 17.9083V16.9167H11.6667V17.9083C11.6667 18.1222 11.5938 18.3021 11.4479 18.4479C11.3021 18.5938 11.1222 18.6667 10.9083 18.6667H10.0917C9.87778 18.6667 9.69792 18.5938 9.55208 18.4479C9.40625 18.3021 9.33333 18.1222 9.33333 17.9083V17.9083M11.6667 9.91667H21L20.1833 7.58333H12.4833L11.6667 9.91667V9.91667M11.0833 11.6667V11.6667V15.1667V15.1667V11.6667V11.6667M12.8333 14.5833C13.1639 14.5833 13.441 14.4715 13.6646 14.2479C13.8882 14.0243 14 13.7472 14 13.4167C14 13.0861 13.8882 12.809 13.6646 12.5854C13.441 12.3618 13.1639 12.25 12.8333 12.25C12.5028 12.25 12.2257 12.3618 12.0021 12.5854C11.7785 12.809 11.6667 13.0861 11.6667 13.4167C11.6667 13.7472 11.7785 14.0243 12.0021 14.2479C12.2257 14.4715 12.5028 14.5833 12.8333 14.5833V14.5833M19.8333 14.5833C20.1639 14.5833 20.441 14.4715 20.6646 14.2479C20.8882 14.0243 21 13.7472 21 13.4167C21 13.0861 20.8882 12.809 20.6646 12.5854C20.441 12.3618 20.1639 12.25 19.8333 12.25C19.5028 12.25 19.2257 12.3618 19.0021 12.5854C18.7785 12.809 18.6667 13.0861 18.6667 13.4167C18.6667 13.7472 18.7785 14.0243 19.0021 14.2479C19.2257 14.4715 19.5028 14.5833 19.8333 14.5833V14.5833M2.33333 18.6667V17.5L3.5 16.3333V16.3333C2.52778 16.3333 1.70139 15.9931 1.02083 15.3125C0.340278 14.6319 0 13.8056 0 12.8333V3.5C0 2.21667 0.573611 1.3125 1.72083 0.7875C2.86806 0.2625 4.82222 0 7.58333 0C10.4611 0 12.4444 0.252778 13.5333 0.758333C14.6222 1.26389 15.1667 2.17778 15.1667 3.5V4.66667H12.8333V3.5H2.33333V10.5H8.16667V18.6667H2.33333V18.6667M3.5 14C3.83056 14 4.10764 13.8882 4.33125 13.6646C4.55486 13.441 4.66667 13.1639 4.66667 12.8333C4.66667 12.5028 4.55486 12.2257 4.33125 12.0021C4.10764 11.7785 3.83056 11.6667 3.5 11.6667C3.16944 11.6667 2.89236 11.7785 2.66875 12.0021C2.44514 12.2257 2.33333 12.5028 2.33333 12.8333C2.33333 13.1639 2.44514 13.441 2.66875 13.6646C2.89236 13.8882 3.16944 14 3.5 14V14M11.0833 15.1667H21.5833V11.6667H11.0833V15.1667V15.1667"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex items-center gap-2 w-full">
                      <div className="flex pr-[3px] flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                          Toyota Avanza &#40;L 1234 AB&#41;
                        </p>
                      </div>
                      <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#C2DCFF] w-fit">
                        <p className="text-[#48617E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Aktif Disewa
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                        Penyewa: PT Megah Nusantara • Durasi: 08:00 - 18:00 WIB
                        • Tarif: Rp 450.000 &#x2F; hari
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-center justify-start gap-2">
                  <div className="flex py-2 px-3 items-center gap-1 rounded-lg bg-[#E9F6FD] w-fit">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M3.96667 5.86667L2.35 4.26667L3.05 3.56667L3.95 4.46667L5.61667 2.8L6.31667 3.5L3.96667 5.86667V5.86667M11.0667 12L6.86667 7.8C6.53333 8.06667 6.15 8.27778 5.71667 8.43333C5.28333 8.58889 4.82222 8.66667 4.33333 8.66667C3.12222 8.66667 2.09722 8.24722 1.25833 7.40833C0.419444 6.56944 0 5.54444 0 4.33333C0 3.12222 0.419444 2.09722 1.25833 1.25833C2.09722 0.419444 3.12222 0 4.33333 0C5.54444 0 6.56944 0.419444 7.40833 1.25833C8.24722 2.09722 8.66667 3.12222 8.66667 4.33333C8.66667 4.82222 8.58889 5.28333 8.43333 5.71667C8.27778 6.15 8.06667 6.53333 7.8 6.86667L12 11.0667L11.0667 12V12M4.33333 7.33333C5.16667 7.33333 5.875 7.04167 6.45833 6.45833C7.04167 5.875 7.33333 5.16667 7.33333 4.33333C7.33333 3.5 7.04167 2.79167 6.45833 2.20833C5.875 1.625 5.16667 1.33333 4.33333 1.33333C3.5 1.33333 2.79167 1.625 2.20833 2.20833C1.625 2.79167 1.33333 3.5 1.33333 4.33333C1.33333 5.16667 1.625 5.875 2.20833 6.45833C2.79167 7.04167 3.5 7.33333 4.33333 7.33333V7.33333"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex flex-col items-center w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        Cek Ketersediaan Cepat
                      </p>
                    </div>
                  </div>
                  <button className="cursor-pointer flex max-w-full flex-wrap py-2 px-3 flex-col justify-center items-center rounded-lg bg-[#0F766E]">
                    <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Buka Form Pemesanan
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-start gap-4 w-full">
              <div className="flex p-4 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 justify-between items-center border-b border-b-[rgba(189,201,198,0.30)] w-full">
                  <div className="flex items-center gap-2 w-fit">
                    <svg
                      width="17"
                      height="14"
                      viewBox="0 0 17 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M7.04167 9.58333C7.375 9.91667 7.80556 10.0799 8.33333 10.0729C8.86111 10.066 9.25 9.875 9.5 9.5L14.1667 2.5L7.16667 7.16667C6.79167 7.41667 6.59375 7.79861 6.57292 8.3125C6.55208 8.82639 6.70833 9.25 7.04167 9.58333V9.58333M8.33333 0C9.15278 0 9.94097 0.114583 10.6979 0.34375C11.4549 0.572917 12.1667 0.916667 12.8333 1.375L11.25 2.375C10.7917 2.13889 10.316 1.96181 9.82292 1.84375C9.32986 1.72569 8.83333 1.66667 8.33333 1.66667C6.48611 1.66667 4.91319 2.31597 3.61458 3.61458C2.31597 4.91319 1.66667 6.48611 1.66667 8.33333C1.66667 8.91667 1.74653 9.49306 1.90625 10.0625C2.06597 10.6319 2.29167 11.1667 2.58333 11.6667H14.0833C14.4028 11.1389 14.6354 10.5903 14.7812 10.0208C14.9271 9.45139 15 8.86111 15 8.25C15 7.75 14.941 7.26389 14.8229 6.79167C14.7049 6.31944 14.5278 5.86111 14.2917 5.41667L15.2917 3.83333C15.7083 4.48611 16.0382 5.18056 16.2812 5.91667C16.5243 6.65278 16.6528 7.41667 16.6667 8.20833C16.6806 9 16.5903 9.75694 16.3958 10.4792C16.2014 11.2014 15.9167 11.8889 15.5417 12.5417C15.3889 12.7917 15.1806 12.9861 14.9167 13.125C14.6528 13.2639 14.375 13.3333 14.0833 13.3333H2.58333C2.29167 13.3333 2.01389 13.2639 1.75 13.125C1.48611 12.9861 1.27778 12.7917 1.125 12.5417C0.763889 11.9167 0.486111 11.2535 0.291667 10.5521C0.0972222 9.85069 0 9.11111 0 8.33333C0 7.18056 0.21875 6.10069 0.65625 5.09375C1.09375 4.08681 1.69097 3.20486 2.44792 2.44792C3.20486 1.69097 4.09028 1.09375 5.10417 0.65625C6.11806 0.21875 7.19444 0 8.33333 0V0M8.47917 6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083V6.52083"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pr-16 flex-col items-start w-fit">
                      <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                        Cek Cepat Ketersediaan
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-0.5 pr-[29px] pb-0.5 pl-2 flex-col items-start rounded-full bg-[#9CF2E8] w-fit">
                    <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Instant Calc
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex justify-center items-start gap-2 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Tanggal Mulai
                        </p>
                      </div>
                      <div className="flex p-2 justify-center items-start rounded-lg bg-[#E9F6FD] w-full overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <div className="flex pt-px pr-px pb-px pl-px items-start gap-px w-fit">
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                10
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                24
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                2026
                              </p>
                            </div>
                          </div>
                          <div className="flex p-0.5 flex-col items-start w-[17px] h-[17px] overflow-hidden">
                            <div className="shrink-0 w-[13px] h-3 overflow-hidden"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                          Tanggal Selesai
                        </p>
                      </div>
                      <div className="flex p-2 justify-center items-start rounded-lg bg-[#E9F6FD] w-full overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <div className="flex p-px items-start gap-px w-fit">
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                10
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                26
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                                2026
                              </p>
                            </div>
                          </div>
                          <div className="flex p-0.5 flex-col items-start w-[17px] h-[17px] overflow-hidden">
                            <div className="shrink-0 w-[13px] h-3 overflow-hidden"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Kategori Kendaraan
                      </p>
                    </div>
                    <div className="flex pt-2 pr-6 pb-2 pl-3 flex-col justify-center items-start rounded-lg bg-[#E9F6FD] w-full">
                      <div className="flex py-px px-0 flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-4 w-full">
                          MPV &#40;Avanza, Xpander, Ertiga&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-2 justify-center items-start gap-2 rounded-xl bg-[#E9F6FD] w-full">
                  <div className="flex flex-col items-start w-full">
                    <div className="flex pt-0 pr-[83px] pb-px pl-0 items-end w-full h-[34px]">
                      <p className="text-[#005C55] font-plusJakartaSans text-[32px] font-bold leading-8 w-5 h-8 tracking-[-0.02em]">
                        8
                      </p>
                      <p className="text-[#3E4947] font-plusJakartaSans text-base leading-[22px] w-5 h-[22px] tracking-[-0.04em]">
                        &#x2F;12
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-full tracking-[0.02em]">
                          Unit Siap Disewa
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pb-0.5 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[32px] font-bold leading-8 w-full tracking-[-0.02em]">
                        4
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-full tracking-[0.02em]">
                          Terbooking &#x2F; Jadwal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-full tracking-[0.05em]">
                      UNIT SIAP SEWA HARI INI
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex p-2.5 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.70)] w-full">
                      <div className="flex items-center gap-2.5 w-fit">
                        <button className="cursor-pointer text-nowrap flex pt-[5px] pr-0 pb-1.5 pl-0 justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <p className="text-[#005C55] font-plusJakartaSans text-sm font-bold leading-[21px] w-fit">
                            HB
                          </p>
                        </button>
                        <div className="flex flex-col items-start w-fit">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                              Honda Brio Satya
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              W 4321 CD • City Car
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 w-fit">
                        <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#9CF2E8] w-fit">
                          <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                            Siap
                          </p>
                        </div>
                        <div className="flex pt-1 pr-1 pb-2.5 pl-1 flex-col justify-center items-center rounded w-fit">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex justify-center items-start w-fit "
                          >
                            <path
                              d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                              fill="#47607E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-2.5 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.70)] w-full">
                      <div className="flex items-center gap-2.5 w-fit">
                        <button className="cursor-pointer text-nowrap flex pt-[5px] pr-0 pb-1.5 pl-0 justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <p className="text-[#005C55] font-plusJakartaSans text-sm font-bold leading-[21px] w-fit">
                            TC
                          </p>
                        </button>
                        <div className="flex flex-col items-start w-fit">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                              Toyota Calya G
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              L 7788 XY • MPV
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 w-fit">
                        <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#9CF2E8] w-fit">
                          <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                            Siap
                          </p>
                        </div>
                        <div className="flex pt-1 pr-1 pb-2.5 pl-1 flex-col justify-center items-center rounded w-fit">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex justify-center items-start w-fit "
                          >
                            <path
                              d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                              fill="#47607E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-2.5 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.70)] w-full">
                      <div className="flex items-center gap-2.5 w-fit">
                        <button className="cursor-pointer text-nowrap flex pt-[5px] pr-0 pb-1.5 pl-0 justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <p className="text-[#005C55] font-plusJakartaSans text-sm font-bold leading-[21px] w-fit">
                            SE
                          </p>
                        </button>
                        <div className="flex flex-col items-start w-fit">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                              Suzuki All New Ertiga
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              L 3311 KK • MPV
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 w-fit">
                        <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#9CF2E8] w-fit">
                          <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                            Siap
                          </p>
                        </div>
                        <div className="flex pt-1 pr-1 pb-2.5 pl-1 flex-col justify-center items-center rounded w-fit">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex justify-center items-start w-fit "
                          >
                            <path
                              d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                              fill="#47607E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-2.5 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.70)] w-full">
                      <div className="flex items-center gap-2.5 w-fit">
                        <button className="cursor-pointer text-nowrap flex pt-[5px] pr-0 pb-1.5 pl-0 justify-center items-center rounded-lg bg-[#FFF] w-[27px] h-8">
                          <p className="text-[#005C55] font-plusJakartaSans text-sm font-bold leading-[21px] w-fit">
                            DX
                          </p>
                        </button>
                        <div className="flex flex-col items-start w-fit">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                              Daihatsu Xenia R
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              L 9012 EF • MPV Cadangan
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 w-fit">
                        <div className="flex pt-0.5 pr-[19px] pb-0.5 pl-2 flex-col items-start rounded-full bg-[#9CF2E8] w-fit">
                          <p className="text-[#00504A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                            Siap 100%
                          </p>
                        </div>
                        <div className="flex pt-1 pr-1 pb-2.5 pl-1 flex-col justify-center items-center rounded w-fit">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex justify-center items-start w-fit "
                          >
                            <path
                              d="M6.75 11.25H8.25V8.25H11.25V6.75H8.25V3.75H6.75V6.75H3.75V8.25H6.75V11.25V11.25M7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15V15M7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5V13.5M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                              fill="#47607E"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 flex-col items-start gap-2 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 justify-between items-center border-b border-b-[rgba(189,201,198,0.30)] w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Legenda Status Pemesanan
                    </p>
                  </div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M7.5 15C6.475 15 5.50625 14.8031 4.59375 14.4094C3.68125 14.0156 2.88438 13.4781 2.20312 12.7969C1.52188 12.1156 0.984375 11.3188 0.590625 10.4062C0.196875 9.49375 0 8.525 0 7.5C0 6.4625 0.203125 5.4875 0.609375 4.575C1.01562 3.6625 1.56563 2.86875 2.25938 2.19375C2.95312 1.51875 3.7625 0.984375 4.6875 0.590625C5.6125 0.196875 6.6 0 7.65 0C8.65 0 9.59375 0.171875 10.4812 0.515625C11.3687 0.859375 12.1469 1.33437 12.8156 1.94062C13.4844 2.54688 14.0156 3.26563 14.4094 4.09688C14.8031 4.92813 15 5.825 15 6.7875C15 8.225 14.5625 9.32812 13.6875 10.0969C12.8125 10.8656 11.75 11.25 10.5 11.25H9.1125C9 11.25 8.92188 11.2812 8.87813 11.3438C8.83438 11.4062 8.8125 11.475 8.8125 11.55C8.8125 11.7 8.90625 11.9156 9.09375 12.1969C9.28125 12.4781 9.375 12.8 9.375 13.1625C9.375 13.7875 9.20312 14.25 8.85938 14.55C8.51562 14.85 8.0625 15 7.5 15V15M7.5 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5M3.375 8.25C3.7 8.25 3.96875 8.14375 4.18125 7.93125C4.39375 7.71875 4.5 7.45 4.5 7.125C4.5 6.8 4.39375 6.53125 4.18125 6.31875C3.96875 6.10625 3.7 6 3.375 6C3.05 6 2.78125 6.10625 2.56875 6.31875C2.35625 6.53125 2.25 6.8 2.25 7.125C2.25 7.45 2.35625 7.71875 2.56875 7.93125C2.78125 8.14375 3.05 8.25 3.375 8.25V8.25M5.625 5.25C5.95 5.25 6.21875 5.14375 6.43125 4.93125C6.64375 4.71875 6.75 4.45 6.75 4.125C6.75 3.8 6.64375 3.53125 6.43125 3.31875C6.21875 3.10625 5.95 3 5.625 3C5.3 3 5.03125 3.10625 4.81875 3.31875C4.60625 3.53125 4.5 3.8 4.5 4.125C4.5 4.45 4.60625 4.71875 4.81875 4.93125C5.03125 5.14375 5.3 5.25 5.625 5.25V5.25M9.375 5.25C9.7 5.25 9.96875 5.14375 10.1812 4.93125C10.3937 4.71875 10.5 4.45 10.5 4.125C10.5 3.8 10.3937 3.53125 10.1812 3.31875C9.96875 3.10625 9.7 3 9.375 3C9.05 3 8.78125 3.10625 8.56875 3.31875C8.35625 3.53125 8.25 3.8 8.25 4.125C8.25 4.45 8.35625 4.71875 8.56875 4.93125C8.78125 5.14375 9.05 5.25 9.375 5.25V5.25M11.625 8.25C11.95 8.25 12.2188 8.14375 12.4312 7.93125C12.6437 7.71875 12.75 7.45 12.75 7.125C12.75 6.8 12.6437 6.53125 12.4312 6.31875C12.2188 6.10625 11.95 6 11.625 6C11.3 6 11.0312 6.10625 10.8188 6.31875C10.6063 6.53125 10.5 6.8 10.5 7.125C10.5 7.45 10.6063 7.71875 10.8188 7.93125C11.0312 8.14375 11.3 8.25 11.625 8.25V8.25M7.5 13.5C7.6125 13.5 7.70312 13.4688 7.77187 13.4062C7.84062 13.3438 7.875 13.2625 7.875 13.1625C7.875 12.9875 7.78125 12.7812 7.59375 12.5437C7.40625 12.3062 7.3125 11.95 7.3125 11.475C7.3125 10.95 7.49375 10.5312 7.85625 10.2188C8.21875 9.90625 8.6625 9.75 9.1875 9.75H10.5C11.325 9.75 12.0312 9.50937 12.6187 9.02812C13.2062 8.54688 13.5 7.8 13.5 6.7875C13.5 5.275 12.9219 4.01562 11.7656 3.00938C10.6094 2.00313 9.2375 1.5 7.65 1.5C5.95 1.5 4.5 2.08125 3.3 3.24375C2.1 4.40625 1.5 5.825 1.5 7.5C1.5 9.1625 2.08437 10.5781 3.25312 11.7469C4.42188 12.9156 5.8375 13.5 7.5 13.5V13.5"
                      fill="#47607E"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex pt-2 pr-2 pb-2 pl-2 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.50)] w-full">
                    <div className="flex items-center gap-2.5 w-fit">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col justify-center items-start rounded-full bg-[#C2DCFF] w-3.5 h-3.5 "
                      >
                        <rect
                          x="2"
                          y="2"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#C2DCFF"
                        />
                        <g filter="url(#filter0_d_156_452)">
                          <rect
                            x="2"
                            y="2"
                            width="14"
                            height="14"
                            rx="7"
                            fill="white"
                            fillOpacity="0.01"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_156_452"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_156_452"
                            />
                            <feOffset />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0.360784 0 0 0 0 0.333333 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_156_452"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_156_452"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                          Biru: Aktif &#x2F; Sedang Disewa
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        14 Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex p-2 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.50)] w-full">
                    <div className="flex items-center gap-2.5 w-fit">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col justify-center items-start rounded-full bg-[#9CF2E8] w-3.5 h-3.5 "
                      >
                        <rect
                          x="2"
                          y="2"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#9CF2E8"
                        />
                        <g filter="url(#filter0_d_156_460)">
                          <rect
                            x="2"
                            y="2"
                            width="14"
                            height="14"
                            rx="7"
                            fill="white"
                            fillOpacity="0.01"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_156_460"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_156_460"
                            />
                            <feOffset />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0.360784 0 0 0 0 0.333333 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_156_460"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_156_460"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                          Hijau: Terkonfirmasi &amp; Siap
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        8 Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex p-2 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.50)] w-full">
                    <div className="flex items-center gap-2.5 w-fit">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col justify-center items-start rounded-full bg-[#D1E4FF] w-3.5 h-3.5 "
                      >
                        <rect
                          x="2"
                          y="2"
                          width="14"
                          height="14"
                          rx="7"
                          fill="#D1E4FF"
                        />
                        <g filter="url(#filter0_d_156_468)">
                          <rect
                            x="2"
                            y="2"
                            width="14"
                            height="14"
                            rx="7"
                            fill="white"
                            fillOpacity="0.01"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_156_468"
                            x="0"
                            y="0"
                            width="18"
                            height="18"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_156_468"
                            />
                            <feOffset />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.278431 0 0 0 0 0.376471 0 0 0 0 0.494118 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_156_468"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_156_468"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                          Amber: Menunggu DP &#x2F; Review
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        3 Unit
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-2 pl-2 justify-between items-center rounded-lg bg-[rgba(233,246,253,0.50)] w-full">
                    <div className="flex items-center gap-2.5 w-fit">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col justify-center items-start rounded-full bg-[#BA1A1A] w-[13px] h-3.5 "
                      >
                        <rect
                          x="2"
                          y="2"
                          width="13.02"
                          height="14"
                          rx="6.51"
                          fill="#BA1A1A"
                        />
                        <g filter="url(#filter0_d_156_476)">
                          <rect
                            x="2"
                            y="2"
                            width="13.02"
                            height="14"
                            rx="6.51"
                            fill="white"
                            fillOpacity="0.01"
                            shapeRendering="crispEdges"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_156_476"
                            x="0"
                            y="0"
                            width="17.02"
                            height="18"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
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
                              result="effect1_dropShadow_156_476"
                            />
                            <feOffset />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.729412 0 0 0 0 0.101961 0 0 0 0 0.101961 0 0 0 0.2 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_156_476"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_156_476"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <div className="flex pr-[31px] flex-col items-start w-fit">
                        <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                          Merah: Bentrok &#x2F; Tabrakan Jadwal
                        </p>
                      </div>
                    </div>
                    <div className="flex pr-1 flex-col items-start w-fit">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        1 Kasus
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 flex-col items-start gap-2 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Jadwal Handover Terdekat
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Hari Ini &#40;Shift Nino&#41;
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex p-2.5 flex-col items-start gap-1 rounded-lg border-l-4 border-l-[#005C55] bg-[#E9F6FD] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                          Toyota Avanza &#40;L 1234 AB&#41;
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          14:00 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex pr-6 flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Pengembalian: PT Megah Nusantara
                        </p>
                      </div>
                      <div className="flex pr-5 flex-col items-start w-fit">
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Lokasi: Pool Utama
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2.5 flex-col items-start gap-1 rounded-lg border-l-4 border-l-[#C2DCFF] bg-[#E9F6FD] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                          Honda Brio &#40;W 4321 CD&#41;
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          16:30 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Serah Terima: Bpk. Dimas
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Lepas Kunci
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reservation-topbar flex flex-col items-start absolute right-0 bg-[rgba(244,250,255,0.85)] shadow-[01px8px0rgba(0,0,0,0.04)] w-[1020px] h-16">
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
                <g filter="url(#filter0_d_156_530)">
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
                    id="filter0_d_156_530"
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
                      result="effect1_dropShadow_156_530"
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
                      result="effect1_dropShadow_156_530"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_156_530"
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