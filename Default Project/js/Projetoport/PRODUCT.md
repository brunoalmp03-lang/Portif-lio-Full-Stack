# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML5/CSS3/Vanilla JS (user-confirmed for this rebuild). No framework, no build step, no runtime dependencies; runs by opening `index.html` directly and deploys as a static site to GitHub Pages (per the project README).

## Users

- Recruiters and hiring managers screening the developer before an interview: need to assess quickly who he is, what he knows, and how to reach him.
- Bruno de Almeida Pessoa (the developer): uses the portfolio as the single living home for his profile, replacing dispersed PDF resumes.

## Product Purpose

A lightweight, responsive, static web portfolio that centralizes Bruno's professional trajectory, academic background, technical skills, and code portfolio, giving recruiters direct contact channels in a few clicks.

## Positioning

A screening-first, one-page portfolio that compresses a student-developer's identity (role, stack, projects, formation, LinkedIn/GitHub) into something a recruiter can grasp in seconds — always current and faster to scan than a fixed PDF resume.

## Operating Context

- Read on phones, tablets, and desktops (mobile-first responsive design).
- Content language: Brazilian Portuguese (`pt-BR`).
- Reviewed during recruiting triage, typically on the recruiter's own device.
- Served as a purely static site (GitHub Pages per the project README).

## Capabilities and Constraints

- Sections: sticky header with smooth-anchored mobile nav; hero/resume (name, role, specialty, summary, CTAs, tech tags, profile photo); featured projects; skills chips (C, Python, HTML, CSS, JavaScript); education; contact footer with dynamic year.
- Behaviors: accessible mobile menu (aria-expanded, Escape and outside-click close), smooth scrolling, current-year output — all vanilla JS.
- One featured project on record: PayJam (HTML/CSS/JS college project — form pages for a credit intermediary company). No other projects are documented.
- Education: ADS — Universidade Cruzeiro do Sul (2 semesters completed); ADS — IFSP Guarulhos (2nd semester, in progress).
- Constraint: must run with no dependencies by opening `index.html` directly (per README).
- Open: the existing site links GitHub handle `brunoauth`, while the README references `brunoalmp03-lang` — confirm the canonical GitHub handle before building project/contact links.
- Open: this rebuild, which lives in the empty `Projetoport` folder, replaces the existing `Default Project/` site; confirm which content is kept, updated, or dropped during the build.

## Brand Commitments

- Name: Bruno de Almeida Pessoa (nav/footer short form "Bruno Pessoa").
- Role identifiers: "Desenvolvedor Web" / "Estudante de ADS".
- Logo mark: `</>`.
- Content language: pt-BR.
- Voice (existing): direct, professional, modest about a student trajectory.

## Evidence on Hand

- Live implementation in this same repo, one level up: `Default Project/index.html`, `Default Project/css/style.css`, `Default Project/js/script.js`.
- Real asset: `Default Project/foto-perfil.jpeg` (profile photo).
- Project spec/README at repo root describing the MVP and its GitHub Pages link.
- Real and verifiable only: education, skills, PayJam project, LinkedIn profile. No testimonials, customers, or benchmarks exist; none may be fabricated (PayJam is a college project, not a shipped product claim).

## Product Principles

1. Screening-first: within seconds a recruiter knows who he is, what he knows, and how to reach him.
2. Truth over decoration: only real projects, real formation, real links, real skills.
3. Dependency-free durability: native web, no build step, runs anywhere, deploys to GitHub Pages.
4. Mobile-first usability: fluid from small phones to wide desktops.
5. One living home: the portfolio replaces the scattered PDF resume and stays current.