# Memórias do Projeto

## Histórico de Decisões

### 2026-06-29
- **ALTERAÇÃO IDENTIFICADA NO NAVBAR | AUTOR: USUARIO**
  - Arquivo: `src/components/navbar.tsx`
  - Mudança: Adicionado `<span className="relative z-10 text-black">` ao redor do texto "Começar Agora" no botão CTA do navbar. Provavelmente para corrigir problema de z-index onde o texto ficava atrás do gradiente/overlay do botão.
  - Status: Pendente de commit (não staged)

- **ADICIONADAS 9 ANIMAÇÕES NA PÁGINA | AUTOR: VIBECODE**
  - Pedido #002: "Preciso de mais animação na minha pagina"
  - Animações implementadas:
    1. **Parallax no Hero** — `useScroll`/`useTransform` do Framer Motion, fundo e conteúdo movem velocidades diferentes no scroll
    2. **Contadores Animados** — Hook `useCountUp` custom, stats (100+, 50+, 15+) contam de 0 com easing cúbico
    3. **Navbar Scroll-Aware** — Fundo muda de transparente para blur/sombra ao rolar >50px via `useMotionValueEvent`
    4. **Text Reveal Letter-by-Letter** — Título do Hero anima caractere por caractere com delay staggered
    5. **Hover Tilt/3D** — Cards de serviço têm perspective 3D com `useMotionValue`/`useSpring` seguindo o cursor
    6. **Imagem About Hover** — Zoom 110% + overlay com gradiente ao passar o mouse
    7. **Barra de Progresso** — Componente `ScrollProgress` fixo no topo com `useSpring` suavizado
    8. **Transições entre Seções** — Services, Institutional e About envolvidos em `motion.div` com `whileInView`
    9. **Botão Scroll-to-Top** — AnimatePresence + spring animation, aparece após 500px de scroll
  - Arquivos modificados: `hero.tsx`, `navbar.tsx`, `about.tsx`, `services.tsx`, `page.tsx`
  - Arquivos criados: `scroll-progress.tsx`, `scroll-to-top.tsx`, `use-count-up.ts`
  - Build: ✅ `npm run build` passou com sucesso

- **CRIADA SEÇÃO DE CONTATO | AUTOR: VIBECODE**
  - Pedido #003: "Criar área de contato com formulário e informações"
  - Componente criado: `src/components/contact.tsx`
  - Alterado: `src/app/page.tsx` (import e adição antes do Footer)
  - Conteúdo:
    - Formulário com campos: nome, email, textarea
    - Botão "Enviar Mensagem" (submit sem ação por enquanto, envio será tratado depois)
    - Cards de contato: WhatsApp (27) 98899-1663, Email oscar.gst.projetos@gmail.com, Telefone
    - `id="contato"` para rolagem a partir do navbar
    - Animações: Framer Motion com `useInView`, stagger nos itens, hover scale nos cards
    - Estilo consistente com o resto do projeto (gradiente yellow→orange→red, bordas, sombras)
  - Fix (b7b22f0): Removido redirect para WhatsApp no formulário, botão alterado para "Enviar Mensagem"
  - Build: ✅ `npm run build` passou com sucesso

- **CRIADA SEÇÃO "TRABALHE CONOSCO" | AUTOR: VIBECODE**
  - Pedido #004: "Criar seção trabalhe conosco com vagas e link cadastre-se"
  - Componente criado: `src/components/careers.tsx`
  - Alterado: `src/app/page.tsx` (import e adição antes do Contact)
  - Conteúdo:
    - 3 vagas mockadas: Dev Full-Stack Pleno, Analista de Inovação, Consultor de Proteção de Dados
    - Cada vaga com ícone Briefcase, título e link "cadastre-se"
    - Estilo simples e limpo, sem rebusco
  - Fix (8e19880): "Trabalhe Conosco" movido para opção no footer (coluna Empresa), link aponta para `#vagas`
  - Build: ✅ `npm run build` passou com sucesso

- **README REESCRITO EM PT-BR | AUTOR: VIBECODE**
  - Pedido #005: "Criar readme bem escrito, humanizado e técnico"
  - Arquivo: `README.md` (substituído o original gerado pelo v0)
  - Conteúdo: descrição, stack, como rodar, estrutura, funcionalidades, deploy, colaboração, contato
  - Idioma: Português do Brasil
  - Commit na branch `main` (fe6cdb9)

- **SEO COMPLETO IMPLEMENTADO | AUTOR: VIBECODE**
  - Pedido #006: "SEO bem construído, site hospedado em landing.hiskra.com.br"
  - Arquivos modificados/criados:
    - `src/app/layout.tsx`: metadataBase, title template, description, 12 keywords, OpenGraph, Twitter Card, robots, canonical, JSON-LD (schema.org Organization)
    - `src/app/sitemap.ts`: sitemap dinâmico gerado pelo Next.js (rota `/sitemap.xml`)
    - `public/robots.txt`: Allow all + referência ao sitemap
  - Canonical: `https://landing.hiskra.com.br`
  - Build: ✅ `npm run build` passou com sucesso

---

## Decisões Técnicas

- **Framer Motion como lib principal de animação** — Já estava no projeto, todas as novas animações usam ele
- **`react-intersection-observer` mantido** — About e Services continuam usando, não quebrar compatibilidade
- **`useMotionValueEvent` para navbar** — Mais performático que `useEffect` com scroll listener
- **`useSpring` para scroll progress** — Suaviza a barra de progresso com física de mola
- **JSON-LD via `dangerouslySetInnerHTML`** — Next.js App Router não oferece nativamente, inserido no `<head>` do layout
