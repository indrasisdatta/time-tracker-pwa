This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and `next-pwa`.

## Getting Started

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note: For PWA changes run:
```bash
npm run build
npm run start
```

[PWA Ref] (https://levelup.gitconnected.com/turn-your-next-js-app-into-a-progressive-web-app-pwa-cd6290330690)

[Advantages of Progressive Web Apps](https://stackademic.com/blog/adding-pwa-to-next-js-with-app-directory-simple-guide)
## Benefits of PWA:

1. Offline Access: Offline access is one of the biggest benefits as PWAs can work offline or in low-network conditions using service workers to cache essential assets and data.
2. App-Like: PWAs are built to mimic native app interactions, making the user experience feel fluid and intuitive.
3. Push Notifications: Just like native apps, PWAs can send push notifications to the end users.
4. Discoverable: PWAs can be discovered by search engines, which is a significant advantage over native applications as inherently PWAs are web apps.
5. Installable: Users can "install" a PWA on their device’s home screen without going through an app store, which makes the distribution more direct.
6. Automatic Updates: PWAs update automatically when the user accesses them, ensuring that users always see the latest version without needing to go through an app store update process.

## Steps to create Next.js PWA

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
