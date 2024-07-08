# Remix Starter

## Features

- [TRPC](https://trpc.io)
- TailwindCSS and shadcn-ui
- [Iconify Icons](https://github.com/egoist/tailwindcss-icons)
- Postgres and [Drizzle-ORM](https://orm.drizzle.team/docs/overview)
- Docker support (you can also use Vercel, Cloudflare Pages and others)

## Development

Setup your environment variables:

```bash
cp .env.example .env
# adjust env variables in the .env file
```

Run the dev server:

```bash
pnpm dev
```

## Deployment

First, build your app for production:

```bash
pnpm build
```

Then run the app in production mode:

```bash
pnpm start
```

Now you'll need to pick a host to deploy it to.
