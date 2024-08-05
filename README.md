# T3 Gallery
A photo gallery application built with the T3 Stack, featuring authentication, image upload, and more.

## TODO

- [x] Make it deploy (w/ vercel)
- [x] Scaffold basic UI with mock data
- [x] Tidy up build process
- [x] Actually set up a database (w/ vercel postgres)
- [x] Attach databse to UI
- [x] Add auth (w/ clerk)
- [x] Add image upload
- [x] "Taint" (Server-only)
- [x] Use Next/Image component
- [x] Error management (w/ Sentry)
- [x] Routing/image page (parallel route)
- [x] Setup toasts
- [x] Analytics (posthog)
- [x] Delete button (w/ Server actions)
- [x] Ratelimiting (upstash)
- [x] Fix the page layout for images of different resolutions
- [x] Create a better navbar
- [x] Fix README(somewhat)

## Future goals

- [ ] "Selecting" images on the gallery
- [ ] Implement shareability of the images(public/private)
- [ ] Infinite scroll
- [ ] Folders/albums
- [ ] Implement likes and comments
- [ ] Create explore page for users to view public photos

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)