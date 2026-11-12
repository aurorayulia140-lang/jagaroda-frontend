import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <div className="flex min-h-screen w-full flex-col items-start bg-[#F5F7FA] pt-16">
      <div className="flex max-w-[1280px] p-8 flex-col items-start gap-5 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col items-start gap-2.5 w-fit">
            <Link to="/kendaraan" className="flex items-center gap-1 w-fit">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M2.86875 6.75L7.06875 10.95L6 12L0 6L6 0L7.06875 1.05L2.86875 5.25H12V6.75H2.86875V6.75"
                  fill="#0F766E"
                />
              </svg>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#0F766E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Kembali ke daftar kendaraan
                </p>
              </div>
            </Link>
            <div className="flex pt-1 items-center gap-2 w-fit">
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#263238] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.025em]">
                  Detail Kendaraan - Toyota Avanza 1.3 G
                </p>
              </div>
              <div className="flex py-0.5 px-2.5 items-center rounded-full bg-[#DCFCE7] w-fit">
                <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                  Unit Aktif
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-fit">
            <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col justify-center items-center rounded-lg bg-[#E3F0F8] w-fit">
              <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center items-start w-fit "
              >
                <path
                  d="M11.6667 4.16667V1.66667H5V4.16667H3.33333V0H13.3333V4.16667H11.6667V4.16667M1.66667 5.83333V5.83333C1.66667 5.83333 1.74653 5.83333 1.90625 5.83333C2.06597 5.83333 2.26389 5.83333 2.5 5.83333H14.1667C14.4028 5.83333 14.6007 5.83333 14.7604 5.83333C14.9201 5.83333 15 5.83333 15 5.83333V5.83333H13.3333V5.83333H3.33333V5.83333H1.66667V5.83333M13.3333 7.91667C13.5694 7.91667 13.7674 7.83681 13.9271 7.67708C14.0868 7.51736 14.1667 7.31944 14.1667 7.08333C14.1667 6.84722 14.0868 6.64931 13.9271 6.48958C13.7674 6.32986 13.5694 6.25 13.3333 6.25C13.0972 6.25 12.8993 6.32986 12.7396 6.48958C12.5799 6.64931 12.5 6.84722 12.5 7.08333C12.5 7.31944 12.5799 7.51736 12.7396 7.67708C12.8993 7.83681 13.0972 7.91667 13.3333 7.91667V7.91667M11.6667 13.3333V10H5V13.3333H11.6667V13.3333M13.3333 15H3.33333V11.6667H0V6.66667C0 5.95833 0.243056 5.36458 0.729167 4.88542C1.21528 4.40625 1.80556 4.16667 2.5 4.16667H14.1667C14.875 4.16667 15.4688 4.40625 15.9479 4.88542C16.4271 5.36458 16.6667 5.95833 16.6667 6.66667V11.6667H13.3333V15V15M15 10V6.66667C15 6.43056 14.9201 6.23264 14.7604 6.07292C14.6007 5.91319 14.4028 5.83333 14.1667 5.83333H2.5C2.26389 5.83333 2.06597 5.91319 1.90625 6.07292C1.74653 6.23264 1.66667 6.43056 1.66667 6.66667V10H3.33333V8.33333H13.3333V10H15V10"
                  fill="#3E4947"
                />
              </svg>
            </div>
            <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col justify-center items-center rounded-lg bg-[#E3F0F8] w-fit">
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center items-start w-fit "
              >
                <path
                  d="M12.5 16.6667C11.8056 16.6667 11.2153 16.4236 10.7292 15.9375C10.2431 15.4514 10 14.8611 10 14.1667C10 14.0833 10.0208 13.8889 10.0625 13.5833L4.20833 10.1667C3.98611 10.375 3.72917 10.5382 3.4375 10.6562C3.14583 10.7743 2.83333 10.8333 2.5 10.8333C1.80556 10.8333 1.21528 10.5903 0.729167 10.1042C0.243056 9.61806 0 9.02778 0 8.33333C0 7.63889 0.243056 7.04861 0.729167 6.5625C1.21528 6.07639 1.80556 5.83333 2.5 5.83333C2.83333 5.83333 3.14583 5.89236 3.4375 6.01042C3.72917 6.12847 3.98611 6.29167 4.20833 6.5L10.0625 3.08333C10.0347 2.98611 10.0174 2.89236 10.0104 2.80208C10.0035 2.71181 10 2.61111 10 2.5C10 1.80556 10.2431 1.21528 10.7292 0.729167C11.2153 0.243056 11.8056 0 12.5 0C13.1944 0 13.7847 0.243056 14.2708 0.729167C14.7569 1.21528 15 1.80556 15 2.5C15 3.19444 14.7569 3.78472 14.2708 4.27083C13.7847 4.75694 13.1944 5 12.5 5C12.1667 5 11.8542 4.94097 11.5625 4.82292C11.2708 4.70486 11.0139 4.54167 10.7917 4.33333L4.9375 7.75C4.96528 7.84722 4.98264 7.94097 4.98958 8.03125C4.99653 8.12153 5 8.22222 5 8.33333C5 8.44444 4.99653 8.54514 4.98958 8.63542C4.98264 8.72569 4.96528 8.81944 4.9375 8.91667L10.7917 12.3333C11.0139 12.125 11.2708 11.9618 11.5625 11.8438C11.8542 11.7257 12.1667 11.6667 12.5 11.6667C13.1944 11.6667 13.7847 11.9097 14.2708 12.3958C14.7569 12.8819 15 13.4722 15 14.1667C15 14.8611 14.7569 15.4514 14.2708 15.9375C13.7847 16.4236 13.1944 16.6667 12.5 16.6667V16.6667M12.5 15C12.7361 15 12.934 14.9201 13.0938 14.7604C13.2535 14.6007 13.3333 14.4028 13.3333 14.1667C13.3333 13.9306 13.2535 13.7326 13.0938 13.5729C12.934 13.4132 12.7361 13.3333 12.5 13.3333C12.2639 13.3333 12.066 13.4132 11.9062 13.5729C11.7465 13.7326 11.6667 13.9306 11.6667 14.1667C11.6667 14.4028 11.7465 14.6007 11.9062 14.7604C12.066 14.9201 12.2639 15 12.5 15V15M2.5 9.16667C2.73611 9.16667 2.93403 9.08681 3.09375 8.92708C3.25347 8.76736 3.33333 8.56944 3.33333 8.33333C3.33333 8.09722 3.25347 7.89931 3.09375 7.73958C2.93403 7.57986 2.73611 7.5 2.5 7.5C2.26389 7.5 2.06597 7.57986 1.90625 7.73958C1.74653 7.89931 1.66667 8.09722 1.66667 8.33333C1.66667 8.56944 1.74653 8.76736 1.90625 8.92708C2.06597 9.08681 2.26389 9.16667 2.5 9.16667V9.16667M12.5 3.33333C12.7361 3.33333 12.934 3.25347 13.0938 3.09375C13.2535 2.93403 13.3333 2.73611 13.3333 2.5C13.3333 2.26389 13.2535 2.06597 13.0938 1.90625C12.934 1.74653 12.7361 1.66667 12.5 1.66667C12.2639 1.66667 12.066 1.74653 11.9062 1.90625C11.7465 2.06597 11.6667 2.26389 11.6667 2.5C11.6667 2.73611 11.7465 2.93403 11.9062 3.09375C12.066 3.25347 12.2639 3.33333 12.5 3.33333V3.33333M12.5 14.1667V14.1667V14.1667V14.1667V14.1667V14.1667V14.1667V14.1667V14.1667V14.1667M2.5 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333M12.5 2.5V2.5V2.5V2.5V2.5V2.5V2.5V2.5V2.5V2.5"
                  fill="#3E4947"
                />
              </svg>
            </div>
            <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col justify-center items-center rounded-lg bg-[#E3F0F8] w-fit">
              <svg
                width="4"
                height="14"
                viewBox="0 0 4 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center items-start w-fit "
              >
                <path
                  d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667C0 11.2083 0.163194 10.816 0.489583 10.4896C0.815972 10.1632 1.20833 10 1.66667 10C2.125 10 2.51736 10.1632 2.84375 10.4896C3.17014 10.816 3.33333 11.2083 3.33333 11.6667C3.33333 12.125 3.17014 12.5174 2.84375 12.8438C2.51736 13.1701 2.125 13.3333 1.66667 13.3333V13.3333M1.66667 8.33333C1.20833 8.33333 0.815972 8.17014 0.489583 7.84375C0.163194 7.51736 0 7.125 0 6.66667C0 6.20833 0.163194 5.81597 0.489583 5.48958C0.815972 5.16319 1.20833 5 1.66667 5C2.125 5 2.51736 5.16319 2.84375 5.48958C3.17014 5.81597 3.33333 6.20833 3.33333 6.66667C3.33333 7.125 3.17014 7.51736 2.84375 7.84375C2.51736 8.17014 2.125 8.33333 1.66667 8.33333V8.33333M1.66667 3.33333C1.20833 3.33333 0.815972 3.17014 0.489583 2.84375C0.163194 2.51736 0 2.125 0 1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0C2.125 0 2.51736 0.163194 2.84375 0.489583C3.17014 0.815972 3.33333 1.20833 3.33333 1.66667C3.33333 2.125 3.17014 2.51736 2.84375 2.84375C2.51736 3.17014 2.125 3.33333 1.66667 3.33333V3.33333"
                  fill="#3E4947"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex p-6 flex-col items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
          <div className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="order-2 flex min-w-0 flex-col justify-between items-start gap-4 w-full xl:order-2 xl:pt-0.5">
              <div className="flex flex-col items-start w-full">
                <div className="flex pb-1 justify-between items-center w-full">
                  <div className="flex pt-[7px] flex-col items-start gap-1.5 w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                      MULTI PURPOSE VEHICLE &#40;MPV&#41;
                    </p>
                    <p className="text-[#263238] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.015em]">
                      Toyota Avanza 1.3 G M&#x2F;T
                    </p>
                  </div>
                  <div className="flex py-1 px-3 items-center gap-1.5 rounded-full bg-[#DCFCE7] w-fit">
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
                        fill="#15803D"
                      />
                    </svg>
                    <p className="text-[#15803D] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Tersedia
                    </p>
                  </div>
                </div>
                <div className="flex pt-1 flex-col items-start w-full">
                  <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                    Kondisi prima siap operasional jarak dekat maupun luar kota.
                    Dikelola berkala via Auto2000 dengan riwayat pemeliharaan
                    terpantau penuh.
                  </p>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="grid grid-cols-2 gap-3 pt-1 w-full sm:grid-cols-4">
                  <div className="flex pt-2 pr-2 pb-6 pl-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Nomor Polisi
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-liberationMono text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          L 1234 AB
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-6 pl-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Tahun Rilis
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          2022
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Transmisi
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Manual &#40;5- Speed&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-6 pl-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Warna Bodi
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Putih Metalik
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-6 pl-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Odometer
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-liberationMono text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          42.580 km
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Bahan Bakar
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Bensin &#40;Pertalite&#x2F;Max&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-2 pr-2 pb-6 pl-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Kapasitas Kursi
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          7 Penumpang
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-2 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                        Depo Penempatan
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                          Pool Barat Surabaya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="flex w-full flex-wrap items-center gap-2 pt-2">
                  <div className="flex py-2.5 px-6 justify-center items-center gap-2 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <svg
                      width="18"
                      height="9"
                      viewBox="0 0 18 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M4.5 6C4.0875 6 3.73438 5.85312 3.44062 5.55937C3.14687 5.26562 3 4.9125 3 4.5C3 4.0875 3.14687 3.73438 3.44062 3.44062C3.73438 3.14687 4.0875 3 4.5 3C4.9125 3 5.26562 3.14687 5.55937 3.44062C5.85312 3.73438 6 4.0875 6 4.5C6 4.9125 5.85312 5.26562 5.55937 5.55937C5.26562 5.85312 4.9125 6 4.5 6V6M4.5 9C3.25 9 2.1875 8.5625 1.3125 7.6875C0.4375 6.8125 0 5.75 0 4.5C0 3.25 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.25 0 4.5 0C5.3375 0 6.09687 0.20625 6.77812 0.61875C7.45937 1.03125 8 1.575 8.4 2.25H15L17.25 4.5L13.875 7.875L12.375 6.75L10.875 7.875L9.28125 6.75H8.4C8 7.425 7.45937 7.96875 6.77812 8.38125C6.09687 8.79375 5.3375 9 4.5 9V9M4.5 7.5C5.2 7.5 5.81563 7.2875 6.34688 6.8625C6.87813 6.4375 7.23125 5.9 7.40625 5.25H9.75L10.8375 6.01875L12.375 4.875L13.7063 5.90625L15.1125 4.5L14.3625 3.75H7.40625C7.23125 3.1 6.87813 2.5625 6.34688 2.1375C5.81563 1.7125 5.2 1.5 4.5 1.5C3.675 1.5 2.96875 1.79375 2.38125 2.38125C1.79375 2.96875 1.5 3.675 1.5 4.5C1.5 5.325 1.79375 6.03125 2.38125 6.61875C2.96875 7.20625 3.675 7.5 4.5 7.5V7.5"
                        fill="white"
                      />
                    </svg>
                    <div className="flex flex-col items-center w-fit">
                      <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        Buat Rental Baru
                      </p>
                    </div>
                  </div>
                  <div className="flex py-2.5 px-6 justify-center items-center gap-2 rounded-lg bg-[#E3F0F8] w-fit">
                    <svg
                      width="14"
                      height="15"
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-center w-fit "
                    >
                      <path
                        d="M5.9625 12.2625L3.3 9.6L4.3875 8.5125L5.9625 10.0875L9.1125 6.9375L10.2 8.025L5.9625 12.2625V12.2625M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3C0 2.5875 0.146875 2.23438 0.440625 1.94062C0.734375 1.64687 1.0875 1.5 1.5 1.5H2.25V0H3.75V1.5H9.75V0H11.25V1.5H12C12.4125 1.5 12.7656 1.64687 13.0594 1.94062C13.3531 2.23438 13.5 2.5875 13.5 3V13.5C13.5 13.9125 13.3531 14.2656 13.0594 14.5594C12.7656 14.8531 12.4125 15 12 15H1.5V15M1.5 13.5H12V13.5V13.5V6H1.5V13.5V13.5V13.5V13.5M1.5 4.5H12V3V3V3H1.5V3V3V4.5V4.5M1.5 4.5V3V3V3V3V3V3V4.5V4.5V4.5"
                        fill="#47607E"
                      />
                    </svg>
                    <div className="flex flex-col items-center w-fit">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        Jadwalkan Servis
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-2.5 pr-2.5 pb-4 pl-2.5 flex-col justify-center items-center rounded-lg bg-[#E3F0F8] w-fit">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex justify-center items-start w-fit "
                    >
                      <path
                        d="M1.66667 16.6875C1.20833 16.6875 0.815972 16.5243 0.489583 16.1979C0.163194 15.8715 0 15.4792 0 15.0208V3.35417C0 2.89583 0.163194 2.50347 0.489583 2.17708C0.815972 1.85069 1.20833 1.6875 1.66667 1.6875H9.10417L7.4375 3.35417H1.66667V3.35417V3.35417V15.0208V15.0208V15.0208H13.3333V15.0208V15.0208V9.22917L15 7.5625V15.0208C15 15.4792 14.8368 15.8715 14.5104 16.1979C14.184 16.5243 13.7917 16.6875 13.3333 16.6875H1.66667V16.6875M7.5 9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875V9.1875M5 11.6875V8.14583L12.6458 0.5C12.8125 0.333333 13 0.208333 13.2083 0.125C13.4167 0.0416667 13.625 0 13.8333 0C14.0556 0 14.2674 0.0416667 14.4688 0.125C14.6701 0.208333 14.8542 0.333333 15.0208 0.5L16.1875 1.6875C16.3403 1.85417 16.4583 2.03819 16.5417 2.23958C16.625 2.44097 16.6667 2.64583 16.6667 2.85417C16.6667 3.0625 16.6285 3.26736 16.5521 3.46875C16.4757 3.67014 16.3542 3.85417 16.1875 4.02083L8.54167 11.6875H5V11.6875M15.0208 2.85417V2.85417L13.8542 1.6875V1.6875L15.0208 2.85417V2.85417M6.66667 10.0208H7.83333L12.6667 5.1875L12.0833 4.60417L11.4792 4.02083L6.66667 8.83333V10.0208V10.0208M12.0833 4.60417L11.4792 4.02083V4.02083L12.0833 4.60417L12.6667 5.1875V5.1875L12.0833 4.60417V4.60417"
                        fill="#3E4947"
                      />
                    </svg>
                  </div>
                  <div className="flex pt-2.5 pr-2.5 pb-4 pl-2.5 flex-col justify-center items-center rounded-lg bg-[#E3F0F8] w-fit">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex justify-center items-start w-fit "
                    >
                      <path
                        d="M6.66667 10L2.5 5.83333L3.66667 4.625L5.83333 6.79167V0H7.5V6.79167L9.66667 4.625L10.8333 5.83333L6.66667 10V10M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V9.16667H1.66667V11.6667V11.6667V11.6667H11.6667V11.6667V11.6667V9.16667H13.3333V11.6667C13.3333 12.125 13.1701 12.5174 12.8438 12.8438C12.5174 13.1701 12.125 13.3333 11.6667 13.3333H1.66667V13.3333"
                        fill="#3E4947"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 flex min-w-0 flex-col justify-center items-start rounded-xl bg-[#E9F6FD] w-full overflow-hidden relative xl:order-1">
              <img
                src="/Ab6axua4c7ktwfv2kggaukyyw6w0mube8oidcbk100iqx7tw88d3stqxfjop0vgedgj0p98yi23s_ssymy9vuknwuzqgkam52ekbgnpehxbt4izq7nltsb1y9yw_1cwwsyi3cvaysb0gz2thbratlsy4_qncajlhslrbqxvhkwcpy0b2css1ubppa8idvy77eg9wmzbzpykiuos4mzxyb_vwms19zbiutulwmrppbb3ta0xyonnckspvg.png"
                className="w-full h-[273px] overflow-hidden max-w-none"
                alt="AB6AXuA4c7KTWfV2KGgAukyYW6w0MuBE8OIdCbk100iqx7Tw88d3stQXfJop0vGEDgj0p98YI23S_sSyMY9vUKnwUzQgkAm52eKBGNpeHXbt4izQ7nlTsB1y9YW_1cWWSYI3cvAYSB0gz2tHbrAtlsy4_QnCAJLhSLrbqXvHkwcPy0b2CSs1ubPpa8idVy77EG9WMZB-ZpYKIUos-4MZXyB_-vw-mS-19zBIuTULWMrpPbb3TA0xyonNCKspVg"
              />
              <div className="absolute -right-px bg-linear-[0deg,rgba(38,50,56,0.40)0%,rgba(38,50,56,0.00)50%,rgba(38,50,56,0.00)100%] w-[473px] h-[273px]"></div>
              <div className="flex py-1 px-3 items-center gap-1.5 absolute left-3 top-3 rounded-full bg-[#DCFCE7] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <div className="rounded-full bg-[#15803D] w-2 h-2"></div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#15803D] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Tersedia
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center absolute right-[11px] bottom-3 w-[449px]">
                <div className="flex py-1 px-2.5 flex-col items-start rounded-md bg-[rgba(38,50,56,0.80)] w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    ID Armada: #AVZ-2022-09
                  </p>
                </div>
                <div className="flex py-1 px-2.5 items-center gap-1 rounded-md bg-[rgba(38,50,56,0.80)] w-fit">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25V12.25M4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625V10.7625M6.41667 6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125M5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583V8.19583"
                      fill="#9CF2E8"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#FFF] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Dokumen Lengkap
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-2">
          <div className="flex p-6 flex-col items-start gap-[104px] rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-fit">
                <div className="flex justify-center items-center rounded-lg bg-[#E3F0F8] w-10 h-10">
                  <svg
                    width="15"
                    height="19"
                    viewBox="0 0 15 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M5.95833 12.375H8.70833V10.0833H11V7.33333H8.70833V5.04167H5.95833V7.33333H3.66667V10.0833H5.95833V12.375V12.375M7.33333 18.3333C5.20972 17.7986 3.4566 16.5802 2.07396 14.6781C0.691319 12.776 0 10.6639 0 8.34167V2.75L7.33333 0L14.6667 2.75V8.34167C14.6667 10.6639 13.9753 12.776 12.5927 14.6781C11.2101 16.5802 9.45694 17.7986 7.33333 18.3333V18.3333M7.33333 16.4083C8.92222 15.9042 10.2361 14.8958 11.275 13.3833C12.3139 11.8708 12.8333 10.1903 12.8333 8.34167V4.01042L7.33333 1.94792L1.83333 4.01042V8.34167C1.83333 10.1903 2.35278 11.8708 3.39167 13.3833C4.43056 14.8958 5.74444 15.9042 7.33333 16.4083V16.4083M7.33333 9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667"
                      fill="#0F766E"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Status Kesehatan Komponen
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Telemetri real-time onboard diagnostic &#40;OBD-II&#41;
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex py-1 px-2.5 flex-col items-start rounded-md bg-[#E3F0F8] w-fit">
                <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                  Update 10m lalu
                </p>
              </div>
            </div>
            <div className="flex pt-4 flex-col items-start w-full">
              <div className="flex pt-1 flex-col items-start gap-4 w-full">
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 w-fit">
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
                          fill="#0F766E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Mesin
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Sangat Baik
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#0F766E] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          94%
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="560"
                    height="10"
                    viewBox="0 0 560 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[34px] items-center rounded-full bg-[#DDEAF2] w-full h-2.5 overflow-hidden "
                  >
                    <rect width="560" height="10" rx="5" fill="#DDEAF2" />
                    <rect width="526.387" height="10" rx="5" fill="#0F766E" />
                  </svg>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                      Kompresi silinder stabil, sensor O2 optimal, temperatur
                      idle 88°C.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M12.75 4.5C12.5375 4.5 12.3594 4.42813 12.2156 4.28438C12.0719 4.14062 12 3.9625 12 3.75C12 3.65 12.0219 3.55312 12.0656 3.45937C12.1094 3.36562 12.1625 3.2875 12.225 3.225C12.375 3.075 12.7188 2.90625 13.2563 2.71875C13.7938 2.53125 14.0625 2.4375 14.0625 2.4375C13.9625 2.725 13.8687 2.99375 13.7812 3.24375C13.7063 3.45625 13.6219 3.6625 13.5281 3.8625C13.4344 4.0625 13.35 4.2 13.275 4.275C13.2125 4.3375 13.1344 4.39062 13.0406 4.43437C12.9469 4.47812 12.85 4.5 12.75 4.5V4.5M1.5 14.25C1.0875 14.25 0.734375 14.1031 0.440625 13.8094C0.146875 13.5156 0 13.1625 0 12.75V2.25C0 1.8375 0.146875 1.48438 0.440625 1.19062C0.734375 0.896875 1.0875 0.75 1.5 0.75H6C6.4125 0.75 6.76562 0.896875 7.05937 1.19062C7.35312 1.48438 7.5 1.8375 7.5 2.25V8.38125C7.6125 8.34375 7.73125 8.3125 7.85625 8.2875C7.98125 8.2625 8.1125 8.25 8.25 8.25C8.875 8.25 9.40625 8.46875 9.84375 8.90625C10.2812 9.34375 10.5 9.875 10.5 10.5V12C10.5 12.2125 10.5719 12.3906 10.7156 12.5344C10.8594 12.6781 11.0375 12.75 11.25 12.75C11.4625 12.75 11.6406 12.6781 11.7844 12.5344C11.9281 12.3906 12 12.2125 12 12V8.25H11.25V7.18125C10.575 6.89375 10.0312 6.44375 9.61875 5.83125C9.20625 5.21875 9 4.525 9 3.75C9 2.7125 9.36563 1.82812 10.0969 1.09687C10.8281 0.365625 11.7125 0 12.75 0C13.7875 0 14.6719 0.365625 15.4031 1.09687C16.1344 1.82812 16.5 2.7125 16.5 3.75C16.5 4.525 16.2938 5.21875 15.8813 5.83125C15.4688 6.44375 14.925 6.89375 14.25 7.18125V8.25H13.5V12C13.5 12.625 13.2812 13.1562 12.8438 13.5938C12.4062 14.0312 11.875 14.25 11.25 14.25C10.625 14.25 10.0938 14.0312 9.65625 13.5938C9.21875 13.1562 9 12.625 9 12V10.5C9 10.2875 8.92813 10.1094 8.78438 9.96562C8.64062 9.82187 8.4625 9.75 8.25 9.75C8.0375 9.75 7.85938 9.82187 7.71562 9.96562C7.57187 10.1094 7.5 10.2875 7.5 10.5V12.75C7.5 13.1625 7.35312 13.5156 7.05937 13.8094C6.76562 14.1031 6.4125 14.25 6 14.25H1.5V14.25M12.75 6C13.375 6 13.9062 5.78125 14.3438 5.34375C14.7812 4.90625 15 4.375 15 3.75C15 3.125 14.7812 2.59375 14.3438 2.15625C13.9062 1.71875 13.375 1.5 12.75 1.5C12.125 1.5 11.5938 1.71875 11.1562 2.15625C10.7188 2.59375 10.5 3.125 10.5 3.75C10.5 4.375 10.7188 4.90625 11.1562 5.34375C11.5938 5.78125 12.125 6 12.75 6V6M1.5 12.75H6V12.75V12.75V11.25L4.5 12.75V10.6313L6 9.13125V7.5L4.5 9V6.88125L6 5.38125V3.75L4.5 5.25V3.13125L5.38125 2.25V2.25V2.25H2.11875V2.25V2.25L3 3.13125V5.25L1.5 3.75V5.38125L3 6.88125V9L1.5 7.5V9.13125L3 10.6313V12.75L1.5 11.25V12.75V12.75V12.75V12.75M3.75 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5"
                          fill="#15803D"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Ban
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Kondisi Baik - Tekanan 33 PSI
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#15803D] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          82%
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="560"
                    height="10"
                    viewBox="0 0 560 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[101px] items-center rounded-full bg-[#DDEAF2] w-full h-2.5 overflow-hidden "
                  >
                    <rect width="560" height="10" rx="5" fill="#DDEAF2" />
                    <rect width="459.187" height="10" rx="5" fill="#15803D" />
                  </svg>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                      Ketebalan tapak 6.2mm rata seluruh sisi. Rotasi ban
                      disarankan pada 48.000 km.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <svg
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M0 14.25L8.25 0L16.5 14.25H0V14.25M2.5875 12.75H13.9125L8.25 3L2.5875 12.75V12.75M8.25 12C8.4625 12 8.64062 11.9281 8.78438 11.7844C8.92813 11.6406 9 11.4625 9 11.25C9 11.0375 8.92813 10.8594 8.78438 10.7156C8.64062 10.5719 8.4625 10.5 8.25 10.5C8.0375 10.5 7.85938 10.5719 7.71562 10.7156C7.57187 10.8594 7.5 11.0375 7.5 11.25C7.5 11.4625 7.57187 11.6406 7.71562 11.7844C7.85938 11.9281 8.0375 12 8.25 12V12M7.5 9.75H9V6H7.5V9.75V9.75M8.25 7.875V7.875V7.875V7.875V7.875"
                          fill="#B45309"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Rem
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Perlu Dicek Dalam 2.000 km
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#B45309] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          68%
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="560"
                    height="10"
                    viewBox="0 0 560 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[179px] items-center rounded-full bg-[#DDEAF2] w-full h-2.5 overflow-hidden "
                  >
                    <rect width="560" height="10" rx="5" fill="#DDEAF2" />
                    <rect width="380.787" height="10" rx="5" fill="#B45309" />
                  </svg>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                      Tromol belakang mulai aus normal. Cakram depan dalam batas
                      toleransi aman.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M0.75 13.5C0.5375 13.5 0.359375 13.4281 0.215625 13.2844C0.071875 13.1406 0 12.9625 0 12.75C0 12.5375 0.071875 12.3594 0.215625 12.2156C0.359375 12.0719 0.5375 12 0.75 12H1.5V7.5H0.75C0.5375 7.5 0.359375 7.42813 0.215625 7.28438C0.071875 7.14062 0 6.9625 0 6.75C0 6.5375 0.071875 6.35938 0.215625 6.21562C0.359375 6.07187 0.5375 6 0.75 6H1.5V1.5H0.75C0.5375 1.5 0.359375 1.42812 0.215625 1.28437C0.071875 1.14062 0 0.9625 0 0.75C0 0.5375 0.071875 0.359375 0.215625 0.215625C0.359375 0.071875 0.5375 0 0.75 0H12.75C12.9625 0 13.1406 0.071875 13.2844 0.215625C13.4281 0.359375 13.5 0.5375 13.5 0.75C13.5 0.9625 13.4281 1.14062 13.2844 1.28437C13.1406 1.42812 12.9625 1.5 12.75 1.5H12V6H12.75C12.9625 6 13.1406 6.07187 13.2844 6.21562C13.4281 6.35938 13.5 6.5375 13.5 6.75C13.5 6.9625 13.4281 7.14062 13.2844 7.28438C13.1406 7.42813 12.9625 7.5 12.75 7.5H12V12H12.75C12.9625 12 13.1406 12.0719 13.2844 12.2156C13.4281 12.3594 13.5 12.5375 13.5 12.75C13.5 12.9625 13.4281 13.1406 13.2844 13.2844C13.1406 13.4281 12.9625 13.5 12.75 13.5H0.75V13.5M3 12H10.5V7.5V7.5C10.2875 7.5 10.1094 7.42813 9.96562 7.28438C9.82187 7.14062 9.75 6.9625 9.75 6.75C9.75 6.5375 9.82187 6.35938 9.96562 6.21562C10.1094 6.07187 10.2875 6 10.5 6V6V1.5H3V6V6C3.2125 6 3.39062 6.07187 3.53437 6.21562C3.67812 6.35938 3.75 6.5375 3.75 6.75C3.75 6.9625 3.67812 7.14062 3.53437 7.28438C3.39062 7.42813 3.2125 7.5 3 7.5V7.5V12V12M6.75 9.75C7.375 9.75 7.90625 9.53437 8.34375 9.10312C8.78125 8.67188 9 8.15 9 7.5375C9 7.05 8.85938 6.63125 8.57812 6.28125C8.29688 5.93125 7.6875 5.2125 6.75 4.125C5.8125 5.2 5.20312 5.91563 4.92188 6.27187C4.64062 6.62812 4.5 7.05 4.5 7.5375C4.5 8.15 4.71875 8.67188 5.15625 9.10312C5.59375 9.53437 6.125 9.75 6.75 9.75V9.75M3 12V1.5V1.5V12V12V12"
                          fill="#0F766E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Oli
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Penggantian pada 45.000 km
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#0F766E] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.01em]">
                          75%
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="560"
                    height="10"
                    viewBox="0 0 560 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[140px] items-center rounded-full bg-[#DDEAF2] w-full h-2.5 overflow-hidden "
                  >
                    <rect width="560" height="10" rx="5" fill="#DDEAF2" />
                    <rect width="420" height="10" rx="5" fill="#0F766E" />
                  </svg>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                      Viskositas 0W-20 sintetik terpantau jernih. Sisa estimasi
                      pakai 2.420 km.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-4 flex-col items-start w-full">
              <div className="flex pt-2 pr-2 pb-2 pl-2 justify-between items-center rounded-lg bg-[#E9F6FD] w-full">
                <div className="flex items-center gap-2 w-fit">
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M1.575 5.325L0 3.75C1.1875 2.5375 2.55937 1.60938 4.11562 0.965625C5.67188 0.321875 7.3 0 9 0C9.3 0 9.6 0.009375 9.9 0.028125C10.2 0.046875 10.5 0.075 10.8 0.1125L9.675 2.2875C9.5625 2.275 9.45 2.26562 9.3375 2.25938C9.225 2.25313 9.1125 2.25 9 2.25C7.6 2.25 6.25938 2.51562 4.97813 3.04688C3.69688 3.57812 2.5625 4.3375 1.575 5.325V5.325M4.7625 8.5125L3.1875 6.9C3.9 6.1875 4.71875 5.63125 5.64375 5.23125C6.56875 4.83125 7.5375 4.6 8.55 4.5375L7.35 6.99375C6.8625 7.13125 6.4 7.32812 5.9625 7.58437C5.525 7.84062 5.125 8.15 4.7625 8.5125V8.5125M8.475 11.8875C8.0625 11.75 7.7625 11.4906 7.575 11.1094C7.3875 10.7281 7.3875 10.35 7.575 9.975L12.075 0.825C12.125 0.725 12.2 0.659375 12.3 0.628125C12.4 0.596875 12.5 0.6 12.6 0.6375C12.7 0.675 12.775 0.740625 12.825 0.834375C12.875 0.928125 12.8875 1.025 12.8625 1.125L10.425 10.9875C10.325 11.4 10.0781 11.6937 9.68437 11.8687C9.29062 12.0437 8.8875 12.05 8.475 11.8875V11.8875M13.2375 8.5125C13.15 8.425 13.0656 8.34688 12.9844 8.27812C12.9031 8.20937 12.8125 8.1375 12.7125 8.0625L13.3125 5.71875C13.575 5.89375 13.8344 6.07812 14.0906 6.27187C14.3469 6.46562 14.5875 6.675 14.8125 6.9L13.2375 8.5125V8.5125M16.4062 5.34375C16.0063 4.98125 15.5969 4.6375 15.1781 4.3125C14.7594 3.9875 14.3125 3.7 13.8375 3.45L14.3625 1.2C15.0375 1.525 15.6813 1.9 16.2938 2.325C16.9062 2.75 17.475 3.225 18 3.75L16.4062 5.34375V5.34375"
                      fill="#0F766E"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Skor Kelayakan Operasi Keseluruhan
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#0F766E] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                    84.5 &#x2F; 100
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-6 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2 w-fit">
                <div className="flex justify-center items-center rounded-lg bg-[#E3F0F8] w-10 h-10">
                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M12.375 13.6583L13.6583 12.375C13.75 12.2833 13.7958 12.1764 13.7958 12.0542C13.7958 11.9319 13.75 11.825 13.6583 11.7333L10.5417 8.59375C10.6028 8.42569 10.6486 8.25764 10.6792 8.08958C10.7097 7.92153 10.725 7.73056 10.725 7.51667C10.725 6.64583 10.4156 5.90104 9.79688 5.28229C9.17813 4.66354 8.43333 4.35417 7.5625 4.35417C7.30278 4.35417 7.04306 4.38854 6.78333 4.45729C6.52361 4.52604 6.27153 4.62153 6.02708 4.74375L8.18125 6.89792L6.89792 8.18125L4.74375 6.02708C4.62153 6.27153 4.52604 6.52361 4.45729 6.78333C4.38854 7.04306 4.35417 7.30278 4.35417 7.5625C4.35417 8.43333 4.66354 9.17813 5.28229 9.79688C5.90104 10.4156 6.64583 10.725 7.51667 10.725C7.71528 10.725 7.90243 10.7097 8.07812 10.6792C8.25382 10.6486 8.42569 10.6028 8.59375 10.5417L11.7333 13.6583C11.825 13.75 11.9319 13.7958 12.0542 13.7958C12.1764 13.7958 12.2833 13.75 12.375 13.6583V13.6583M9.16667 18.3333C7.89861 18.3333 6.70694 18.0927 5.59167 17.6115C4.47639 17.1302 3.50625 16.4771 2.68125 15.6521C1.85625 14.8271 1.20312 13.8569 0.721875 12.7417C0.240625 11.6264 0 10.4347 0 9.16667C0 7.89861 0.240625 6.70694 0.721875 5.59167C1.20312 4.47639 1.85625 3.50625 2.68125 2.68125C3.50625 1.85625 4.47639 1.20312 5.59167 0.721875C6.70694 0.240625 7.89861 0 9.16667 0C10.4347 0 11.6264 0.240625 12.7417 0.721875C13.8569 1.20312 14.8271 1.85625 15.6521 2.68125C16.4771 3.50625 17.1302 4.47639 17.6115 5.59167C18.0927 6.70694 18.3333 7.89861 18.3333 9.16667C18.3333 10.4347 18.0927 11.6264 17.6115 12.7417C17.1302 13.8569 16.4771 14.8271 15.6521 15.6521C14.8271 16.4771 13.8569 17.1302 12.7417 17.6115C11.6264 18.0927 10.4347 18.3333 9.16667 18.3333V18.3333M9.16667 16.5C11.2139 16.5 12.9479 15.7896 14.3687 14.3687C15.7896 12.9479 16.5 11.2139 16.5 9.16667C16.5 7.11944 15.7896 5.38542 14.3687 3.96458C12.9479 2.54375 11.2139 1.83333 9.16667 1.83333C7.11944 1.83333 5.38542 2.54375 3.96458 3.96458C2.54375 5.38542 1.83333 7.11944 1.83333 9.16667C1.83333 11.2139 2.54375 12.9479 3.96458 14.3687C5.38542 15.7896 7.11944 16.5 9.16667 16.5V16.5M9.16667 9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667"
                      fill="#0F766E"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Jadwal Servis &amp; Riwayat
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Histori pemeliharaan dan inspeksi armada
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-0.5 w-fit">
                <p className="text-[#0F766E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Lihat Semua
                </p>
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M3.06667 4L0 0.933333L0.933333 0L4.93333 4L0.933333 8L0 7.06667L3.06667 4V4"
                    fill="#0F766E"
                  />
                </svg>
              </div>
            </div>
            <div className="flex pt-4 flex-col items-start w-full">
              <div className="flex p-4 justify-between items-center rounded-xl bg-[#E9F6FD] w-full">
                <div className="flex flex-col items-start gap-1 w-fit">
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
                        d="M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333V13.3333M1.33333 12H10.6667V12V12V5.33333H1.33333V12V12V12V12M1.33333 4H10.6667V2.66667V2.66667V2.66667H1.33333V2.66667V2.66667V4V4M1.33333 4V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V4V4V4"
                        fill="#47607E"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Jadwal Servis Berkala Berikutnya
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                      18 Oktober 2026
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                      Servis Berkala 45.000 km di Bengkel Resmi Auto2000
                      Kenjeran
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end w-fit">
                  <div className="flex pt-1 pr-5 pb-1 pl-2.5 items-start rounded-full bg-[#D1E4FF] w-fit">
                    <p className="text-[#001D36] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                      Sisa 24 Hari
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-4 flex-col items-start w-full">
              <div className="flex p-2 items-start gap-2 rounded-lg bg-[rgba(221,234,242,0.60)] w-full">
                <svg
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex pt-0.5 flex-col items-start w-fit "
                >
                  <path
                    d="M7.5 14.5H9.16667V9.5H7.5V14.5V14.5M8.33333 7.83333C8.56944 7.83333 8.76736 7.75347 8.92708 7.59375C9.08681 7.43403 9.16667 7.23611 9.16667 7C9.16667 6.76389 9.08681 6.56597 8.92708 6.40625C8.76736 6.24653 8.56944 6.16667 8.33333 6.16667C8.09722 6.16667 7.89931 6.24653 7.73958 6.40625C7.57986 6.56597 7.5 6.76389 7.5 7C7.5 7.23611 7.57986 7.43403 7.73958 7.59375C7.89931 7.75347 8.09722 7.83333 8.33333 7.83333V7.83333M8.33333 18.6667C7.18056 18.6667 6.09722 18.4479 5.08333 18.0104C4.06944 17.5729 3.1875 16.9792 2.4375 16.2292C1.6875 15.4792 1.09375 14.5972 0.65625 13.5833C0.21875 12.5694 0 11.4861 0 10.3333C0 9.18056 0.21875 8.09722 0.65625 7.08333C1.09375 6.06944 1.6875 5.1875 2.4375 4.4375C3.1875 3.6875 4.06944 3.09375 5.08333 2.65625C6.09722 2.21875 7.18056 2 8.33333 2C9.48611 2 10.5694 2.21875 11.5833 2.65625C12.5972 3.09375 13.4792 3.6875 14.2292 4.4375C14.9792 5.1875 15.5729 6.06944 16.0104 7.08333C16.4479 8.09722 16.6667 9.18056 16.6667 10.3333C16.6667 11.4861 16.4479 12.5694 16.0104 13.5833C15.5729 14.5972 14.9792 15.4792 14.2292 16.2292C13.4792 16.9792 12.5972 17.5729 11.5833 18.0104C10.5694 18.4479 9.48611 18.6667 8.33333 18.6667V18.6667M8.33333 17C10.1944 17 11.7708 16.3542 13.0625 15.0625C14.3542 13.7708 15 12.1944 15 10.3333C15 8.47222 14.3542 6.89583 13.0625 5.60417C11.7708 4.3125 10.1944 3.66667 8.33333 3.66667C6.47222 3.66667 4.89583 4.3125 3.60417 5.60417C2.3125 6.89583 1.66667 8.47222 1.66667 10.3333C1.66667 12.1944 2.3125 13.7708 3.60417 15.0625C4.89583 16.3542 6.47222 17 8.33333 17V17M8.33333 10.3333V10.3333V10.3333V10.3333V10.3333V10.3333V10.3333V10.3333V10.3333V10.3333"
                    fill="#0F766E"
                  />
                </svg>
                <div className="flex pt-[5px] flex-col items-start gap-[5px] w-full">
                  <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Catatan Kerusakan &#x2F; Maintenance:
                  </p>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                      Tidak ada kerusakan aktif. Terakhir ganti kampas rem depan
                      pada Juni 2026. Seluruh wiper dan kelistrikan lampu
                      normal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-4 flex-col items-start w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="flex pb-1 justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                      3 ENTRI SERVIS TERAKHIR
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Tercatat di Buku Garansi Digital
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full overflow-hidden">
                  <div className="flex justify-center items-start bg-[#E9F6FD] w-full">
                    <div className="flex pt-[18px] pr-3 pb-[19px] pl-3 flex-col items-start rounded-lg w-[81px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                        Tanggal
                      </p>
                    </div>
                    <div className="flex pt-[18px] pr-3 pb-[19px] pl-3 flex-col items-start w-[129px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                        Jenis Servis
                      </p>
                    </div>
                    <div className="flex py-2.5 px-3 flex-col items-start w-[117px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                        Bengkel Rekanan
                      </p>
                    </div>
                    <div className="flex pt-[18px] pr-3 pb-[19px] pl-3 flex-col items-end rounded-lg w-[102px]">
                      <p className="text-[#47607E] font-plusJakartaSans text-xs font-bold leading-4 w-fit">
                        Biaya Total
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start -space-y-px w-full">
                    <div className="flex justify-center items-center w-full">
                      <div className="flex pt-5 pr-3 pb-[21px] pl-3 flex-col items-start w-[81px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] leading-[18px] w-fit">
                          15 Jun 2026
                        </p>
                      </div>
                      <div className="flex pl-3 flex-col items-start w-[117px]">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                            Ganti Kampas Rem &amp; Tune Up
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Odometer: 40.120 km
                          </p>
                        </div>
                      </div>
                      <div className="flex pt-5 pr-3 pb-[21px] pl-6 flex-col items-start w-[129px]">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Auto2000 Kenjeran
                        </p>
                      </div>
                      <div className="flex pt-[22px] pr-3 pb-[23px] pl-3 flex-col items-end w-[102px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Rp 1.450.000
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center border-t border-t-[rgba(0,0,0,0.00)] w-full">
                      <div className="flex pt-5 pr-3 pb-[21px] pl-3 flex-col items-start w-[81px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] leading-[18px] w-fit">
                          12 Jan 2026
                        </p>
                      </div>
                      <div className="flex pl-3 flex-col items-start w-[117px]">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                            Servis Berkala 30.000 km
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Ganti oli mesin, filter oli &amp; AC
                          </p>
                        </div>
                      </div>
                      <div className="flex pt-[21px] pr-3 pb-[21px] pl-6 flex-col items-start w-[129px]">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Auto2000 Basuki Rahmat
                        </p>
                      </div>
                      <div className="flex pt-[22px] pr-3 pb-[23px] pl-3 flex-col items-end w-[102px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Rp 980.000
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center border-t border-t-[rgba(0,0,0,0.00)] w-full">
                      <div className="flex pt-7 pr-3 pb-[29px] pl-3 flex-col items-start w-[81px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] leading-[18px] w-fit">
                          22 Agu 2025
                        </p>
                      </div>
                      <div className="flex pl-3 flex-col items-start w-[117px]">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-full tracking-[0.01em]">
                            Rotasi Ban &amp; Spooring Balancing
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#3E4947] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-full tracking-[0.02em]">
                            Inspeksi sudut camber toe
                          </p>
                        </div>
                      </div>
                      <div className="flex pt-[29px] pr-3 pb-7 pl-6 flex-col items-start w-[129px]">
                        <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Shop &amp; Drive Manyar
                        </p>
                      </div>
                      <div className="flex pt-[30px] pr-3 pb-[31px] pl-3 flex-col items-end w-[102px]">
                        <p className="text-[#263238] font-liberationMono text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                          Rp 420.000
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
    </div>
  );
}