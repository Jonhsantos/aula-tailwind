# Laboratórios — Tailwind Play

Os trechos abaixo são independentes. Para cada laboratório, abra o
[Tailwind Play](https://play.tailwindcss.com/), coloque o CSS no painel CSS e o
HTML no painel HTML.

## 01 — Card de Perfil: utility-first

O cartão usa flexbox para alinhar o avatar e as informações. O fundo neutro,
a borda discreta, o avatar azul e os botões seguem a referência visual do
exercício. Substitua o nome e as iniciais pelos seus dados.

**CSS**

```css
@import "tailwindcss";
```

**HTML**

```html
<main class="flex min-h-screen items-center justify-center bg-slate-100 p-6">
  <article class="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div class="flex items-center gap-4">
      <div class="flex size-16 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white" aria-hidden="true">
        SN
      </div>
      <div>
        <span class="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase text-blue-600">
          Front-end
        </span>
        <h1 class="mt-1 text-xl font-bold text-slate-900">Seu Nome</h1>
        <p class="mt-1 text-sm text-slate-500">FullStack Developer · React · Node · PHP · Angular · Laravel</p>
      </div>
    </div>

    <p class="mt-5 text-sm leading-6 text-slate-500">
      Estudando como pequenas utilities podem ser combinadas para construir
      uma interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div class="mt-4 flex flex-wrap gap-3">
      <button type="button" class="rounded-xl bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
        Seguir
      </button>
      <button type="button" class="rounded-xl bg-slate-200 px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600">
        Perfil
      </button>
    </div>
  </article>
</main>
```

**Classes importantes:** `min-h-screen` ocupa ao menos a altura da janela;
`flex items-center justify-center` centraliza o cartão; `max-w-xl` limita sua
largura; `size-16 rounded-full` forma o avatar; e `focus-visible:*` destaca os
botões na navegação por teclado.

## 02 — Product Grid: estados e responsividade

Use o mesmo CSS do laboratório 01. O grid tem uma coluna no celular, duas em
`sm` e três em `lg`. O terceiro botão é realmente desabilitado com o atributo
HTML `disabled`.

```html
<main class="min-h-screen bg-slate-900 px-6 py-12 text-white">
  <section class="mx-auto max-w-6xl">
    <header class="mb-8">
      <span class="text-sm font-bold uppercase tracking-wide text-cyan-400">Tailwind Play</span>
      <h1 class="mt-2 text-3xl font-bold">Product Grid Responsivo</h1>
      <p class="mt-2 text-slate-300">Pratique breakpoints, Grid, hover, focus, active e disabled.</p>
    </header>
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
        <div class="bg-cyan-500 p-8 text-center text-4xl font-bold text-slate-900">01</div>
        <div class="space-y-3 p-5">
          <span class="text-xs font-bold uppercase text-cyan-600">Starter</span>
          <h2 class="text-xl font-bold">UI Foundations</h2>
          <p class="text-sm text-slate-500">Layout, spacing, tipografia e cores.</p>
          <button type="button" class="w-full rounded-xl bg-cyan-500 px-4 py-3 font-semibold text-slate-950 hover:bg-cyan-400 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600">Escolher</button>
        </div>
      </article>
      <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
        <div class="bg-violet-600 p-8 text-center text-4xl font-bold text-white">02</div>
        <div class="space-y-3 p-5">
          <span class="text-xs font-bold uppercase text-violet-600">Intermediate</span>
          <h2 class="text-xl font-bold">Responsive UI</h2>
          <p class="text-sm text-slate-500">Breakpoints e variantes condicionais.</p>
          <button type="button" class="w-full rounded-xl bg-violet-600 px-4 py-3 font-semibold text-white hover:bg-violet-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600">Escolher</button>
        </div>
      </article>
      <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:-translate-y-1 hover:shadow-xl">
        <div class="bg-slate-700 p-8 text-center text-4xl font-bold text-white">03</div>
        <div class="space-y-3 p-5">
          <span class="text-xs font-bold uppercase text-slate-500">Locked</span>
          <h2 class="text-xl font-bold">Advanced UI</h2>
          <p class="text-sm text-slate-500">Este plano ainda está indisponível.</p>
          <button type="button" disabled class="w-full rounded-xl bg-slate-200 px-4 py-3 font-semibold text-slate-500 disabled:cursor-not-allowed disabled:opacity-70">Indisponível</button>
        </div>
      </article>
    </div>
  </section>
</main>
```

`hover:` altera a apresentação ao passar o mouse; `active:` responde ao
pressionamento e `focus-visible:` mostra o foco de teclado.

## 03 — Theme Lab: tokens, dark mode e layer

**CSS**

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-brand: #4f46e5;
}

@layer components {
  .panel {
    @apply rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800;
  }
  .button-brand {
    @apply rounded-xl bg-brand px-5 py-3 font-semibold text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500;
  }
}
```

**HTML**

```html
<!-- Remova a classe dark para experimentar o tema claro. -->
<main class="dark">
  <div class="flex min-h-screen items-center justify-center bg-slate-100 p-6 text-slate-900 dark:bg-slate-950 dark:text-white">
    <article class="panel w-full max-w-md">
      <span class="text-sm font-semibold text-brand">THEME LAB</span>
      <h1 class="mt-2 text-2xl font-bold">Design com tokens</h1>
      <p class="mt-3 text-slate-600 dark:text-slate-300">Uma cor de marca e componentes reutilizáveis para os dois temas.</p>
      <button type="button" class="button-brand mt-6">Começar</button>
    </article>
  </div>
</main>
```

`@theme` cria o token usado por `bg-brand` e `text-brand`. A variante `dark:`
é ativada pela classe `.dark`; `@layer components` agrupa as classes extraídas.

## 04 — Login Form: focus e acessibilidade

Use `@import "tailwindcss";` no painel CSS.

```html
<main class="flex min-h-screen items-center justify-center bg-slate-100 p-6">
  <section class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
    <h1 class="text-2xl font-bold text-slate-900">Boas-vindas</h1>
    <p class="mt-2 text-sm text-slate-500">Entre para acessar sua conta.</p>
    <form class="mt-8 space-y-5" action="#" method="get">
      <div>
        <label for="email" class="mb-2 block text-sm font-semibold text-slate-700">E-mail</label>
        <input id="email" name="email" type="email" required autocomplete="email" placeholder="voce@exemplo.com" class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
      </div>
      <div>
        <label for="senha" class="mb-2 block text-sm font-semibold text-slate-700">Senha</label>
        <input id="senha" type="password" required autocomplete="current-password" class="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200">
      </div>
      <label class="flex items-center gap-2 text-sm text-slate-600">
        <input type="checkbox" name="lembrar" class="size-4 accent-blue-600"> Lembrar de mim
      </label>
      <button class="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Entrar</button>
    </form>
    <p class="mt-4 text-xs text-slate-500">Exemplo visual: não há autenticação conectada.</p>
  </section>
</main>
```

Os `label` estão associados aos campos por `for`/`id`; `focus:ring-2` torna o
foco visível. Não use dados reais: este formulário é apenas demonstrativo.

## 05 — Pricing Cards: composição e hierarquia

Use `@import "tailwindcss";` no painel CSS.

```html
<main class="min-h-screen bg-slate-100 px-6 py-12 text-slate-900">
  <section class="mx-auto max-w-5xl">
    <header class="text-center">
      <h1 class="text-3xl font-bold">Escolha seu plano</h1>
      <p class="mt-2 text-slate-600">Opções para cada etapa da sua jornada.</p>
    </header>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-bold">Básico</h2><p class="mt-2 text-sm text-slate-500">Para começar.</p>
        <p class="mt-6 text-3xl font-bold">R$ 0 <span class="text-sm font-normal text-slate-500">/mês</span></p>
        <ul class="my-6 flex-1 space-y-3 text-sm text-slate-600"><li>✓ 1 projeto</li><li>✓ Recursos essenciais</li><li>✓ Comunidade</li></ul>
        <button type="button" class="rounded-xl border border-blue-600 px-4 py-3 font-semibold text-blue-600 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2">Escolher Básico</button>
      </article>
      <article class="flex flex-col rounded-2xl border-2 border-blue-600 bg-white p-6 shadow-lg">
        <span class="self-start rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">POPULAR</span>
        <h2 class="mt-3 text-xl font-bold">Pro</h2><p class="mt-2 text-sm text-slate-500">Para crescer.</p>
        <p class="mt-6 text-3xl font-bold">R$ 49 <span class="text-sm font-normal text-slate-500">/mês</span></p>
        <ul class="my-6 flex-1 space-y-3 text-sm text-slate-600"><li>✓ Projetos ilimitados</li><li>✓ Recursos avançados</li><li>✓ Suporte prioritário</li></ul>
        <button type="button" class="rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Escolher Pro</button>
      </article>
      <article class="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl font-bold">Equipe</h2><p class="mt-2 text-sm text-slate-500">Para colaborar.</p>
        <p class="mt-6 text-3xl font-bold">R$ 99 <span class="text-sm font-normal text-slate-500">/mês</span></p>
        <ul class="my-6 flex-1 space-y-3 text-sm text-slate-600"><li>✓ Tudo do Pro</li><li>✓ Membros adicionais</li><li>✓ Gestão da equipe</li></ul>
        <button type="button" class="rounded-xl border border-blue-600 px-4 py-3 font-semibold text-blue-600 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2">Escolher Equipe</button>
      </article>
    </div>
  </section>
</main>
```

`md:grid-cols-3` organiza os cartões em três colunas a partir de `md`;
`flex-1` ajuda a alinhar os botões mesmo com listas de alturas diferentes.

## 06 — Settings Toggle: peer e checked

Use `@import "tailwindcss";` no painel CSS.

```html
<main class="flex min-h-screen items-center justify-center bg-slate-100 p-6">
  <section class="w-full max-w-lg rounded-2xl bg-white p-6 shadow-sm">
    <h1 class="text-2xl font-bold text-slate-900">Configurações</h1>
    <p class="mt-2 text-sm text-slate-500">Escolha quais notificações deseja receber.</p>
    <div class="mt-6 divide-y divide-slate-200">
      <label class="flex cursor-pointer items-center justify-between gap-4 py-4">
        <span><span class="block font-semibold text-slate-900">Notificações por e-mail</span><span class="block text-sm text-slate-500">Receba novidades na sua caixa de entrada.</span></span>
        <span class="relative shrink-0">
          <input type="checkbox" class="peer sr-only" checked>
          <span class="block h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2"></span>
          <span class="pointer-events-none absolute left-1 top-1 size-5 rounded-full bg-white transition peer-checked:translate-x-5"></span>
        </span>
      </label>
      <label class="flex cursor-pointer items-center justify-between gap-4 py-4">
        <span><span class="block font-semibold text-slate-900">Atualizações do produto</span><span class="block text-sm text-slate-500">Saiba quando houver novidades.</span></span>
        <span class="relative shrink-0">
          <input type="checkbox" class="peer sr-only">
          <span class="block h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:ring-offset-2"></span>
          <span class="pointer-events-none absolute left-1 top-1 size-5 rounded-full bg-white transition peer-checked:translate-x-5"></span>
        </span>
      </label>
    </div>
  </section>
</main>
```

O checkbox continua acessível pelo teclado; `peer-checked:` modifica os irmãos
visuais quando ele está marcado. As preferências não são persistidas.

## 07 — FAQ Accordion: details e open

Use `@import "tailwindcss";` no painel CSS.

```html
<main class="flex min-h-screen items-center justify-center bg-slate-100 p-6">
  <section class="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-sm">
    <h1 class="text-2xl font-bold text-slate-900">Perguntas frequentes</h1>
    <p class="mt-2 text-sm text-slate-500">Encontre respostas rápidas.</p>
    <div class="mt-6 space-y-3">
      <details class="group rounded-xl border border-slate-200 p-4 open:border-blue-300 open:bg-blue-50">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600">O que é Tailwind CSS?<span aria-hidden="true" class="text-blue-600 transition group-open:rotate-45">+</span></summary>
        <p class="mt-3 text-sm leading-6 text-slate-600">É um framework de classes utilitárias para construir interfaces.</p>
      </details>
      <details class="group rounded-xl border border-slate-200 p-4 open:border-blue-300 open:bg-blue-50">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600">Preciso escrever CSS?<span aria-hidden="true" class="text-blue-600 transition group-open:rotate-45">+</span></summary>
        <p class="mt-3 text-sm leading-6 text-slate-600">As utilities cobrem muitos casos, mas CSS personalizado ainda pode ser usado.</p>
      </details>
      <details class="group rounded-xl border border-slate-200 p-4 open:border-blue-300 open:bg-blue-50">
        <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-600">Funciona em telas pequenas?<span aria-hidden="true" class="text-blue-600 transition group-open:rotate-45">+</span></summary>
        <p class="mt-3 text-sm leading-6 text-slate-600">Sim. Variantes responsivas permitem ajustar o layout por breakpoint.</p>
      </details>
    </div>
  </section>
</main>
```

`details` e `summary` fornecem abertura e fechamento nativos. `open:` estiliza
o item aberto e `group-open:` modifica o ícone dentro dele.

## 08 — Dashboard Summary: Grid e composição

Use `@import "tailwindcss";` no painel CSS.

```html
<main class="min-h-screen bg-slate-100 p-6 text-slate-900 md:p-10">
  <div class="mx-auto max-w-6xl">
    <header class="flex flex-wrap items-end justify-between gap-4">
      <div><p class="text-sm font-semibold text-blue-600">VISÃO GERAL</p><h1 class="mt-1 text-3xl font-bold">Dashboard</h1><p class="mt-2 text-slate-500">Resumo do desempenho deste mês.</p></div>
      <span class="rounded-full bg-white px-4 py-2 text-sm text-slate-600">Últimos 30 dias</span>
    </header>
    <section aria-label="Indicadores" class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <article class="rounded-2xl border border-slate-200 bg-white p-5"><h2 class="text-sm text-slate-500">Receita</h2><p class="mt-3 text-2xl font-bold">R$ 24.500</p><p class="mt-2 text-sm text-emerald-600">↑ 12% no mês</p></article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5"><h2 class="text-sm text-slate-500">Pedidos</h2><p class="mt-3 text-2xl font-bold">384</p><p class="mt-2 text-sm text-emerald-600">↑ 8% no mês</p></article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5"><h2 class="text-sm text-slate-500">Clientes</h2><p class="mt-3 text-2xl font-bold">1.248</p><p class="mt-2 text-sm text-emerald-600">↑ 5% no mês</p></article>
      <article class="rounded-2xl border border-slate-200 bg-white p-5"><h2 class="text-sm text-slate-500">Conversão</h2><p class="mt-3 text-2xl font-bold">3,8%</p><p class="mt-2 text-sm text-slate-500">Estável no mês</p></article>
    </section>
    <section class="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
      <h2 class="text-lg font-bold">Atividades recentes</h2>
      <ul class="mt-4 divide-y divide-slate-100 text-sm text-slate-600">
        <li class="flex justify-between gap-4 py-3"><span>Novo pedido recebido</span><span>Hoje</span></li>
        <li class="flex justify-between gap-4 py-3"><span>Cadastro de cliente</span><span>Ontem</span></li>
        <li class="flex justify-between gap-4 py-3"><span>Relatório atualizado</span><span>Ontem</span></li>
      </ul>
    </section>
  </div>
</main>
```

O grid passa de uma para duas e depois quatro colunas com `sm:` e `lg:`.
Os valores são fictícios.

## 09 — Theme Toggle: botão Light / Dark

O Tailwind Play não executou o script na prévia durante o teste. Por isso,
este exemplo usa um checkbox com aparência de botão para alternar o tema
sem JavaScript.

**CSS**

```css
@import "tailwindcss";
@custom-variant dark (&:where(.theme:has(#theme-toggle:checked), .theme:has(#theme-toggle:checked) *));
@theme {
  --color-brand: #4f46e5;
}
```

**HTML**

```html
<main class="theme min-h-screen bg-slate-100 p-6 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
  <section class="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <h1 class="text-2xl font-bold">Tema da interface</h1>
      <label class="cursor-pointer">
        <input id="theme-toggle" type="checkbox" class="peer sr-only">
        <span class="block rounded-xl bg-brand px-4 py-2 font-semibold text-white hover:bg-indigo-700 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-500">
          <span class="dark:hidden">Ativar tema escuro</span>
          <span class="hidden dark:inline">Ativar tema claro</span>
        </span>
      </label>
    </div>
    <p class="mt-4 text-slate-600 dark:text-slate-300">Alterne entre os temas claro e escuro para observar os tokens e as variantes.</p>
  </section>
</main>
```

`:has()` detecta se o checkbox está marcado e ativa a variante `dark:` na
seção. O estado é local à página e volta ao claro quando ela é recarregada.
