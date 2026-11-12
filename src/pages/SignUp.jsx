import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandMark from '../components/BrandMark'
import PasswordField from '../components/PasswordField'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function SignUp() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [errors, setErrors] = useState({})
  const [feedback, setFeedback] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}

    if (!formData.fullName.trim()) nextErrors.fullName = 'Nama lengkap wajib diisi.'
    if (!formData.email.trim()) nextErrors.email = 'Email wajib diisi.'
    else if (!emailPattern.test(formData.email.trim())) nextErrors.email = 'Masukkan format email yang valid.'
    if (!formData.phone.trim()) nextErrors.phone = 'Nomor telepon wajib diisi.'
    if (!formData.password) nextErrors.password = 'Password wajib diisi.'
    else if (formData.password.length < 8) nextErrors.password = 'Password minimal 8 karakter.'
    if (!formData.confirmPassword) nextErrors.confirmPassword = 'Konfirmasi password wajib diisi.'
    else if (formData.password !== formData.confirmPassword) nextErrors.confirmPassword = 'Password dan konfirmasi password harus sama.'

    setErrors(nextErrors)
    setFeedback('')
    if (Object.keys(nextErrors).length === 0) {
      setFeedback('Form tervalidasi. Pendaftaran belum tersimpan karena backend belum terintegrasi.')
    }
  }

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }))
  }

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <aside className="hidden rounded-2xl bg-[#17324D] p-8 text-white md:block lg:p-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#9CF2E8]">
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true"><path d="M12 3.5 19 6v5.5c0 4.1-2.8 7.6-7 9-4.2-1.4-7-4.9-7-9V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h2 className="mt-7 font-plusJakartaSans text-2xl font-bold leading-snug">Mulai dengan informasi yang tertata.</h2>
        <p className="mt-3 font-plusJakartaSans text-sm leading-6 text-[#DDEAF2]">Buat profil untuk menyiapkan akses ke alur operasional kendaraan dan pemesanan JagaRoda.</p>
        <div className="mt-8 h-px bg-white/15" />
        <p className="mt-5 font-plusJakartaSans text-xs leading-5 text-[#AFC2D3]">Form pendaftaran hanya divalidasi pada browser dan belum mengirim atau menyimpan data.</p>
      </aside>
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-xl border border-[#DDEAF2] bg-white p-6 shadow-[0_12px_36px_rgba(23,50,77,0.06)] sm:p-8">
          <div className="mb-6"><BrandMark /></div>
          <p className="font-plusJakartaSans text-xs font-bold tracking-[0.12em] text-[#0F766E]">AKUN JAGARODA</p>
          <h1 className="mt-2 font-plusJakartaSans text-3xl font-bold text-[#17324D]">Sign Up</h1>
          <p className="mt-2 font-plusJakartaSans text-sm leading-6 text-[#47607E]">Lengkapi informasi berikut untuk menyiapkan profil.</p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="signup-name" className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">Nama lengkap</label>
              <input id="signup-name" name="fullName" type="text" autoComplete="name" value={formData.fullName} onChange={(event) => updateField('fullName', event.target.value)} required aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'signup-name-error' : undefined} className={`mt-2 w-full rounded-lg border bg-white px-3.5 py-3 font-plusJakartaSans text-sm text-[#17324D] outline-none focus:ring-2 focus:ring-[#0F766E]/15 ${errors.fullName ? 'border-[#BA1A1A] focus:border-[#BA1A1A]' : 'border-[#C7D6E3] focus:border-[#0F766E]'}`} placeholder="Nama lengkap" />
              {errors.fullName && <p id="signup-name-error" role="alert" className="mt-1.5 font-plusJakartaSans text-xs text-[#BA1A1A]">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="signup-email" className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">Email</label>
              <input id="signup-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'signup-email-error' : undefined} className={`mt-2 w-full rounded-lg border bg-white px-3.5 py-3 font-plusJakartaSans text-sm text-[#17324D] outline-none focus:ring-2 focus:ring-[#0F766E]/15 ${errors.email ? 'border-[#BA1A1A] focus:border-[#BA1A1A]' : 'border-[#C7D6E3] focus:border-[#0F766E]'}`} placeholder="nama@email.com" />
              {errors.email && <p id="signup-email-error" role="alert" className="mt-1.5 font-plusJakartaSans text-xs text-[#BA1A1A]">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="signup-phone" className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">Nomor telepon</label>
              <input id="signup-phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(event) => updateField('phone', event.target.value)} required aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'signup-phone-error' : undefined} className={`mt-2 w-full rounded-lg border bg-white px-3.5 py-3 font-plusJakartaSans text-sm text-[#17324D] outline-none focus:ring-2 focus:ring-[#0F766E]/15 ${errors.phone ? 'border-[#BA1A1A] focus:border-[#BA1A1A]' : 'border-[#C7D6E3] focus:border-[#0F766E]'}`} placeholder="Nomor telepon aktif" />
              {errors.phone && <p id="signup-phone-error" role="alert" className="mt-1.5 font-plusJakartaSans text-xs text-[#BA1A1A]">{errors.phone}</p>}
            </div>
            <PasswordField id="signup-password" label="Password" value={formData.password} onChange={(event) => updateField('password', event.target.value)} error={errors.password} autoComplete="new-password" />
            <PasswordField id="signup-confirm-password" label="Konfirmasi password" value={formData.confirmPassword} onChange={(event) => updateField('confirmPassword', event.target.value)} error={errors.confirmPassword} autoComplete="new-password" />
            {feedback && <p role="status" className="rounded-lg border border-[#BFE8E2] bg-[#F0FBF9] px-3 py-2.5 font-plusJakartaSans text-xs leading-5 text-[#0F625C]">{feedback}</p>}
            <button type="submit" className="w-full rounded-lg bg-[#0F766E] px-4 py-3 font-plusJakartaSans text-sm font-bold text-white hover:bg-[#0B625C]">Sign Up</button>
          </form>
          <p className="mt-5 text-center font-plusJakartaSans text-sm text-[#47607E]">
            Sudah memiliki akun? <Link to="/signin" className="font-bold text-[#0F766E] hover:underline">Sign In</Link>
          </p>
          <Link to="/" className="mt-4 block text-center font-plusJakartaSans text-xs font-semibold text-[#47607E] hover:text-[#0F766E]">Kembali ke Landing Page</Link>
        </div>
      </div>
    </section>
  )
}