
import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout, { NotFoundRedirect } from './layouts/AppLayout'
import AdminLayout from './layouts/AdminLayout'
import PublicLayout from './layouts/PublicLayout'

const LandingPage = lazy(() => import('./pages/LandingPage'))
const SignIn = lazy(() => import('./pages/SignIn'))
const SignUp = lazy(() => import('./pages/SignUp'))
const DashboardAdmin = lazy(() => import('./pages/admin/DashboardAdmin'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Kendaraan = lazy(() => import('./pages/Kendaraan'))
const Pemesanan = lazy(() => import('./pages/Pemesanan'))
const Booking = lazy(() => import('./pages/Booking'))
const Detail = lazy(() => import('./pages/Detail'))
const Handover = lazy(() => import('./pages/Handover'))
const Lokasi = lazy(() => import('./pages/Lokasi'))
const Maintenance = lazy(() => import('./pages/Maitenance'))
const Notifikasi = lazy(() => import('./pages/Notifikasi'))
const Pembayaran = lazy(() => import('./pages/Pembayaran'))

const vehicleFallback = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#E9F6FD"/><path d="M0 278 640 122" stroke="#fff" stroke-width="62"/><path d="M0 278 640 122" stroke="#AFC2D3" stroke-width="2" stroke-dasharray="12 14"/><g transform="translate(202 118)"><path d="M36 97h164l-13-40a18 18 0 0 0-17-12H73a18 18 0 0 0-17 12L36 97Z" fill="#BFE8E2" stroke="#0F766E" stroke-width="8" stroke-linejoin="round"/><path d="M44 97v31a14 14 0 0 0 14 14h12v-23h96v23h12a14 14 0 0 0 14-14V97" fill="#fff" stroke="#0F766E" stroke-width="8" stroke-linejoin="round"/><circle cx="83" cy="132" r="17" fill="#17324D" stroke="#fff" stroke-width="7"/><circle cx="157" cy="132" r="17" fill="#17324D" stroke="#fff" stroke-width="7"/></g></svg>')}`
const mapFallback = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 540"><rect width="640" height="540" fill="#D7E4EC"/><path d="M-30 118 685 320M-40 380 620 120M156-30l158 610M470-20 312 560" stroke="#fff" stroke-width="34"/><path d="M-30 118 685 320M-40 380 620 120M156-30l158 610M470-20 312 560" stroke="#AFC2D3" stroke-width="2" stroke-dasharray="11 12"/><circle cx="312" cy="270" r="25" fill="#0F766E" stroke="#fff" stroke-width="8"/><circle cx="312" cy="270" r="7" fill="#fff"/></svg>')}`
const profileFallback = `data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="32" fill="#DDEAF2"/><circle cx="32" cy="24" r="12" fill="#47607E"/><path d="M10 60c2-13 10-20 22-20s20 7 22 20" fill="#0F766E"/></svg>')}`

function App() {
  useEffect(() => {
    function replaceUnavailableImage(event) {
      const image = event.target
      if (!(image instanceof HTMLImageElement) || image.dataset.fallbackApplied) return

      image.dataset.fallbackApplied = 'true'
      if (image.src.includes('Profile')) {
        image.src = profileFallback
        image.alt = 'Profil pengguna'
      } else if (image.src.endsWith('/Image.png')) {
        image.src = mapFallback
        image.alt = 'Peta lokasi armada'
      } else {
        image.src = vehicleFallback
        image.alt = 'Ilustrasi kendaraan'
      }
    }

    window.addEventListener('error', replaceUnavailableImage, true)
    return () => window.removeEventListener('error', replaceUnavailableImage, true)
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardAdmin />} />
            <Route path="*" element={<Navigate to="/admin/dashboard" replace />} />
          </Route>
          <Route element={<AppLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="kendaraan" element={<Kendaraan />} />
            <Route path="kendaraan/detail" element={<Detail />} />
            <Route path="pemesanan" element={<Pemesanan />} />
            <Route path="pemesanan/baru" element={<Booking />} />
            <Route path="handover" element={<Handover />} />
            <Route path="lokasi" element={<Lokasi />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="notifikasi" element={<Notifikasi />} />
            <Route path="pembayaran" element={<Pembayaran />} />
          </Route>
          <Route path="*" element={<NotFoundRedirect />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
