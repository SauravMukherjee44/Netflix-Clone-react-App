# Netflix Clone
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
<p> Netflix-clone rebuilt using Next, Tailwind and TMDB API.</p>
<h3><a href="https://clone-netflix-next-js.vercel.app/">Have a look at Live Demo</a></h3>

<img height="40%" src= "https://pngimg.com/uploads/netflix/netflix_PNG11.png">
<br>

## Tech used:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/) / [JIT Compiler](https://v2.tailwindcss.com/docs/just-in-time-mode)
- [Framer-motion](https://www.framer.com/)
- [TMDB Api](https://www.themoviedb.org/)
- Deployed on [Vercel](https://vercel.com/)

## To-Dos
- [x] Netflix Home & Sign-in Page 
- [x] Fix sign-in callback errors
- [x] Sign-in using GitHub/Google provider [Next-auth]

## Running the Project

First, Install the dependencies:

```bash
npm install
or
yarn install
```
Then, run the development server:
```bash
npm run dev
or 
yarn dev
```

Open [LocalHost 3000 port](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

API Key can be obtained by creating a free account on [TMDB](https://www.themoviedb.org/). Create a new account, Move to settings, Click API and fill the form for developer options. Copy the API key into .env file. TMDB API base is `https://api.themoviedb.org/3`.
