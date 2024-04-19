This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[PWA Ref] (https://levelup.gitconnected.com/turn-your-next-js-app-into-a-progressive-web-app-pwa-cd6290330690)

[Advantages of Progressive Web Apps](https://stackademic.com/blog/adding-pwa-to-next-js-with-app-directory-simple-guide)
Benefits of PWA:

1. Offline Access: Offline access is one of the biggest benefits as PWAs can work offline or in low-network conditions using service workers to cache essential assets and data.
2. App-Like: PWAs are built to mimic native app interactions, making the user experience feel fluid and intuitive.
3. Push Notifications: Just like native apps, PWAs can send push notifications to the end users.
4. Discoverable: PWAs can be discovered by search engines, which is a significant advantage over native applications as inherently PWAs are web apps.
5. Installable: Users can “install” a PWA on their device’s home screen without going through an app store, which makes the distribution more direct.
6. Automatic Updates: PWAs update automatically when the user accesses them, ensuring that users always see the latest version without needing to go through an app store update process.

[Steps to create Next.js PWA]

1. Install next-pwa
   `npm i next-pwa`
2. Create icons of diiferent sizes in `public/images`
   Eg. icon-96x96.png, icon-icon-128x128.png etc
3. Create `src/app/manifest.webmanifest` and mention app name, icons, start url, theme color etc.
4. Add manifest in metadata `app/layout.tsx`.
   `export const metadata: Metadata = {
    manifest: "./manifest",
    title: "PWA App",
};`
5. In `next.config.js` import next-pwa and initialize. Add to nextConfig.
   `const nextPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
});`
   `const nextConfig = nextPWA({...other opts...})`

[Implementing Firebase push notifications in Next.js](https://www.mbloging.com/post/implementing-firebase-push-notifications-in-next-js-a-step-by-step-guide)
