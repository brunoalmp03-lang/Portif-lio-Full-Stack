---
name: Bruno de Almeida Pessoa · Portfólio
description: Portfólio em tema claro "vitrine" — experiência real de linha branca, revenda de móveis novos e usados e formação em ADS, com carrossel de serviços.
colors:
  bg: "#f7f3ec"
  bg-soft: "#f2ede3"
  panel: "#ffffff"
  panel-soft: "#fdfbf7"
  border: "#e6ddcf"
  border-strong: "#d9cebc"
  text: "#23262b"
  text-muted: "#5c636d"
  text-cold: "#46525c"
  accent: "#92400e"
  accent-strong: "#7c3410"
  teal: "#0f766e"
  teal-soft: "#e7f1ef"
typography:
  display:
    fontFamily: "Fraunces, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(2.3rem, 8vw, 3.6rem)"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "-0.01em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  kicker:
    textTransform: "uppercase"
    fontSize: "0.82rem"
    fontWeight: 700
    letterSpacing: "0.08em"
rounded:
  sm: "10px"
  md: "16px"
  pill: "999px"
spacing:
  sm: "0.5rem"
  md: "1rem"
  lg: "2rem"
components:
  btn-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#fff"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
  btn-outline:
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.4rem"
  nav-link:
    textColor: "{colors.text-muted}"
    activeColor: "{colors.accent}"
    rounded: "{rounded.sm}"
    padding: "0.45rem 0.85rem"
  service-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.6rem"
  job-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.4rem"
  edu-card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "1.4rem"
---

# Design System: Bruno de Almeida Pessoa · Portfólio

## Overview

**Creative North Star: "A Vitrine"**

O portfólio se apresenta como uma vitrine clara e acolhedora — mas com a **programação em primeiro plano**: a identidade é de desenvolvedor web e estudante de ADS; projetos, linguagens e formação vêm antes; e a longa carreira na loja (2016—hoje, conserto e revenda de linha branca e eletrodomésticos) aparece como coadjuvante — a seção "Além do código" que fala de disciplina e resolução de problemas.

A superfície é leve e quente (creme, papel, madeira clara), com um único acento âmbar "couro" para a ação (conserto/compra) e um verde-azulado técnico para as referências de tecnologia e status (o que é "tecnologia" da página: links, chips, badges). Tipografia faz a dualidade: serifa Fraunces para nomes e títulos (voz de letreiro de loja), IBM Plex Sans para leitura. **Bootstrap 5.3 é o motor de componentes** (vendido localmente em `vendor/bootstrap/`) — usado apenas o Carousel, que faz o movimento do carrossel com confiabilidade de runtime madura; toda a aparência é nossa, em `css/style.css` que sobrepõe o Bootstrap e sai do padrão visível de tema Bootstrap. A rolagem trocou o eixo: a página rola vertical com âncoras suaves, e a linha de serviços rola na horizontal no carrossel em fade. Motion orquestrada: reveal suave ao rolar, carrossel em cross-fade com avanço automático a cada 4s e pausa no hover, indicadores em barras (a ativa alonga).

Recusa o template de terminal/repositório git anterior (request do usuário: manter a característica de portfólio, remover as do git) e o template corporativo de CV frio. A foto aparece enquadrada como um cartão de vitrine com etiqueta `foco em desenvolvimento` — nunca avatar de commit.

**Key Characteristics:**
- Ordem das seções é a hierarquia: hero → **Projetos (+ linguagens)** → **Formação** → **Experiência (Além do código, coadjuvante, com o carrossel de serviços)** → Contato.
- Hero: "Desenvolvedor Web · Estudante de ADS" em primeiro plano; nome em serifa com o sobrenome em itálico âmbar, marca d'água `dev.` em serifa gigante no canto direito, retrato com moldura leve + anel tracejado e etiqueta `foco em desenvolvimento`.
- Card de experiência com carimbo de anos (serifa grande `2016` + `até o momento`) — enquadrado como contexto, sem bordas laterais decorativas.
- Carrossel de 3 slides da loja: Revenda de móveis novos e usados · Refrigeração de linha branca (geladeira, freezer, expositora, cervejeira) · Eletrodomésticos (lavadoras e micro-ondas); ícones de linha em SVG; **componente Carousel do Bootstrap 5** com fade, `data-bs-interval="4000"`, pausa no hover, wrap e touch; controles e indicadores renderizados por nós (setas redondas + barras que alongam).
- Rodapé de contato com CTAs LinkedIn/GitHub e ano dinâmico, abrindo para "projetos de tecnologia, oportunidades de desenvolvimento e também consertos e revenda de móveis".

## Colors

Paleta clara e quente, com um acento de couro para ação e um teal para tecnologia; os neutros criam camadas de loja (fundo de linho, painéis brancos, bordas de madeira).

### Primary
- **Âmbar de Couro** (`#92400e`): ação e identidade do ofício. Botões primários, monograma "B", etiqueta da foto, borda do job card, período, hover de setas/dots. Texto sobre fundos claros mantém AA (5.5:1+).
- **Couro Profundo** (`#7c3410`): hover dos botões primários.

### Secondary
- **Verde-azulado Técnico** (`#0f766e`): referências de "tecnologia" da página — links (GitHub), chips de stack, badges, kickers de seção, hover de outline. Fundo suave **teal-soft** (`#e7f1ef`) nos chips.

### Neutral
- **Fundo** (`#f7f3ec`): base da página — tom de linho.
- **Fundo Suave** (`#f2ede3`): faixas alternadas (experiência, formação) e rodapé (`#f0eadd`).
- **Painel** (`#ffffff`): cards e menus; **Painel Suave** (`#fdfbf7`): card atual de formação e hover de nav.
- **Borda** (`#e6ddcf`) e **Borda Forte** (`#d9cebc`): dividers e contornos de cards.
- **Texto** (`#23262b`), **Texto Suave** (`#5c636d`), **Cinza Frio** (`#8a9199`): hierarquia de leitura.

Contraste verificado: texto sobre fundo ≥ 13:1, suave ≥ 5.5:1, cinza frio (kickers e notas) ≥ 7.2:1, couro sobre creme ≥ 6.4:1, branco sobre couro ≥ 7:1, teal sobre branco/creme ≥ 4.9:1 — AA em todos os pares.

## Typography

**Display Font:** Fraunces (serifa, weight 600–900)
**Body Font:** IBM Plex Sans (400–700)
**Kickers/Chips:** IBM Plex Sans (700, uppercase leve 0.08em)

**Character:** A serifa Fraunces dá presença de letreiro — nomes e títulos têm caráter, mas nunca gritam; a IBM Plex Sans dá leitura limpa e técnica. A voz é de uma vitrine confiável: convida, informa, não improvisa.

### Hierarchy
- **Hero title** (900, `clamp(2.3rem, 8vw, 3.6rem)`, 1.05, -0.01em): o nome — a única aparição de tamanho hero.
- **Section title** (900, `clamp(1.7rem, 5vw, 2.4rem)`, 1.12): títulos de seção.
- **Card/Job title** (700–900, 1.05–1.35rem): títulos internos de cards, sempre em Fraunces.
- **Body** (400, 1rem, 1.7): prosa, `max-width` ~60ch.
- **Kicker** (700, 0.82rem, uppercase 0.08em): rótulo de seção em teal — só em labels, nunca conteúdo corrido.

## Layout

Container de 100% com `max-width: 1040px`, centralizado; cada bloco full-bleed é dono do próprio inset horizontal (`1.15rem` mobile, `2.5rem` ≥900px).

- **Hero:** mobile empilha (retrato → identidade); ≥900px vira 2 colunas (0.85fr | 1.15fr) com o retrato à esquerda.
- **Carrossel:** componente Carousel do Bootstrap 5 (`carousel-fade`) num container em grade `auto 1fr auto`: a faixa de itens ocupa a linha 1 inteira; a linha 2 centraliza **seta circular | indicadores-barra | seta circular**. Slides têm `min-height` 250px com `service-card` interno preenchendo; indicadores são barras curtas que alongam quando ativas (30px → 48px).
- **Grids:** educação 1 coluna mobile, 2 ≥640px; job card em linha a partir de 640px (resumo | período à direita).
- **Rodapé:** bloco centralizado com título serifa, subtítulo, CTAs e nota de copyright separada por linha.

## Elevation & Depth

Sombra única e discreta em tom de madeira: `0 2px 10px rgba(64, 48, 26, 0.08)` para superfícies comuns e `0 10px 30px rgba(64, 48, 26, 0.1)` para o retrato e o menu aberto. Hover de cards sobe `translateY(-3px)` + borda muda (âmbar nos cards de projeto, teal nos de formação); nenhum glow cromático.

## Shapes

Cantos generosos e convidativos: **16px** (`md`) para cards e janela do carrossel; **10px** (`sm`) para botões, chips e nav; **999px** (pílula) para tags, período, badge e dots. Nada angular: a loja é acolhedora.

## Components

### Botões
- **Forma:** cantos 10px, min-height 48px, peso 600, sem mono. Hover sobe 2px.
- **Primário** (couro `#92400e`, texto branco): o CTA da página.
- **Outline** (texto escuro, borda `d9cebc`): CTA secundário; hover muda borda e cor para teal.

### Navegação
- **Estilo:** links simples com peso 500; hover/ativo em couro sobre painel-suave. Chip `Contato` em teal.
- **Mobile:** toggle de 3 barras abre painel dropdown (aria-expanded, Escape, clique fora, resize >900px). Desktop: inline.
- Scroll-spy acende o link da seção visível (`is-active`).

### Carrossel de Serviços (Bootstrap 5)
- 3 slides com ícone SVG de linha em quadrado teal-suave, kicker de linha (`Revenda` / `Refrigeração` / `Eletrodomésticos`), título serifa, descrição.
- `data-bs-ride="carousel"` + `data-bs-interval="4000"` + `data-bs-pause="hover"` + `data-bs-wrap` + `data-bs-touch`: avanço automático, pausa no hover/foco, loop e swipe — dirigido pelo runtime oficial do Bootstrap 5 (vendido localmente).
- Transição `carousel-fade` (cross-fade); setas circulares customizadas (hover = couro/branco) e indicadores em barras (ativa alonga para 48px).
- Robusto por design: se JS falhar, `@media (scripting: none)` mostra o primeiro slide; nada depende do scroll-snap.
- Acessibilidade: `carousel-control-prev/next` com `aria-label`, `carousel-indicators` com `aria-label` e `data-bs-slide-to`, conteúdo do slide sempre visível no DOM (sem `aria-roledescription` poluído).

### Cards
- **Job card:** painel branco, borda `e6ddcf`, **borda esquerda de 4px âmbar**, período como pílula couro (`2016 — até o momento`).
- **Projeto (PayJam):** hover sobe e borda âmbar; stack em pílulas couro-claras; link "ver no GitHub ↗" teal.
- **Formação:** card atual com borda teal + badge pílula "Em curso"; período em couro.

### Chips e tags
- **Tags do hero:** pílulas teal-claras sobre teal-soft (`Refrigeração`, `Eletrodomésticos`, `Móveis novos e usados`).
- **Linguagens:** chips brancos com borda forte; hover teal.

## Do's and Don'ts

### Do:
- **Do** manter a dualidade central: ofício (couro/conserto/revenda) e tecnologia (teal/estudo/projeto) sempre distinguíveis por cor.
- **Do** usar Fraunces apenas para identidade (nomes e títulos); prosa em IBM Plex Sans.
- **Do** manter o carrossel acessível: snap perfeito, dots clicáveis, setas, teclado, pausa no hover e `prefers-reduced-motion`.
- **Do** preservar fatos reais: experiência 2016—hoje na loja, linhas de conserto (refrigeração, lavadoras, micro-ondas) e revenda de todos os produtos + móveis novos e usados.
- **Do** manter a página 100% estática, mobile-first, pt-BR, pronta para GitHub Pages.
- **Do** tratar `prefers-reduced-motion` e `:focus-visible` (outline teal 2px) como nativos.

### Don't:
- **Don't** reintroduzir o vocabulário git (terminal, commits, hashes, branches, `git log`, `$`), remoção pedida pelo usuário.
- **Don't** usar glow cromático ou sombras coloridas; a elevação é a sombra neutra em tom de madeira.
- **Don't** criar outro eyebrow/kicker acima dos headings além dos kickers de seção em teal.
- **Don't** reimplementar o movimento do carrossel (nem rAF, nem scroll-snap, nem setInterval próprio): quem move é o Carousel do Bootstrap 5.