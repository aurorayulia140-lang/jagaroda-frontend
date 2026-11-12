import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Lokasi() {
  const [locationFilter, setLocationFilter] = useState('all')

  return (
    <div className="flex min-h-screen w-full flex-col items-start overflow-x-clip bg-linear-[0deg,#F4FAFF0%,#F4FAFF100%),#FF] relative">
      <div className="flex min-h-[1055px] pt-16 flex-col items-start bg-[#F5F7FA] w-full">
        <div className="flex max-w-[1600px] p-8 flex-col items-start gap-6 w-full">
          <div className="flex flex-col items-start gap-4 w-full lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-start gap-1 w-fit">
              <div className="flex items-center gap-1 w-full">
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.05em]">
                    TELEMATIKA GPS TERPADU
                  </p>
                </div>
                <div className="rounded-full bg-[#005C55] w-1.5 h-1.5"></div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Live Feed
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#263238] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.025em]">
                  Lokasi Armada
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                  Pelacakan GPS dan riwayat posisi armada rental aktif secara
                  real-time
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col justify-center items-start gap-2 lg:w-fit">
              <div className="flex flex-wrap p-1 items-start rounded-xl bg-[#DDEAF2] shadow-[02px4px0rgba(0,0,0,0.05)inset] w-fit">
                <button aria-pressed={locationFilter === 'all'} className={`cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg ${locationFilter === 'all' ? 'bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setLocationFilter('all')} type="button">
                  <p className={`${locationFilter === 'all' ? 'text-[#005C55]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Semua Kendaraan &#40;12&#41;
                  </p>
                </button>
                <button aria-pressed={locationFilter === 'moving'} className={`cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg ${locationFilter === 'moving' ? 'bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setLocationFilter('moving')} type="button">
                  <p className={`${locationFilter === 'moving' ? 'text-[#005C55]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Aktif Bergerak &#40;3&#41;
                  </p>
                </button>
                <button aria-pressed={locationFilter === 'parked'} className={`cursor-pointer text-nowrap flex py-1.5 px-3.5 flex-col justify-center items-center rounded-lg ${locationFilter === 'parked' ? 'bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setLocationFilter('parked')} type="button">
                  <p className={`${locationFilter === 'parked' ? 'text-[#005C55]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                    Parkir di Garasi &#40;7&#41;
                  </p>
                </button>
              </div>
              <div className="flex py-2 px-4 items-center gap-2 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M0 12V10.5H2.0625L1.7625 10.2375C1.1125 9.6625 0.65625 9.00625 0.39375 8.26875C0.13125 7.53125 0 6.7875 0 6.0375C0 4.65 0.415625 3.41562 1.24688 2.33437C2.07812 1.25312 3.1625 0.5375 4.5 0.1875V1.7625C3.6 2.0875 2.875 2.64062 2.325 3.42188C1.775 4.20312 1.5 5.075 1.5 6.0375C1.5 6.6 1.60625 7.14687 1.81875 7.67812C2.03125 8.20938 2.3625 8.7 2.8125 9.15L3 9.3375V7.5H4.5V12H0V12M7.5 11.8125V10.2375C8.4 9.9125 9.125 9.35938 9.675 8.57812C10.225 7.79688 10.5 6.925 10.5 5.9625C10.5 5.4 10.3937 4.85313 10.1812 4.32188C9.96875 3.79063 9.6375 3.3 9.1875 2.85L9 2.6625V4.5H7.5V0H12V1.5H9.9375L10.2375 1.7625C10.85 2.375 11.2969 3.04063 11.5781 3.75938C11.8594 4.47813 12 5.2125 12 5.9625C12 7.35 11.5844 8.58437 10.7531 9.66562C9.92188 10.7469 8.8375 11.4625 7.5 11.8125V11.8125"
                    fill="#47607E"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Perbarui Lokasi
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.9fr)]">
            <div className="flex min-w-0 flex-col items-start gap-4 w-full">
              <div className="location-map flex flex-col justify-between items-start rounded-2xl bg-[#D7E4EC] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-[540px] overflow-hidden relative">
                <img
                  src="/Image.png"
                  className="location-map-image absolute w-[629px] h-[540px] max-w-none"
                  alt="Image"
                />
                <div className="location-map-shade absolute bg-linear-[0deg,rgba(15,23,42,0.60)0%,rgba(15,23,42,0.00)50%,rgba(15,23,42,0.20)100%] w-[629px] h-[540px]"></div>
                <div className="location-map-toolbar flex p-4 justify-between items-center w-full">
                  <div className="flex py-1.5 px-3 items-center gap-2 rounded-full bg-[rgba(255,255,255,0.90)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <div className="rounded-full bg-[#005C55] w-2.5 h-2.5"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                        Surabaya &amp; Sekitarnya
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        • Akurasi GPS ±3m
                      </p>
                    </div>
                  </div>
                  <div className="flex py-1 px-2 items-center gap-1.5 rounded-xl bg-[rgba(255,255,255,0.90)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-lg w-fit">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex justify-center items-start w-fit "
                      >
                        <path
                          d="M5 6.66667H0V5H5V0H6.66667V5H11.6667V6.66667H6.66667V11.6667H5V6.66667V6.66667"
                          fill="#47607E"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-lg w-fit">
                      <svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex justify-center items-start w-fit "
                      >
                        <path
                          d="M0 1.66667V0H11.6667V1.66667H0V1.66667"
                          fill="#47607E"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-1.5 pr-1.5 pb-3 pl-1.5 flex-col justify-center items-center rounded-lg w-fit">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex justify-center items-start w-fit "
                      >
                        <path
                          d="M8.29167 18.25V16.5833C6.55556 16.3889 5.06597 15.6701 3.82292 14.4271C2.57986 13.184 1.86111 11.6944 1.66667 9.95833H0V8.29167H1.66667C1.86111 6.55556 2.57986 5.06597 3.82292 3.82292C5.06597 2.57986 6.55556 1.86111 8.29167 1.66667V0H9.95833V1.66667C11.6944 1.86111 13.184 2.57986 14.4271 3.82292C15.6701 5.06597 16.3889 6.55556 16.5833 8.29167H18.25V9.95833H16.5833C16.3889 11.6944 15.6701 13.184 14.4271 14.4271C13.184 15.6701 11.6944 16.3889 9.95833 16.5833V18.25H8.29167V18.25M9.125 14.9583C10.7361 14.9583 12.1111 14.3889 13.25 13.25C14.3889 12.1111 14.9583 10.7361 14.9583 9.125C14.9583 7.51389 14.3889 6.13889 13.25 5C12.1111 3.86111 10.7361 3.29167 9.125 3.29167C7.51389 3.29167 6.13889 3.86111 5 5C3.86111 6.13889 3.29167 7.51389 3.29167 9.125C3.29167 10.7361 3.86111 12.1111 5 13.25C6.13889 14.3889 7.51389 14.9583 9.125 14.9583V14.9583M9.125 12.4583C8.20833 12.4583 7.42361 12.1319 6.77083 11.4792C6.11806 10.8264 5.79167 10.0417 5.79167 9.125C5.79167 8.20833 6.11806 7.42361 6.77083 6.77083C7.42361 6.11806 8.20833 5.79167 9.125 5.79167C10.0417 5.79167 10.8264 6.11806 11.4792 6.77083C12.1319 7.42361 12.4583 8.20833 12.4583 9.125C12.4583 10.0417 12.1319 10.8264 11.4792 11.4792C10.8264 12.1319 10.0417 12.4583 9.125 12.4583V12.4583M9.125 10.7917C9.58333 10.7917 9.97569 10.6285 10.3021 10.3021C10.6285 9.97569 10.7917 9.58333 10.7917 9.125C10.7917 8.66667 10.6285 8.27431 10.3021 7.94792C9.97569 7.62153 9.58333 7.45833 9.125 7.45833C8.66667 7.45833 8.27431 7.62153 7.94792 7.94792C7.62153 8.27431 7.45833 8.66667 7.45833 9.125C7.45833 9.58333 7.62153 9.97569 7.94792 10.3021C8.27431 10.6285 8.66667 10.7917 9.125 10.7917V10.7917M9.125 9.125V9.125V9.125V9.125V9.125V9.125V9.125V9.125V9.125V9.125"
                          fill="#47607E"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 flex-col justify-center items-start gap-4 w-full">
                  <div className="flex py-2.5 px-4 items-center gap-3 rounded-xl bg-[rgba(255,255,255,0.95)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <div className="flex items-center gap-2 w-fit">
                      <div className="rounded-full bg-[#1E3A5F] w-3 h-3"></div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Bergerak &#x2F; Disewa
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="rounded-full bg-[#0F766E] w-3 h-3"></div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Garasi Utama
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-fit">
                      <div className="rounded-full bg-[#47607E] w-3 h-3"></div>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Parkir Standby
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex py-1.5 px-3 items-center gap-2 rounded-xl bg-[rgba(255,255,255,0.95)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M10.5 17.25V15.75C11.9625 15.75 13.2031 15.2406 14.2219 14.2219C15.2406 13.2031 15.75 11.9625 15.75 10.5H17.25C17.25 11.4375 17.0719 12.3156 16.7156 13.1344C16.3594 13.9531 15.8781 14.6656 15.2719 15.2719C14.6656 15.8781 13.9531 16.3594 13.1344 16.7156C12.3156 17.0719 11.4375 17.25 10.5 17.25V17.25M10.5 14.25V12.75C11.125 12.75 11.6562 12.5312 12.0938 12.0938C12.5312 11.6562 12.75 11.125 12.75 10.5H14.25C14.25 11.5375 13.8844 12.4219 13.1531 13.1531C12.4219 13.8844 11.5375 14.25 10.5 14.25V14.25M4.1625 16.7812C3.975 16.7812 3.7875 16.7438 3.6 16.6688C3.4125 16.5938 3.24375 16.4875 3.09375 16.35L0.43125 13.6875C0.29375 13.5375 0.1875 13.3687 0.1125 13.1812C0.0375 12.9937 0 12.8062 0 12.6187C0 12.4187 0.0375 12.2281 0.1125 12.0469C0.1875 11.8656 0.29375 11.7063 0.43125 11.5688L2.8125 9.1875C3.1 8.9 3.45625 8.75313 3.88125 8.74687C4.30625 8.74062 4.6625 8.88125 4.95 9.16875L5.8875 10.1062L6.4125 9.58125L5.475 8.64375C5.1875 8.35625 5.04375 8.00625 5.04375 7.59375C5.04375 7.18125 5.1875 6.83125 5.475 6.54375L6.54375 5.475C6.83125 5.1875 7.18438 5.04375 7.60313 5.04375C8.02188 5.04375 8.375 5.1875 8.6625 5.475L9.6 6.4125L10.125 5.8875L9.1875 4.95C8.9 4.6625 8.75625 4.30937 8.75625 3.89062C8.75625 3.47187 8.9 3.11875 9.1875 2.83125L11.5688 0.45C11.7188 0.3 11.8875 0.1875 12.075 0.1125C12.2625 0.0375 12.45 0 12.6375 0C12.825 0 13.0094 0.0375 13.1906 0.1125C13.3719 0.1875 13.5375 0.3 13.6875 0.45L16.35 3.1125C16.5 3.25 16.6094 3.40937 16.6781 3.59063C16.7469 3.77188 16.7812 3.9625 16.7812 4.1625C16.7812 4.35 16.7469 4.5375 16.6781 4.725C16.6094 4.9125 16.5 5.08125 16.35 5.23125L13.9688 7.6125C13.6812 7.9 13.3281 8.04375 12.9094 8.04375C12.4906 8.04375 12.1375 7.9 11.85 7.6125L10.9125 6.675L10.3875 7.2L11.325 8.1375C11.6125 8.425 11.7531 8.77812 11.7469 9.19687C11.7406 9.61562 11.5938 9.96875 11.3062 10.2563L10.2563 11.3062C9.96875 11.5938 9.61562 11.7375 9.19687 11.7375C8.77812 11.7375 8.425 11.5938 8.1375 11.3062L7.2 10.3687L6.675 10.8938L7.6125 11.8313C7.9 12.1188 8.04063 12.475 8.03438 12.9C8.02812 13.325 7.88125 13.6812 7.59375 13.9688L5.2125 16.35C5.075 16.4875 4.91563 16.5938 4.73438 16.6688C4.55312 16.7438 4.3625 16.7812 4.1625 16.7812V16.7812M4.1625 15.3V15.3V15.3L4.95 14.5125L2.2875 11.85L1.5 12.6375V12.6375V12.6375L4.1625 15.3V15.3M5.75625 13.7063L6.54375 12.9187V12.9187V12.9187L3.88125 10.2563V10.2563V10.2563L3.09375 11.0437L5.75625 13.7063V13.7063M9.20625 10.2563V10.2563V10.2563L10.2563 9.20625V9.20625V9.20625L7.59375 6.54375V6.54375V6.54375L6.54375 7.59375V7.59375V7.59375L9.20625 10.2563V10.2563M12.9187 6.54375V6.54375V6.54375L13.7063 5.75625L11.0437 3.09375L10.2563 3.88125V3.88125V3.88125L12.9187 6.54375V6.54375M14.5125 4.95L15.3 4.1625V4.1625V4.1625L12.6375 1.5V1.5V1.5L11.85 2.2875L14.5125 4.95V4.95M8.4 8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4V8.4"
                        fill="#005C55"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#263238] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Telemetri Satelit Aktif: 12 Satelit Terhubung
                      </p>
                    </div>
                  </div>
                </div>
                <div className="location-map-canvas absolute w-[629px] h-[540px] relative">
                  <div className="location-map-pin location-map-pin--one flex flex-col items-start w-10 h-10 absolute left-[257px] top-[239px]">
                    <div className="flex justify-center items-center w-full relative">
                      <div className="absolute -left-1 -top-1 rounded-full bg-[rgba(194,220,255,0.60)] w-12 h-12"></div>
                      <div className="flex justify-center items-center rounded-full bg-[#1E3A5F] w-10 h-10 relative">
                        <div className="absolute rounded-full bg-[rgba(255,255,255,0.00)] shadow-[010px15px-3pxrgba(0,0,0,0.10),04px6px-4pxrgba(0,0,0,0.10)] w-10 h-10"></div>
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
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex py-0.5 px-2 flex-col items-start absolute -right-[27px] -bottom-6 rounded bg-[#FFF] w-fit relative">
                        <div className="absolute rounded bg-[rgba(255,255,255,0.00)] shadow-[01px3px0rgba(0,0,0,0.10),01px2px-1pxrgba(0,0,0,0.10)] w-[95px] h-[18px]"></div>
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Brio • 35 km&#x2F;h
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-10 h-10 absolute left-[156px] top-[120px]">
                    <div className="flex justify-center items-center w-full relative">
                      <div className="absolute -left-2 -top-2 rounded-full bg-[rgba(194,220,255,0.60)] w-14 h-14"></div>
                      <div className="flex justify-center items-center rounded-full bg-[#1E3A5F] w-10 h-10 relative">
                        <div className="absolute rounded-full bg-[rgba(255,255,255,0.00)] shadow-[010px15px-3pxrgba(0,0,0,0.10),04px6px-4pxrgba(0,0,0,0.10)] w-10 h-10"></div>
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
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex py-0.5 px-2 flex-col items-start absolute -right-8 -bottom-6 rounded bg-[#FFF] w-fit relative">
                        <div className="absolute rounded bg-[rgba(255,255,255,0.00)] shadow-[01px3px0rgba(0,0,0,0.10),01px2px-1pxrgba(0,0,0,0.10)] w-[105px] h-[18px]"></div>
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Ertiga • 65 km&#x2F;h
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="location-map-pin location-map-pin--two flex flex-col items-start w-10 h-10 absolute left-[446px] top-[369px]">
                    <div className="flex justify-center items-center w-full relative">
                      <div className="flex justify-center items-center rounded-full bg-[#1E3A5F] w-10 h-10 relative">
                        <div className="absolute rounded-full bg-[rgba(255,255,255,0.00)] shadow-[010px15px-3pxrgba(0,0,0,0.10),04px6px-4pxrgba(0,0,0,0.10)] w-10 h-10"></div>
                        <svg
                          width="11"
                          height="15"
                          viewBox="0 0 11 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 15V0H5.83333C7.22222 0 8.40278 0.486111 9.375 1.45833C10.3472 2.43056 10.8333 3.61111 10.8333 5C10.8333 6.38889 10.3472 7.56944 9.375 8.54167C8.40278 9.51389 7.22222 10 5.83333 10H3.33333V15H0V15M3.33333 6.66667H6C6.45833 6.66667 6.85069 6.50347 7.17708 6.17708C7.50347 5.85069 7.66667 5.45833 7.66667 5C7.66667 4.54167 7.50347 4.14931 7.17708 3.82292C6.85069 3.49653 6.45833 3.33333 6 3.33333H3.33333V6.66667V6.66667"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex py-0.5 px-2 flex-col items-start absolute -right-[22px] -bottom-6 rounded bg-[#FFF] w-fit relative">
                        <div className="absolute rounded bg-[rgba(255,255,255,0.00)] shadow-[01px3px0rgba(0,0,0,0.10),01px2px-1pxrgba(0,0,0,0.10)] w-[84px] h-[18px]"></div>
                        <p className="text-[#263238] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Innova Zenix
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="location-map-pin location-map-pin--active flex flex-col items-start w-11 h-11 absolute left-[286px] top-[313px]">
                    <div className="flex justify-center items-center w-full relative">
                      <div className="flex justify-center items-center rounded-full bg-[#0F766E] w-11 h-11 relative">
                        <div className="absolute rounded-full bg-[rgba(255,255,255,0.00)] shadow-[020px25px-5pxrgba(0,0,0,0.10),08px10px-6pxrgba(0,0,0,0.10)] w-11 h-11"></div>
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.83333 18.3333C1.32917 18.3333 0.897569 18.1538 0.538542 17.7948C0.179514 17.4358 0 17.0042 0 16.5V1.83333C0 1.32917 0.179514 0.897569 0.538542 0.538542C0.897569 0.179514 1.32917 0 1.83333 0H16.5C17.0042 0 17.4358 0.179514 17.7948 0.538542C18.1538 0.897569 18.3333 1.32917 18.3333 1.83333V16.5C18.3333 17.0042 18.1538 17.4358 17.7948 17.7948C17.4358 18.1538 17.0042 18.3333 16.5 18.3333H1.83333V18.3333M1.83333 16.5H16.5V16.5V16.5V1.83333V1.83333V1.83333H1.83333V1.83333V1.83333V16.5V16.5V16.5V16.5M6.41667 11C6.15694 11 5.93924 10.9122 5.76354 10.7365C5.58785 10.5608 5.5 10.3431 5.5 10.0833C5.5 9.82361 5.58785 9.6059 5.76354 9.43021C5.93924 9.25451 6.15694 9.16667 6.41667 9.16667C6.67639 9.16667 6.8941 9.25451 7.06979 9.43021C7.24549 9.6059 7.33333 9.82361 7.33333 10.0833C7.33333 10.3431 7.24549 10.5608 7.06979 10.7365C6.8941 10.9122 6.67639 11 6.41667 11V11M11.9167 11C11.6569 11 11.4392 10.9122 11.2635 10.7365C11.0878 10.5608 11 10.3431 11 10.0833C11 9.82361 11.0878 9.6059 11.2635 9.43021C11.4392 9.25451 11.6569 9.16667 11.9167 9.16667C12.1764 9.16667 12.3941 9.25451 12.5698 9.43021C12.7455 9.6059 12.8333 9.82361 12.8333 10.0833C12.8333 10.3431 12.7455 10.5608 12.5698 10.7365C12.3941 10.9122 12.1764 11 11.9167 11V11M2.75 8.34167V14.3917C2.75 14.6056 2.81875 14.7812 2.95625 14.9187C3.09375 15.0562 3.26944 15.125 3.48333 15.125H3.85C4.06389 15.125 4.23958 15.0562 4.37708 14.9187C4.51458 14.7812 4.58333 14.6056 4.58333 14.3917V13.2917H13.75V14.3917C13.75 14.6056 13.8188 14.7812 13.9563 14.9187C14.0938 15.0562 14.2694 15.125 14.4833 15.125H14.85C15.0639 15.125 15.2396 15.0562 15.3771 14.9187C15.5146 14.7812 15.5833 14.6056 15.5833 14.3917V8.34167L14.0708 3.94167C13.9944 3.72778 13.8684 3.55208 13.6927 3.41458C13.517 3.27708 13.3222 3.20833 13.1083 3.20833H5.225C5.01111 3.20833 4.81632 3.27708 4.64062 3.41458C4.46493 3.55208 4.33889 3.72778 4.2625 3.94167L2.75 8.34167V8.34167M5.17917 6.875L5.82083 5.04167H12.5125L13.1542 6.875H5.17917V6.875M1.83333 1.83333V1.83333V1.83333V1.83333V16.5V16.5V16.5V16.5V16.5V16.5V1.83333V1.83333V1.83333V1.83333M4.58333 11.4583V8.70833H13.75V11.4583H4.58333V11.4583"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <div className="flex py-0.5 px-2 flex-col items-start absolute -right-[43px] -bottom-6 rounded bg-[#00201D] w-fit relative">
                        <div className="absolute rounded bg-[rgba(255,255,255,0.00)] shadow-[01px3px0rgba(0,0,0,0.10),01px2px-1pxrgba(0,0,0,0.10)] w-[131px] h-[18px]"></div>
                        <p className="text-[#A3FAEF] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          Garasi Utama &#40;7 Unit&#41;
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="location-map-popup flex pt-[71px] pr-4 pb-4 pl-4 flex-col items-start gap-3 rounded-2xl bg-[#FFF] w-72 h-[225px] absolute left-[133px] -top-[74px] relative">
                    <div className="absolute rounded-2xl bg-[rgba(255,255,255,0.00)] shadow-[020px25px-5pxrgba(0,0,0,0.10),08px10px-6pxrgba(0,0,0,0.10)] w-72 h-[225px]"></div>
                    <div className="flex p-2.5 flex-col items-start gap-1.5 rounded-xl bg-[#E9F6FD] w-full">
                      <div className="flex justify-between items-center w-full">
                        <div className="flex pr-[31px] flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            Pengemudi &#x2F; Tamu:
                          </p>
                        </div>
                        <div className="flex pr-[59px] flex-col items-start w-fit">
                          <p className="text-[#263238] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                            Ahmad Faisal &#40;Penyewa&#41;
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            Kecepatan:
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#005C55] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                            35 km&#x2F;jam
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            Lokasi Terkini:
                          </p>
                        </div>
                        <div className="flex max-w-[140px] flex-col items-end w-fit overflow-hidden">
                          <p className="text-[#263238] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            Jl. Raya Darmo, SBY
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-full">
                      <div className="flex py-2 px-3 justify-center items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                        <svg
                          width="15"
                          height="8"
                          viewBox="0 0 15 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M1.33333 8C0.966667 8 0.652778 7.86944 0.391667 7.60833C0.130556 7.34722 0 7.03333 0 6.66667C0 6.3 0.130556 5.98611 0.391667 5.725C0.652778 5.46389 0.966667 5.33333 1.33333 5.33333C1.4 5.33333 1.45833 5.33333 1.50833 5.33333C1.55833 5.33333 1.61111 5.34444 1.66667 5.36667L4.7 2.33333C4.67778 2.27778 4.66667 2.225 4.66667 2.175C4.66667 2.125 4.66667 2.06667 4.66667 2C4.66667 1.63333 4.79722 1.31944 5.05833 1.05833C5.31944 0.797222 5.63333 0.666667 6 0.666667C6.36667 0.666667 6.68056 0.797222 6.94167 1.05833C7.20278 1.31944 7.33333 1.63333 7.33333 2C7.33333 2.02222 7.32222 2.13333 7.3 2.33333L9 4.03333C9.05556 4.01111 9.10833 4 9.15833 4C9.20833 4 9.26667 4 9.33333 4C9.4 4 9.45833 4 9.50833 4C9.55833 4 9.61111 4.01111 9.66667 4.03333L12.0333 1.66667C12.0111 1.61111 12 1.55833 12 1.50833C12 1.45833 12 1.4 12 1.33333C12 0.966667 12.1306 0.652778 12.3917 0.391667C12.6528 0.130556 12.9667 0 13.3333 0C13.7 0 14.0139 0.130556 14.275 0.391667C14.5361 0.652778 14.6667 0.966667 14.6667 1.33333C14.6667 1.7 14.5361 2.01389 14.275 2.275C14.0139 2.53611 13.7 2.66667 13.3333 2.66667C13.2667 2.66667 13.2083 2.66667 13.1583 2.66667C13.1083 2.66667 13.0556 2.65556 13 2.63333L10.6333 5C10.6556 5.05556 10.6667 5.10833 10.6667 5.15833C10.6667 5.20833 10.6667 5.26667 10.6667 5.33333C10.6667 5.7 10.5361 6.01389 10.275 6.275C10.0139 6.53611 9.7 6.66667 9.33333 6.66667C8.96667 6.66667 8.65278 6.53611 8.39167 6.275C8.13056 6.01389 8 5.7 8 5.33333C8 5.26667 8 5.20833 8 5.15833C8 5.10833 8.01111 5.05556 8.03333 5L6.33333 3.3C6.27778 3.32222 6.225 3.33333 6.175 3.33333C6.125 3.33333 6.06667 3.33333 6 3.33333C5.97778 3.33333 5.86667 3.32222 5.66667 3.3L2.63333 6.33333C2.65556 6.38889 2.66667 6.44167 2.66667 6.49167C2.66667 6.54167 2.66667 6.6 2.66667 6.66667C2.66667 7.03333 2.53611 7.34722 2.275 7.60833C2.01389 7.86944 1.7 8 1.33333 8V8"
                            fill="white"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Rute Lengkap
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-1 items-start gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="flex py-[29px] px-4 items-center gap-4 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-12 h-12">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M8.45 11.5C8.85 11.9 9.36667 12.0958 10 12.0875C10.6333 12.0792 11.1 11.85 11.4 11.4L17 3L8.6 8.6C8.15 8.9 7.9125 9.35833 7.8875 9.975C7.8625 10.5917 8.05 11.1 8.45 11.5V11.5M10 0C10.9833 0 11.9292 0.1375 12.8375 0.4125C13.7458 0.6875 14.6 1.1 15.4 1.65L13.5 2.85C12.95 2.56667 12.3792 2.35417 11.7875 2.2125C11.1958 2.07083 10.6 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.7 2.09583 11.3917 2.2875 12.075C2.47917 12.7583 2.75 13.4 3.1 14H16.9C17.2833 13.3667 17.5625 12.7083 17.7375 12.025C17.9125 11.3417 18 10.6333 18 9.9C18 9.3 17.9292 8.71667 17.7875 8.15C17.6458 7.58333 17.4333 7.03333 17.15 6.5L18.35 4.6C18.85 5.38333 19.2458 6.21667 19.5375 7.1C19.8292 7.98333 19.9833 8.9 20 9.85C20.0167 10.8 19.9083 11.7083 19.675 12.575C19.4417 13.4417 19.1 14.2667 18.65 15.05C18.4667 15.35 18.2167 15.5833 17.9 15.75C17.5833 15.9167 17.25 16 16.9 16H3.1C2.75 16 2.41667 15.9167 2.1 15.75C1.78333 15.5833 1.53333 15.35 1.35 15.05C0.916667 14.3 0.583333 13.5042 0.35 12.6625C0.116667 11.8208 0 10.9333 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0V0M10.175 7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825V7.825"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        KECEPATAN RATA- RATA
                      </p>
                    </div>
                    <div className="flex items-end w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xl font-bold leading-[26px] w-fit tracking-[-0.01em]">
                        48.2{" "}
                      </p>
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit tracking-[-0.0154em]">
                        km&#x2F;h
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex py-[29px] px-4 items-center gap-4 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-12 h-12">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2V9H11C11.55 9 12.0208 9.19583 12.4125 9.5875C12.8042 9.97917 13 10.45 13 11V15.5C13 15.7833 13.0958 16.0208 13.2875 16.2125C13.4792 16.4042 13.7167 16.5 14 16.5C14.2833 16.5 14.5208 16.4042 14.7125 16.2125C14.9042 16.0208 15 15.7833 15 15.5V8.3C14.85 8.38333 14.6917 8.4375 14.525 8.4625C14.3583 8.4875 14.1833 8.5 14 8.5C13.3 8.5 12.7083 8.25833 12.225 7.775C11.7417 7.29167 11.5 6.7 11.5 6C11.5 5.46667 11.6458 4.9875 11.9375 4.5625C12.2292 4.1375 12.6167 3.83333 13.1 3.65L11 1.55L12.05 0.5L15.75 4.1C16 4.35 16.1875 4.64167 16.3125 4.975C16.4375 5.30833 16.5 5.65 16.5 6V15.5C16.5 16.2 16.2583 16.7917 15.775 17.275C15.2917 17.7583 14.7 18 14 18C13.3 18 12.7083 17.7583 12.225 17.275C11.7417 16.7917 11.5 16.2 11.5 15.5V10.5V10.5V10.5H10V18H0V18M2 7H8V2V2V2H2V2V2V7V7M14 7C14.2833 7 14.5208 6.90417 14.7125 6.7125C14.9042 6.52083 15 6.28333 15 6C15 5.71667 14.9042 5.47917 14.7125 5.2875C14.5208 5.09583 14.2833 5 14 5C13.7167 5 13.4792 5.09583 13.2875 5.2875C13.0958 5.47917 13 5.71667 13 6C13 6.28333 13.0958 6.52083 13.2875 6.7125C13.4792 6.90417 13.7167 7 14 7V7M2 16H8V9H2V16V16M8 16H2V16H8V16V16"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        BAHAN BAKAR RATA-RATA
                      </p>
                    </div>
                    <div className="flex items-end w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-xl font-bold leading-[26px] w-fit tracking-[-0.01em]">
                        78%{" "}
                      </p>
                      <p className="text-[#15803D] font-plusJakartaSans text-[13px] leading-[18px] w-fit tracking-[-0.0154em]">
                        Optimal
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 items-center gap-4 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-12 h-12">
                    <svg
                      width="16"
                      height="20"
                      viewBox="0 0 16 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20V20M8 17.9C9.61667 17.4 10.9667 16.4125 12.05 14.9375C13.1333 13.4625 13.7667 11.8167 13.95 10H8V2.125L2 4.375V9.1C2 9.28333 2 9.43333 2 9.55C2 9.66667 2.01667 9.81667 2.05 10H8V17.9V17.9"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        GEOFENCE GARASI
                      </p>
                    </div>
                    <div className="w-full h-[52px] relative">
                      <p className="text-[#15803D] font-plusJakartaSans text-xl font-bold leading-[26px] w-[59px] h-[26px] absolute left-0 -top-px tracking-[-0.01em]">
                        Aman{" "}
                      </p>
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-[9px] h-[18px] absolute left-[59px] top-[7px] tracking-[-0.0154em]">
                        0
                      </p>
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-[76px] h-[18px] absolute left-0 top-[33px] tracking-[-0.0154em]">
                        Pelanggaran
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex min-w-0 flex-col items-start gap-4 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2 w-fit">
                  <div className="flex pr-7 flex-col items-start w-fit">
                    <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-[22px] w-fit">
                      Daftar Armada Terkini
                    </p>
                  </div>
                  <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#DDEAF2] w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                      3 Dipantau
                    </p>
                  </div>
                </div>
                <div className="flex pr-[23px] flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Urut: Waktu Terkini
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 w-full">
                <div hidden={locationFilter !== 'all' && locationFilter !== 'moving'} className="flex p-4 flex-col items-start gap-3 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-10 h-10">
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
                          <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-5 w-fit">
                            Honda Brio
                          </p>
                        </div>
                        <div className="flex pt-0.5 flex-col items-start w-full">
                          <div className="flex items-center gap-1.5 w-full">
                            <div className="flex pt-0.5 pr-[18px] pb-0.5 pl-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                              <p className="text-[#263238] font-liberationMono text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                                L 2345 BC
                              </p>
                            </div>
                            <div className="flex pr-0.5 flex-col items-start w-fit">
                              <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                                • Compact City
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 pr-[13px] pb-1 pl-2.5 items-center gap-1 rounded-full bg-[#DCFCE7] w-fit">
                      <div className="rounded-full bg-[#15803D] w-1 h-1.5"></div>
                      <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Bergerak • 35 km&#x2F;h
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex items-start gap-2 w-full">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex pt-0.5 flex-col items-start w-fit "
                      >
                        <path
                          d="M4.66667 11.65C5.76667 10.7611 6.59722 9.90556 7.15833 9.08333C7.71944 8.26111 8 7.48889 8 6.76667C8 5.76667 7.68889 4.94444 7.06667 4.3C6.44444 3.65556 5.64444 3.33333 4.66667 3.33333C3.68889 3.33333 2.88889 3.65556 2.26667 4.3C1.64444 4.94444 1.33333 5.76667 1.33333 6.76667C1.33333 7.48889 1.61389 8.26111 2.175 9.08333C2.73611 9.90556 3.56667 10.7611 4.66667 11.65V11.65M4.66667 13.3333C3.1 12.1778 1.93056 11.0556 1.15833 9.96667C0.386111 8.87778 0 7.81111 0 6.76667C0 5.37778 0.433333 4.23611 1.3 3.34167C2.16667 2.44722 3.28889 2 4.66667 2C6.04444 2 7.16667 2.44722 8.03333 3.34167C8.9 4.23611 9.33333 5.37778 9.33333 6.76667C9.33333 7.81111 8.94722 8.87778 8.175 9.96667C7.40278 11.0556 6.23333 12.1778 4.66667 13.3333V13.3333M4.66667 8C5.03333 8 5.34722 7.86944 5.60833 7.60833C5.86944 7.34722 6 7.03333 6 6.66667C6 6.3 5.86944 5.98611 5.60833 5.725C5.34722 5.46389 5.03333 5.33333 4.66667 5.33333C4.3 5.33333 3.98611 5.46389 3.725 5.725C3.46389 5.98611 3.33333 6.3 3.33333 6.66667C3.33333 7.03333 3.46389 7.34722 3.725 7.60833C3.98611 7.86944 4.3 8 4.66667 8V8M0 15.3333V14H9.33333V15.3333H0V15.3333M4.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                          fill="#47607E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit overflow-hidden">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Jl. Raya Darmo No. 82, Surabaya Pusat
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575V8.575M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333M5.83333 10.5C7.12639 10.5 8.22743 10.0455 9.13646 9.13646C10.0455 8.22743 10.5 7.12639 10.5 5.83333C10.5 4.54028 10.0455 3.43924 9.13646 2.53021C8.22743 1.62118 7.12639 1.16667 5.83333 1.16667C4.54028 1.16667 3.43924 1.62118 2.53021 2.53021C1.62118 3.43924 1.16667 4.54028 1.16667 5.83333C1.16667 7.12639 1.62118 8.22743 2.53021 9.13646C3.43924 10.0455 4.54028 10.5 5.83333 10.5V10.5"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Update 1 menit yang lalu
                        </p>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 10.5V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H4.66667C4.9875 0 5.26215 0.114236 5.49062 0.342708C5.7191 0.571181 5.83333 0.845833 5.83333 1.16667V5.25H6.41667C6.7375 5.25 7.01215 5.36424 7.24062 5.59271C7.4691 5.82118 7.58333 6.09583 7.58333 6.41667V9.04167C7.58333 9.20694 7.63924 9.34549 7.75104 9.45729C7.86285 9.5691 8.00139 9.625 8.16667 9.625C8.33194 9.625 8.47049 9.5691 8.58229 9.45729C8.6941 9.34549 8.75 9.20694 8.75 9.04167V4.84167C8.6625 4.89028 8.57014 4.92188 8.47292 4.93646C8.37569 4.95104 8.27361 4.95833 8.16667 4.95833C7.75833 4.95833 7.41319 4.81736 7.13125 4.53542C6.84931 4.25347 6.70833 3.90833 6.70833 3.5C6.70833 3.18889 6.7934 2.90937 6.96354 2.66146C7.13368 2.41354 7.35972 2.23611 7.64167 2.12917L6.41667 0.904167L7.02917 0.291667L9.1875 2.39167C9.33333 2.5375 9.44271 2.70764 9.51562 2.90208C9.58854 3.09653 9.625 3.29583 9.625 3.5V9.04167C9.625 9.45 9.48403 9.79514 9.20208 10.0771C8.92014 10.359 8.575 10.5 8.16667 10.5C7.75833 10.5 7.41319 10.359 7.13125 10.0771C6.84931 9.79514 6.70833 9.45 6.70833 9.04167V6.125V6.125V6.125H5.83333V10.5H0V10.5M1.16667 4.08333H4.66667V1.16667V1.16667V1.16667H1.16667V1.16667V1.16667V4.08333V4.08333M8.16667 4.08333C8.33194 4.08333 8.47049 4.02743 8.58229 3.91563C8.6941 3.80382 8.75 3.66528 8.75 3.5C8.75 3.33472 8.6941 3.19618 8.58229 3.08437C8.47049 2.97257 8.33194 2.91667 8.16667 2.91667C8.00139 2.91667 7.86285 2.97257 7.75104 3.08437C7.63924 3.19618 7.58333 3.33472 7.58333 3.5C7.58333 3.66528 7.63924 3.80382 7.75104 3.91563C7.86285 4.02743 8.00139 4.08333 8.16667 4.08333V4.08333M1.16667 9.33333H4.66667V5.25H1.16667V9.33333V9.33333M4.66667 9.33333H1.16667V9.33333H4.66667V9.33333V9.33333"
                            fill="#005C55"
                          />
                        </svg>
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          65% Tangki
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="271"
                    height="6"
                    viewBox="0 0 271 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[95px] items-center rounded-full bg-[#DDEAF2] w-full h-1.5 overflow-hidden "
                  >
                    <g clipPath="url(#clip0_11_2613)">
                      <rect width="270.667" height="6" rx="3" fill="#DDEAF2" />
                      <rect width="175.918" height="6" rx="3" fill="#005C55" />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_2613">
                        <rect width="270.667" height="6" rx="3" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex pt-2 justify-between items-center border-t border-t-[#E3F0F8] w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Penyewa: Ahmad Faisal
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                        Lihat Detail
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
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div hidden={locationFilter !== 'all' && locationFilter !== 'parked'} className="flex p-4 flex-col items-start gap-3 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-10 h-10">
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
                          <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-5 w-fit">
                            Suzuki Ertiga
                          </p>
                        </div>
                        <div className="flex pt-0.5 flex-col items-start w-full">
                          <div className="flex items-center gap-1.5 w-full">
                            <div className="flex pt-0.5 pr-[7px] pb-0.5 pl-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                              <p className="text-[#263238] font-liberationMono text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                                L 6789 FG
                              </p>
                            </div>
                            <div className="flex pr-1 flex-col items-start w-fit">
                              <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                                • Family MPV
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 pr-[17px] pb-1 pl-2.5 items-center gap-1 rounded-full bg-[#DCFCE7] w-fit">
                      <div className="rounded-full bg-[#15803D] w-[5px] h-1.5"></div>
                      <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Bergerak • 65 km&#x2F;h
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex items-start gap-2 w-full">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex pt-0.5 flex-col items-start w-fit "
                      >
                        <path
                          d="M4.66667 11.65C5.76667 10.7611 6.59722 9.90556 7.15833 9.08333C7.71944 8.26111 8 7.48889 8 6.76667C8 5.76667 7.68889 4.94444 7.06667 4.3C6.44444 3.65556 5.64444 3.33333 4.66667 3.33333C3.68889 3.33333 2.88889 3.65556 2.26667 4.3C1.64444 4.94444 1.33333 5.76667 1.33333 6.76667C1.33333 7.48889 1.61389 8.26111 2.175 9.08333C2.73611 9.90556 3.56667 10.7611 4.66667 11.65V11.65M4.66667 13.3333C3.1 12.1778 1.93056 11.0556 1.15833 9.96667C0.386111 8.87778 0 7.81111 0 6.76667C0 5.37778 0.433333 4.23611 1.3 3.34167C2.16667 2.44722 3.28889 2 4.66667 2C6.04444 2 7.16667 2.44722 8.03333 3.34167C8.9 4.23611 9.33333 5.37778 9.33333 6.76667C9.33333 7.81111 8.94722 8.87778 8.175 9.96667C7.40278 11.0556 6.23333 12.1778 4.66667 13.3333V13.3333M4.66667 8C5.03333 8 5.34722 7.86944 5.60833 7.60833C5.86944 7.34722 6 7.03333 6 6.66667C6 6.3 5.86944 5.98611 5.60833 5.725C5.34722 5.46389 5.03333 5.33333 4.66667 5.33333C4.3 5.33333 3.98611 5.46389 3.725 5.725C3.46389 5.98611 3.33333 6.3 3.33333 6.66667C3.33333 7.03333 3.46389 7.34722 3.725 7.60833C3.98611 7.86944 4.3 8 4.66667 8V8M0 15.3333V14H9.33333V15.3333H0V15.3333M4.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                          fill="#47607E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit overflow-hidden">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Tol Romokalisari KM 14, Gresik
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575V8.575M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333M5.83333 10.5C7.12639 10.5 8.22743 10.0455 9.13646 9.13646C10.0455 8.22743 10.5 7.12639 10.5 5.83333C10.5 4.54028 10.0455 3.43924 9.13646 2.53021C8.22743 1.62118 7.12639 1.16667 5.83333 1.16667C4.54028 1.16667 3.43924 1.62118 2.53021 2.53021C1.62118 3.43924 1.16667 4.54028 1.16667 5.83333C1.16667 7.12639 1.62118 8.22743 2.53021 9.13646C3.43924 10.0455 4.54028 10.5 5.83333 10.5V10.5"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Baru saja
                        </p>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 10.5V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H4.66667C4.9875 0 5.26215 0.114236 5.49062 0.342708C5.7191 0.571181 5.83333 0.845833 5.83333 1.16667V5.25H6.41667C6.7375 5.25 7.01215 5.36424 7.24062 5.59271C7.4691 5.82118 7.58333 6.09583 7.58333 6.41667V9.04167C7.58333 9.20694 7.63924 9.34549 7.75104 9.45729C7.86285 9.5691 8.00139 9.625 8.16667 9.625C8.33194 9.625 8.47049 9.5691 8.58229 9.45729C8.6941 9.34549 8.75 9.20694 8.75 9.04167V4.84167C8.6625 4.89028 8.57014 4.92188 8.47292 4.93646C8.37569 4.95104 8.27361 4.95833 8.16667 4.95833C7.75833 4.95833 7.41319 4.81736 7.13125 4.53542C6.84931 4.25347 6.70833 3.90833 6.70833 3.5C6.70833 3.18889 6.7934 2.90937 6.96354 2.66146C7.13368 2.41354 7.35972 2.23611 7.64167 2.12917L6.41667 0.904167L7.02917 0.291667L9.1875 2.39167C9.33333 2.5375 9.44271 2.70764 9.51562 2.90208C9.58854 3.09653 9.625 3.29583 9.625 3.5V9.04167C9.625 9.45 9.48403 9.79514 9.20208 10.0771C8.92014 10.359 8.575 10.5 8.16667 10.5C7.75833 10.5 7.41319 10.359 7.13125 10.0771C6.84931 9.79514 6.70833 9.45 6.70833 9.04167V6.125V6.125V6.125H5.83333V10.5H0V10.5M1.16667 4.08333H4.66667V1.16667V1.16667V1.16667H1.16667V1.16667V1.16667V4.08333V4.08333M8.16667 4.08333C8.33194 4.08333 8.47049 4.02743 8.58229 3.91563C8.6941 3.80382 8.75 3.66528 8.75 3.5C8.75 3.33472 8.6941 3.19618 8.58229 3.08437C8.47049 2.97257 8.33194 2.91667 8.16667 2.91667C8.00139 2.91667 7.86285 2.97257 7.75104 3.08437C7.63924 3.19618 7.58333 3.33472 7.58333 3.5C7.58333 3.66528 7.63924 3.80382 7.75104 3.91563C7.86285 4.02743 8.00139 4.08333 8.16667 4.08333V4.08333M1.16667 9.33333H4.66667V5.25H1.16667V9.33333V9.33333M4.66667 9.33333H1.16667V9.33333H4.66667V9.33333V9.33333"
                            fill="#005C55"
                          />
                        </svg>
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          80% Tangki
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="271"
                    height="6"
                    viewBox="0 0 271 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[54px] items-center rounded-full bg-[#DDEAF2] w-full h-1.5 overflow-hidden "
                  >
                    <g clipPath="url(#clip0_11_2655)">
                      <rect width="270.667" height="6" rx="3" fill="#DDEAF2" />
                      <rect width="216.527" height="6" rx="3" fill="#005C55" />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_2655">
                        <rect width="270.667" height="6" rx="3" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex pt-2 justify-between items-center border-t border-t-[#E3F0F8] w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Penyewa: PT Surya Abadi
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                        Lihat Detail
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
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 flex-col items-start gap-3 rounded-2xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <div className="flex justify-center items-center rounded-xl bg-[#E3F0F8] w-10 h-10">
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
                          <p className="text-[#263238] font-plusJakartaSans text-base font-bold leading-5 w-fit">
                            Toyota Innova Zenix
                          </p>
                        </div>
                        <div className="flex pt-0.5 flex-col items-start w-full">
                          <div className="flex items-center gap-1.5 w-full">
                            <div className="flex pt-0.5 pr-2.5 pb-0.5 pl-1.5 flex-col items-start rounded bg-[#DDEAF2] w-fit">
                              <p className="text-[#263238] font-liberationMono text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                                L 1122 ZZ
                              </p>
                            </div>
                            <div className="flex pr-1 flex-col items-start w-fit">
                              <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                                • Premium MPV
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 pr-[19px] pb-1 pl-2.5 items-center rounded-full bg-[#DDEAF2] w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                        Parkir Mesin Mati
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex items-start gap-2 w-full">
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex pt-0.5 flex-col items-start w-fit "
                      >
                        <path
                          d="M4.66667 11.65C5.76667 10.7611 6.59722 9.90556 7.15833 9.08333C7.71944 8.26111 8 7.48889 8 6.76667C8 5.76667 7.68889 4.94444 7.06667 4.3C6.44444 3.65556 5.64444 3.33333 4.66667 3.33333C3.68889 3.33333 2.88889 3.65556 2.26667 4.3C1.64444 4.94444 1.33333 5.76667 1.33333 6.76667C1.33333 7.48889 1.61389 8.26111 2.175 9.08333C2.73611 9.90556 3.56667 10.7611 4.66667 11.65V11.65M4.66667 13.3333C3.1 12.1778 1.93056 11.0556 1.15833 9.96667C0.386111 8.87778 0 7.81111 0 6.76667C0 5.37778 0.433333 4.23611 1.3 3.34167C2.16667 2.44722 3.28889 2 4.66667 2C6.04444 2 7.16667 2.44722 8.03333 3.34167C8.9 4.23611 9.33333 5.37778 9.33333 6.76667C9.33333 7.81111 8.94722 8.87778 8.175 9.96667C7.40278 11.0556 6.23333 12.1778 4.66667 13.3333V13.3333M4.66667 8C5.03333 8 5.34722 7.86944 5.60833 7.60833C5.86944 7.34722 6 7.03333 6 6.66667C6 6.3 5.86944 5.98611 5.60833 5.725C5.34722 5.46389 5.03333 5.33333 4.66667 5.33333C4.3 5.33333 3.98611 5.46389 3.725 5.725C3.46389 5.98611 3.33333 6.3 3.33333 6.66667C3.33333 7.03333 3.46389 7.34722 3.725 7.60833C3.98611 7.86944 4.3 8 4.66667 8V8M0 15.3333V14H9.33333V15.3333H0V15.3333M4.66667 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                          fill="#47607E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit overflow-hidden">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                          Drop Zone Terminal 2 Bandara Juanda
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575V8.575M5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667V11.6667M5.83333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333M5.83333 10.5C7.12639 10.5 8.22743 10.0455 9.13646 9.13646C10.0455 8.22743 10.5 7.12639 10.5 5.83333C10.5 4.54028 10.0455 3.43924 9.13646 2.53021C8.22743 1.62118 7.12639 1.16667 5.83333 1.16667C4.54028 1.16667 3.43924 1.62118 2.53021 2.53021C1.62118 3.43924 1.16667 4.54028 1.16667 5.83333C1.16667 7.12639 1.62118 8.22743 2.53021 9.13646C3.43924 10.0455 4.54028 10.5 5.83333 10.5V10.5"
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          4 menit yang lalu
                        </p>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
                        <svg
                          width="10"
                          height="11"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 10.5V1.16667C0 0.845833 0.114236 0.571181 0.342708 0.342708C0.571181 0.114236 0.845833 0 1.16667 0H4.66667C4.9875 0 5.26215 0.114236 5.49062 0.342708C5.7191 0.571181 5.83333 0.845833 5.83333 1.16667V5.25H6.41667C6.7375 5.25 7.01215 5.36424 7.24062 5.59271C7.4691 5.82118 7.58333 6.09583 7.58333 6.41667V9.04167C7.58333 9.20694 7.63924 9.34549 7.75104 9.45729C7.86285 9.5691 8.00139 9.625 8.16667 9.625C8.33194 9.625 8.47049 9.5691 8.58229 9.45729C8.6941 9.34549 8.75 9.20694 8.75 9.04167V4.84167C8.6625 4.89028 8.57014 4.92188 8.47292 4.93646C8.37569 4.95104 8.27361 4.95833 8.16667 4.95833C7.75833 4.95833 7.41319 4.81736 7.13125 4.53542C6.84931 4.25347 6.70833 3.90833 6.70833 3.5C6.70833 3.18889 6.7934 2.90937 6.96354 2.66146C7.13368 2.41354 7.35972 2.23611 7.64167 2.12917L6.41667 0.904167L7.02917 0.291667L9.1875 2.39167C9.33333 2.5375 9.44271 2.70764 9.51562 2.90208C9.58854 3.09653 9.625 3.29583 9.625 3.5V9.04167C9.625 9.45 9.48403 9.79514 9.20208 10.0771C8.92014 10.359 8.575 10.5 8.16667 10.5C7.75833 10.5 7.41319 10.359 7.13125 10.0771C6.84931 9.79514 6.70833 9.45 6.70833 9.04167V6.125V6.125V6.125H5.83333V10.5H0V10.5M1.16667 4.08333H4.66667V1.16667V1.16667V1.16667H1.16667V1.16667V1.16667V4.08333V4.08333M8.16667 4.08333C8.33194 4.08333 8.47049 4.02743 8.58229 3.91563C8.6941 3.80382 8.75 3.66528 8.75 3.5C8.75 3.33472 8.6941 3.19618 8.58229 3.08437C8.47049 2.97257 8.33194 2.91667 8.16667 2.91667C8.00139 2.91667 7.86285 2.97257 7.75104 3.08437C7.63924 3.19618 7.58333 3.33472 7.58333 3.5C7.58333 3.66528 7.63924 3.80382 7.75104 3.91563C7.86285 4.02743 8.00139 4.08333 8.16667 4.08333V4.08333M1.16667 9.33333H4.66667V5.25H1.16667V9.33333V9.33333M4.66667 9.33333H1.16667V9.33333H4.66667V9.33333V9.33333"
                            fill="#005C55"
                          />
                        </svg>
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          90% Tangki
                        </p>
                      </div>
                    </div>
                  </div>
                  <svg
                    width="271"
                    height="6"
                    viewBox="0 0 271 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pr-[27px] items-center rounded-full bg-[#DDEAF2] w-full h-1.5 overflow-hidden "
                  >
                    <g clipPath="url(#clip0_11_2696)">
                      <rect width="270.667" height="6" rx="3" fill="#DDEAF2" />
                      <rect width="243.587" height="6" rx="3" fill="#005C55" />
                    </g>
                    <defs>
                      <clipPath id="clip0_11_2696">
                        <rect width="270.667" height="6" rx="3" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="flex pt-2 justify-between items-center border-t border-t-[#E3F0F8] w-full">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Driver: Bambang S. &#40;Standby&#41;
                      </p>
                    </div>
                    <div className="flex items-center gap-0.5 w-fit">
                      <p className="text-[#005C55] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                        Lihat Detail
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
                          fill="#005C55"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-4 justify-between items-center rounded-2xl bg-[rgba(15,118,110,0.10)] w-full">
                <div className="flex items-center gap-3 w-fit">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2 16H4V8H16V16H18V5.35L10 2.15L2 5.35V16V16M0 18V4L10 0L20 4V18H14V10H6V18H0V18M7 18V16H9V18H7V18M9 15V13H11V15H9V15M11 18V16H13V18H11V18M4 8V8H10H16V8H4V8"
                      fill="#005C55"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#263238] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                        Garasi Utama Jemursari
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        7 Armada Siap Pakai &amp; Diinspeksi
                      </p>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer text-nowrap flex pt-1.5 pr-6 pb-1.5 pl-6 flex-col justify-center items-center rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                  <p className="text-[#005C55] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Buka Roster
                  </p>
                </button>
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
                    Cari plat nomor, unit...
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
            <div className="flex pt-2 pr-2 pb-3.5 pl-2 flex-col justify-center items-center rounded-lg w-fit relative">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex justify-center items-start w-fit "
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
                <g filter="url(#filter0_d_11_2736)">
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
                    id="filter0_d_11_2736"
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
                      result="effect1_dropShadow_11_2736"
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
                      result="effect1_dropShadow_11_2736"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_11_2736"
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
                  Tambah Booking
                </p>
              </div>
            </Link>
            <img
              src="/Profile.png"
              className="max-w-[575.2px] rounded-full shadow-[0001pxrgba(189,201,198,0.60)] w-8 h-8 overflow-hidden max-w-none"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
}