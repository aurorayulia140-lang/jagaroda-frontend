import { Link } from 'react-router-dom'

export default function PageHeader({
  breadcrumbs = [],
  title,
  badge,
  badgeVariant = 'info',
  description,
  actions,
  className = '',
}) {
  return (
    <div
      className={`flex w-full flex-col items-start justify-between gap-4 lg:flex-row lg:items-end ${className}`}
    >
      <div className="flex flex-col items-start gap-1">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#47607E]">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1
              return (
                <div key={crumb.label || idx} className="flex items-center gap-1.5">
                  {idx > 0 && <span className="text-[#94A3B8]">/</span>}
                  {crumb.to && !isLast ? (
                    <Link
                      to={crumb.to}
                      className="font-plusJakartaSans font-medium text-[#47607E] transition-colors hover:text-[#0F766E]"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span
                      className={`font-plusJakartaSans ${
                        isLast ? 'font-semibold text-[#0F766E]' : 'font-medium text-[#47607E]'
                      }`}
                    >
                      {crumb.label}
                    </span>
                  )}
                </div>
              )
            })}
          </nav>
        )}

        {/* Title & Badge */}
        <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
          <h2 className="font-plusJakartaSans text-2xl font-bold leading-tight tracking-tight text-[#111D23] sm:text-[26px]">
            {title}
          </h2>
          {badge && (
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-plusJakartaSans text-[11px] font-semibold tracking-[0.02em] ${
                badgeVariant === 'success'
                  ? 'bg-[#DCFCE7] text-[#15803D]'
                  : badgeVariant === 'warning'
                    ? 'bg-[#FEF3C7] text-[#B45309]'
                    : badgeVariant === 'danger'
                      ? 'bg-[#FEE2E2] text-[#DC2626]'
                      : 'bg-[#E3F0F8] text-[#0F766E]'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="max-w-2xl font-plusJakartaSans text-xs leading-relaxed text-[#47607E] sm:text-sm">
            {description}
          </p>
        )}
      </div>

      {/* Right Side Actions */}
      {actions && (
        <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
          {actions}
        </div>
      )}
    </div>
  )
}
