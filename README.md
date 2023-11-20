This is a repository for my Bachelor Degree final project | SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe.

Features:

- Tailwind design
- Full responsiveness
- Clerk Authentication (Email, Google, 9+ Social Logins)
- Client form validation and handling
- Server error handling using react-toast
- Conversation Generation Tool (Open AI)
- Image Generation Tool (Open AI)
- Video Generation Tool (Replicate AI)
- Music Generation Tool (Replicate AI)
- Stripe monthly subscription
- Free tier with API limiting
- POST, DELETE, and GET routes in route handlers (app/api)

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

Add MySQL Database (PlanetScale)

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

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
