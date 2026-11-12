import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Notifikasi() {
  const [notificationView, setNotificationView] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [readNotifications, setReadNotifications] = useState([4])
  const unreadCount = 6 - readNotifications.length

  function isNotificationVisible(id, category, dateGroup) {
    const matchesView =
      notificationView === 'all' ||
      (notificationView === 'unread' && !readNotifications.includes(id)) ||
      notificationView === dateGroup
    const matchesCategory = categoryFilter === 'all' || categoryFilter === category
    return matchesView && matchesCategory
  }

  return (
    <div className="notification-page flex min-h-screen w-full flex-col items-start bg-linear-[0deg,#F4FAFF0%,#F4FAFF100%),#FF] relative">
      <div className="flex min-h-[800px] pt-16 flex-col items-start bg-[#F5F7FA] w-full">
        <div className="flex max-w-[1560px] py-6 px-8 flex-col items-start gap-6 w-full">
          <div className="flex justify-between items-end w-full">
            <div className="flex flex-col items-start gap-1 w-fit">
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    Sistem Operasional
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
                    Pusat Notifikasi
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#111D23] font-plusJakartaSans text-[26px] font-bold leading-8 w-fit tracking-[-0.025em]">
                  Pusat Notifikasi &amp; Pengingat Operasional
                </p>
              </div>
              <div className="flex max-w-[768px] flex-col items-start w-full">
                <p className="text-[#3E4947] font-plusJakartaSans text-sm leading-5 w-fit">
                  Semua pengingat penting terkait jadwal handover, pembayaran
                  jatuh tempo, pengingat servis, dan laporan kerusakan armada.
                </p>
              </div>
            </div>
            <div className="flex items-center w-fit">
              <button
                className="flex cursor-pointer py-2.5 px-4 items-center gap-2 rounded-lg bg-[#E3F0F8] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit"
                data-interaction-handled="true"
                onClick={() => setReadNotifications([1, 2, 3, 4, 5, 6])}
                type="button"
              >
                <svg
                  width="17"
                  height="10"
                  viewBox="0 0 17 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-center w-fit "
                >
                  <path
                    d="M4.2375 9.01875L0 4.78125L1.06875 3.73125L4.25625 6.91875V6.91875L5.30625 7.96875L4.2375 9.01875V9.01875M8.475 9.01875L4.2375 4.78125L5.2875 3.7125L8.475 6.9L15.375 0L16.425 1.06875L8.475 9.01875V9.01875M8.475 4.78125L7.40625 3.73125L11.1187 0.01875L12.1875 1.06875L8.475 4.78125V4.78125"
                    fill="#005C55"
                  />
                </svg>
                <div className="flex flex-col items-center w-fit">
                  <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    Tandai Semua Sudah Dibaca
                  </p>
              </div>
              </button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2 rounded-xl bg-[#FFF] p-2 shadow-[01px2px0rgba(0,0,0,0.05)]">
            <div className="flex w-full flex-wrap items-center justify-start gap-1">
              <button aria-pressed={notificationView === 'all'} className={`cursor-pointer text-nowrap flex py-2 px-4 justify-center items-center gap-1 rounded-lg ${notificationView === 'all' ? 'bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setNotificationView('all')} type="button">
                <p className={`${notificationView === 'all' ? 'text-[#FFF]' : 'text-[#47607E]'} font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]`}>
                  Semua Notifikasi{" "}
                </p>
                <div className="flex justify-center items-start opacity-80 w-fit">
                  <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    &#40;12&#41;
                  </p>
                </div>
              </button>
              <button aria-pressed={notificationView === 'unread'} className={`cursor-pointer text-nowrap flex pt-2 pr-4 pb-[7px] pl-4 justify-center items-center gap-1 rounded-lg ${notificationView === 'unread' ? 'bg-[#E3F0F8]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setNotificationView('unread')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Belum Dibaca{" "}
                </p>
                <div className="flex py-0.5 px-1.5 justify-center items-start rounded-full bg-[#FFDAD6] w-fit">
                  <p className="text-[#93000A] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                    {unreadCount}
                  </p>
                </div>
              </button>
              <button aria-pressed={notificationView === 'today'} className={`cursor-pointer text-nowrap flex py-2 px-4 justify-center items-center gap-1 rounded-lg ${notificationView === 'today' ? 'bg-[#E3F0F8]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setNotificationView('today')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Hari Ini{" "}
                </p>
                <div className="flex justify-center items-start opacity-70 w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    &#40;7&#41;
                  </p>
                </div>
              </button>
              <button aria-pressed={notificationView === 'previous'} className={`cursor-pointer text-nowrap flex py-2 px-4 justify-center items-center gap-1 rounded-lg ${notificationView === 'previous' ? 'bg-[#E3F0F8]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setNotificationView('previous')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                  Kemarin &amp; Sebelumnya{" "}
                </p>
                <div className="flex justify-center items-start opacity-70 w-fit">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                    &#40;5&#41;
                  </p>
                </div>
              </button>
            </div>
            <div className="flex w-full flex-wrap items-center justify-start gap-1.5">
              <div className="flex pl-1 flex-col items-start w-fit">
                <p className="text-[#6E7977] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.05em]">
                  KATEGORI:
                </p>
              </div>
              <button aria-pressed={categoryFilter === 'all'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-lg ${categoryFilter === 'all' ? 'bg-[#DDEAF2]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setCategoryFilter('all')} type="button">
                <p className="text-[#111D23] font-plusJakartaSans text-xs font-semibold leading-4 w-fit">
                  Semua Kategori
                </p>
              </button>
              <button aria-pressed={categoryFilter === 'handover'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-lg ${categoryFilter === 'handover' ? 'bg-[#DDEAF2]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setCategoryFilter('handover')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                  Handover &amp; Jadwal
                </p>
              </button>
              <button aria-pressed={categoryFilter === 'payment'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-lg ${categoryFilter === 'payment' ? 'bg-[#DDEAF2]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setCategoryFilter('payment')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                  Pembayaran
                </p>
              </button>
              <button aria-pressed={categoryFilter === 'maintenance'} className={`cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded-lg ${categoryFilter === 'maintenance' ? 'bg-[#DDEAF2]' : ''} w-fit`} data-interaction-handled="true" onClick={() => setCategoryFilter('maintenance')} type="button">
                <p className="text-[#47607E] font-plusJakartaSans text-xs font-medium leading-4 w-fit">
                  Maintenance &amp; Kerusakan
                </p>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start gap-6 w-full xl:grid-cols-2">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex pr-0 justify-between items-center w-full">
                  <div className="flex items-center gap-1 w-fit">
                    <div className="rounded-full bg-[#005C55] w-2.5 h-2.5"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.05em]">
                        HARI INI — 24 OKTOBER 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      4 Prioritas Terpantau
                    </p>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(1, 'handover', 'today')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#FFDAD6] w-10 h-10">
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M1.83333 14.6667V10.0833V10.0833C1.83333 10.4653 1.83333 10.7288 1.83333 10.874C1.83333 11.0191 1.83333 11.0382 1.83333 10.9312V14.6667V14.6667V14.6667M0 10.0833L1.925 4.58333C2.01667 4.30833 2.1809 4.08681 2.41771 3.91875C2.65451 3.75069 2.91806 3.66667 3.20833 3.66667H7.40208C7.35625 3.97222 7.33333 4.27778 7.33333 4.58333C7.33333 4.88889 7.35625 5.19444 7.40208 5.5H3.52917L2.56667 8.25H8.50208C8.76181 8.61667 9.05208 8.9566 9.37292 9.26979C9.69375 9.58299 10.0528 9.85417 10.45 10.0833H1.83333V14.6667H14.6667V10.9312C14.9875 10.8854 15.3007 10.8167 15.6062 10.725C15.9118 10.6333 16.2097 10.5188 16.5 10.3813V17.4167C16.5 17.6764 16.4122 17.8941 16.2365 18.0698C16.0608 18.2455 15.8431 18.3333 15.5833 18.3333H14.6667C14.4069 18.3333 14.1892 18.2455 14.0135 18.0698C13.8378 17.8941 13.75 17.6764 13.75 17.4167V16.5H2.75V17.4167C2.75 17.6764 2.66215 17.8941 2.48646 18.0698C2.31076 18.2455 2.09306 18.3333 1.83333 18.3333H0.916667C0.656944 18.3333 0.439236 18.2455 0.263542 18.0698C0.0878472 17.8941 0 17.6764 0 17.4167V10.0833V10.0833M12.375 13.75C12.7569 13.75 13.0816 13.6163 13.349 13.349C13.6163 13.0816 13.75 12.7569 13.75 12.375C13.75 11.9931 13.6163 11.6684 13.349 11.401C13.0816 11.1337 12.7569 11 12.375 11C11.9931 11 11.6684 11.1337 11.401 11.401C11.1337 11.6684 11 11.9931 11 12.375C11 12.7569 11.1337 13.0816 11.401 13.349C11.6684 13.6163 11.9931 13.75 12.375 13.75V13.75M4.125 13.75C4.50694 13.75 4.8316 13.6163 5.09896 13.349C5.36632 13.0816 5.5 12.7569 5.5 12.375C5.5 11.9931 5.36632 11.6684 5.09896 11.401C4.8316 11.1337 4.50694 11 4.125 11C3.74306 11 3.4184 11.1337 3.15104 11.401C2.88368 11.6684 2.75 11.9931 2.75 12.375C2.75 12.7569 2.88368 13.0816 3.15104 13.349C3.4184 13.6163 3.74306 13.75 4.125 13.75V13.75M13.75 9.16667C12.4819 9.16667 11.401 8.71979 10.5073 7.82604C9.61354 6.93229 9.16667 5.85139 9.16667 4.58333C9.16667 3.33056 9.60972 2.25347 10.4958 1.35208C11.3819 0.450694 12.4667 0 13.75 0C15.0181 0 16.099 0.446875 16.9927 1.34063C17.8865 2.23438 18.3333 3.31528 18.3333 4.58333C18.3333 5.85139 17.8865 6.93229 16.9927 7.82604C16.099 8.71979 15.0181 9.16667 13.75 9.16667V9.16667M13.2917 5.5H14.2083V1.83333H13.2917V5.5V5.5M13.75 7.33333C13.8722 7.33333 13.9792 7.2875 14.0708 7.19583C14.1625 7.10417 14.2083 6.99722 14.2083 6.875C14.2083 6.75278 14.1625 6.64583 14.0708 6.55417C13.9792 6.4625 13.8722 6.41667 13.75 6.41667C13.6278 6.41667 13.5208 6.4625 13.4292 6.55417C13.3375 6.64583 13.2917 6.75278 13.2917 6.875C13.2917 6.99722 13.3375 7.10417 13.4292 7.19583C13.5208 7.2875 13.6278 7.33333 13.75 7.33333V7.33333"
                        fill="#BA1A1A"
                      />
                    </svg>
                  </div>
                  <div className="w-full h-[193px] relative">
                    <div className="flex justify-between items-center flex-wrap w-[541px] absolute left-0 top-0">
                      <div className="flex items-center gap-2 w-fit">
                        <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#FEE2E2] w-fit">
                          <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                            KETERLAMBATAN PENGEMBALIAN
                          </p>
                        </div>
                        <div className="rounded-full bg-[#BA1A1A] w-2 h-2"></div>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          1 jam yang lalu &#40;09:45 WIB&#41;
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[541px] absolute left-0 top-[22px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Daihatsu Xenia &#40;L 9012 EF&#41; Terlambat
                        Dikembalikan
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[541px] absolute left-0 top-[47px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[21.13px] w-fit">
                        Penyewa Rendy Kurniawan seharusnya mengembalikan unit di
                        Pool Gubeng pukul 09:00 WIB. GPS telemetri mendeteksi
                        kendaraan masih bergerak aktif di Jl. Ahmad Yani menuju
                        selatan.
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-[541px] absolute left-0 top-[115px]">
                      <div className="flex p-2.5 items-center gap-2 rounded-lg bg-[#E3F0F8] w-full">
                        <svg
                          width="12"
                          height="15"
                          viewBox="0 0 12 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0.75 14.25L0 13.5L6 0L12 13.5L11.25 14.25L6 12L0.75 14.25V14.25M2.325 11.925L6 10.35L9.675 11.925L6 3.675L2.325 11.925V11.925M6 10.35V10.35V10.35V10.35V10.35V10.35"
                            fill="#005C55"
                          />
                        </svg>
                        <div className="flex flex-col items-start w-fit overflow-hidden">
                          <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                            Kecepatan terkini: 42 km&#x2F;jam • Posisi: Sekitar
                            Wonokromo • Keterlambatan: 45 Menit
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 items-center gap-1 flex-wrap w-[541px] absolute left-0 top-[161px]">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M2.66667 8H8V6.66667H2.66667V8V8M2.66667 6H10.6667V4.66667H2.66667V6V6M2.66667 4H10.6667V2.66667H2.66667V4V4M0 13.3333V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H12C12.3667 0 12.6806 0.130556 12.9417 0.391667C13.2028 0.652778 13.3333 0.966667 13.3333 1.33333V9.33333C13.3333 9.7 13.2028 10.0139 12.9417 10.275C12.6806 10.5361 12.3667 10.6667 12 10.6667H2.66667L0 13.3333V13.3333M2.1 9.33333H12V9.33333V9.33333V1.33333V1.33333V1.33333H1.33333V1.33333V1.33333V10.0833L2.1 9.33333V9.33333M1.33333 9.33333V9.33333V1.33333V1.33333V1.33333V1.33333V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333V9.33333"
                            fill="white"
                          />
                        </svg>
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Hubungi Penyewa &#40;WhatsApp&#41;
                          </p>
                        </div>
                      </div>
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#E3F0F8] w-fit">
                        <svg
                          width="11"
                          height="14"
                          viewBox="0 0 11 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M5.33333 6.66667C5.7 6.66667 6.01389 6.53611 6.275 6.275C6.53611 6.01389 6.66667 5.7 6.66667 5.33333C6.66667 4.96667 6.53611 4.65278 6.275 4.39167C6.01389 4.13056 5.7 4 5.33333 4C4.96667 4 4.65278 4.13056 4.39167 4.39167C4.13056 4.65278 4 4.96667 4 5.33333C4 5.7 4.13056 6.01389 4.39167 6.275C4.65278 6.53611 4.96667 6.66667 5.33333 6.66667V6.66667M5.33333 11.5667C6.68889 10.3222 7.69444 9.19167 8.35 8.175C9.00556 7.15833 9.33333 6.25556 9.33333 5.46667C9.33333 4.25556 8.94722 3.26389 8.175 2.49167C7.40278 1.71944 6.45556 1.33333 5.33333 1.33333C4.21111 1.33333 3.26389 1.71944 2.49167 2.49167C1.71944 3.26389 1.33333 4.25556 1.33333 5.46667C1.33333 6.25556 1.66111 7.15833 2.31667 8.175C2.97222 9.19167 3.97778 10.3222 5.33333 11.5667V11.5667M5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333V13.3333M5.33333 5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Lihat di GPS
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(2, 'payment', 'today')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#FEF3C7] w-10 h-10">
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 17 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M2.75 18.3333C1.98611 18.3333 1.33681 18.066 0.802083 17.5312C0.267361 16.9965 0 16.3472 0 15.5833V12.8333H2.75V0L4.125 1.375L5.5 0L6.875 1.375L8.25 0L9.625 1.375L11 0L12.375 1.375L13.75 0L15.125 1.375L16.5 0V15.5833C16.5 16.3472 16.2326 16.9965 15.6979 17.5312C15.1632 18.066 14.5139 18.3333 13.75 18.3333H2.75V18.3333M13.75 16.5C14.0097 16.5 14.2274 16.4122 14.4031 16.2365C14.5788 16.0608 14.6667 15.8431 14.6667 15.5833V2.75H4.58333V12.8333H12.8333V15.5833C12.8333 15.8431 12.9212 16.0608 13.0969 16.2365C13.2726 16.4122 13.4903 16.5 13.75 16.5V16.5M5.5 6.41667V4.58333H11V6.41667H5.5V6.41667M5.5 9.16667V7.33333H11V9.16667H5.5V9.16667M12.8333 6.41667C12.5736 6.41667 12.3559 6.32882 12.1802 6.15312C12.0045 5.97743 11.9167 5.75972 11.9167 5.5C11.9167 5.24028 12.0045 5.02257 12.1802 4.84688C12.3559 4.67118 12.5736 4.58333 12.8333 4.58333C13.0931 4.58333 13.3108 4.67118 13.4865 4.84688C13.6622 5.02257 13.75 5.24028 13.75 5.5C13.75 5.75972 13.6622 5.97743 13.4865 6.15312C13.3108 6.32882 13.0931 6.41667 12.8333 6.41667V6.41667M12.8333 9.16667C12.5736 9.16667 12.3559 9.07882 12.1802 8.90312C12.0045 8.72743 11.9167 8.50972 11.9167 8.25C11.9167 7.99028 12.0045 7.77257 12.1802 7.59688C12.3559 7.42118 12.5736 7.33333 12.8333 7.33333C13.0931 7.33333 13.3108 7.42118 13.4865 7.59688C13.6622 7.77257 13.75 7.99028 13.75 8.25C13.75 8.50972 13.6622 8.72743 13.4865 8.90312C13.3108 9.07882 13.0931 9.16667 12.8333 9.16667V9.16667M2.75 16.5H11V14.6667H1.83333V15.5833C1.83333 15.8431 1.92118 16.0608 2.09687 16.2365C2.27257 16.4122 2.49028 16.5 2.75 16.5V16.5M1.83333 16.5C1.83333 16.5 1.83333 16.4122 1.83333 16.2365C1.83333 16.0608 1.83333 15.8431 1.83333 15.5833V14.6667V14.6667V16.5V16.5V16.5"
                        fill="#B45309"
                      />
                    </svg>
                  </div>
                  <div className="flex pr-0 flex-col justify-center items-start gap-1 w-full h-[126px]">
                    <div className="flex justify-between items-center flex-wrap w-[541px]">
                      <div className="flex items-center gap-2 w-fit">
                        <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#FEF3C7] w-fit">
                          <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                            PEMBAYARAN JATUH TEMPO
                          </p>
                        </div>
                        <div className="rounded-full bg-[#B45309] w-2 h-2"></div>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          2 jam yang lalu
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Pelunasan Sewa INV-2026-1082 Belum Diterima
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[21.13px] w-fit">
                        Tagihan sisa sebesar Rp 1.300.000 untuk rental unit
                        Daihatsu Xenia belum diselesaikan saat jadwal
                        pengembalian.
                      </p>
                    </div>
                    <div className="flex pt-1 items-center gap-1 flex-wrap w-[541px]">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#DDEAF2] w-fit">
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M0 10.6667V0L12.6667 5.33333L0 10.6667V10.6667M1.33333 8.66667L9.23333 5.33333L1.33333 2V4.33333L5.33333 5.33333L1.33333 6.33333V8.66667V8.66667M1.33333 8.66667V5.33333V2V4.33333V4.33333V6.33333V6.33333V8.66667V8.66667"
                            fill="#005C55"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Kirim Notifikasi Tagihan
                          </p>
                        </div>
                      </div>
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#F4FAFF] w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Tandai Lunas
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(3, 'handover', 'today')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#FEF3C7] w-10 h-10">
                    <svg
                      width="22"
                      height="11"
                      viewBox="0 0 22 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M5.5 7.33333C4.99583 7.33333 4.56424 7.15382 4.20521 6.79479C3.84618 6.43576 3.66667 6.00417 3.66667 5.5C3.66667 4.99583 3.84618 4.56424 4.20521 4.20521C4.56424 3.84618 4.99583 3.66667 5.5 3.66667C6.00417 3.66667 6.43576 3.84618 6.79479 4.20521C7.15382 4.56424 7.33333 4.99583 7.33333 5.5C7.33333 6.00417 7.15382 6.43576 6.79479 6.79479C6.43576 7.15382 6.00417 7.33333 5.5 7.33333V7.33333M5.5 11C3.97222 11 2.67361 10.4653 1.60417 9.39583C0.534722 8.32639 0 7.02778 0 5.5C0 3.97222 0.534722 2.67361 1.60417 1.60417C2.67361 0.534722 3.97222 0 5.5 0C6.52361 0 7.45174 0.252083 8.28438 0.75625C9.11701 1.26042 9.77778 1.925 10.2667 2.75H18.3333L21.0833 5.5L16.9583 9.625L15.125 8.25L13.2917 9.625L11.3438 8.25H10.2667C9.77778 9.075 9.11701 9.73958 8.28438 10.2437C7.45174 10.7479 6.52361 11 5.5 11V11M5.5 9.16667C6.35556 9.16667 7.10799 8.90694 7.75729 8.3875C8.4066 7.86806 8.83819 7.21111 9.05208 6.41667H11.9167L13.2458 7.35625L15.125 5.95833L16.7521 7.21875L18.4708 5.5L17.5542 4.58333H9.05208C8.83819 3.78889 8.4066 3.13194 7.75729 2.6125C7.10799 2.09306 6.35556 1.83333 5.5 1.83333C4.49167 1.83333 3.62847 2.19236 2.91042 2.91042C2.19236 3.62847 1.83333 4.49167 1.83333 5.5C1.83333 6.50833 2.19236 7.37153 2.91042 8.08958C3.62847 8.80764 4.49167 9.16667 5.5 9.16667V9.16667"
                        fill="#B45309"
                      />
                    </svg>
                  </div>
                  <div className="flex pt-0 pr-0 pb-0 pl-0 flex-col justify-center items-start gap-1 w-full h-[147px]">
                    <div className="flex pr-0 justify-between items-center flex-wrap w-[541px]">
                      <div className="flex items-center gap-2 w-fit">
                        <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#FEF3C7] w-fit">
                          <p className="text-[#B45309] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                            PENGAMBILAN UNIT SEGERA
                          </p>
                        </div>
                        <div className="rounded-full bg-[#B45309] w-2 h-2"></div>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          30 menit yang lalu
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Persiapan Serah Terima: Honda Brio Satya &#40;L 2345
                        BC&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[21.13px] w-fit">
                        Dijadwalkan diambil oleh Bpk. Dimas Saputra pukul 10:30
                        WIB &#40;kurang 45 menit&#41;. Pastikan ceklis
                        kebersihan, bahan bakar minimal 75%, dan kelengkapan
                        STNK sudah siap di dalam dashboard kendaraan.
                      </p>
                    </div>
                    <div className="flex pt-1 items-center gap-[4px0] flex-wrap w-[541px]">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.06667 10.0333L9.76667 5.33333L8.83333 4.4L5.06667 8.16667L3.16667 6.26667L2.23333 7.2L5.06667 10.0333V10.0333M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H4.13333C4.27778 0.933333 4.51944 0.611111 4.85833 0.366667C5.19722 0.122222 5.57778 0 6 0C6.42222 0 6.80278 0.122222 7.14167 0.366667C7.48056 0.611111 7.72222 0.933333 7.86667 1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333V13.3333M1.33333 12H10.6667V12V12V2.66667V2.66667V2.66667H1.33333V2.66667V2.66667V12V12V12V12M6 2.16667C6.14444 2.16667 6.26389 2.11944 6.35833 2.025C6.45278 1.93056 6.5 1.81111 6.5 1.66667C6.5 1.52222 6.45278 1.40278 6.35833 1.30833C6.26389 1.21389 6.14444 1.16667 6 1.16667C5.85556 1.16667 5.73611 1.21389 5.64167 1.30833C5.54722 1.40278 5.5 1.52222 5.5 1.66667C5.5 1.81111 5.54722 1.93056 5.64167 2.025C5.73611 2.11944 5.85556 2.16667 6 2.16667V2.16667M1.33333 12V12V12V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V12V12V12V12V12"
                            fill="white"
                          />
                        </svg>
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Buka Berita Acara Handover
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(4, 'payment', 'today')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#DCFCE7] w-10 h-10">
                    <svg
                      width="21"
                      height="15"
                      viewBox="0 0 21 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M11.9167 8.25C11.1528 8.25 10.5035 7.98264 9.96875 7.44792C9.43403 6.91319 9.16667 6.26389 9.16667 5.5C9.16667 4.73611 9.43403 4.08681 9.96875 3.55208C10.5035 3.01736 11.1528 2.75 11.9167 2.75C12.6806 2.75 13.3299 3.01736 13.8646 3.55208C14.3993 4.08681 14.6667 4.73611 14.6667 5.5C14.6667 6.26389 14.3993 6.91319 13.8646 7.44792C13.3299 7.98264 12.6806 8.25 11.9167 8.25V8.25M5.5 11C4.99583 11 4.56424 10.8205 4.20521 10.4615C3.84618 10.1024 3.66667 9.67083 3.66667 9.16667V1.83333C3.66667 1.32917 3.84618 0.897569 4.20521 0.538542C4.56424 0.179514 4.99583 0 5.5 0H18.3333C18.8375 0 19.2691 0.179514 19.6281 0.538542C19.9872 0.897569 20.1667 1.32917 20.1667 1.83333V9.16667C20.1667 9.67083 19.9872 10.1024 19.6281 10.4615C19.2691 10.8205 18.8375 11 18.3333 11H5.5V11M7.33333 9.16667H16.5C16.5 8.6625 16.6795 8.2309 17.0385 7.87187C17.3976 7.51285 17.8292 7.33333 18.3333 7.33333V3.66667C17.8292 3.66667 17.3976 3.48715 17.0385 3.12812C16.6795 2.7691 16.5 2.3375 16.5 1.83333H7.33333C7.33333 2.3375 7.15382 2.7691 6.79479 3.12812C6.43576 3.48715 6.00417 3.66667 5.5 3.66667V7.33333C6.00417 7.33333 6.43576 7.51285 6.79479 7.87187C7.15382 8.2309 7.33333 8.6625 7.33333 9.16667V9.16667M17.4167 14.6667H1.83333C1.32917 14.6667 0.897569 14.4872 0.538542 14.1281C0.179514 13.7691 0 13.3375 0 12.8333V2.75H1.83333V12.8333V12.8333V12.8333H17.4167V14.6667V14.6667M5.5 9.16667V9.16667V9.16667V9.16667V1.83333V1.83333V1.83333V1.83333V1.83333V1.83333V9.16667V9.16667V9.16667V9.16667"
                        fill="#15803D"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex justify-between items-center flex-wrap w-full">
                      <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#DCFCE7] w-fit">
                        <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                          PEMBAYARAN LUNAS
                        </p>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          08:30 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-full">
                        Pembayaran DP Berhasil Diterima via Transfer BCA
                      </p>
                    </div>
                    <div className="flex w-full flex-wrap items-baseline gap-x-1">
                      <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[21.13px]">
                        Pemesanan Toyota Avanza &#40;L 1234 AB&#41; oleh Bpk.
                        Hendra Gunawan sebesar{" "}
                        <span className="text-[#005C55] font-semibold">
                          Rp 2.250.000
                        </span>{" "}
                        telah terverifikasi lunas melalui auto-matching bank
                        statement.
                      </p>
                    </div>
                    <div className="flex pt-1 items-center gap-[4px0] flex-wrap w-full">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#E3F0F8] w-fit">
                        <svg
                          width="11"
                          height="14"
                          viewBox="0 0 11 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M2.66667 10.6667H8V9.33333H2.66667V10.6667V10.6667M2.66667 8H8V6.66667H2.66667V8V8M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V1.33333C0 0.966667 0.130556 0.652778 0.391667 0.391667C0.652778 0.130556 0.966667 0 1.33333 0H6.66667L10.6667 4V12C10.6667 12.3667 10.5361 12.6806 10.275 12.9417C10.0139 13.2028 9.7 13.3333 9.33333 13.3333H1.33333V13.3333M6 4.66667V1.33333H1.33333V1.33333V1.33333V12V12V12H9.33333V12V12V4.66667H6V4.66667M1.33333 1.33333V1.33333V4.66667V4.66667V1.33333V4.66667V4.66667V12V12V12V12V12V12V1.33333V1.33333V1.33333V1.33333"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Lihat Kuitansi
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-2 flex-col items-start gap-4 w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex items-center gap-1 w-fit">
                    <div className="rounded-full bg-[#47607E] w-2.5 h-2.5"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] font-bold leading-4 w-fit tracking-[0.05em]">
                        KEMARIN — 23 OKTOBER 2026
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      2 Arsip Catatan
                    </p>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(5, 'maintenance', 'previous')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#FFDAD6] w-10 h-10">
                    <svg
                      width="21"
                      height="18"
                      viewBox="0 0 21 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M0 17.4167L10.0833 0L20.1667 17.4167H0V17.4167M3.1625 15.5833H17.0042L10.0833 3.66667L3.1625 15.5833V15.5833M10.0833 14.6667C10.3431 14.6667 10.5608 14.5788 10.7365 14.4031C10.9122 14.2274 11 14.0097 11 13.75C11 13.4903 10.9122 13.2726 10.7365 13.0969C10.5608 12.9212 10.3431 12.8333 10.0833 12.8333C9.82361 12.8333 9.6059 12.9212 9.43021 13.0969C9.25451 13.2726 9.16667 13.4903 9.16667 13.75C9.16667 14.0097 9.25451 14.2274 9.43021 14.4031C9.6059 14.5788 9.82361 14.6667 10.0833 14.6667V14.6667M9.16667 11.9167H11V7.33333H9.16667V11.9167V11.9167M10.0833 9.625V9.625V9.625V9.625V9.625"
                        fill="#BA1A1A"
                      />
                    </svg>
                  </div>
                  <div className="flex pr-0 flex-col justify-center items-start gap-1 w-full h-[186px]">
                    <div className="flex justify-between items-center flex-wrap w-[541px]">
                      <div className="flex items-center gap-2 w-fit">
                        <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#FEE2E2] w-fit">
                          <p className="text-[#B91C1C] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                            LAPORAN KERUSAKAN MASUK
                          </p>
                        </div>
                        <div className="rounded-full bg-[#BA1A1A] w-2 h-2"></div>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Kemarin, 16:20 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Laporan Anomali Kampas Rem: Mitsubishi Xpander &#40;W
                        3456 CD&#41;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[21.13px] w-fit">
                        Sensor rem dan inspeksi fisik mendeteksi ketebalan
                        kampas di bawah 32%. Unit telah otomatis dinonaktifkan
                        dari ketersediaan rental hingga perbaikan selesai.
                      </p>
                    </div>
                    <div className="flex max-w-[512px] pt-1 flex-col items-start w-[512px]">
                      <div className="flex max-w-[512px] p-3 flex-col items-start gap-1.5 rounded-lg bg-[#E9F6FD] w-full">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex flex-col items-start w-fit h-full">
                            <p className="text-[#111D23] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              Ketebalan Kampas Rem Depan
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-fit h-full">
                            <p className="text-[#BA1A1A] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                              31% &#40;Kritis&#41;
                            </p>
                          </div>
                        </div>
                        <svg
                          width="488"
                          height="8"
                          viewBox="0 0 488 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex pr-[337px] items-center rounded-full bg-[#DDEAF2] w-full h-2 overflow-hidden "
                        >
                          <g clipPath="url(#clip0_215_728)">
                            <rect
                              width="488"
                              height="8"
                              rx="4"
                              fill="#DDEAF2"
                            />
                            <rect
                              width="151.27"
                              height="8"
                              rx="4"
                              fill="#BA1A1A"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_215_728">
                              <rect
                                width="488"
                                height="8"
                                rx="4"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-1 items-center gap-[4px0] flex-wrap w-[541px]">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#0F766E] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M9.43333 11.8L5.4 7.73333C5.17778 7.82222 4.95278 7.88889 4.725 7.93333C4.49722 7.97778 4.25556 8 4 8C2.88889 8 1.94444 7.61111 1.16667 6.83333C0.388889 6.05556 0 5.11111 0 4C0 3.6 0.0555556 3.21944 0.166667 2.85833C0.277778 2.49722 0.433333 2.15556 0.633333 1.83333L3.06667 4.26667L4.26667 3.06667L1.83333 0.633333C2.15556 0.433333 2.49722 0.277778 2.85833 0.166667C3.21944 0.0555556 3.6 0 4 0C5.11111 0 6.05556 0.388889 6.83333 1.16667C7.61111 1.94444 8 2.88889 8 4C8 4.25556 7.97778 4.49722 7.93333 4.725C7.88889 4.95278 7.82222 5.17778 7.73333 5.4L11.8 9.43333C11.9333 9.56667 12 9.72778 12 9.91667C12 10.1056 11.9333 10.2667 11.8 10.4L10.4 11.8C10.2667 11.9333 10.1056 12 9.91667 12C9.72778 12 9.56667 11.9333 9.43333 11.8V11.8M9.91667 10.3833L10.3667 9.93333L6.1 5.66667C6.3 5.44444 6.44444 5.18611 6.53333 4.89167C6.62222 4.59722 6.66667 4.3 6.66667 4C6.66667 3.33333 6.45278 2.75278 6.025 2.25833C5.59722 1.76389 5.06667 1.46667 4.43333 1.36667L5.66667 2.6C5.8 2.73333 5.86667 2.88889 5.86667 3.06667C5.86667 3.24444 5.8 3.4 5.66667 3.53333L3.53333 5.66667C3.4 5.8 3.24444 5.86667 3.06667 5.86667C2.88889 5.86667 2.73333 5.8 2.6 5.66667L1.36667 4.43333C1.46667 5.06667 1.76389 5.59722 2.25833 6.025C2.75278 6.45278 3.33333 6.66667 4 6.66667C4.28889 6.66667 4.57778 6.62222 4.86667 6.53333C5.15556 6.44444 5.41667 6.30556 5.65 6.11667L9.91667 10.3833V10.3833M5.86667 5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667V5.86667"
                            fill="white"
                          />
                        </svg>
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#FFF] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Cek Jadwal Bengkel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div hidden={!isNotificationVisible(6, 'maintenance', 'previous')} className="flex p-4 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-center items-center rounded-xl bg-[#DBEAFE] w-10 h-10">
                    <svg
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M6.41667 17.4167V14.6667H0V12.8333H14.6667V14.6667H8.25V17.4167H6.41667V17.4167M4.58333 7.79167C4.84306 7.79167 5.06076 7.70382 5.23646 7.52812C5.41215 7.35243 5.5 7.13472 5.5 6.875C5.5 6.61528 5.41215 6.39757 5.23646 6.22188C5.06076 6.04618 4.84306 5.95833 4.58333 5.95833C4.32361 5.95833 4.1059 6.04618 3.93021 6.22188C3.75451 6.39757 3.66667 6.61528 3.66667 6.875C3.66667 7.13472 3.75451 7.35243 3.93021 7.52812C4.1059 7.70382 4.32361 7.79167 4.58333 7.79167V7.79167M10.0833 7.79167C10.3431 7.79167 10.5608 7.70382 10.7365 7.52812C10.9122 7.35243 11 7.13472 11 6.875C11 6.61528 10.9122 6.39757 10.7365 6.22188C10.5608 6.04618 10.3431 5.95833 10.0833 5.95833C9.82361 5.95833 9.6059 6.04618 9.43021 6.22188C9.25451 6.39757 9.16667 6.61528 9.16667 6.875C9.16667 7.13472 9.25451 7.35243 9.43021 7.52812C9.6059 7.70382 9.82361 7.79167 10.0833 7.79167V7.79167M0.916667 5.13333L2.42917 0.733333C2.50556 0.519444 2.6316 0.34375 2.80729 0.20625C2.98299 0.06875 3.17778 0 3.39167 0H11.275C11.4889 0 11.6837 0.06875 11.8594 0.20625C12.0351 0.34375 12.1611 0.519444 12.2375 0.733333L13.75 5.13333V11.1833C13.75 11.3972 13.6812 11.5729 13.5437 11.7104C13.4062 11.8479 13.2306 11.9167 13.0167 11.9167H12.65C12.4361 11.9167 12.2604 11.8479 12.1229 11.7104C11.9854 11.5729 11.9167 11.3972 11.9167 11.1833V10.0833H2.75V11.1833C2.75 11.3972 2.68125 11.5729 2.54375 11.7104C2.40625 11.8479 2.23056 11.9167 2.01667 11.9167H1.65C1.43611 11.9167 1.26042 11.8479 1.12292 11.7104C0.985417 11.5729 0.916667 11.3972 0.916667 11.1833V5.13333V5.13333M3.34583 3.66667H11.3208L10.6792 1.83333H3.9875L3.34583 3.66667V3.66667M2.75 5.5V5.5V8.25V8.25V5.5V5.5M2.75 8.25H11.9167V5.5H2.75V8.25V8.25"
                        fill="#2563EB"
                      />
                    </svg>
                  </div>
                  <div className="flex pr-0 flex-col justify-center items-start gap-1 w-full h-[186px]">
                    <div className="flex justify-between items-center flex-wrap w-[541px]">
                      <div className="flex py-0.5 px-2.5 flex-col items-start rounded-full bg-[#DBEAFE] w-fit">
                        <p className="text-[#2563EB] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                          PENGINGAT SERVIS RUTIN
                        </p>
                      </div>
                      <div className="flex items-center gap-1 w-fit">
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
                            fill="#47607E"
                          />
                        </svg>
                        <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                          Kemarin, 11:00 WIB
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                        Jadwal Servis Berkala Honda Mobilio Mendekati Waktu
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[541px]">
                      <p className="text-[#3E4947] font-plusJakartaSans text-[13px] leading-[21.13px] w-fit">
                        Odometer mendekati 75.000 KM &#40;rekomendasi ganti oli
                        mesin dan filter di Shop &amp; Drive Jemursari&#41;.
                        Estimasi sisa jarak pakai aman sekitar 340 KM.
                      </p>
                    </div>
                    <div className="flex max-w-[512px] pt-1 flex-col items-start w-[512px]">
                      <div className="flex max-w-[512px] p-3 flex-col items-start gap-1.5 rounded-lg bg-[#E9F6FD] w-full">
                        <div className="flex justify-between items-start w-full">
                          <div className="flex flex-col items-start w-fit h-full">
                            <p className="text-[#111D23] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                              Interval Odometer &#40;Target: 75.000 KM&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-fit h-full">
                            <p className="text-[#2563EB] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                              74.660 KM &#40;99.5%&#41;
                            </p>
                          </div>
                        </div>
                        <svg
                          width="488"
                          height="8"
                          viewBox="0 0 488 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex pr-2.5 items-center rounded-full bg-[#DDEAF2] w-full h-2 overflow-hidden "
                        >
                          <g clipPath="url(#clip0_215_759)">
                            <rect
                              width="488"
                              height="8"
                              rx="4"
                              fill="#DDEAF2"
                            />
                            <rect
                              width="478.23"
                              height="8"
                              rx="4"
                              fill="#0047BF"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_215_759">
                              <rect
                                width="488"
                                height="8"
                                rx="4"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-1 items-center gap-[4px0] flex-wrap w-[541px]">
                      <div className="flex py-1.5 px-4 items-center gap-1.5 rounded-lg bg-[#E3F0F8] w-fit">
                        <svg
                          width="12"
                          height="14"
                          viewBox="0 0 12 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-center w-fit "
                        >
                          <path
                            d="M7.66667 10.6667C7.2 10.6667 6.80556 10.5056 6.48333 10.1833C6.16111 9.86111 6 9.46667 6 9C6 8.53333 6.16111 8.13889 6.48333 7.81667C6.80556 7.49444 7.2 7.33333 7.66667 7.33333C8.13333 7.33333 8.52778 7.49444 8.85 7.81667C9.17222 8.13889 9.33333 8.53333 9.33333 9C9.33333 9.46667 9.17222 9.86111 8.85 10.1833C8.52778 10.5056 8.13333 10.6667 7.66667 10.6667V10.6667M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333V13.3333M1.33333 12H10.6667V12V12V5.33333H1.33333V12V12V12V12M1.33333 4H10.6667V2.66667V2.66667V2.66667H1.33333V2.66667V2.66667V4V4M1.33333 4V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V4V4V4"
                            fill="#47607E"
                          />
                        </svg>
                        <div className="flex flex-col items-center w-fit">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Booking Servis
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.05em]">
                      KINERJA RESOLUSI ARMADA
                    </p>
                  </div>
                  <div className="flex justify-center items-center rounded-lg bg-[#E3F0F8] w-8 h-8">
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M1.21875 9.76875L0 8.8875L3.75 2.8875L6 5.5125L9 0.6375L11.25 4.0125L13.7812 0L15 0.88125L11.2875 6.76875L9.05625 3.4125L6.20625 8.04375L3.9375 5.4L1.21875 9.76875V9.76875M10.125 12.75C10.65 12.75 11.0938 12.5688 11.4563 12.2063C11.8188 11.8438 12 11.4 12 10.875C12 10.35 11.8188 9.90625 11.4563 9.54375C11.0938 9.18125 10.65 9 10.125 9C9.6 9 9.15625 9.18125 8.79375 9.54375C8.43125 9.90625 8.25 10.35 8.25 10.875C8.25 11.4 8.43125 11.8438 8.79375 12.2063C9.15625 12.5688 9.6 12.75 10.125 12.75V12.75M13.95 15.75L11.925 13.725C11.6625 13.9 11.3781 14.0312 11.0719 14.1187C10.7656 14.2062 10.45 14.25 10.125 14.25C9.1875 14.25 8.39062 13.9219 7.73438 13.2656C7.07812 12.6094 6.75 11.8125 6.75 10.875C6.75 9.9375 7.07812 9.14062 7.73438 8.48438C8.39062 7.82812 9.1875 7.5 10.125 7.5C11.0625 7.5 11.8594 7.82812 12.5156 8.48438C13.1719 9.14062 13.5 9.9375 13.5 10.875C13.5 11.2 13.4562 11.5156 13.3687 11.8219C13.2812 12.1281 13.15 12.4125 12.975 12.675L15 14.7L13.95 15.75V15.75"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex pt-1 justify-center items-start gap-4 w-full">
                  <div className="flex p-4 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-full tracking-[-0.02em]">
                        14
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[16.25px] w-full">
                          Notifikasi Selesai Ditangani
                        </p>
                      </div>
                    </div>
                    <div className="flex pt-2 flex-col items-start w-full">
                      <div className="flex items-center gap-1 w-full">
                        <svg
                          width="10"
                          height="10"
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M4.08333 9.33333V2.23125L0.816667 5.49792L0 4.66667L4.66667 0L9.33333 4.66667L8.51667 5.49792L5.25 2.23125V9.33333H4.08333V9.33333"
                            fill="#15803D"
                          />
                        </svg>
                        <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          +18% dr minggu lalu
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-4 flex-col items-start rounded-lg bg-[#E9F6FD] w-full">
                    <div className="flex pr-[26px] items-end gap-0.5 w-full h-[38px]">
                      <p className="text-[#005C55] font-plusJakartaSans text-[32px] font-bold leading-[38px] w-8 h-[38px] tracking-[-0.02em]">
                        18
                      </p>
                      <p className="text-[#005C55] font-plusJakartaSans text-base font-semibold leading-[22px] w-7 h-[22px] tracking-[-0.04em]">
                        Mnt
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[16.25px] w-full">
                          Waktu Respon Rata- rata
                        </p>
                      </div>
                    </div>
                    <div className="flex pt-2 flex-col items-start w-full">
                      <div className="flex items-center gap-1 w-full">
                        <svg
                          width="10"
                          height="12"
                          viewBox="0 0 10 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M3.82083 9.45L6.83958 5.83333H4.50625L4.92917 2.52292L2.23125 6.41667H4.25833L3.82083 9.45V9.45M2.33333 11.6667L2.91667 7.58333H0L5.25 0H6.41667L5.83333 4.66667H9.33333L3.5 11.6667H2.33333V11.6667M4.53542 5.97917V5.97917V5.97917V5.97917V5.97917V5.97917V5.97917V5.97917"
                            fill="#005C55"
                          />
                        </svg>
                        <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-semibold leading-[14px] w-fit tracking-[0.02em]">
                          4 mnt lbh cepat
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pt-2 flex-col items-start gap-1 w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col items-start w-fit h-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Tren Respons Mingguan
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit h-full">
                      <p className="text-[#111D23] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                        Sen - Min
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-12 overflow-hidden relative">
                    <svg
                      width="243"
                      height="32"
                      viewBox="0 0 243 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-60 h-[29px] absolute left-[7px] top-2.5 "
                    >
                      <path
                        d="M1.50031 30.3L37.5003 21.9L79.5003 25.5L121.5 9.9L163.5 13.5L205.5 1.5L241.5 6.3"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#005C55"
                      />
                    </svg>
                    <svg
                      width="240"
                      height="39"
                      viewBox="0 0 240 39"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-60 h-[38px] absolute left-[7px] top-2.5 "
                    >
                      <path
                        d="M0 28.8L36 20.4L78 24L120 8.4L162 12L204 0L240 4.8V38.4H0V28.8"
                        fill="#005C55"
                        fillOpacity="0.08"
                      />
                    </svg>
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-2 h-2 absolute left-[207px] top-[5px] "
                    >
                      <path
                        d="M0 4.2C0 6.51804 1.88196 8.4 4.2 8.4C6.51804 8.4 8.4 6.51804 8.4 4.2C8.4 1.88196 6.51804 0 4.2 0C1.88196 0 0 1.88196 0 4.2V4.2"
                        fill="#005C55"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Komposisi Pengingat
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                      Bulan Berjalan
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-full">
                  <div className="flex justify-center items-center w-24 h-24 relative">
                    <div className="w-full h-24 overflow-hidden relative">
                      <svg
                        width="86"
                        height="86"
                        viewBox="0 0 86 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[75px] h-[75px] absolute left-[11px] top-[11px] "
                      >
                        <path
                          d="M42.6666 80C63.2715 80 80 63.2715 80 42.6667C80 22.0618 63.2715 5.33333 42.6666 5.33333C22.0618 5.33333 5.33331 22.0618 5.33331 42.6667C5.33331 63.2715 22.0618 80 42.6666 80V80"
                          strokeWidth="10.6667"
                          stroke="#E3F0F8"
                        />
                      </svg>
                      <svg
                        width="47"
                        height="86"
                        viewBox="0 0 47 86"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[75px] h-[41px] absolute left-[11px] top-[45px] "
                      >
                        <path
                          d="M3.80456 5.33337C17.542 5.33049 30.1712 12.8723 36.6838 24.9679C43.1964 37.0635 42.5401 51.7585 34.9752 63.2254C27.4103 74.6923 14.1591 81.0782 0.476563 79.8507"
                          strokeWidth="10.6667"
                          stroke="#005C55"
                        />
                      </svg>
                      <svg
                        width="40"
                        height="70"
                        viewBox="0 0 40 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[61px] h-[34px] absolute left-[11px] top-[11px] "
                      >
                        <path
                          d="M39.3385 63.9482C25.6199 62.7202 13.6919 54.0385 8.30618 41.3616C2.9205 28.6848 4.95216 14.0724 13.5918 3.34557"
                          strokeWidth="10.6667"
                          stroke="#1E5FE7"
                        />
                      </svg>
                      <svg
                        width="34"
                        height="23"
                        viewBox="0 0 34 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3.5 h-[29px] absolute left-[71px] top-[19px] "
                      >
                        <path
                          d="M4.15356 19.248C11.2405 10.4495 21.9305 5.33342 33.2282 5.33338"
                          strokeWidth="10.6667"
                          stroke="#B45309"
                        />
                      </svg>
                    </div>
                    <div className="flex pb-0.5 flex-col justify-center items-center gap-0.5 absolute left-[31px] top-[33px] w-fit">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#111D23] font-plusJakartaSans text-base font-bold leading-4 w-fit">
                          38
                        </p>
                      </div>
                      <div className="flex pt-0 pr-1 pb-0 pl-1 flex-col justify-center items-center w-[34px]">
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            TOTAL
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1.5 w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2 w-fit overflow-hidden">
                        <div className="rounded-full bg-[#005C55] w-2.5 h-2.5"></div>
                        <div className="flex pr-px flex-col items-start w-fit overflow-hidden">
                          <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                            Jadwal Handover
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-2 flex-col items-start w-fit">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                          45%
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2 w-fit overflow-hidden">
                        <div className="rounded-full bg-[#1E5FE7] w-2.5 h-2.5"></div>
                        <div className="flex flex-col items-start w-fit overflow-hidden">
                          <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                            Pembayaran
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-2 flex-col items-start w-fit">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                          30%
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center gap-2 w-fit overflow-hidden">
                        <div className="rounded-full bg-[#B45309] w-2.5 h-2.5"></div>
                        <div className="flex flex-col items-start w-fit overflow-hidden">
                          <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-fit">
                            Servis &amp; Rusak
                          </p>
                        </div>
                      </div>
                      <div className="flex pl-2 flex-col items-start w-fit">
                        <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-[18px] w-fit">
                          25%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex p-6 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#111D23] font-plusJakartaSans text-base font-semibold leading-[22px] w-fit">
                      Saluran Gateway Notifikasi
                    </p>
                  </div>
                  <div className="flex py-0.5 px-2 flex-col items-start rounded-full bg-[#DCFCE7] w-fit">
                    <p className="text-[#15803D] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-fit tracking-[0.02em]">
                      AKTIF
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                    Konfigurasi penerimaan otomatis tanda bahaya dan pengingat
                    ke perangkat pengelola.
                  </p>
                </div>
                <div className="flex pt-1 flex-col items-start gap-2 w-full">
                  <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#F4FAFF] w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M3.33333 10H10V8.33333H3.33333V10V10M3.33333 7.5H13.3333V5.83333H3.33333V7.5V7.5M3.33333 5H13.3333V3.33333H3.33333V5V5M0 16.6667V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H3.33333L0 16.6667V16.6667M2.625 11.6667H15V11.6667V11.6667V1.66667V1.66667V1.66667H1.66667V1.66667V1.66667V12.6042L2.625 11.6667V11.6667M1.66667 11.6667V11.6667V1.66667V1.66667V1.66667V1.66667V1.66667V1.66667V11.6667V11.6667V11.6667V11.6667V11.6667"
                          fill="#005C55"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            WhatsApp Gateway
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            +62 812-3456-7890
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[2.5px] bg-[#005C55] w-4 h-4"></div>
                  </div>
                  <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#F4FAFF] w-full">
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
                          d="M1.66667 13.3333C1.20833 13.3333 0.815972 13.1701 0.489583 12.8438C0.163194 12.5174 0 12.125 0 11.6667V1.66667C0 1.20833 0.163194 0.815972 0.489583 0.489583C0.815972 0.163194 1.20833 0 1.66667 0H15C15.4583 0 15.8507 0.163194 16.1771 0.489583C16.5035 0.815972 16.6667 1.20833 16.6667 1.66667V11.6667C16.6667 12.125 16.5035 12.5174 16.1771 12.8438C15.8507 13.1701 15.4583 13.3333 15 13.3333H1.66667V13.3333M8.33333 7.5L1.66667 3.33333V11.6667V11.6667V11.6667H15V11.6667V11.6667V3.33333L8.33333 7.5V7.5M8.33333 5.83333L15 1.66667H1.66667L8.33333 5.83333V5.83333M1.66667 3.33333V1.66667V1.66667V3.33333V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V3.33333V3.33333"
                          fill="#47607E"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Email Ringkasan Shift
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            ops.nino@jagaroda.id
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[2.5px] bg-[#005C55] w-4 h-4"></div>
                  </div>
                  <div className="flex p-2.5 justify-between items-center rounded-lg bg-[#F4FAFF] w-full">
                    <div className="flex items-center gap-2 w-fit">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M9.16667 14.5833V12.875C10.4167 12.5139 11.4236 11.8194 12.1875 10.7917C12.9514 9.76389 13.3333 8.59722 13.3333 7.29167C13.3333 5.98611 12.9514 4.81944 12.1875 3.79167C11.4236 2.76389 10.4167 2.06944 9.16667 1.70833V0C10.8889 0.388889 12.2917 1.26042 13.375 2.61458C14.4583 3.96875 15 5.52778 15 7.29167C15 9.05556 14.4583 10.6146 13.375 11.9688C12.2917 13.3229 10.8889 14.1944 9.16667 14.5833V14.5833M0 9.8125V4.8125H3.33333L7.5 0.645833V13.9792L3.33333 9.8125H0V9.8125M9.16667 10.6458V3.9375C9.81944 4.24306 10.3299 4.70139 10.6979 5.3125C11.066 5.92361 11.25 6.59028 11.25 7.3125C11.25 8.02083 11.066 8.67708 10.6979 9.28125C10.3299 9.88542 9.81944 10.3403 9.16667 10.6458V10.6458M5.83333 4.6875L4.04167 6.47917H1.66667V8.14583H4.04167L5.83333 9.9375V4.6875V4.6875M3.75 7.3125V7.3125V7.3125V7.3125V7.3125V7.3125V7.3125V7.3125"
                          fill="#BA1A1A"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#111D23] font-plusJakartaSans text-[13px] font-semibold leading-4 w-fit tracking-[0.01em]">
                            Alarm Audio Mendesak
                          </p>
                        </div>
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#47607E] font-plusJakartaSans text-[11px] font-medium leading-[14px] w-fit tracking-[0.02em]">
                            Bunyikan jika telat &gt;30 mnt
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[2.5px] bg-[#005C55] w-4 h-4"></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full overflow-hidden">
                <div className="flex flex-col justify-center items-start w-full h-32 relative">
                  <img
                    src="/Ab6axucucrvlhcukfvpxdehvbowgnfekayathdzwcykxc0fdlwkjzk54ez1uzpqw5jrxosfmh8bloula6gu1oie9r1v40xqyotzdgnx0it95wqq3edzclvjwv043u2y8wjelahiei1cgxtbhuzg7qslqpnodvmaokhfmejdoa3dg6flgkakzmnfxfij_42dt0hwvc2rj4jkz1arecgtywc9qh4eymx0lisgkduq51sjnkpfouscc2yd2st5w.png"
                    className="w-full h-full overflow-hidden max-w-none"
                    alt="AB6AXuCUCRVlHcukFvPXDEhVBOwgNFEKayathDZwCYkxC0fdLwkjZK54eZ1uZPqw5jrxOSfM-h8bLoUlA6gu1OIe9r1v40XqYOTZdgNx0It95wQq3eDzclvJWv043u2y8WjElAhIeI1cgxtbHuzG7qslQPnoDVmaOkhfmejdoa3dg6fL-gKAkzmnFXFIJ_42dt0hWVc2RJ4jKZ1ARecgTYWc9qH4EYMX0lISgKduq51sjnkPFOUScC2yd2sT5w"
                  />
                  <div className="absolute -right-0 bg-linear-[0deg,#FFF0%,rgba(255,255,255,0.00)50%,rgba(255,255,255,0.00)100%] w-[303px] h-32"></div>
                </div>
                <div className="flex justify-center items-center w-full h-[88px]">
                  <div className="flex p-4 flex-col items-start gap-1 w-[303px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#005C55] font-plusJakartaSans text-[11px] font-bold leading-[14px] w-full tracking-[0.05em]">
                        POOL SURABAYA GUBENG
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#47607E] font-plusJakartaSans text-[13px] leading-[18px] w-full">
                        26 dari 30 unit beroperasi normal. 2 unit memerlukan
                        inspeksi servis terjadwal minggu ini.
                      </p>
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
                <g filter="url(#filter0_d_215_918)">
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
                    id="filter0_d_215_918"
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
                      result="effect1_dropShadow_215_918"
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
                      result="effect1_dropShadow_215_918"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_215_918"
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