const variants = {
  info: 'bg-blue-50 text-blue-600',
  success: 'bg-green-50 text-green-600',
  warning: 'bg-amber-50 text-amber-700',
}

export default function Badge({ children, variant = 'info' }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${variants[variant] ?? variants.info}`}>
      {children}
    </span>
  )
}
