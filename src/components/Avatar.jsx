const colors = {
  blue: 'bg-blue-600',
  violet: 'bg-violet-600',
  green: 'bg-green-600',
}

const sizes = { sm: 'size-10 text-sm', md: 'size-14 text-lg', lg: 'size-16 text-xl' }

export default function Avatar({ initials, variant = 'blue', size = 'md' }) {
  return (
    <span aria-hidden="true" className={`flex shrink-0 items-center justify-center rounded-full font-bold text-white ${colors[variant] ?? colors.blue} ${sizes[size] ?? sizes.md}`}>
      {initials}
    </span>
  )
}
