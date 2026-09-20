# Surface brief — Portfólio (index.html)

## Scope and mode

Visitor mode: **Experience** (the artifact leads; the interface recedes). One-page static portfolio, pt-BR, screening-first for recruiters. Mobile → desktop.

## Audience, job, action

- **Audience:** recruiters/triage scanning a junior web dev candidate before an interview.
- **Job:** know in seconds who Bruno is, what he knows, what he built, and how to reach him.
- **Action:** open LinkedIn/GitHub, or contact via the CTA.
- **Proof/content (real only):** PayJam (college project: form pages for a credit-intermediary company), stack C/Python/HTML/CSS/JS, educação (Cruzeiro do Sul ×2 semestres; IFSP Guarulhos 2º semestre em curso), LinkedIn `bruno-de-almeida-pessoa-51880338a`, GitHub `brunoalmp03-lang`, foto `foto-perfil.jpeg`.
- **Constraints:** static HTML/CSS/JS, no build step, opens `index.html` directly, GitHub Pages ready, mobile-first.

## Direction (locked by user)

**Mundo Git** — the portfolio is a readable repository: `git log`-style commit timeline in mono type, branch lines as the spine connecting sections, navigation by branches, content entering as diff. Chosen over terminal/CLI canon, algorave, and broadcast signal.

## Memorable moment

The hero is a live terminal window where `git log --oneline --graph` renders Bruno's history; HEAD markers track the user's scroll position down the timeline; the CTA runs an actual `git`-flavored command.

## Unresolved decisions

None blocking. All links and copy settled.

## Direction contract

THESIS: The portfolio is a repository staged to read like code — one window, a commit graph, every section a committed change, so a recruiter that writes code feels instantly at home and extracts the facts in seconds. It refuses the corporate-CV-over-hero template: no stock header photo band, no stat pills, no numbered sections.

OWN-WORLD: Paper-white repo ground, near-black ink panel, cyan (primary) + green diff accents + muted gray; mono type for everything that is "code" (graph, labels, deltas), sans for reading prose. Deliberate grid marks and `<git>`-style borders; diff-colored text for changes; branch lines converging into a single timeline down the page.

STORY: Visitor opens the page as if opening a terminal. `git log` shows Bruno pitching himself as the latest commit; scrolling pages the log; each section is a commit object—stars, copy, metadata—revealed with green/red diff deltas. The visitor understands: this developer thinks in version control, and here is his HEAD.

FIRST VIEWPORT: A top-anchored shell: near-black background, one centered/captioned "terminal" window whose title bar reads `bruno-de-almeida-pessoa.git — portfólio`, `$ git log --oneline --graph`. Under it a hero heading block in sans ("Bruno de Almeida Pessoa"), phone-cycle tagline, the CLI window showing the latest commit ("feat: portfólio — ...") with the profile photo as commit avatar, and the primary action `git checkout projetos` as the CTA button, plus secondary LinkedIn CTA. Nav = branch chips (main, projetos, linguagens, formacao, contato).

FORM: Assigned direction #4 of my grounded list (seed 1d70b034), the git-history world; signature interaction = scroll-driven `git log` pagination where HEAD chip follows scroll, and section content diffs into view.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.