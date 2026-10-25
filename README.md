<<<<<<< HEAD
# Second-Hand Marketplace

A full-featured second-hand marketplace built with Next.js. Users can browse, buy, and sell pre-owned items with secure authentication, payment processing, and a real-time dashboard.

<img width="1536" height="1024" alt="ChatGPT Image Jun 22, 2026, 11_26_13 AM" src="https://github.com/user-attachments/assets/53cbfd4f-67f0-41c4-b10d-bf0996a7e7e4" />

## live-site
https://neo-market-bd.vercel.app

---

## Features

- User authentication (sign up, sign in, session management)
- Product browsing with category filtering and pagination
- Product search
- Wishlist management
- Shopping cart and checkout with Stripe payment integration
- User dashboard with order history and profile management
- Admin dashboard with analytics, user management, product management, and order management
- Responsive design with dark/light theme support

---

## Tech Stack

| Package | Purpose |
|---|---|
| [Next.js](https://nextjs.org/) | React framework with App Router |
| [React](https://react.dev/) | UI library |
| [Better Auth](https://better-auth.com/) | Authentication (email/password) |
| [MongoDB](https://www.mongodb.com/) | Database |
| [Mongoose / Mongo Adapter](https://github.com/better-auth/better-auth) | MongoDB adapter for Better Auth |
| [Stripe](https://stripe.com/) | Payment processing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| [Lottie React](https://github.com/Gamote/lottie-react) | Lottie animation playback |
| [Lucide React](https://lucide.dev/) | Icons |
| [Recharts](https://recharts.org/) | Charts and analytics |
| [Radix UI](https://www.radix-ui.com/) | Accessible UI primitives |
| [Shadcn](https://ui.shadcn.com/) | Component library |
| [Sonner](https://sonner.emilkowal.ski/) | Toast notifications |
| [Next Themes](https://github.com/pacocoursey/next-themes) | Dark/light mode |
| [Class Variance Authority](https://cva-docs.vercel.app/) | Component variant management |
| [Tailwind Merge](https://github.com/dcastil/tailwind-merge) | Tailwind class merging |

---

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance (local or cloud)
- Stripe account (for payment features)

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_better_auth_secret
BETTER_AUTH_URL=http://localhost:3000
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
  app/            # Next.js App Router pages and layouts
  components/     # Reusable UI components
  lib/            # Utilities, API clients, server actions
  hooks/          # Custom React hooks
public/
  lottie/         # Lottie animation JSON files
```

---

=======
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
>>>>>>> 2ddff8cfda7a60f68748f1ac4d3747340abacc23
