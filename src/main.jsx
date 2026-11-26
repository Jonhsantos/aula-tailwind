import React from 'react'
import { createRoot } from 'react-dom/client'
import { Alert, BadgeAvatar, ButtonSystem, KpiCard, LoginForm, MiniDashboard, Navbar, PricingCard, ProductCard, ProfileExample, Showcase } from './components/Exercises'
import './index.css'

function App() {
  return (
    <main id="inicio" className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8"><p className="text-sm font-bold uppercase tracking-wide text-blue-600">React + Tailwind CSS</p><h1 className="mt-2 text-3xl font-bold text-slate-900">Board de componentes estáticos</h1><p className="mt-2 text-slate-500">Dez exercícios de composição e reutilização.</p></header>
        <div id="componentes" className="grid items-start gap-6 lg:grid-cols-2">
          <Showcase number="01" title="Button System"><ButtonSystem /></Showcase>
          <Showcase number="02" title="Badge + Avatar"><BadgeAvatar /></Showcase>
          <Showcase number="03" title="Profile Card"><ProfileExample /></Showcase>
          <Showcase number="04" title="Product Card"><ProductCard name="Velocity Runner" category="NEW" description="Lightweight everyday performance sneaker." price="R$ 499" label="RUN" /></Showcase>
          <Showcase number="05" title="Login Form"><LoginForm /></Showcase>
          <Showcase number="06" title="KPI Card"><div className="grid gap-4 sm:grid-cols-2"><KpiCard title="Receita total" value="R$ 24.500" change="↑ 12% no mês" /><KpiCard title="Pedidos" value="384" change="↑ 8% no mês" /></div></Showcase>
          <Showcase number="07" title="Pricing Card"><div className="grid gap-4 sm:grid-cols-2"><PricingCard name="Starter" price="R$ 0" description="Para começar." features={['1 projeto', 'Recursos essenciais']}>Começar</PricingCard><PricingCard name="Pro" price="R$ 49" description="Para crescer." features={['Projetos ilimitados', 'Suporte prioritário']} featured>Escolher Pro</PricingCard></div></Showcase>
          <Showcase number="08" title="Alert / Notification"><div className="space-y-3"><Alert title="Informação">Uma atualização está disponível.</Alert><Alert title="Sucesso" variant="success">Alterações salvas com sucesso.</Alert><Alert title="Atenção" variant="warning">Revise seus dados antes de continuar.</Alert><Alert title="Erro" variant="error">Não foi possível concluir a operação.</Alert></div></Showcase>
          <div className="lg:col-span-2"><Showcase number="09" title="Responsive Navbar"><Navbar brand="Studio" links={[{label:'Início',href:'#inicio'},{label:'Componentes',href:'#componentes'},{label:'Dashboard',href:'#dashboard'}]} /></Showcase></div>
          <div id="dashboard" className="lg:col-span-2"><Showcase number="10" title="Mini Dashboard"><MiniDashboard /></Showcase></div>
        </div>
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
