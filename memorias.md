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
    - Botão "Enviar pelo WhatsApp" que redireciona para `wa.me/5527988991663` com mensagem pré-preenchida
    - Cards de contato: WhatsApp (27) 98899-1663, Email oscar.gst.projetos@gmail.com, Telefone
    - `id="contato"` para rolagem a partir do navbar
    - Animações: Framer Motion com `useInView`, stagger nos itens, hover scale nos cards
    - Estilo consistente com o resto do projeto (gradiente yellow→orange→red, bordas, sombras)
  - Build: ✅ `npm run build` passou com sucesso

---

## Decisões Técnicas

- **Framer Motion como lib principal de animação** — Já estava no projeto, todas as novas animações usam ele
- **`react-intersection-observer` mantido** — About e Services continuam usando, não quebrar compatibilidade
- **`useMotionValueEvent` para navbar** — Mais performático que `useEffect` com scroll listener
- **`useSpring` para scroll progress** — Suaviza a barra de progresso com física de mola
