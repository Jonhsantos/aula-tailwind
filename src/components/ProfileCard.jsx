import Avatar from './Avatar'
import Badge from './Badge'
import Button from './Button'

export default function ProfileCard({ name, role, initials, category, description }) {
  return (
    <article className="w-full max-w-[420px] rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center gap-4">
        <Avatar initials={initials} size="lg" />
        <div>
          <Badge>{category}</Badge>
          <h1 className="mt-1 text-xl font-bold text-slate-900">{name}</h1>
          <p className="mt-1 text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <p className="mt-5 text-sm leading-6 text-slate-500">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button className="w-[180px] max-w-full">Follow</Button>
        <Button variant="secondary" className="w-[130px] max-w-full">Profile</Button>
      </div>
    </article>
  )
}
