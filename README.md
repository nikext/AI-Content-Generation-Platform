This is a repository for my Bachelor Degree final project | AI Platform with Next.js 14, React, Tailwind, Prisma, Stripe.

Features:

- Tailwind modern & simple design
- Full mobile/tablet/desktop responsiveness
- Clerk Auth (Facebook, Email, Google and other social logins)
- Client form validation and handling
- Error handling using react-toast
- Conversation Generation Model (Open AI)
- Image Generation Model (Open AI)
- Code Generation Model (Open AI)
- Video Generation Model (Replicate AI)
- Music Generation Model (Replicate AI)
- Stripe monthly subscription to PRO version
- Free tier with API limitation to 5 generations
- POST, DELETE, and GET routes in route handlers

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/nikola6669/AI-SaaS.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Create Prisma MySQL Database (PlanetScale)

```shell
npx prisma db push
npx prisma generate

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command        | description                              |
| :------------- | :--------------------------------------- |
| `dev`          | Starts a development instance of the app |
| `cypress open` | Starts Cypress UI testing tool           |
| `jest`         | Starts Jest Unit tests                   |
