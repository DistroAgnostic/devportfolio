# Chetan Patel — Portfolio

> [justchetan.me](https://justchetan.me)

A modern, dark glassmorphism portfolio built with Astro and Tailwind CSS.

## Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Project Structure

```
devportfolio/
├── public/
│   ├── favicon.svg
│   └── profile.png
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

```bash
git clone https://github.com/DistroAgnostic/devportfolio.git
cd devportfolio
pnpm install
pnpm dev
```

## Deployment

Deployed via GitHub Pages at [justchetan.me](https://justchetan.me).

## License

This project is licensed under GPL v3. See LICENSE.md.
