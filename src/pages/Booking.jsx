export default function TambahBooking() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-linear-[0deg,#F4FAFF0%,#F4FAFF100%),#FF] relative">
      <div className="flex min-h-[800px] pt-16 flex-col items-start bg-[#F5F7FA] w-full">
        <div className="flex py-6 px-8 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-1 w-full">
            <div className="flex items-center gap-1 w-full">
              <div className="flex items-center gap-1 w-fit">
                <svg
                  width="11"
                  height="12"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M1.75 11.6667C1.26389 11.6667 0.850694 11.4965 0.510417 11.1562C0.170139 10.816 0 10.4028 0 9.91667V8.16667H1.75V0L2.625 0.875L3.5 0L4.375 0.875L5.25 0L6.125 0.875L7 0L7.875 0.875L8.75 0L9.625 0.875L10.5 0V9.91667C10.5 10.4028 10.3299 10.816 9.98958 11.1562C9.64931 11.4965 9.23611 11.6667 8.75 11.6667H1.75V11.6667M8.75 10.5C8.91528 10.5 9.05382 10.4441 9.16562 10.3323C9.27743 10.2205 9.33333 10.0819 9.33333 9.91667V1.75H2.91667V8.16667H8.16667V9.91667C8.16667 10.0819 8.22257 10.2205 8.33438 10.3323C8.44618 10.4441 8.58472 10.5 8.75 10.5V10.5M3.5 4.08333V2.91667H7V4.08333H3.5V4.08333M3.5 5.83333V4.66667H7V5.83333H3.5V5.83333M8.16667 4.08333C8.00139 4.08333 7.86285 4.02743 7.75104 3.91563C7.63924 3.80382 7.58333 3.66528 7.58333 3.5C7.58333 3.33472 7.63924 3.19618 7.75104 3.08437C7.86285 2.97257 8.00139 2.91667 8.16667 2.91667C8.33194 2.91667 8.47049 2.97257 8.58229 3.08437C8.6941 3.19618 8.75 3.33472 8.75 3.5C8.75 3.66528 8.6941 3.80382 8.58229 3.91563C8.47049 4.02743 8.33194 4.08333 8.16667 4.08333V4.08333M8.16667 5.83333C8.00139 5.83333 7.86285 5.77743 7.75104 5.66563C7.63924 5.55382 7.58333 5.41528 7.58333 5.25C7.58333 5.08472 7.63924 4.94618 7.75104 4.83437C7.86285 4.72257 8.00139 4.66667 8.16667 4.66667C8.33194 4.66667 8.47049 4.72257 8.58229 4.83437C8.6941 4.94618 8.75 5.08472 8.75 5.25C8.75 5.41528 8.6941 5.55382 8.58229 5.66563C8.47049 5.77743 8.33194 5.83333 8.16667 5.83333V5.83333M1.75 10.5H7V9.33333H1.16667V9.91667C1.16667 10.0819 1.22257 10.2205 1.33438 10.3323C1.44618 10.4441 1.58472 10.5 1.75 10.5V10.5M1.16667 10.5C1.16667 10.5 1.16667 10.4441 1.16667 10.3323C1.16667 10.2205 1.16667 10.0819 1.16667 9.91667V9.33333V9.33333V10.5V10.5V10.5"
                    fill="#47607E"
                  />
                </svg>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Pemesanan
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#BDC9C6] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  &#x2F;
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                  Tambah Pemesanan Baru
                </p>
              </div>
            </div>
            <div className="flex pt-1 justify-between items-end w-full">
              <div className="flex flex-col items-start w-fit">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#111D23] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.025em]">
                    Buat Pemesanan &amp; Detail Sewa
                  </p>
                </div>
                <div className="flex pt-0.5 flex-col items-start w-full">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                    Input data penyewa, verifikasi ketersediaan unit tanpa
                    bentrok, dan kalkulasi pembayaran uang muka.
                  </p>
                </div>
              </div>
              <div className="flex items-center w-fit">
                <div className="flex py-1 px-3 items-center gap-1.5 rounded-full bg-[#DDEAF2] w-fit">
                  <div className="rounded-full bg-[#005C55] w-2 h-2"></div>
                  <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                    Booking Engine V2.4 Active
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,1fr)]">
            <div className="flex min-w-0 flex-col items-start gap-6 w-full">
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 justify-between items-center w-full">
                  <div className="flex items-center gap-2 w-fit">
                    <div className="flex justify-center items-center rounded-lg bg-[#E9F6FD] w-8 h-8">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M6.66667 6.66667C5.75 6.66667 4.96528 6.34028 4.3125 5.6875C3.65972 5.03472 3.33333 4.25 3.33333 3.33333C3.33333 2.41667 3.65972 1.63194 4.3125 0.979167C4.96528 0.326389 5.75 0 6.66667 0C7.58333 0 8.36806 0.326389 9.02083 0.979167C9.67361 1.63194 10 2.41667 10 3.33333C10 4.25 9.67361 5.03472 9.02083 5.6875C8.36806 6.34028 7.58333 6.66667 6.66667 6.66667V6.66667M0 13.3333V11C0 10.5278 0.121528 10.0938 0.364583 9.69792C0.607639 9.30208 0.930556 9 1.33333 8.79167C2.19444 8.36111 3.06944 8.03819 3.95833 7.82292C4.84722 7.60764 5.75 7.5 6.66667 7.5C7.58333 7.5 8.48611 7.60764 9.375 7.82292C10.2639 8.03819 11.1389 8.36111 12 8.79167C12.4028 9 12.7257 9.30208 12.9688 9.69792C13.2118 10.0938 13.3333 10.5278 13.3333 11V13.3333H0V13.3333M1.66667 11.6667H11.6667V11C11.6667 10.8472 11.6285 10.7083 11.5521 10.5833C11.4757 10.4583 11.375 10.3611 11.25 10.2917C10.5 9.91667 9.74306 9.63542 8.97917 9.44792C8.21528 9.26042 7.44444 9.16667 6.66667 9.16667C5.88889 9.16667 5.11806 9.26042 4.35417 9.44792C3.59028 9.63542 2.83333 9.91667 2.08333 10.2917C1.95833 10.3611 1.85764 10.4583 1.78125 10.5833C1.70486 10.7083 1.66667 10.8472 1.66667 11V11.6667V11.6667M6.66667 5C7.125 5 7.51736 4.83681 7.84375 4.51042C8.17014 4.18403 8.33333 3.79167 8.33333 3.33333C8.33333 2.875 8.17014 2.48264 7.84375 2.15625C7.51736 1.82986 7.125 1.66667 6.66667 1.66667C6.20833 1.66667 5.81597 1.82986 5.48958 2.15625C5.16319 2.48264 5 2.875 5 3.33333C5 3.79167 5.16319 4.18403 5.48958 4.51042C5.81597 4.83681 6.20833 5 6.66667 5V5M6.66667 3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333M6.66667 11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667"
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                          1. Informasi Penyewa
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Data identitas utama untuk verifikasi kontrak rental
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-1 items-center gap-1 rounded-lg bg-[#E9F6FD] w-fit">
                    <button className="cursor-pointer text-nowrap flex py-1 px-3 flex-col justify-center items-center rounded bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                      <p className="text-[#FFF] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                        Pribadi
                      </p>
                    </button>
                    <button className="cursor-pointer text-nowrap flex py-1 px-3 flex-col justify-center items-center rounded w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                        Perusahaan
                      </p>
                    </button>
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Nama Lengkap Penyewa *
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-4 pb-2.5 pl-9 justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                            Darmawan Santoso
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-3 items-center absolute w-fit h-[38px]">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V5.25C0 4.8375 0.146875 4.48438 0.440625 4.19063C0.734375 3.89688 1.0875 3.75 1.5 3.75H5.25V1.5C5.25 1.0875 5.39688 0.734375 5.69063 0.440625C5.98438 0.146875 6.3375 0 6.75 0H8.25C8.6625 0 9.01562 0.146875 9.30937 0.440625C9.60312 0.734375 9.75 1.0875 9.75 1.5V3.75H13.5C13.9125 3.75 14.2656 3.89688 14.5594 4.19063C14.8531 4.48438 15 4.8375 15 5.25V13.5C15 13.9125 14.8531 14.2656 14.5594 14.5594C14.2656 14.8531 13.9125 15 13.5 15H1.5V15M1.5 13.5H13.5V13.5V13.5V5.25V5.25V5.25H9.75V5.25C9.75 5.6625 9.60312 6.01562 9.30937 6.30937C9.01562 6.60312 8.6625 6.75 8.25 6.75H6.75C6.3375 6.75 5.98438 6.60312 5.69063 6.30937C5.39688 6.01562 5.25 5.6625 5.25 5.25V5.25H1.5V5.25V5.25V13.5V13.5V13.5V13.5M3 12H7.5V11.6625C7.5 11.45 7.44063 11.2531 7.32188 11.0719C7.20312 10.8906 7.0375 10.75 6.825 10.65C6.575 10.5375 6.32188 10.4531 6.06563 10.3969C5.80938 10.3406 5.5375 10.3125 5.25 10.3125C4.9625 10.3125 4.69062 10.3406 4.43437 10.3969C4.17812 10.4531 3.925 10.5375 3.675 10.65C3.4625 10.75 3.29688 10.8906 3.17812 11.0719C3.05937 11.2531 3 11.45 3 11.6625V12V12M9 10.875H12V9.75H9V10.875V10.875M5.25 9.75C5.5625 9.75 5.82812 9.64062 6.04688 9.42188C6.26562 9.20312 6.375 8.9375 6.375 8.625C6.375 8.3125 6.26562 8.04688 6.04688 7.82812C5.82812 7.60938 5.5625 7.5 5.25 7.5C4.9375 7.5 4.67188 7.60938 4.45312 7.82812C4.23438 8.04688 4.125 8.3125 4.125 8.625C4.125 8.9375 4.23438 9.20312 4.45312 9.42188C4.67188 9.64062 4.9375 9.75 5.25 9.75V9.75M9 8.625H12V7.5H9V8.625V8.625M6.75 5.25H8.25V1.5H6.75V5.25V5.25M7.5 9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375"
                            fill="#47607E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Nomor WhatsApp &#x2F; Seluler *
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-4 pb-2.5 pl-9 justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                            0812-9876-5432
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-3 items-center absolute w-fit h-[38px]">
                        <svg
                          width="12"
                          height="17"
                          viewBox="0 0 12 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.5 16.5C1.0875 16.5 0.734375 16.3531 0.440625 16.0594C0.146875 15.7656 0 15.4125 0 15V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H9C9.4125 0 9.76562 0.146875 10.0594 0.440625C10.3531 0.734375 10.5 1.0875 10.5 1.5V3.825C10.725 3.9125 10.9062 4.05 11.0437 4.2375C11.1812 4.425 11.25 4.6375 11.25 4.875V6.375C11.25 6.6125 11.1812 6.825 11.0437 7.0125C10.9062 7.2 10.725 7.3375 10.5 7.425V15C10.5 15.4125 10.3531 15.7656 10.0594 16.0594C9.76562 16.3531 9.4125 16.5 9 16.5H1.5V16.5M1.5 15H9V15V15V1.5V1.5V1.5H1.5V1.5V1.5V15V15V15V15M1.5 15V15V15V1.5V1.5V1.5V1.5V1.5V1.5V15V15V15V15V15M3.75 14.25H6.75C6.9625 14.25 7.14062 14.1781 7.28438 14.0344C7.42813 13.8906 7.5 13.7125 7.5 13.5C7.5 13.2875 7.42813 13.1094 7.28438 12.9656C7.14062 12.8219 6.9625 12.75 6.75 12.75H3.75C3.5375 12.75 3.35938 12.8219 3.21563 12.9656C3.07188 13.1094 3 13.2875 3 13.5C3 13.7125 3.07188 13.8906 3.21563 14.0344C3.35938 14.1781 3.5375 14.25 3.75 14.25V14.25"
                            fill="#47607E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Alamat Email Aktif *
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-4 pb-2.5 pl-9 justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                            darmawan@perusahaan.co.id
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-3 items-center absolute w-fit h-[38px]">
                        <svg
                          width="15"
                          height="12"
                          viewBox="0 0 15 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.5 12C1.0875 12 0.734375 11.8531 0.440625 11.5594C0.146875 11.2656 0 10.9125 0 10.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H1.5V12M7.5 6.75L1.5 3V10.5V10.5V10.5H13.5V10.5V10.5V3L7.5 6.75V6.75M7.5 5.25L13.5 1.5H1.5L7.5 5.25V5.25M1.5 3V1.5V1.5V3V10.5V10.5V10.5V10.5V10.5V10.5V3V3"
                            fill="#47607E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Nomor KTP &#x2F; Dokumen Identitas *
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-4 pb-2.5 pl-9 justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                            3578210987650002
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-3 items-center absolute w-fit h-[38px]">
                        <svg
                          width="14"
                          height="15"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M6.74625 1.8375C8.07125 1.8375 9.32125 2.12187 10.4963 2.69062C11.6713 3.25938 12.6525 4.08125 13.44 5.15625C13.5275 5.26875 13.5556 5.36875 13.5244 5.45625C13.4931 5.54375 13.44 5.61875 13.365 5.68125C13.29 5.74375 13.2025 5.77187 13.1025 5.76562C13.0025 5.75938 12.915 5.70625 12.84 5.60625C12.1525 4.63125 11.2681 3.88437 10.1869 3.36562C9.10563 2.84687 7.95875 2.5875 6.74625 2.5875C5.53375 2.5875 4.39625 2.84687 3.33375 3.36562C2.27125 3.88437 1.39 4.63125 0.69 5.60625C0.615 5.71875 0.5275 5.78125 0.4275 5.79375C0.3275 5.80625 0.24 5.78125 0.165 5.71875C0.0775 5.65625 0.024375 5.57812 0.005625 5.48438C-0.013125 5.39062 0.015 5.29375 0.09 5.19375C0.865 4.13125 1.83687 3.30625 3.00563 2.71875C4.17438 2.13125 5.42125 1.8375 6.74625 1.8375V1.8375M6.74625 3.6C8.43375 3.6 9.88375 4.1625 11.0962 5.2875C12.3087 6.4125 12.915 7.80625 12.915 9.46875C12.915 10.0938 12.6931 10.6156 12.2494 11.0344C11.8056 11.4531 11.265 11.6625 10.6275 11.6625C9.99 11.6625 9.44312 11.4531 8.98687 11.0344C8.53062 10.6156 8.3025 10.0938 8.3025 9.46875C8.3025 9.05625 8.14937 8.70938 7.84312 8.42813C7.53687 8.14688 7.17125 8.00625 6.74625 8.00625C6.32125 8.00625 5.95563 8.14688 5.64937 8.42813C5.34312 8.70938 5.19 9.05625 5.19 9.46875C5.19 10.6812 5.54938 11.6938 6.26813 12.5063C6.98688 13.3188 7.915 13.8875 9.0525 14.2125C9.165 14.25 9.24 14.3125 9.2775 14.4C9.315 14.4875 9.32125 14.5812 9.29625 14.6812C9.27125 14.7687 9.22125 14.8438 9.14625 14.9062C9.07125 14.9688 8.9775 14.9875 8.865 14.9625C7.565 14.6375 6.5025 13.9906 5.6775 13.0219C4.8525 12.0531 4.44 10.8687 4.44 9.46875C4.44 8.84375 4.665 8.31875 5.115 7.89375C5.565 7.46875 6.10875 7.25625 6.74625 7.25625C7.38375 7.25625 7.9275 7.46875 8.3775 7.89375C8.8275 8.31875 9.0525 8.84375 9.0525 9.46875C9.0525 9.88125 9.20875 10.2281 9.52125 10.5094C9.83375 10.7906 10.2025 10.9312 10.6275 10.9312C11.0525 10.9312 11.415 10.7906 11.715 10.5094C12.015 10.2281 12.165 9.88125 12.165 9.46875C12.165 8.01875 11.6337 6.8 10.5712 5.8125C9.50875 4.825 8.24 4.33125 6.765 4.33125C5.29 4.33125 4.02125 4.825 2.95875 5.8125C1.89625 6.8 1.365 8.0125 1.365 9.45C1.365 9.75 1.39313 10.125 1.44938 10.575C1.50563 11.025 1.64 11.55 1.8525 12.15C1.89 12.2625 1.88688 12.3625 1.84312 12.45C1.79937 12.5375 1.7275 12.6 1.6275 12.6375C1.5275 12.675 1.43062 12.6719 1.33687 12.6281C1.24312 12.5844 1.1775 12.5125 1.14 12.4125C0.9525 11.925 0.818125 11.4406 0.736875 10.9594C0.655625 10.4781 0.615 9.98125 0.615 9.46875C0.615 7.80625 1.21813 6.4125 2.42438 5.2875C3.63063 4.1625 5.07125 3.6 6.74625 3.6V3.6M6.74625 0C7.54625 0 8.3275 0.096875 9.09 0.290625C9.8525 0.484375 10.59 0.7625 11.3025 1.125C11.415 1.1875 11.4806 1.2625 11.4994 1.35C11.5181 1.4375 11.5087 1.525 11.4712 1.6125C11.4337 1.7 11.3712 1.76875 11.2837 1.81875C11.1962 1.86875 11.09 1.8625 10.965 1.8C10.3025 1.4625 9.61812 1.20312 8.91187 1.02188C8.20562 0.840625 7.48375 0.75 6.74625 0.75C6.02125 0.75 5.30875 0.834375 4.60875 1.00312C3.90875 1.17188 3.24 1.4375 2.6025 1.8C2.5025 1.8625 2.4025 1.87812 2.3025 1.84687C2.2025 1.81562 2.1275 1.75 2.0775 1.65C2.0275 1.55 2.015 1.45937 2.04 1.37812C2.065 1.29688 2.1275 1.225 2.2275 1.1625C2.9275 0.7875 3.65875 0.5 4.42125 0.3C5.18375 0.1 5.95875 0 6.74625 0V0M6.74625 5.41875C7.90875 5.41875 8.90875 5.80937 9.74625 6.59062C10.5837 7.37187 11.0025 8.33125 11.0025 9.46875C11.0025 9.58125 10.9681 9.67188 10.8994 9.74063C10.8306 9.80938 10.74 9.84375 10.6275 9.84375C10.5275 9.84375 10.44 9.80938 10.365 9.74063C10.29 9.67188 10.2525 9.58125 10.2525 9.46875C10.2525 8.53125 9.90563 7.74687 9.21187 7.11562C8.51812 6.48438 7.69625 6.16875 6.74625 6.16875C5.79625 6.16875 4.98063 6.48438 4.29938 7.11562C3.61812 7.74687 3.2775 8.53125 3.2775 9.46875C3.2775 10.4812 3.4525 11.3406 3.8025 12.0469C4.1525 12.7531 4.665 13.4625 5.34 14.175C5.415 14.25 5.4525 14.3375 5.4525 14.4375C5.4525 14.5375 5.415 14.625 5.34 14.7C5.265 14.775 5.1775 14.8125 5.0775 14.8125C4.9775 14.8125 4.89 14.775 4.815 14.7C4.0775 13.925 3.51187 13.1344 3.11812 12.3281C2.72438 11.5219 2.5275 10.5688 2.5275 9.46875C2.5275 8.33125 2.94 7.37187 3.765 6.59062C4.59 5.80937 5.58375 5.41875 6.74625 5.41875V5.41875M6.7275 9.09375C6.84 9.09375 6.93062 9.13125 6.99937 9.20625C7.06812 9.28125 7.1025 9.36875 7.1025 9.46875C7.1025 10.4062 7.44 11.175 8.115 11.775C8.79 12.375 9.5775 12.675 10.4775 12.675C10.5525 12.675 10.6588 12.6687 10.7963 12.6562C10.9338 12.6438 11.0775 12.625 11.2275 12.6C11.34 12.575 11.4369 12.5906 11.5181 12.6469C11.5994 12.7031 11.6525 12.7875 11.6775 12.9C11.7025 13 11.6838 13.0875 11.6213 13.1625C11.5588 13.2375 11.4775 13.2875 11.3775 13.3125C11.1525 13.375 10.9556 13.4094 10.7869 13.4156C10.6181 13.4219 10.515 13.425 10.4775 13.425C9.365 13.425 8.39937 13.05 7.58063 12.3C6.76188 11.55 6.3525 10.6062 6.3525 9.46875C6.3525 9.36875 6.38688 9.28125 6.45563 9.20625C6.52437 9.13125 6.615 9.09375 6.7275 9.09375V9.09375"
                            fill="#47607E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 justify-between items-center w-full">
                  <div className="flex items-center gap-2 w-fit">
                    <div className="flex justify-center items-center rounded-lg bg-[#E9F6FD] w-8 h-8">
                      <svg
                        width="15"
                        height="14"
                        viewBox="0 0 15 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M2.5 11.6667V12.5C2.5 12.7361 2.42014 12.934 2.26042 13.0938C2.10069 13.2535 1.90278 13.3333 1.66667 13.3333H0.833333C0.597222 13.3333 0.399306 13.2535 0.239583 13.0938C0.0798611 12.934 0 12.7361 0 12.5V5.83333L1.75 0.833333C1.83333 0.583333 1.98264 0.381944 2.19792 0.229167C2.41319 0.0763889 2.65278 0 2.91667 0H12.0833C12.3472 0 12.5868 0.0763889 12.8021 0.229167C13.0174 0.381944 13.1667 0.583333 13.25 0.833333L15 5.83333V12.5C15 12.7361 14.9201 12.934 14.7604 13.0938C14.6007 13.2535 14.4028 13.3333 14.1667 13.3333H13.3333C13.0972 13.3333 12.8993 13.2535 12.7396 13.0938C12.5799 12.934 12.5 12.7361 12.5 12.5V11.6667H2.5V11.6667M2.33333 4.16667H12.6667L11.7917 1.66667H3.20833L2.33333 4.16667V4.16667M1.66667 5.83333V5.83333V10V10V5.83333V5.83333M3.75 9.16667C4.09722 9.16667 4.39236 9.04514 4.63542 8.80208C4.87847 8.55903 5 8.26389 5 7.91667C5 7.56944 4.87847 7.27431 4.63542 7.03125C4.39236 6.78819 4.09722 6.66667 3.75 6.66667C3.40278 6.66667 3.10764 6.78819 2.86458 7.03125C2.62153 7.27431 2.5 7.56944 2.5 7.91667C2.5 8.26389 2.62153 8.55903 2.86458 8.80208C3.10764 9.04514 3.40278 9.16667 3.75 9.16667V9.16667M11.25 9.16667C11.5972 9.16667 11.8924 9.04514 12.1354 8.80208C12.3785 8.55903 12.5 8.26389 12.5 7.91667C12.5 7.56944 12.3785 7.27431 12.1354 7.03125C11.8924 6.78819 11.5972 6.66667 11.25 6.66667C10.9028 6.66667 10.6076 6.78819 10.3646 7.03125C10.1215 7.27431 10 7.56944 10 7.91667C10 8.26389 10.1215 8.55903 10.3646 8.80208C10.6076 9.04514 10.9028 9.16667 11.25 9.16667V9.16667M1.66667 10H13.3333V5.83333H1.66667V10V10"
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                          2. Pemilihan Unit Kendaraan
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Pilih armada aktif dengan status telemetri prima
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-1 px-2.5 flex-col items-start rounded-full bg-[rgba(156,242,232,0.30)] w-fit">
                    <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      Tersedia 18 Unit
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                      Armada Siap Pakai *
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <div className="flex pt-2.5 pr-10 pb-2.5 pl-4 justify-center items-center rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                          Toyota Avanza 1.3 G &#40;L 1234 AB&#41; - MPV
                          &#40;Manual &#x2F; Bensin&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex pr-3 items-center absolute right-0 w-fit h-[38px]">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5 6.16667L0 1.16667L1.16667 0L5 3.83333L8.83333 0L10 1.16667L5 6.16667V6.16667"
                          fill="#47607E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 items-start gap-2 rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex pt-0.5 flex-col items-start w-6 h-[26px]">
                    <div className="flex justify-center items-center shrink-0 rounded-full bg-[#9CF2E8] w-6 h-6">
                      <svg
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M3.8 8.01667L0 4.21667L0.95 3.26667L3.8 6.11667L9.91667 0L10.8667 0.95L3.8 8.01667V8.01667"
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                        Unit Tersedia untuk rentang tanggal yang dipilih
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Tidak ada bentrok jadwal. Riwayat servis unit terakhir:
                        Ganti Oli &amp; Rem tgl 14 Okt 2026. Health status 94%.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 items-center gap-2 w-full">
                  <div className="flex justify-center items-center rounded-lg bg-[#E9F6FD] w-8 h-8">
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V3.33333C0 2.875 0.163194 2.48264 0.489583 2.15625C0.815972 1.82986 1.20833 1.66667 1.66667 1.66667H2.5V0H4.16667V1.66667H10.8333V0H12.5V1.66667H13.3333C13.7917 1.66667 14.184 1.82986 14.5104 2.15625C14.8368 2.48264 15 2.875 15 3.33333V15C15 15.4583 14.8368 15.8507 14.5104 16.1771C14.184 16.5035 13.7917 16.6667 13.3333 16.6667H1.66667V16.6667M1.66667 15H13.3333V15V15V6.66667H1.66667V15V15V15V15M1.66667 5H13.3333V3.33333V3.33333V3.33333H1.66667V3.33333V3.33333V5V5M1.66667 5V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V5V5V5M7.5 10C7.26389 10 7.06597 9.92014 6.90625 9.76042C6.74653 9.60069 6.66667 9.40278 6.66667 9.16667C6.66667 8.93056 6.74653 8.73264 6.90625 8.57292C7.06597 8.41319 7.26389 8.33333 7.5 8.33333C7.73611 8.33333 7.93403 8.41319 8.09375 8.57292C8.25347 8.73264 8.33333 8.93056 8.33333 9.16667C8.33333 9.40278 8.25347 9.60069 8.09375 9.76042C7.93403 9.92014 7.73611 10 7.5 10V10M4.16667 10C3.93056 10 3.73264 9.92014 3.57292 9.76042C3.41319 9.60069 3.33333 9.40278 3.33333 9.16667C3.33333 8.93056 3.41319 8.73264 3.57292 8.57292C3.73264 8.41319 3.93056 8.33333 4.16667 8.33333C4.40278 8.33333 4.60069 8.41319 4.76042 8.57292C4.92014 8.73264 5 8.93056 5 9.16667C5 9.40278 4.92014 9.60069 4.76042 9.76042C4.60069 9.92014 4.40278 10 4.16667 10V10M10.8333 10C10.5972 10 10.3993 9.92014 10.2396 9.76042C10.0799 9.60069 10 9.40278 10 9.16667C10 8.93056 10.0799 8.73264 10.2396 8.57292C10.3993 8.41319 10.5972 8.33333 10.8333 8.33333C11.0694 8.33333 11.2674 8.41319 11.4271 8.57292C11.5868 8.73264 11.6667 8.93056 11.6667 9.16667C11.6667 9.40278 11.5868 9.60069 11.4271 9.76042C11.2674 9.92014 11.0694 10 10.8333 10V10M7.5 13.3333C7.26389 13.3333 7.06597 13.2535 6.90625 13.0938C6.74653 12.934 6.66667 12.7361 6.66667 12.5C6.66667 12.2639 6.74653 12.066 6.90625 11.9062C7.06597 11.7465 7.26389 11.6667 7.5 11.6667C7.73611 11.6667 7.93403 11.7465 8.09375 11.9062C8.25347 12.066 8.33333 12.2639 8.33333 12.5C8.33333 12.7361 8.25347 12.934 8.09375 13.0938C7.93403 13.2535 7.73611 13.3333 7.5 13.3333V13.3333M4.16667 13.3333C3.93056 13.3333 3.73264 13.2535 3.57292 13.0938C3.41319 12.934 3.33333 12.7361 3.33333 12.5C3.33333 12.2639 3.41319 12.066 3.57292 11.9062C3.73264 11.7465 3.93056 11.6667 4.16667 11.6667C4.40278 11.6667 4.60069 11.7465 4.76042 11.9062C4.92014 12.066 5 12.2639 5 12.5C5 12.7361 4.92014 12.934 4.76042 13.0938C4.60069 13.2535 4.40278 13.3333 4.16667 13.3333V13.3333M10.8333 13.3333C10.5972 13.3333 10.3993 13.2535 10.2396 13.0938C10.0799 12.934 10 12.7361 10 12.5C10 12.2639 10.0799 12.066 10.2396 11.9062C10.3993 11.7465 10.5972 11.6667 10.8333 11.6667C11.0694 11.6667 11.2674 11.7465 11.4271 11.9062C11.5868 12.066 11.6667 12.2639 11.6667 12.5C11.6667 12.7361 11.5868 12.934 11.4271 13.0938C11.2674 13.2535 11.0694 13.3333 10.8333 13.3333V13.3333"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        3. Waktu, Rute &amp; Layanan Handover
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Durasi sewa dihitung otomatis secara prorata round-up
                        harian
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-start gap-4 w-full">
                  <div className="flex p-2 flex-col items-start gap-1.5 rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M9.7125 4.31667L10.15 3.87917L9.04167 2.8V1.16667H8.45833V3.03333L9.7125 4.31667V4.31667M1.42917 2.33333C1.63333 2.33333 2.00035 2.33333 2.53021 2.33333C3.06007 2.33333 3.78681 2.33333 4.71042 2.33333V2.33333V2.33333H1.42917V2.33333M2.33333 6.41667C2.0125 6.41667 1.73785 6.41667 1.50937 6.41667C1.2809 6.41667 1.16667 6.41667 1.16667 6.41667V6.41667H6.65V6.41667V6.41667V6.41667V6.41667V6.41667H2.33333V6.41667M1.16667 11.6667C1.00139 11.6667 0.862847 11.6108 0.751042 11.499C0.639236 11.3872 0.583333 11.2486 0.583333 11.0833V9.8875C0.388889 9.68333 0.243056 9.45729 0.145833 9.20938C0.0486111 8.96146 0 8.71111 0 8.45833V2.91667C0 2.05139 0.401042 1.44618 1.20312 1.10104C2.00521 0.755903 3.40764 0.583333 5.41042 0.583333C5.28403 0.758333 5.17465 0.943056 5.08229 1.1375C4.98993 1.33194 4.90972 1.53125 4.84167 1.73542C3.85 1.75486 3.08437 1.81319 2.54479 1.91042C2.00521 2.00764 1.63333 2.14861 1.42917 2.33333H4.71042C4.68125 2.52778 4.66667 2.72222 4.66667 2.91667C4.66667 3.11111 4.68125 3.30556 4.71042 3.5H1.16667V5.25H5.41042C5.57569 5.48333 5.76042 5.69965 5.96458 5.89896C6.16875 6.09826 6.39722 6.27083 6.65 6.41667H1.16667V8.16667C1.16667 8.4875 1.2809 8.76215 1.50937 8.99063C1.73785 9.2191 2.0125 9.33333 2.33333 9.33333H7C7.32083 9.33333 7.59549 9.2191 7.82396 8.99063C8.05243 8.76215 8.16667 8.4875 8.16667 8.16667V6.95625C8.36111 6.98542 8.55556 7 8.75 7C8.94444 7 9.13889 6.98542 9.33333 6.95625V8.45833C9.33333 8.71111 9.28472 8.96146 9.1875 9.20938C9.09028 9.45729 8.94444 9.68333 8.75 9.8875V11.0833C8.75 11.2486 8.6941 11.3872 8.58229 11.499C8.47049 11.6108 8.33194 11.6667 8.16667 11.6667H7.58333C7.41806 11.6667 7.27951 11.6108 7.16771 11.499C7.0559 11.3872 7 11.2486 7 11.0833V10.5H2.33333V11.0833C2.33333 11.2486 2.27743 11.3872 2.16563 11.499C2.05382 11.6108 1.91528 11.6667 1.75 11.6667H1.16667V11.6667M8.75 5.83333C7.94306 5.83333 7.25521 5.54896 6.68646 4.98021C6.11771 4.41146 5.83333 3.72361 5.83333 2.91667C5.83333 2.11944 6.11528 1.43403 6.67917 0.860417C7.24306 0.286806 7.93333 0 8.75 0C9.55694 0 10.2448 0.284375 10.8135 0.853125C11.3823 1.42188 11.6667 2.10972 11.6667 2.91667C11.6667 3.72361 11.3823 4.41146 10.8135 4.98021C10.2448 5.54896 9.55694 5.83333 8.75 5.83333V5.83333M2.625 8.75C2.86806 8.75 3.07465 8.66493 3.24479 8.49479C3.41493 8.32465 3.5 8.11806 3.5 7.875C3.5 7.63194 3.41493 7.42535 3.24479 7.25521C3.07465 7.08507 2.86806 7 2.625 7C2.38194 7 2.17535 7.08507 2.00521 7.25521C1.83507 7.42535 1.75 7.63194 1.75 7.875C1.75 8.11806 1.83507 8.32465 2.00521 8.49479C2.17535 8.66493 2.38194 8.75 2.625 8.75V8.75M6.70833 8.75C6.95139 8.75 7.15799 8.66493 7.32812 8.49479C7.49826 8.32465 7.58333 8.11806 7.58333 7.875C7.58333 7.63194 7.49826 7.42535 7.32812 7.25521C7.15799 7.08507 6.95139 7 6.70833 7C6.46528 7 6.25868 7.08507 6.08854 7.25521C5.9184 7.42535 5.83333 7.63194 5.83333 7.875C5.83333 8.11806 5.9184 8.32465 6.08854 8.49479C6.25868 8.66493 6.46528 8.75 6.70833 8.75V8.75"
                          fill="#005C55"
                        />
                      </svg>
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                        PENGAMBILAN &#40;HANDOVER OUT&#41;
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex justify-center items-start gap-2 w-full">
                        <div className="flex py-2 px-3 flex-col items-start rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                              18 Okt 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex py-2 px-3 flex-col items-start rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                              09:00 WIB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-start gap-1.5 rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M10.2083 9.625L9.39167 8.80833L10.0333 8.16667H5.71667C5.6 8.51667 5.39097 8.79861 5.08958 9.0125C4.78819 9.22639 4.45278 9.33333 4.08333 9.33333C3.71389 9.33333 3.3809 9.22639 3.08437 9.0125C2.78785 8.79861 2.57639 8.51667 2.45 8.16667H1.75C1.26389 8.16667 0.850694 7.99653 0.510417 7.65625C0.170139 7.31597 0 6.90278 0 6.41667V2.91667H3.5V1.16667H0V0H7.58333C7.90417 0 8.17882 0.114236 8.40729 0.342708C8.63576 0.571181 8.75 0.845833 8.75 1.16667V7H10.0042L9.39167 6.3875L10.2083 5.54167L12.25 7.58333L10.2083 9.625V9.625M4.66667 2.91667H7.58333V1.16667V1.16667V1.16667H4.66667V2.91667V2.91667M4.08333 8.16667C4.24861 8.16667 4.38715 8.11076 4.49896 7.99896C4.61076 7.88715 4.66667 7.74861 4.66667 7.58333C4.66667 7.41806 4.61076 7.27951 4.49896 7.16771C4.38715 7.0559 4.24861 7 4.08333 7C3.91806 7 3.77951 7.0559 3.66771 7.16771C3.5559 7.27951 3.5 7.41806 3.5 7.58333C3.5 7.74861 3.5559 7.88715 3.66771 7.99896C3.77951 8.11076 3.91806 8.16667 4.08333 8.16667V8.16667M2.45 7C2.57639 6.65 2.78785 6.36806 3.08437 6.15417C3.3809 5.94028 3.71389 5.83333 4.08333 5.83333C4.45278 5.83333 4.78819 5.94028 5.08958 6.15417C5.39097 6.36806 5.6 6.65 5.71667 7H7.58333V4.08333H1.16667V6.41667C1.16667 6.58194 1.22257 6.72049 1.33438 6.83229C1.44618 6.9441 1.58472 7 1.75 7H2.45V7M2.45 4.08333H1.75C1.58472 4.08333 1.44618 4.08333 1.33438 4.08333C1.22257 4.08333 1.16667 4.08333 1.16667 4.08333V4.08333H7.58333V4.08333H5.71667C5.6 4.08333 5.39097 4.08333 5.08958 4.08333C4.78819 4.08333 4.45278 4.08333 4.08333 4.08333C3.71389 4.08333 3.3809 4.08333 3.08437 4.08333C2.78785 4.08333 2.57639 4.08333 2.45 4.08333V4.08333"
                          fill="#47607E"
                        />
                      </svg>
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                        PENGEMBALIAN &#40;HANDOVER IN&#41;
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex justify-center items-start gap-2 w-full">
                        <div className="flex py-2 px-3 flex-col items-start rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                              21 Okt 2026
                            </p>
                          </div>
                        </div>
                        <div className="flex py-2 px-3 flex-col items-start rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                              18:00 WIB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex py-2.5 px-4 justify-between items-center rounded-lg bg-[#DDEAF2] w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Kalkulasi Durasi:
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                      3 Hari 9 Jam &#40;Dihitung 4 Hari Rental&#41;
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-start gap-4 w-full">
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Titik Lokasi Pengambilan &amp; Antar
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-10 pb-2.5 pl-4 justify-center items-center rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                            Antar ke Bandara Juanda T2 &#40;+Rp 75.000&#41;
                          </p>
                        </div>
                      </div>
                      <div className="flex pr-3 items-center absolute right-0 w-fit h-[38px]">
                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5 6.16667L0 1.16667L1.16667 0L5 3.83333L8.83333 0L10 1.16667L5 6.16667V6.16667"
                            fill="#47607E"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="flex pb-0.5 flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Opsi Layanan Kemudi
                      </p>
                    </div>
                    <div className="flex items-start gap-2 w-full">
                      <button className="cursor-pointer text-nowrap flex pt-2.5 pr-[13px] pb-2.5 pl-[13px] justify-center items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <svg
                          width="16"
                          height="8"
                          viewBox="0 0 16 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M4 5.33333C3.63333 5.33333 3.31944 5.20278 3.05833 4.94167C2.79722 4.68056 2.66667 4.36667 2.66667 4C2.66667 3.63333 2.79722 3.31944 3.05833 3.05833C3.31944 2.79722 3.63333 2.66667 4 2.66667C4.36667 2.66667 4.68056 2.79722 4.94167 3.05833C5.20278 3.31944 5.33333 3.63333 5.33333 4C5.33333 4.36667 5.20278 4.68056 4.94167 4.94167C4.68056 5.20278 4.36667 5.33333 4 5.33333V5.33333M4 8C2.88889 8 1.94444 7.61111 1.16667 6.83333C0.388889 6.05556 0 5.11111 0 4C0 2.88889 0.388889 1.94444 1.16667 1.16667C1.94444 0.388889 2.88889 0 4 0C4.74444 0 5.41944 0.183333 6.025 0.55C6.63056 0.916667 7.11111 1.4 7.46667 2H13.3333L15.3333 4L12.3333 7L11 6L9.66667 7L8.25 6H7.46667C7.11111 6.6 6.63056 7.08333 6.025 7.45C5.41944 7.81667 4.74444 8 4 8V8M4 6.66667C4.62222 6.66667 5.16944 6.47778 5.64167 6.1C6.11389 5.72222 6.42778 5.24444 6.58333 4.66667H8.66667L9.63333 5.35L11 4.33333L12.1833 5.25L13.4333 4L12.7667 3.33333H6.58333C6.42778 2.75556 6.11389 2.27778 5.64167 1.9C5.16944 1.52222 4.62222 1.33333 4 1.33333C3.26667 1.33333 2.63889 1.59444 2.11667 2.11667C1.59444 2.63889 1.33333 3.26667 1.33333 4C1.33333 4.73333 1.59444 5.36111 2.11667 5.88333C2.63889 6.40556 3.26667 6.66667 4 6.66667V6.66667"
                            fill="white"
                          />
                        </svg>
                        <p className="text-[#FFF] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                          Lepas Kunci
                        </p>
                      </button>
                      <button className="cursor-pointer text-nowrap flex pt-2.5 pr-7 pb-2.5 pl-7 justify-center items-center gap-1.5 rounded-lg bg-[#E9F6FD] w-fit">
                        <svg
                          width="8"
                          height="14"
                          viewBox="0 0 8 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M6 12H1.33333C0.966667 12 0.652778 11.8694 0.391667 11.6083C0.130556 11.3472 0 11.0333 0 10.6667V3.33333H1.33333V10.6667V10.6667V10.6667H6V12V12M3.66667 2.66667C3.3 2.66667 2.98611 2.53611 2.725 2.275C2.46389 2.01389 2.33333 1.7 2.33333 1.33333C2.33333 0.966667 2.46389 0.652778 2.725 0.391667C2.98611 0.130556 3.3 0 3.66667 0C4.03333 0 4.34722 0.130556 4.60833 0.391667C4.86944 0.652778 5 0.966667 5 1.33333C5 1.7 4.86944 2.01389 4.60833 2.275C4.34722 2.53611 4.03333 2.66667 3.66667 2.66667V2.66667M6.66667 13.3333V10H3.33333C2.96667 10 2.65278 9.86944 2.39167 9.60833C2.13056 9.34722 2 9.03333 2 8.66667V5C2 4.53333 2.16111 4.13889 2.48333 3.81667C2.80556 3.49444 3.2 3.33333 3.66667 3.33333C4.13333 3.33333 4.52778 3.49444 4.85 3.81667C5.17222 4.13889 5.33333 4.53333 5.33333 5V8H6.66667C7.03333 8 7.34722 8.13056 7.60833 8.39167C7.86944 8.65278 8 8.96667 8 9.33333V13.3333H6.66667V13.3333"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                          + Supir
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 items-center gap-2 w-full">
                  <div className="flex justify-center items-center rounded-lg bg-[#E9F6FD] w-8 h-8">
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M10.8333 7.5C10.1389 7.5 9.54861 7.25694 9.0625 6.77083C8.57639 6.28472 8.33333 5.69444 8.33333 5C8.33333 4.30556 8.57639 3.71528 9.0625 3.22917C9.54861 2.74306 10.1389 2.5 10.8333 2.5C11.5278 2.5 12.1181 2.74306 12.6042 3.22917C13.0903 3.71528 13.3333 4.30556 13.3333 5C13.3333 5.69444 13.0903 6.28472 12.6042 6.77083C12.1181 7.25694 11.5278 7.5 10.8333 7.5V7.5M5 10C4.54167 10 4.14931 9.83681 3.82292 9.51042C3.49653 9.18403 3.33333 8.79167 3.33333 8.33333V1.66667C3.33333 1.20833 3.49653 0.815972 3.82292 0.489583C4.14931 0.163194 4.54167 0 5 0H16.6667C17.125 0 17.5174 0.163194 17.8438 0.489583C18.1701 0.815972 18.3333 1.20833 18.3333 1.66667V8.33333C18.3333 8.79167 18.1701 9.18403 17.8438 9.51042C17.5174 9.83681 17.125 10 16.6667 10H5V10M6.66667 8.33333H15C15 7.875 15.1632 7.48264 15.4896 7.15625C15.816 6.82986 16.2083 6.66667 16.6667 6.66667V3.33333C16.2083 3.33333 15.816 3.17014 15.4896 2.84375C15.1632 2.51736 15 2.125 15 1.66667H6.66667C6.66667 2.125 6.50347 2.51736 6.17708 2.84375C5.85069 3.17014 5.45833 3.33333 5 3.33333V6.66667C5.45833 6.66667 5.85069 6.82986 6.17708 7.15625C6.50347 7.48264 6.66667 7.875 6.66667 8.33333V8.33333M15.8333 13.3333H1.66667C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V2.5H1.66667V11.6667V11.6667V11.6667H15.8333V13.3333V13.3333M5 8.33333V8.33333V8.33333V8.33333V1.66667V1.66667V1.66667V1.66667V1.66667V1.66667V8.33333V8.33333V8.33333V8.33333"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        4. Rincian Biaya &amp; Uang Muka &#40;DP&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Struktur penagihan invoice otomatis dan pelunasan di
                        lokasi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 flex-col items-start gap-2.5 rounded-xl bg-[#E9F6FD] w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Tarif Sewa Harian &#40;Rp 450.000 x 4 hari&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                        Rp 1.800.000
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Biaya Pengantaran &#x2F; Penjemputan
                    </p>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                        Rp 75.000
                      </p>
                    </div>
                  </div>
                  <svg
                    width="468"
                    height="9"
                    viewBox="0 0 468 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex py-1 px-0 flex-col items-start w-full h-[9px] "
                  >
                    <rect y="4" width="467.667" height="1" fill="#D7E4EC" />
                  </svg>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                        Total Keseluruhan
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-xl font-semibold leading-[26px] w-fit tracking-[-0.01em]">
                        Rp 1.875.000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-1 justify-center items-start gap-4 w-full">
                  <div className="flex pb-7 flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Nominal Uang Muka &#40;DP&#41; Diterima *
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full relative">
                      <div className="flex pt-2.5 pr-4 pb-2.5 pl-10 justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="flex flex-col items-start w-full">
                            <div className="flex flex-col items-start w-full overflow-hidden">
                              <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                                500000
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex pl-3 items-center absolute w-fit h-9">
                        <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          Rp
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Minimal DP 25% dari total sewa
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                        Sisa Pelunasan Handover
                      </p>
                    </div>
                    <div className="flex pt-2.5 pr-4 pb-2.5 pl-4 justify-between items-center rounded-lg bg-[#DDEAF2] w-full">
                      <div className="flex pr-5 flex-col items-start w-fit">
                        <p className="text-[#BA1A1A] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                          Rp 1.375.000
                        </p>
                      </div>
                      <div className="flex pr-[39px] flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] leading-[14px] w-fit tracking-[0.05em]">
                          SAAT SERAH TERIMA
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Pelunasan via QRIS &#x2F; Tunai di Pool
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-full">
                      Status Pembayaran Saat Ini
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full relative">
                    <div className="flex pt-2.5 pr-10 pb-2.5 pl-4 justify-center items-center rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                          Uang Muka Diterima &#40;DP Terverifikasi&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex pr-3 items-center absolute right-0 w-fit h-[38px]">
                      <svg
                        width="10"
                        height="7"
                        viewBox="0 0 10 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5 6.16667L0 1.16667L1.16667 0L5 3.83333L8.83333 0L10 1.16667L5 6.16667V6.16667"
                          fill="#47607E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 items-center gap-2 w-full">
                  <div className="flex justify-center items-center rounded-lg bg-[#E9F6FD] w-8 h-8">
                    <svg
                      width="15"
                      height="17"
                      viewBox="0 0 15 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M3.33333 13.3333H5.08333L10.0833 8.375L8.29167 6.58333L3.33333 11.5417V13.3333V13.3333M10.6667 7.79167L11.5417 6.875C11.625 6.79167 11.6667 6.69444 11.6667 6.58333C11.6667 6.47222 11.625 6.375 11.5417 6.29167L10.375 5.125C10.2917 5.04167 10.1944 5 10.0833 5C9.97222 5 9.875 5.04167 9.79167 5.125L8.875 6L10.6667 7.79167V7.79167M1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V3.33333C0 2.875 0.163194 2.48264 0.489583 2.15625C0.815972 1.82986 1.20833 1.66667 1.66667 1.66667H5.16667C5.34722 1.16667 5.64931 0.763889 6.07292 0.458333C6.49653 0.152778 6.97222 0 7.5 0C8.02778 0 8.50347 0.152778 8.92708 0.458333C9.35069 0.763889 9.65278 1.16667 9.83333 1.66667H13.3333C13.7917 1.66667 14.184 1.82986 14.5104 2.15625C14.8368 2.48264 15 2.875 15 3.33333V15C15 15.4583 14.8368 15.8507 14.5104 16.1771C14.184 16.5035 13.7917 16.6667 13.3333 16.6667H1.66667V16.6667M1.66667 15H13.3333V15V15V3.33333V3.33333V3.33333H1.66667V3.33333V3.33333V15V15V15V15M7.5 2.70833C7.68056 2.70833 7.82986 2.64931 7.94792 2.53125C8.06597 2.41319 8.125 2.26389 8.125 2.08333C8.125 1.90278 8.06597 1.75347 7.94792 1.63542C7.82986 1.51736 7.68056 1.45833 7.5 1.45833C7.31944 1.45833 7.17014 1.51736 7.05208 1.63542C6.93403 1.75347 6.875 1.90278 6.875 2.08333C6.875 2.26389 6.93403 2.41319 7.05208 2.53125C7.17014 2.64931 7.31944 2.70833 7.5 2.70833V2.70833M1.66667 15V15V15V3.33333V3.33333V3.33333V3.33333V3.33333V3.33333V15V15V15V15V15"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        5. Catatan Tambahan &amp; Permintaan Khusus
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Instruksi checklist kebersihan, aksesoris, atau catatan
                        pengemudi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-4 pr-4 pb-[34px] pl-4 flex-col items-start rounded-lg bg-[#E9F6FD] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                      Pelanggan meminta baby car seat tambahan dan unit
                      disinfeksi bersih sebelum jam 09:00.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-wrap items-center justify-between gap-3 pt-2 pb-8">
                <div className="flex items-center gap-2 w-fit">
                  <button className="cursor-pointer text-nowrap flex py-2.5 px-5 flex-col justify-center items-center rounded-lg bg-[#DDEAF2] w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Batal
                    </p>
                  </button>
                  <button className="cursor-pointer text-nowrap flex py-2.5 px-5 flex-col justify-center items-center rounded-lg bg-[#E9F6FD] w-fit">
                    <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Simpan Sebagai Draf
                    </p>
                  </button>
                </div>
                <div className="relative flex items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-7 py-3">
                  <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)]"></div>
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-center w-fit "
                  >
                    <path
                      d="M7.16667 12.1667L13.0417 6.29167L11.875 5.125L7.16667 9.83333L4.79167 7.45833L3.625 8.625L7.16667 12.1667V12.1667M8.33333 16.6667C7.18056 16.6667 6.09722 16.4479 5.08333 16.0104C4.06944 15.5729 3.1875 14.9792 2.4375 14.2292C1.6875 13.4792 1.09375 12.5972 0.65625 11.5833C0.21875 10.5694 0 9.48611 0 8.33333C0 7.18056 0.21875 6.09722 0.65625 5.08333C1.09375 4.06944 1.6875 3.1875 2.4375 2.4375C3.1875 1.6875 4.06944 1.09375 5.08333 0.65625C6.09722 0.21875 7.18056 0 8.33333 0C9.48611 0 10.5694 0.21875 11.5833 0.65625C12.5972 1.09375 13.4792 1.6875 14.2292 2.4375C14.9792 3.1875 15.5729 4.06944 16.0104 5.08333C16.4479 6.09722 16.6667 7.18056 16.6667 8.33333C16.6667 9.48611 16.4479 10.5694 16.0104 11.5833C15.5729 12.5972 14.9792 13.4792 14.2292 14.2292C13.4792 14.9792 12.5972 15.5729 11.5833 16.0104C10.5694 16.4479 9.48611 16.6667 8.33333 16.6667V16.6667M8.33333 15C10.1944 15 11.7708 14.3542 13.0625 13.0625C14.3542 11.7708 15 10.1944 15 8.33333C15 6.47222 14.3542 4.89583 13.0625 3.60417C11.7708 2.3125 10.1944 1.66667 8.33333 1.66667C6.47222 1.66667 4.89583 2.3125 3.60417 3.60417C2.3125 4.89583 1.66667 6.47222 1.66667 8.33333C1.66667 10.1944 2.3125 11.7708 3.60417 13.0625C4.89583 14.3542 6.47222 15 8.33333 15V15M8.33333 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333"
                      fill="white"
                    />
                  </svg>
                  <div className="flex flex-col items-center w-fit">
                    <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Simpan Pemesanan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-start gap-6 w-full">
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.05em]">
                      UNIT PILIHAN TERVERIFIKASI
                    </p>
                  </div>
                  <div className="flex py-0.5 px-2.5 items-center gap-1 rounded-full bg-[#9CF2E8] w-fit">
                    <div className="rounded-full bg-[#005C55] w-1.5 h-1.5"></div>
                    <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                      Siap Handover
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start rounded-lg bg-[#E9F6FD] shadow-[02px4px0rgba(0,0,0,0.05)inset] w-full h-44 overflow-hidden relative">
                  <img
                    src="/Ab6axudl4la7o5_dm7jocst5kxevhpdguuwjamzoyhcbsf3edvaqri8j4y1fb4pu9la0gerjkxwc_giiwgx8m0is1afawtkf0kq1brctniylqihkedchek_i3tj_cacwzd2omameurhmgrkxqtnxdrnplpc7daw4ud6vpkqp8t01uohevnxj1ojmapenh_echeciwvuej4yfpc3e0icvqrn564er8_knk5nmlmvynk4ugn8qq1pl3_g.png"
                    className="w-full h-full overflow-hidden max-w-none"
                    alt="AB6AXuDl4La7o5_-dM7jOcSt5KXEvHPdGuuWjaMzoyHCBsf3eDVaQRI8j4Y1fB4Pu9LA0GerJkXwc_GiIWGX8M0IS1aFAw-t-KF0KQ1BrcTNIyLqihkEDchEk_i3-TJ_caCWZd2OMAmEurhMGRKXQ-tnXdrNpLpC7daw4uD6VPkqP8t01uOHEVnxJ1ojmaPENh_EChEcIwvUej4yfPC3e0Ic-VqrN564ER8_kNK-5nmlMvyNk4UgN8Qq1pL3_g"
                  />
                  <div className="flex py-1 px-2.5 flex-col items-start absolute left-2 bottom-2 rounded bg-[rgba(38,50,56,0.85)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <p className="text-[#FFF] font-plusJakartaSans text-xs font-bold leading-4 w-fit tracking-[0.1em]">
                      L 1234 AB
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#111D23] font-plusJakartaSans text-base font-bold leading-[22px] w-full">
                      Toyota Avanza 1.3 G M&#x2F;T
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                      Tahun 2023 • Silver Metalik • 7 Kursi Penumpang
                    </p>
                  </div>
                </div>
                <div className="flex pt-1 justify-center items-start gap-2 border-t border-t-[#E9F6FD] w-full">
                  <div className="flex p-2 flex-col items-center rounded-lg bg-[#E9F6FD] w-full">
                    <svg
                      width="15"
                      height="12"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M6.3375 8.625C6.6375 8.925 7.025 9.07188 7.5 9.06563C7.975 9.05937 8.325 8.8875 8.55 8.55L12.75 2.25L6.45 6.45C6.1125 6.675 5.93438 7.01875 5.91563 7.48125C5.89687 7.94375 6.0375 8.325 6.3375 8.625V8.625M7.5 0C8.2375 0 8.94688 0.103125 9.62813 0.309375C10.3094 0.515625 10.95 0.825 11.55 1.2375L10.125 2.1375C9.7125 1.925 9.28438 1.76562 8.84062 1.65937C8.39687 1.55312 7.95 1.5 7.5 1.5C5.8375 1.5 4.42188 2.08437 3.25312 3.25312C2.08437 4.42188 1.5 5.8375 1.5 7.5C1.5 8.025 1.57188 8.54375 1.71563 9.05625C1.85938 9.56875 2.0625 10.05 2.325 10.5H12.675C12.9625 10.025 13.1719 9.53125 13.3031 9.01875C13.4344 8.50625 13.5 7.975 13.5 7.425C13.5 6.975 13.4469 6.5375 13.3406 6.1125C13.2344 5.6875 13.075 5.275 12.8625 4.875L13.7625 3.45C14.1375 4.0375 14.4344 4.6625 14.6531 5.325C14.8719 5.9875 14.9875 6.675 15 7.3875C15.0125 8.1 14.9313 8.78125 14.7563 9.43125C14.5813 10.0812 14.325 10.7 13.9875 11.2875C13.85 11.5125 13.6625 11.6875 13.425 11.8125C13.1875 11.9375 12.9375 12 12.675 12H2.325C2.0625 12 1.8125 11.9375 1.575 11.8125C1.3375 11.6875 1.15 11.5125 1.0125 11.2875C0.6875 10.725 0.4375 10.1281 0.2625 9.49687C0.0875 8.86562 0 8.2 0 7.5C0 6.4625 0.196875 5.49062 0.590625 4.58437C0.984375 3.67812 1.52188 2.88438 2.20312 2.20312C2.88438 1.52188 3.68125 0.984375 4.59375 0.590625C5.50625 0.196875 6.475 0 7.5 0V0M7.63125 5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875V5.86875"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pt-1 flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Odometer
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                        42.180 km
                      </p>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-center rounded-lg bg-[#E9F6FD] w-full">
                    <svg
                      width="13"
                      height="14"
                      viewBox="0 0 13 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M0 13.5V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H6C6.4125 0 6.76562 0.146875 7.05937 0.440625C7.35312 0.734375 7.5 1.0875 7.5 1.5V6.75H8.25C8.6625 6.75 9.01562 6.89688 9.30937 7.19063C9.60312 7.48438 9.75 7.8375 9.75 8.25V11.625C9.75 11.8375 9.82187 12.0156 9.96562 12.1594C10.1094 12.3031 10.2875 12.375 10.5 12.375C10.7125 12.375 10.8906 12.3031 11.0344 12.1594C11.1781 12.0156 11.25 11.8375 11.25 11.625V6.225C11.1375 6.2875 11.0188 6.32812 10.8938 6.34688C10.7688 6.36563 10.6375 6.375 10.5 6.375C9.975 6.375 9.53125 6.19375 9.16875 5.83125C8.80625 5.46875 8.625 5.025 8.625 4.5C8.625 4.1 8.73438 3.74062 8.95312 3.42188C9.17188 3.10313 9.4625 2.875 9.825 2.7375L8.25 1.1625L9.0375 0.375L11.8125 3.075C12 3.2625 12.1406 3.48125 12.2344 3.73125C12.3281 3.98125 12.375 4.2375 12.375 4.5V11.625C12.375 12.15 12.1938 12.5938 11.8313 12.9563C11.4688 13.3188 11.025 13.5 10.5 13.5C9.975 13.5 9.53125 13.3188 9.16875 12.9563C8.80625 12.5938 8.625 12.15 8.625 11.625V7.875V7.875V7.875H7.5V13.5H0V13.5M1.5 5.25H6V1.5V1.5V1.5H1.5V1.5V1.5V5.25V5.25M10.5 5.25C10.7125 5.25 10.8906 5.17813 11.0344 5.03438C11.1781 4.89062 11.25 4.7125 11.25 4.5C11.25 4.2875 11.1781 4.10938 11.0344 3.96563C10.8906 3.82188 10.7125 3.75 10.5 3.75C10.2875 3.75 10.1094 3.82188 9.96562 3.96563C9.82187 4.10938 9.75 4.2875 9.75 4.5C9.75 4.7125 9.82187 4.89062 9.96562 5.03438C10.1094 5.17813 10.2875 5.25 10.5 5.25V5.25M1.5 12H6V6.75H1.5V12V12M6 12H1.5V12H6V12V12"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pt-1 flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        BBM Tangki
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                        88% &#40;Penuh&#41;
                      </p>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-center rounded-lg bg-[#E9F6FD] w-full">
                    <svg
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.875 10.125H7.125V8.25H9V6H7.125V4.125H4.875V6H3V8.25H4.875V10.125V10.125M6 15C4.2625 14.5625 2.82812 13.5656 1.69687 12.0094C0.565625 10.4531 0 8.725 0 6.825V2.25L6 0L12 2.25V6.825C12 8.725 11.4344 10.4531 10.3031 12.0094C9.17188 13.5656 7.7375 14.5625 6 15V15M6 13.425C7.3 13.0125 8.375 12.1875 9.225 10.95C10.075 9.7125 10.5 8.3375 10.5 6.825V3.28125L6 1.59375L1.5 3.28125V6.825C1.5 8.3375 1.925 9.7125 2.775 10.95C3.625 12.1875 4.7 13.0125 6 13.425V13.425M6 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pt-1 flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Kondisi Fisik
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                        Sangat Baik
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1.5 w-fit">
                    <svg
                      width="19"
                      height="10"
                      viewBox="0 0 19 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M1.66667 10C1.20833 10 0.815972 9.83681 0.489583 9.51042C0.163194 9.18403 0 8.79167 0 8.33333C0 7.875 0.163194 7.48264 0.489583 7.15625C0.815972 6.82986 1.20833 6.66667 1.66667 6.66667C1.75 6.66667 1.82292 6.66667 1.88542 6.66667C1.94792 6.66667 2.01389 6.68056 2.08333 6.70833L5.875 2.91667C5.84722 2.84722 5.83333 2.78125 5.83333 2.71875C5.83333 2.65625 5.83333 2.58333 5.83333 2.5C5.83333 2.04167 5.99653 1.64931 6.32292 1.32292C6.64931 0.996528 7.04167 0.833333 7.5 0.833333C7.95833 0.833333 8.35069 0.996528 8.67708 1.32292C9.00347 1.64931 9.16667 2.04167 9.16667 2.5C9.16667 2.52778 9.15278 2.66667 9.125 2.91667L11.25 5.04167C11.3194 5.01389 11.3854 5 11.4479 5C11.5104 5 11.5833 5 11.6667 5C11.75 5 11.8229 5 11.8854 5C11.9479 5 12.0139 5.01389 12.0833 5.04167L15.0417 2.08333C15.0139 2.01389 15 1.94792 15 1.88542C15 1.82292 15 1.75 15 1.66667C15 1.20833 15.1632 0.815972 15.4896 0.489583C15.816 0.163194 16.2083 0 16.6667 0C17.125 0 17.5174 0.163194 17.8438 0.489583C18.1701 0.815972 18.3333 1.20833 18.3333 1.66667C18.3333 2.125 18.1701 2.51736 17.8438 2.84375C17.5174 3.17014 17.125 3.33333 16.6667 3.33333C16.5833 3.33333 16.5104 3.33333 16.4479 3.33333C16.3854 3.33333 16.3194 3.31944 16.25 3.29167L13.2917 6.25C13.3194 6.31944 13.3333 6.38542 13.3333 6.44792C13.3333 6.51042 13.3333 6.58333 13.3333 6.66667C13.3333 7.125 13.1701 7.51736 12.8438 7.84375C12.5174 8.17014 12.125 8.33333 11.6667 8.33333C11.2083 8.33333 10.816 8.17014 10.4896 7.84375C10.1632 7.51736 10 7.125 10 6.66667C10 6.58333 10 6.51042 10 6.44792C10 6.38542 10.0139 6.31944 10.0417 6.25L7.91667 4.125C7.84722 4.15278 7.78125 4.16667 7.71875 4.16667C7.65625 4.16667 7.58333 4.16667 7.5 4.16667C7.47222 4.16667 7.33333 4.15278 7.08333 4.125L3.29167 7.91667C3.31944 7.98611 3.33333 8.05208 3.33333 8.11458C3.33333 8.17708 3.33333 8.25 3.33333 8.33333C3.33333 8.79167 3.17014 9.18403 2.84375 9.51042C2.51736 9.83681 2.125 10 1.66667 10V10"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Validasi Jadwal Unit &#40;L 1234 AB&#41;
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Okt 2026
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                    Visualisasi slot sewa sebelum &amp; sesudah untuk memastikan
                    buffer waktu pencucian 3 jam terpenuhi.
                  </p>
                </div>
                <div className="flex pt-1 flex-col items-start gap-2 w-full">
                  <div className="flex justify-center items-start gap-1 w-full">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        16 Okt
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        17 Okt
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        18 Okt
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        19 Okt
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                        20-21
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        22 Okt
                      </p>
                    </div>
                  </div>
                  <div className="grid p-1 rounded-lg bg-[#E9F6FD] w-full h-9">
                    <div className="flex justify-center items-center rounded bg-[#DDEAF2] w-full h-full">
                      <div className="flex py-0 px-1 flex-col items-start w-fit overflow-hidden">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Sewa #910 &#40;Selesai&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center rounded bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full">
                      <div className="flex py-0 px-1 items-center gap-1 w-fit overflow-hidden">
                        <svg
                          width="9"
                          height="12"
                          viewBox="0 0 9 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.08333 11.375C0.785417 11.375 0.530382 11.2689 0.318229 11.0568C0.106076 10.8446 0 10.5896 0 10.2917V4.875C0 4.57708 0.106076 4.32205 0.318229 4.1099C0.530382 3.89774 0.785417 3.79167 1.08333 3.79167H1.625V2.70833C1.625 1.95903 1.88906 1.32031 2.41719 0.792188C2.94531 0.264063 3.58403 0 4.33333 0C5.08264 0 5.72135 0.264063 6.24948 0.792188C6.7776 1.32031 7.04167 1.95903 7.04167 2.70833V3.79167H7.58333C7.88125 3.79167 8.13628 3.89774 8.34844 4.1099C8.56059 4.32205 8.66667 4.57708 8.66667 4.875V10.2917C8.66667 10.5896 8.56059 10.8446 8.34844 11.0568C8.13628 11.2689 7.88125 11.375 7.58333 11.375H1.08333V11.375M1.08333 10.2917H7.58333V10.2917V10.2917V4.875V4.875V4.875H1.08333V4.875V4.875V10.2917V10.2917V10.2917V10.2917M4.33333 8.66667C4.63125 8.66667 4.88628 8.56059 5.09844 8.34844C5.31059 8.13628 5.41667 7.88125 5.41667 7.58333C5.41667 7.28542 5.31059 7.03038 5.09844 6.81823C4.88628 6.60608 4.63125 6.5 4.33333 6.5C4.03542 6.5 3.78038 6.60608 3.56823 6.81823C3.35608 7.03038 3.25 7.28542 3.25 7.58333C3.25 7.88125 3.35608 8.13628 3.56823 8.34844C3.78038 8.56059 4.03542 8.66667 4.33333 8.66667V8.66667M2.70833 3.79167H5.95833V2.70833C5.95833 2.25694 5.80035 1.87326 5.48438 1.55729C5.1684 1.24132 4.78472 1.08333 4.33333 1.08333C3.88194 1.08333 3.49826 1.24132 3.18229 1.55729C2.86632 1.87326 2.70833 2.25694 2.70833 2.70833V3.79167V3.79167M1.08333 10.2917V10.2917V10.2917V4.875V4.875V4.875V4.875V4.875V4.875V10.2917V10.2917V10.2917V10.2917V10.2917"
                            fill="white"
                          />
                        </svg>
                        <p className="text-[#FFF] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                          Pemesanan Baru
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center rounded bg-[rgba(156,242,232,0.40)] w-full h-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Kosong
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-1 items-center gap-1.5 w-full">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M8.3125 9.1875L9.1875 8.3125L6.875 6V3.125H5.625V6.5L8.3125 9.1875V9.1875M6.25 12.5C5.38542 12.5 4.57292 12.3359 3.8125 12.0078C3.05208 11.6797 2.39062 11.2344 1.82812 10.6719C1.26562 10.1094 0.820312 9.44792 0.492188 8.6875C0.164062 7.92708 0 7.11458 0 6.25C0 5.38542 0.164062 4.57292 0.492188 3.8125C0.820312 3.05208 1.26562 2.39062 1.82812 1.82812C2.39062 1.26562 3.05208 0.820312 3.8125 0.492188C4.57292 0.164062 5.38542 0 6.25 0C7.11458 0 7.92708 0.164062 8.6875 0.492188C9.44792 0.820312 10.1094 1.26562 10.6719 1.82812C11.2344 2.39062 11.6797 3.05208 12.0078 3.8125C12.3359 4.57292 12.5 5.38542 12.5 6.25C12.5 7.11458 12.3359 7.92708 12.0078 8.6875C11.6797 9.44792 11.2344 10.1094 10.6719 10.6719C10.1094 11.2344 9.44792 11.6797 8.6875 12.0078C7.92708 12.3359 7.11458 12.5 6.25 12.5V12.5M6.25 6.25V6.25V6.25V6.25V6.25V6.25V6.25V6.25V6.25V6.25M6.25 11.25C7.63542 11.25 8.8151 10.763 9.78906 9.78906C10.763 8.8151 11.25 7.63542 11.25 6.25C11.25 4.86458 10.763 3.6849 9.78906 2.71094C8.8151 1.73698 7.63542 1.25 6.25 1.25C4.86458 1.25 3.6849 1.73698 2.71094 2.71094C1.73698 3.6849 1.25 4.86458 1.25 6.25C1.25 7.63542 1.73698 8.8151 2.71094 9.78906C3.6849 10.763 4.86458 11.25 6.25 11.25V11.25"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex pr-1 flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Buffer waktu 18 jam tersedia antara sewa sebelumnya dan
                        sewa ini.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex pb-1 justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Pratinjau Tagihan &amp; Faktur
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-liberationMono text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      INV-PREVIEW-202610
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2.5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Darmawan Santoso
                      </p>
                    </div>
                    <div className="flex py-0.5 px-2 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Pribadi
                      </p>
                    </div>
                  </div>
                  <svg
                    width="337"
                    height="9"
                    viewBox="0 0 337 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex py-1 px-0 flex-col items-start w-full h-[9px] "
                  >
                    <rect y="4" width="336.333" height="1" fill="#E9F6FD" />
                  </svg>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Sewa Avanza G &#40;4 Hari&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 1.800.000
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                        Antar: Juanda Terminal 2
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-medium leading-[18px] w-fit">
                        Rp 75.000
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-1 justify-between items-center w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                        Subtotal Keseluruhan
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-bold leading-[18px] w-fit">
                        Rp 1.875.000
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-2 pl-2 justify-between items-center rounded-lg bg-[rgba(156,242,232,0.20)] w-full">
                    <div className="flex items-center gap-1 w-fit">
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
                          fill="#005C55"
                        />
                      </svg>
                      <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        DP Diterima
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                        Rp 500.000
                      </p>
                    </div>
                  </div>
                  <div className="flex p-2 justify-between items-center rounded-lg bg-[#DDEAF2] w-full">
                    <div className="flex items-center gap-1 w-fit">
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
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        Sisa Tagihan Handover
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#BA1A1A] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                        Rp 1.375.000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-2 flex-col items-start w-full">
                  <div className="flex p-4 items-start gap-2 rounded-xl bg-[#DDEAF2] w-full">
                    <svg
                      width="15"
                      height="21"
                      viewBox="0 0 15 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex pt-0.5 flex-col items-start w-fit "
                    >
                      <path
                        d="M6.37083 14.4208L11.55 9.24167L10.2437 7.93542L6.37083 11.8083L4.44583 9.88333L3.13958 11.1896L6.37083 14.4208V14.4208M7.33333 20.3333C5.20972 19.7986 3.4566 18.5802 2.07396 16.6781C0.691319 14.776 0 12.6639 0 10.3417V4.75L7.33333 2L14.6667 4.75V10.3417C14.6667 12.6639 13.9753 14.776 12.5927 16.6781C11.2101 18.5802 9.45694 19.7986 7.33333 20.3333V20.3333M7.33333 18.4083C8.92222 17.9042 10.2361 16.8958 11.275 15.3833C12.3139 13.8708 12.8333 12.1903 12.8333 10.3417V6.01042L7.33333 3.94792L1.83333 6.01042V10.3417C1.83333 12.1903 2.35278 13.8708 3.39167 15.3833C4.43056 16.8958 5.74444 17.9042 7.33333 18.4083V18.4083M7.33333 11.1667V11.1667V11.1667V11.1667V11.1667V11.1667V11.1667V11.1667V11.1667V11.1667"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          Garansi Jadwal Terkunci
                        </p>
                      </div>
                      <div className="flex pt-0.5 flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[15.13px] w-fit tracking-[0.02em]">
                          Sistem Jagaroda secara cerdas mengunci unit ini saat
                          formulir disimpan, memitigasi kemungkinan bentrok
                          alokasi secara 100% otomatis.
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
                <g filter="url(#filter0_d_156_1581)">
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
                    id="filter0_d_156_1581"
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
                      result="effect1_dropShadow_156_1581"
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
                      result="effect1_dropShadow_156_1581"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_156_1581"
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
            <div className="flex py-2 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
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
            </div>
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