import { useState } from 'react'

export default function PasswordField({ id, label, value, onChange, error, autoComplete }) {
  const [visible, setVisible] = useState(false)
  const errorId = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="font-plusJakartaSans text-sm font-semibold text-[#17324D]">
        {label}
      </label>
      <div className="mt-2 flex items-center rounded-lg border border-[#C7D6E3] bg-white focus-within:border-[#0F766E] focus-within:ring-2 focus-within:ring-[#0F766E]/15">
        <input
          id={id}
          name={id}
          type={visible ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className={`min-w-0 flex-1 rounded-l-lg bg-transparent px-3.5 py-3 font-plusJakartaSans text-sm text-[#17324D] outline-none ${error ? 'border-y border-l border-[#BA1A1A]' : ''}`}
        />
        <button
          type="button"
          onClick={() => setVisible((current) => !current)}
          aria-label={visible ? 'Sembunyikan password' : 'Tampilkan password'}
          className="rounded-r-lg px-3 py-3 font-plusJakartaSans text-xs font-semibold text-[#0F766E] hover:bg-[#E9F6FD]"
        >
          {visible ? 'Sembunyikan' : 'Tampilkan'}
        </button>
      </div>
      {error && <p id={errorId} role="alert" className="mt-1.5 font-plusJakartaSans text-xs text-[#BA1A1A]">{error}</p>}
    </div>
  )
}