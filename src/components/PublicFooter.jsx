import { Link } from 'react-router-dom'
import BrandMark from './BrandMark'

export default function PublicFooter() {
  return (
    <footer id="kontak" className="border-t border-[#DDEAF2] bg-[#17324D] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <BrandMark light />
          <p className="mt-3 max-w-lg font-plusJakartaSans text-sm leading-6 text-[#DDEAF2]">
            Sistem operasional rental untuk membantu menjaga kendaraan, pemesanan, dan perawatan tetap terpantau.
          </p>
          <p className="mt-3 font-plusJakartaSans text-xs text-[#AFC2D3]">
            Informasi kontak resmi belum tersedia.
          </p>
        </div>
        <nav aria-label="Navigasi footer" className="flex flex-wrap gap-x-5 gap-y-3 font-plusJakartaSans text-sm text-[#DDEAF2]">
          <Link to="/#tentang" className="hover:text-white">Tentang Kami</Link>
          <Link to="/#layanan" className="hover:text-white">Layanan</Link>
          <Link to="/#cara-kerja" className="hover:text-white">Cara Kerja</Link>
          <Link to="/signin" className="hover:text-white">Sign In</Link>
          <Link to="/signup" className="hover:text-white">Daftar</Link>
        </nav>
      </div>
      <div className="border-t border-white/10 px-5 py-4 text-center font-plusJakartaSans text-xs text-[#AFC2D3]">
        JagaRoda
      </div>
    </footer>
  )
}