import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandMark from '../components/BrandMark'
import PasswordField from '../components/PasswordField'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!formData.email.trim()) nextErrors.email = 'Email wajib diisi.'
    else if (!emailPattern.test(formData.email.trim())) nextErrors.email = 'Masukkan format email yang valid.'
    if (!formData.password) nextErrors.password = 'Password wajib diisi.'

    setErrors(nextErrors)
    setFeedback('')
    if (Object.keys(nextErrors).length === 0) {
      setFeedback('Form tervalidasi. Autentikasi belum terhubung ke backend.')
    }
  }

  return (
    <section className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[1fr_0.85fr] lg:px-8">
      <div className="max-w-xl">
        <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">AKSES PENGELOLA</p>
        <h1 className="mt-4 font-plusJakartaSans text-3xl font-bold text-[#17324D] sm:text-4xl">Sign In</h1>
        <p className="mt-3 font-plusJakartaSans text-sm leading-6 text-[#47607E]">
          Masuk untuk melanjutkan pengelolaan armada dan aktivitas rental.
        </p>
        <div className="mt-8 max-w-md rounded-xl border border-[#DDEAF2] bg-white p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)] sm:p-8">
          <div className="mb-6"><BrandMark /></div>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label htmlFor="signin-email" className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">Email</label>
              <input
                id="signin-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'signin-email-error' : undefined}
                className={`mt-2 w-full rounded-lg border bg-white px-3.5 py-3 font-plusJakartaSans text-sm text-[#17324D] outline-none focus:ring-2 focus:ring-[#0F766E]/15 ${errors.email ? 'border-[#BA1A1A] focus:border-[#BA1A1A]' : 'border-[#C7D6E3] focus:border-[#0F766E]'}`}
                placeholder="nama@email.com"
              />
              {errors.email && <p id="signin-email-error" role="alert" className="mt-1.5 font-plusJakartaSans text-xs text-[#BA1A1A]">{errors.email}</p>}
            </div>
            <PasswordField
              id="signin-password"
              label="Password"
              value={formData.password}
              onChange={(event) => setFormData((current) => ({ ...current, password: event.target.value }))}
              error={errors.password}
              autoComplete="current-password"
            />
            <label className="flex w-fit items-center gap-2 font-plusJakartaSans text-sm text-[#47607E]">
              <input
                type="checkbox"
                checked={formData.remember}
                onChange={(event) => setFormData((current) => ({ ...current, remember: event.target.checked }))}
                className="h-4 w-4 accent-[#0F766E]"
              />
              Remember Me
            </label>
            {feedback && <p role="status" className="rounded-lg border border-[#BFE8E2] bg-[#F0FBF9] px-3 py-2.5 font-plusJakartaSans text-xs leading-5 text-[#0F625C]">{feedback}</p>}
            <button type="submit" className="w-full rounded-lg bg-[#0F766E] px-4 py-3 font-plusJakartaSans text-sm font-bold text-white hover:bg-[#0B625C]">
              Sign In
            </button>
          </form>
          <p className="mt-5 text-center font-plusJakartaSans text-sm text-[#47607E]">
            Belum memiliki akun? <Link to="/signup" className="font-bold text-[#0F766E] hover:underline">Sign Up</Link>
          </p>
          <Link to="/" className="mt-4 block text-center font-plusJakartaSans text-xs font-semibold text-[#47607E] hover:text-[#0F766E]">Kembali ke Landing Page</Link>
        </div>
      </div>
      <aside className="hidden rounded-2xl bg-[#17324D] p-8 text-white md:block lg:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CF2E8]">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M4 17.5V7.8a1.8 1.8 0 0 1 1.8-1.8h12.4A1.8 1.8 0 0 1 20 7.8v9.7M4 14h16M8 18h.01M16 18h.01M6 14l1.2-4.1A1.5 1.5 0 0 1 8.6 8.8h6.8a1.5 1.5 0 0 1 1.4 1.1L18 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h2 className="mt-7 font-plusJakartaSans text-2xl font-bold leading-snug">Satu alur untuk armada dan aktivitas rental.</h2>
        <p className="mt-3 font-plusJakartaSans text-sm leading-6 text-[#DDEAF2]">Dashboard operasional JagaRoda menyatukan informasi kendaraan, pemesanan, handover, lokasi, dan perawatan.</p>
        <div className="mt-8 h-px bg-white/15" />
        <p className="mt-5 font-plusJakartaSans text-xs leading-5 text-[#AFC2D3]">Autentikasi akun belum diaktifkan. Form ini hanya memeriksa input pada browser.</p>
      </aside>
    </section>
  )
}