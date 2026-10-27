# Sofia Escobedo's Personal Website

This is the source code for my personal website, built with [Astro](https://astro.build) and deployed on Cloudflare Workers.

## About

I'm Sofia Escobedo, an iOS developer, entrepreneur, and open source contributor. This website hosts my personal blog and information about my work.

## Project Structure

```text
├── public/               # Static assets (images, fonts, favicon)
│   ├── assets/          # Images for blog posts
│   └── fonts/           # Web fonts
├── src/
│   ├── assets/          # Icons and images used in components
│   ├── components/      # Reusable UI components
│   │   └── ui/          # React components
│   ├── content/         # Content collections
│   │   └── blog/        # Blog posts in Markdown format (organized by year)
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # Routes and pages
│   ├── styles/          # Global styles and CSS
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── worker/              # Cloudflare Worker for static assets and Markdown negotiation
├── wrangler.jsonc       # Cloudflare Workers deployment configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.mjs  # Tailwind CSS configuration
└── LICENSE              # Dual license (CC BY 4.0 + MIT)
```

## Commands

| Command                | Action                                      |
| :--------------------- | :------------------------------------------ |
| `bun install`          | Installs dependencies                       |
| `bun run dev`          | Starts local dev server at `localhost:4321` |
| `bun run build`        | Build the production site to `./dist/`      |
| `bun run preview`      | Preview the build locally, before deploying |

## Deployment

The production site is deployed to Cloudflare Workers using the configuration in `wrangler.jsonc`. The Worker serves the static Astro build from `dist/` and negotiates Markdown responses for requests that accept `text/markdown`.

To build and preview locally:

```sh
bun install --frozen-lockfile
bun run build
bunx wrangler dev
```

Deploy with Wrangler after authenticating with Cloudflare:

```sh
bunx wrangler deploy
```

## License

This repository uses dual licensing:

- **Documentation & Blog Posts**: Licensed under [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/)
- **Code & Code Snippets**: Licensed under the [MIT License](LICENSE)

See the [LICENSE](LICENSE) file for full details.

## Special Thanks

Special thanks to [Sat Naing](https://github.com/satnaing) for creating the excellent [AstroPaper theme](https://astro-paper.pages.dev/) that served as the foundation for this website. Their thoughtful design and clean architecture made it a joy to build upon.
