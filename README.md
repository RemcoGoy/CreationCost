# CreationCost

https://vercel.com/guides/nextjs-prisma-postgres#step-6.-set-up-github-authentication-with-nextauth

## Feature Roadmap

- **Filament Configuration**

  - CRUD features for Filament configuration
  - Import and export configuration as JSON
  - Configuration may include
    - Pricing/KG
    - Filament Type
    - Spool Weight
    - Markup

- **Machine Configuration**

  - CRUD features for Machine configuration
  - Import and export configuration as JSON
  - Configuration may include
    - Machine Type
    - Printer cost
    - Repair percentage

- **Labor Configuration**

  - CRUD features for Labor configuration
  - Import and export configuration as JSON
  - Configuration may include
    - Labor cost
    - Labor time

- **Cost Calculation**
  - Calculate the cost of a print
  - Add elecrity cost
  - Add filament cost
  - Add labor cost
  - Add machine cost

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
