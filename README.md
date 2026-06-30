# Hiskra — Site Institucional

Site institucional da **Hiskra Solutions & Technologies**, empresa especializada em desenvolvimento full-stack, gestão de inovação e consultoria de proteção de dados.

Acesse o site em produção: [hiskra.com.br](https://hiskra.com.br)

---

## Sobre o Projeto

Este é o site público da Hiskra — o primeiro ponto de contato entre a empresa e seus potenciais clientes. Aqui apresentamos nossos serviços, identidade institucional, equipe e canais de comunicação.

O projeto foi iniciado com o [v0](https://v0.app) e agora é mantido e expandido de forma colaborativa, com um sistema de controle de sessões e decisões entre o time de desenvolvimento.

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|------------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| UI | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com/) |
| Componentes | [shadcn/ui](https://ui.shadcn.com/) (estilo New York) |
| Animações | [Framer Motion](https://www.framer.com/motion/) |
| Deploy | [Vercel](https://vercel.com/) |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) 18+ (recomendado: 20 LTS)
- npm, yarn ou pnpm

---

## Como Rodar

```bash
# 1. Clone o repositório
git clone https://github.com/oscarRodriguesDev/instituicional-Hiskra.git

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção (usado antes de deploy) |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Verifica código com ESLint |

---

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css        # Estilos globais e variáveis CSS (tema claro/escuro)
│   ├── layout.tsx         # Layout raiz (fonte Geist, metadata, analytics)
│   └── page.tsx           # Página principal — compõe todas as seções
├── components/
│   ├── navbar.tsx         # Navbar fixa com scroll-aware (muda no scroll)
│   ├── hero.tsx           # Hero com parallax e texto letter-by-letter
│   ├── services.tsx       # Cards de serviço com hover tilt 3D
│   ├── service-modal.tsx  # Modal de detalhes do serviço
│   ├── institutional.tsx  # Missão, Visão, Valores, Propósito
│   ├── about.tsx          # Sobre com contadores animados
│   ├── careers.tsx        # Seção "Trabalhe Conosco" com vagas
│   ├── contact.tsx        # Formulário de contato + informações
│   ├── footer.tsx         # Footer com links e redes sociais
│   ├── scroll-progress.tsx # Barra de progresso de scroll
│   ├── scroll-to-top.tsx  # Botão voltar ao topo
│   ├── theme-provider.tsx # Provider de tema (next-themes)
│   └── ui/                # Componentes shadcn/ui (57 componentes)
├── hooks/
│   ├── use-count-up.ts   # Hook de contagem animada (para stats)
│   ├── use-mobile.ts     # Detecção de viewport mobile
│   └── use-toast.ts      # Estado de notificações toast
└── lib/
    └── utils.ts          # Utilitário cn() (clsx + tailwind-merge)
```

---

## Funcionalidades

- **Navbar scroll-aware** — fundo transparente que vira blur/sombra ao rolar
- **Hero com parallax** — fundo e conteúdo movem em velocidades diferentes
- **Texto animado letter-by-letter** — título do hero com reveal caractere por caractere
- **Cards com hover tilt 3D** — cards de serviço seguem o cursor com perspective
- **Contadores animados** — stats do "Sobre" contam de 0 ao valor final
- **Barra de progresso** — indicador visual de quanto da página foi scrollada
- **Botão scroll-to-top** — aparece com spring animation após 500px de scroll
- **Transições de seção** — fade/slide ao entrar no viewport
- **Formulário de contato** — campos nome, email e mensagem
- **Trabalhe Conosco** — seção de vagas acessível pelo footer
- **Responsivo** — layout adaptável para mobile, tablet e desktop

---

## Deploy

O projeto está configurado para deploy automático na **Vercel**. Toda alteração mergida na branch `main` dispara um novo deploy.

Para deploy manual:

```bash
npm run build
npx vercel
```

---

## Colaboração

Este projeto usa um sistema de controle colaborativo baseado em arquivos na raiz:

| Arquivo | Função |
|---------|--------|
| `memorias.md` | Histórico de decisões e registro de autoria das mudanças |
| `checkpoints.md` | Estado da última sessão e atividades realizadas |
| `pedidos.md` | Registro de todos os pedidos com IDs e hashes de commit |
| `ideias.md` | Sugestões e ideias de melhoria com códigos de rastreamento |
| `preferencias_do_usuario.md` | Padrões de código, stack e convenções |

### Branches

- `main` — branch de produção, deploy automático na Vercel
- `vibecode` — branch de desenvolvimento colaborativo

---

## Contato

- **WhatsApp:** (27) 98899-1663
- **Email:** oscar.gst.projetos@gmail.com

---

## Licença

Este projeto é privado. Todos os direitos reservados à Hiskra Solutions & Technologies.
