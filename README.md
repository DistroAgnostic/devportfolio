# Chetan Patel - Portfolio

> [justchetan.me](https://justchetan.me)

A modern, dark glassmorphism portfolio built with Astro and Tailwind CSS. Features a clean blog with Giscus comments, anonymous commenting, and fully customizable content through a single config file.

## Built With

- **[Astro](https://astro.build/)** - Static site generator
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **[Giscus](https://giscus.app/)** - GitHub Discussions-powered comment system
- **TypeScript** - For type-safe configuration

## Project Structure

```
devportfolio/
├── .github/workflows/
│   └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── profile.png
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── AnonComments.astro
│   │   ├── BlogCard.astro
│   │   ├── Certifications.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── GiscusComments.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro
│   ├── content/
│   │   ├── blog/
│   │   │   └── hello-world.md
│   │   └── config.ts
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [slug].astro
│   │   │   └── index.astro
│   │   └── index.astro
│   ├── styles/
│   │   └── global.css
│   └── config.ts
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```
<!--
## Local Development

```bash
git clone https://github.com/DistroAgnostic/devportfolio.git
cd devportfolio
pnpm install
pnpm dev
```

## Deployment

Deployed via GitHub Pages at [justchetan.me](https://justchetan.me). The included GitHub Actions workflow (`deploy.yml`) automatically builds and deploys to GitHub Pages on push to the `main` branch.
-->
## License

This project is licensed under GPL v3. See LICENSE.md.
