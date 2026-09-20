---
version: 2
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Surface brief — Portfólio (index.html)

## Scope and mode

Visitor mode: **Experience** (the artifact leads; the interface recedes). One-page static portfolio, pt-BR, screening-first. Mobile → desktop.

## Audience, job, action

- **Audience:** recruiters/triage screening a dual-career professional (technical repair + retail + developing student) before an interview, and store customers.
- **Job:** know in seconds who Bruno is, what he does (conserto/revenda), what he studies, and how to reach him.
- **Action:** open LinkedIn/GitHub or contact via the CTA.
- **Proof/content (real only):** experiência — loja de móveis novos e usados (2016 — até o momento), refrigeração de linha branca (geladeiras, freezers, expositoras, cervejeiras etc.), conserto de máquinas de lavar e micro-ondas, e revenda de todos os produtos consertados e de móveis novos e usados; PayJam (college project: form pages for a credit-intermediary company), stack C/Python/HTML/CSS/JS, educação (Cruzeiro do Sul ×2 semestres; IFSP Guarulhos 2º semestre em curso), LinkedIn `bruno-de-almeida-pessoa-51880338a`, GitHub `brunoalmp03-lang`, foto `foto-perfil.jpeg`.
- **Constraints:** static HTML/CSS/JS, no build step, opens `index.html` directly, GitHub Pages ready, mobile-first, pt-BR. **Bootstrap 5.3 vendored locally at `vendor/bootstrap/`** (css + bundle js; no network at runtime) purely as the Carousel engine; all skinning is custom `css/style.css` overriding Bootstrap. User direction: remove all git characteristics, keep the portfolio characteristics; change the page scroll format; add a carousel; include the real work experience. **The carousel must actually move.**

## Direction (locked by user, v3)

**A Vitrine — programming-first.** Same warm light "storefront" world as v2, but the information hierarchy flips at the user's request: **programming leads** (hero role "Desenvolvedor Web · Estudante de ADS", then Projetos + linguagens, then Formação) and the furniture/appliance store career moves to a **supporting** section called "Além do código" that still keeps the 2016—hoje job card and the 3-slide auto-moving services carousel. Replaces the previous **Mundo Git** approach entirely (commit timeline, terminal window, branch nav, diff reveals).

## Memorable moment

The services row runs as a **Bootstrap 5 Carousel with a cross-fade transition** that advances by itself (every 4s) and pauses when you point at it — like a slow gallery of the store shelves — while the rest of the page scrolls smoothly on a vertical axis. The hero photo hangs as a framed, slightly rotated card (dashed ring) with a `foco em desenvolvimento` tag and a giant serif `dev.` watermark in the corner.

## Unresolved decisions

None blocking. All links and copy settled.

## Direction contract

THESIS: The portfolio is a warm, trustworthy storefront window. The dual career — technical repair of white-line appliances plus resale of new/used furniture and appliances, alongside a developing-studies path — reads in seconds, and the reader moves comfortably through vertical page scroll plus a horizontal services carousel. It refuses the previous git/terminal world and the cold corporate-CV template.

OWN-WORLD: Paper-cream ground, pure-white panels, wood-toned borders; one amber "leather" accent for the trade, one technical teal for technology; serif (Fraunces) for names and titles, IBM Plex Sans for reading; storeroom warmth, generous corners (16px), single warm-toned shadow; Bootstrap-5-driven fade carousel styled with our own round arrows and elongating bar indicators (grid `auto 1fr auto`); nothing visually reads "Bootstrap template".

STORY: The visitor enters through the portrait card and reads who Bruno is in one glance. A card names the store and the period (2016 — até o momento); the carousel walks the three service shelves (revenda · refrigeração · eletrodomésticos) and a closing note ties it together: everything he fixes is also resold, plus new/used furniture. Then the tech side: projects (PayJam), languages, formation, and the contact footer (LinkedIn/GitHub) that ends the visit.

FIRST VIEWPORT: Warm cream ground with subtle radial tints, sticky cream header with "B" monogram + inline nav (Início · Projetos · Formação · Experiência · Contato); two-column hero (slightly rotated portrait card with `foco em desenvolvimento` tag and dashed ring | serif name with italic amber surname, role "Desenvolvedor Web · Estudante de ADS", lede with the 2016 fact, CTAs "Ver minha experiência" + LinkedIn, and three teal area tags); giant serif `dev.` watermark behind the hero copy.

FORM: Rebuild in place; signature interaction = **Bootstrap 5 fade carousel** (data-bs auto-advance 4000ms, pause on hover, wrap, touch, custom round arrows and bar indicators) + smooth anchored vertical scroll with reveal-on-scroll and scroll-spy active link.

FINISH: unreviewed and undocumented is unfinished; the finish review covers posts/console validation since this model cannot read image rasters, DESIGN.md, and every shipping raster carrying its provenance.