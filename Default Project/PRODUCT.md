# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5/CSS3/Vanilla JS with **Bootstrap 5.3** as the component underlay (only the Carousel component is used, driven by `bootstrap.bundle.min.js`); Bootstrap is vendored locally at `vendor/bootstrap/` (CSS + bundle JS), so the site still opens `index.html` directly with no network, no build step, and deploys as a static site to GitHub Pages (per the project README). Art direction lives in `css/style.css`, which loads after Bootstrap and overrides it completely.

## Users

- Recruiters and hiring managers screening the candidate before an interview: need to assess quickly who he is, what he does, and how to reach him.
- Customers of the store looking for conserto or revenda of appliances and furniture.
- Bruno de Almeida Pessoa (the professional): uses the portfolio as the single living home for his profile.

## Product Purpose

A lightweight, responsive, static web portfolio that centralizes Bruno's professional trajectory (10+ years in a furniture and appliance store), academic background, technical skills, and code portfolio, giving recruiters and customers direct contact channels in a few clicks.

## Positioning

A screening-first, one-page portfolio with **programming in the foreground** — developer identity, projects, languages and formation lead; the 10+ year furniture/appliance store career appears as a supporting contrast (disciplina, conserto, revenda) that speaks to work ethic — readable in seconds and faster to scan than a fixed PDF resume.

## Operating Context

- Read on phones, tablets, and desktops (mobile-first responsive design).
- Content language: Brazilian Portuguese (`pt-BR`).
- Reviewed during recruiting triage or by potential customers, typically on the reader's own device.
- Served as a purely static site (GitHub Pages per the project README).

## Capabilities and Constraints

- Sections (programming-first order): sticky header with smooth-anchored nav (Início, Projetos, Formação, Experiência, Contato); hero (name, role "Desenvolvedor Web · Estudante de ADS", summary that tucks the store work into the background, CTAs, tech tags, profile photo); featured projects (PayJam) + languages chips; education; a supporting "Além do código" experience section (job card — loja de móveis novos e usados, 2016—hoje — plus a 3-slide services carousel: Revenda de móveis novos e usados · Refrigeração de linha branca · Eletrodomésticos — lavadoras e micro-ondas — with arrows, dots, and a Bootstrap 5 fade carousel with auto-advance) ; contact footer with dynamic year.
- Behaviors: accessible mobile menu (aria-expanded, Escape and outside-click close), smooth scrolling and scroll-padding, reveal-on-scroll, scroll-spy active nav link, current-year output — all vanilla JS; and the **Bootstrap 5 Carousel** (fade transition, `data-bs-interval="4000"`, pause on hover, wrap, touch/swipe, arrow buttons and bar-shaped indicators) for the store services line — auto-motion handled by the battle-tested Bootstrap runtime.
- One featured project on record: PayJam (HTML/CSS/JS college project — form pages for a credit intermediary company). No other projects are documented.
- Experience (real, user-provided): loja de móveis novos e usados — 2016 até o momento; refrigeração de linha branca (conserto de geladeiras, freezers, expositoras, cervejeiras etc.); conserto de máquinas de lavar e micro-ondas; revenda de todos os produtos consertados e de móveis novos e usados.
- Education: ADS — Universidade Cruzeiro do Sul (2 semesters completed); ADS — IFSP Guarulhos (2nd semester, in progress).
- Constraint: must run with no dependencies by opening `index.html` directly (per README); **the only dependency is vendored locally** — `vendor/bootstrap/bootstrap.min.css` and `vendor/bootstrap/bootstrap.bundle.min.js` — so runtime needs no network.
- GitHub handle (confirmed): `brunoalmp03-lang`. Links must point there.
- Build target (confirmed by user): rebuild/redesign exists in place at `Default Project/` (index.html, css/style.css, js/script.js, foto-perfil.jpeg); the `Projetoport` folder is deprecated staging and holds no site files.

## Brand Commitments

- Name: Bruno de Almeida Pessoa (nav short form "Bruno de Almeida Pessoa").
- Role identifiers: "Desenvolvedor Web" / "Estudante de ADS" (foreground); store career present as supporting context only.
- Logo mark: circular "B" monogram.
- Content language: pt-BR.
- Voice (existing): direct, professional, modest; real facts only.
- Experience (coadjuvante, segundo o usuário): loja de móveis novos e usados — 2016 até o momento; refrigeração de linha branca (geladeiras, freezers, expositoras, cervejeiras etc.); conserto de máquinas de lavar e micro-ondas; revenda de todos os produtos consertados e de móveis novos e usados.

## Evidence on Hand

- Live implementation in this same repo, one level up: `Default Project/index.html`, `Default Project/css/style.css`, `Default Project/js/script.js`.
- Real asset: `Default Project/foto-perfil.jpeg` (profile photo).
- Project spec/README at repo root describing the MVP and its GitHub Pages link.
- Real and verifiable only: education, skills, PayJam project, LinkedIn profile, and the professional experience at the furniture/appliance store (2016—present). No testimonials, customers, or benchmarks exist; none may be fabricated.

## Product Principles

1. Screening-first: within seconds a reader knows who he is, what he does, and how to reach him.
2. Truth over decoration: only real experience, real projects, real formation, real links, real skills.
3. Dependency-free durability: native web, no build step, runs anywhere, deploys to GitHub Pages.
4. Mobile-first usability: fluid from small phones to wide desktops.
5. One living home: the portfolio replaces the scattered PDF resume and stays current.