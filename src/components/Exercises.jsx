import Avatar from './Avatar'
import Badge from './Badge'
import Button from './Button'
import ProfileCard from './ProfileCard'

const card = 'rounded-3xl border border-slate-200 bg-white p-6'

export function Showcase({ number, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">EXERCISE {number}</span>
      <h2 className="mt-5 text-2xl font-bold text-slate-900">{title}</h2>
      <div className="mt-5 border-t border-slate-200 pt-8">{children}</div>
    </section>
  )
}

export function ButtonSystem() {
  return <div className="flex flex-wrap gap-3"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="danger">Danger</Button><Button disabled>Disabled</Button></div>
}

export function BadgeAvatar() {
  return <div className="flex flex-wrap items-center gap-6"><Avatar initials="EI" /><Avatar initials="UX" variant="violet" /><Avatar initials="JS" variant="green" /><Badge>Front-end</Badge><Badge variant="success">New</Badge><Badge variant="warning">Warning</Badge></div>
}

export function ProfileExample() {
  return <ProfileCard name="Eduardo Inocencio" role="Professor · React · SPA" initials="EI" category="Front-end" description="Building reusable interfaces with React and Tailwind CSS." />
}

export function ProductCard({ name, category, description, price, label }) {
  return (
    <article className="group w-full max-w-[360px] overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-32 items-center justify-center bg-blue-600 text-4xl font-black text-white transition group-hover:bg-blue-700">{label}</div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2"><h3 className="text-lg font-bold text-slate-900">{name}</h3><span className="rounded-full bg-green-50 px-2 py-1 text-xs font-bold text-green-600">{category}</span></div>
        <p className="mt-3 text-sm text-slate-500">{description}</p>
        <div className="mt-4 flex items-center gap-5"><strong className="text-2xl text-slate-900">{price}</strong><button type="button" className="rounded-xl bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2">Buy</button></div>
      </div>
    </article>
  )
}

function Field({ id, label, type, placeholder }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">{label}</label><input id={id} type={type} placeholder={placeholder} className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200" /></div>
}

export function LoginForm() {
  return <form onSubmit={(event) => event.preventDefault()} className={`${card} w-full max-w-md space-y-4`}><div><h3 className="text-xl font-bold">Welcome back</h3><p className="mt-1 text-sm text-slate-500">Sign in to your account.</p></div><Field id="login-email" label="Email" type="email" placeholder="you@example.com" /><Field id="login-password" label="Password" type="password" placeholder="••••••••" /><Button type="submit" className="w-full">Sign in</Button><p className="text-xs text-slate-500">Demonstração visual, sem autenticação.</p></form>
}

export function KpiCard({ title, value, change }) {
  return <article className={`${card} w-full`}><p className="text-sm font-medium text-slate-500">{title}</p><p className="mt-3 text-3xl font-bold text-slate-900">{value}</p><p className="mt-2 text-sm font-semibold text-emerald-600">{change}</p></article>
}

export function PricingCard({ name, price, description, features, featured, children }) {
  return <article className={`${card} flex h-full flex-col ${featured ? 'border-2 border-blue-600 shadow-lg' : ''}`}><h3 className="text-xl font-bold">{name}</h3><p className="mt-2 text-sm text-slate-500">{description}</p><p className="mt-5 text-3xl font-bold">{price}<span className="text-sm font-normal text-slate-500"> / mês</span></p><ul className="my-6 flex-1 space-y-3 text-sm text-slate-600">{features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul><Button variant={featured ? 'primary' : 'secondary'}>{children}</Button></article>
}

const alertVariants = {
  info: 'border-blue-200 bg-blue-50 text-blue-800',
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  warning: 'border-amber-200 bg-amber-50 text-amber-800',
  error: 'border-red-200 bg-red-50 text-red-800',
}

export function Alert({ title, variant = 'info', children }) {
  return <div role="status" className={`rounded-xl border p-4 ${alertVariants[variant] ?? alertVariants.info}`}><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm">{children}</p></div>
}

export function Navbar({ brand, links }) {
  return <nav aria-label="Navegação principal" className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4"><a href="#inicio" className="text-lg font-black text-blue-600">{brand}</a><div className="flex flex-wrap gap-4">{links.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600">{link.label}</a>)}</div><Button>Get started</Button></nav>
}

const metrics = [
  { title: 'Receita', value: 'R$ 24.500', change: '↑ 12% este mês' },
  { title: 'Pedidos', value: '384', change: '↑ 8% este mês' },
  { title: 'Clientes', value: '1.248', change: '↑ 5% este mês' },
  { title: 'Conversão', value: '3,8%', change: '↑ 2% este mês' },
]

export function MiniDashboard() {
  return <div className="space-y-5 rounded-2xl bg-slate-100 p-4 sm:p-6"><div><h3 className="text-2xl font-bold text-slate-900">Dashboard</h3><p className="mt-1 text-sm text-slate-500">Visão geral dos últimos 30 dias</p></div><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <KpiCard key={metric.title} {...metric} />)}</div><div className={card}><h4 className="font-bold">Atividade recente</h4><ul className="mt-4 divide-y divide-slate-100 text-sm text-slate-600"><li className="py-3">Novo pedido recebido</li><li className="py-3">Novo cliente cadastrado</li><li className="py-3">Relatório mensal atualizado</li></ul></div></div>
}
