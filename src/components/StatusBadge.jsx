export default function StatusBadge({
  status,
  variant,
  size = 'md',
  showDot = true,
  className = '',
}) {
  const normalized = (status || '').toLowerCase().trim()

  let resolvedVariant = variant
  if (!resolvedVariant) {
    if (
      normalized.includes('tersedia') ||
      normalized.includes('aktif') ||
      normalized.includes('lunas') ||
      normalized.includes('selesai') ||
      normalized.includes('dikonfirmasi') ||
      normalized.includes('sesuai') ||
      normalized.includes('berhasil') ||
      normalized.includes('terpantau')
    ) {
      resolvedVariant = 'success'
    } else if (
      normalized.includes('disewa') ||
      normalized.includes('berjalan') ||
      normalized.includes('diproses') ||
      normalized.includes('terverifikasi') ||
      normalized.includes('handover')
    ) {
      resolvedVariant = 'info'
    } else if (
      normalized.includes('maintenance') ||
      normalized.includes('servis') ||
      normalized.includes('menunggu') ||
      normalized.includes('antrean') ||
      normalized.includes('jadwal')
    ) {
      resolvedVariant = 'warning'
    } else if (
      normalized.includes('terlambat') ||
      normalized.includes('kerusakan') ||
      normalized.includes('batal') ||
      normalized.includes('ditolak') ||
      normalized.includes('belum') ||
      normalized.includes('ditinjau')
    ) {
      resolvedVariant = 'danger'
    } else {
      resolvedVariant = 'neutral'
    }
  }

  const variantStyles = {
    success: {
      badge: 'bg-[#DCFCE7] text-[#15803D] border-[#BBF7D0]',
      dot: 'bg-[#15803D]',
    },
    info: {
      badge: 'bg-[#DBEAFE] text-[#1E40AF] border-[#BFDBFE]',
      dot: 'bg-[#2563EB]',
    },
    warning: {
      badge: 'bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]',
      dot: 'bg-[#B45309]',
    },
    danger: {
      badge: 'bg-[#FEE2E2] text-[#B91C1C] border-[#FECACA]',
      dot: 'bg-[#DC2626]',
    },
    neutral: {
      badge: 'bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]',
      dot: 'bg-[#64748B]',
    },
  }[resolvedVariant] || {
    badge: 'bg-[#F1F5F9] text-[#475569] border-[#E2E8F0]',
    dot: 'bg-[#64748B]',
  }

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 leading-3',
    md: 'text-[11px] px-2.5 py-0.5 leading-[14px]',
    lg: 'text-xs px-3 py-1 leading-4',
  }[size] || 'text-[11px] px-2.5 py-0.5 leading-[14px]'

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border font-plusJakartaSans font-semibold tracking-[0.02em] whitespace-nowrap transition-colors ${variantStyles.badge} ${sizeStyles} ${className}`}
    >
      {showDot && (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full ${variantStyles.dot}`}
          aria-hidden="true"
        />
      )}
      <span>{status}</span>
    </span>
  )
}

