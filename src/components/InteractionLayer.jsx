import { useState } from 'react'

const completionAction = /tandai|konfirmasi|verifikasi|lunas|selesai/i
const destructiveAction = /hapus|delete/i
const draftAction = /tambah|catat|jadwalkan|lapor|edit|simpan|inspeksi/i
const actionText = /lihat detail|lihat semua|pantau gps|ekspor|unduh|perbarui lokasi|atur pengalihan|bandingkan jadwal|tandai|konfirmasi|verifikasi|lunas|selesai|hapus|delete|tambah|catat|jadwalkan|lapor|edit|simpan|inspeksi|filter|hari ini|besok|mingguan|bulanan|harian/i

function getActionLabel(element) {
  const label = element.getAttribute('aria-label') || element.innerText || element.textContent
  return label?.replace(/\s+/g, ' ').trim() || 'Aksi'
}

export default function InteractionLayer({ children }) {
  const [dialog, setDialog] = useState(null)
  const [draft, setDraft] = useState('')
  const [savedDraft, setSavedDraft] = useState('')
  const [feedback, setFeedback] = useState('')

  function handleClick(event) {
    const target = event.target instanceof Element ? event.target : null
    const button = target?.closest('button')
    if (target?.closest('[data-interaction-handled="true"]') || (button?.type === 'submit' && button.form)) return
    if (target?.closest('a, input, select, textarea, [role="dialog"]')) return

    const iconAction = target?.closest('svg')?.parentElement
    const actionElement = button || target?.closest('[data-interaction-action]') || target?.closest('p') || iconAction
    if (!actionElement) return

    const label = getActionLabel(actionElement)
    if (!button && !actionText.test(label)) return

    const vehicleCard = target?.closest('[data-vehicle-card]')
    const vehicle = vehicleCard && /lihat detail/i.test(label)
      ? {
          name: vehicleCard.dataset.vehicleName,
          plate: vehicleCard.dataset.vehiclePlate,
          status: vehicleCard.dataset.vehicleStatus,
          image: vehicleCard.querySelector('img')?.src,
          details: vehicleCard.innerText.replace(/Lihat detail/gi, '').replace(/\n{2,}/g, '\n').trim(),
        }
      : null
    setDraft('')
    setSavedDraft('')
    setFeedback('')
    setDialog({
      action: vehicle ? `Detail ${vehicle.name}` : label,
      element: button || actionElement,
      vehicle,
      kind: vehicle
        ? 'vehicle'
        : destructiveAction.test(label)
        ? 'delete'
        : completionAction.test(label)
          ? 'complete'
          : draftAction.test(label)
            ? 'draft'
            : 'info',
    })
  }

  function closeDialog() {
    setDialog(null)
    setDraft('')
    setSavedDraft('')
    setFeedback('')
  }

  function confirmAction() {
    const { kind } = dialog
    if (kind === 'delete') {
      setFeedback('Konfirmasi penghapusan diterima, tetapi data contoh tidak dihapus karena belum ada penyimpanan lokal untuk aksi ini.')
    } else {
      setFeedback('Konfirmasi diterima untuk sesi ini. Status tidak diubah permanen karena aksi ini belum terhubung ke penyimpanan.')
    }
    setDialog({ ...dialog, kind: 'result' })
  }

  function saveDraft(event) {
    event.preventDefault()
    if (!draft.trim()) {
      setFeedback('Isi keterangan terlebih dahulu.')
      return
    }
    setSavedDraft(draft.trim())
    setFeedback('Draf tercatat sementara selama halaman ini terbuka. Data tidak dikirim atau disimpan ke backend.')
    setDialog({ ...dialog, kind: 'result' })
  }

  return (
    <div onClick={handleClick}>
      {children}
      {dialog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#17324D]/45 p-4"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeDialog()
          }}
        >
          <section
            aria-labelledby="page-action-title"
            aria-modal="true"
            className="w-full max-w-lg rounded-2xl border border-[#DDEAF2] bg-white p-6 shadow-2xl"
            data-interaction-layer="true"
            role="dialog"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="page-action-title" className="font-plusJakartaSans text-lg font-bold text-[#17324D]">
                  {dialog.kind === 'result' ? 'Aksi selesai' : dialog.action}
                </h2>
                <p className="mt-2 font-plusJakartaSans text-sm leading-6 text-[#47607E]">
                  {dialog.kind === 'vehicle'
                    ? `${dialog.vehicle.plate} • Status ${dialog.vehicle.status}. Informasi berasal dari data contoh halaman ini.`
                    : dialog.kind === 'delete'
                    ? 'Hapus data contoh dari tampilan? Tindakan ini hanya berlaku selama sesi ini.'
                    : dialog.kind === 'complete'
                      ? 'Konfirmasi perubahan status pada tampilan lokal? Perubahan belum terhubung ke backend.'
                      : dialog.kind === 'draft'
                        ? 'Masukkan keterangan untuk membuat draf lokal. Data tidak dikirim atau disimpan permanen.'
                        : 'Kontrol ini dibuka sebagai panel informasi. Data operasional pada halaman ini masih berupa contoh lokal.'}
                </p>
              </div>
              <button
                aria-label="Tutup"
                className="rounded-lg px-2 py-1 font-plusJakartaSans text-xl leading-none text-[#47607E] hover:bg-[#E9F6FD]"
                data-interaction-handled="true"
                onClick={closeDialog}
                type="button"
              >
                ×
              </button>
            </div>

            {dialog.kind === 'vehicle' && (
              <div className="mt-4 grid gap-4 sm:grid-cols-[150px_minmax(0,1fr)]">
                {dialog.vehicle.image && (
                  <img
                    alt={dialog.vehicle.name}
                    className="h-28 w-full rounded-lg object-cover sm:h-32"
                    src={dialog.vehicle.image}
                  />
                )}
                <p className="max-h-48 overflow-auto whitespace-pre-line rounded-lg bg-[#F5F7FA] p-3 font-plusJakartaSans text-sm leading-6 text-[#263238]">
                  {dialog.vehicle.details}
                </p>
              </div>
            )}

            {dialog.kind === 'draft' && (
              <form className="mt-4 space-y-3" onSubmit={saveDraft}>
                <label className="block font-plusJakartaSans text-sm font-semibold text-[#17324D]">
                  Keterangan
                  <textarea
                    autoFocus
                    className="mt-1.5 min-h-24 w-full rounded-lg border border-[#C7D6E3] px-3 py-2 font-plusJakartaSans text-sm outline-none focus:border-[#0F766E]"
                    onChange={(event) => setDraft(event.target.value)}
                    required
                    value={draft}
                  />
                </label>
                <button className="rounded-lg bg-[#0F766E] px-4 py-2 font-plusJakartaSans text-sm font-semibold text-white" data-interaction-handled="true" type="submit">
                  Simpan draf lokal
                </button>
              </form>
            )}

            {savedDraft && <p className="mt-3 rounded-lg bg-[#F0FBF9] p-3 font-plusJakartaSans text-sm text-[#0F625C]">{savedDraft}</p>}
            {feedback && <p aria-live="polite" className="mt-3 rounded-lg bg-[#F0FBF9] p-3 font-plusJakartaSans text-sm text-[#0F625C]">{feedback}</p>}

            <div className="mt-6 flex justify-end gap-2">
              {dialog.kind === 'delete' || dialog.kind === 'complete' ? (
                <button className="rounded-lg border border-[#DDEAF2] px-4 py-2 font-plusJakartaSans text-sm font-semibold text-[#47607E]" data-interaction-handled="true" onClick={closeDialog} type="button">
                  Batal
                </button>
              ) : null}
              {dialog.kind === 'delete' || dialog.kind === 'complete' ? (
                <button className="rounded-lg bg-[#0F766E] px-4 py-2 font-plusJakartaSans text-sm font-semibold text-white" data-interaction-handled="true" onClick={confirmAction} type="button">
                  Konfirmasi
                </button>
              ) : (
                <button className="rounded-lg bg-[#0F766E] px-4 py-2 font-plusJakartaSans text-sm font-semibold text-white" data-interaction-handled="true" onClick={closeDialog} type="button">
                  Tutup
                </button>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
