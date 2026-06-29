# Ideias e Sugestões

## ID-001 — Sistema de Controle Colaborativo (Pedido #001)
- **Descrição:** Criar arquivos de controle para rastrear decisões, mudanças e preferências entre sessões.
- **Status:** Implementado em 2026-06-29
- **Sugestão adicional:** Considerar adicionar um arquivo `CHANGELOG.md` no padrão Keep a Changelog para registrar versões e releases oficiais do projeto, especialmente antes de merges para `main` e deploys automáticos na Vercel.

## ID-002 — Animações na Página (Pedido #002)
- **Descrição:** O usuário solicitou "mais animação na minha página". Foram implementadas 9 animações.
- **Status:** Implementado em 2026-06-29
- **Sugestões adicionais:**
  - **Reduced Motion:** Adicionar suporte a `prefers-reduced-motion` para acessibilidade (desabilitar parallax, contadores, etc. para usuários com sensibilidade ao movimento)
  - **Animação de loading:** Criar um componente de skeleton/loading animado com Framer Motion para exibir enquanto a página carrega
  - **Cursor personalizado:** Um cursor customizado que reage a elementos interativos (botões, links)
  - **Micro-interações em formulários:** Se houver formulários futuros, adicionar validação animada (shake em erro, check animado em sucesso)
  - **Page transitions:** Se o projeto evoluir para multi-page, usar AnimatePresence com layout animations para transições entre rotas
