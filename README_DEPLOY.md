# Deployment Guide — Render (backend) + Vercel (frontend)

This guide shows how to deploy the monorepo to Render (backend) and Vercel (frontend).

Prerequisites
- Repo pushed to GitHub (or Git provider supported by Render/Vercel)
- `node` and `npm` installed locally for testing

1) Push your repository to GitHub

- Create a GitHub repository and push this project root.

2) Deploy backend to Render

- Go to https://render.com and sign in.
- Create a new **Web Service** and connect your GitHub repo.
- Set the service settings:
  - **Name:** kavin-portfolio-backend (or your choice)
  - **Environment:** Node
  - **Region / Plan:** Free (or choose as needed)
  - **Root Directory:** `backend`
  - **Build Command:** leave blank or `npm install`
  - **Start Command:** `npm start`
- Render will detect `package.json` inside `backend` and run the service. The app listens on `process.env.PORT` (already supported in `server.js`).

3) Deploy frontend to Vercel

- Go to https://vercel.com and sign in.
- Import Project → select the same GitHub repo.
- When configuring the project, set:
  - **Framework Preset:** Other (or Vite)
  - **Root Directory:** `frontend`
  - **Build Command:** `npm run build`
  - **Output Directory:** `dist`
- After deploy, configure an environment variable (optional):
  - `VITE_BACKEND_URL` = `https://<your-render-backend>.onrender.com` (use your Render service URL)

Notes
- If you prefer to use the Vercel CLI instead of the dashboard, from repo root run:

```bash
# from repo root
# push to GitHub first
# then in a local clone, deploy frontend directly from the frontend folder
cd frontend
npm install
npm run build
npx vercel --prod
```

- For Render, connect the GitHub repo for continuous deploys; each push to main will redeploy.

Troubleshooting
- If the frontend cannot call the backend due to CORS or wrong URL, set `VITE_BACKEND_URL` in Vercel and update the frontend to use it when making API calls.
- Backend logs on Render are accessible in the Render dashboard if something fails to start.

If you want, I can:
- Create a `vercel.json` in `frontend/` to pin build settings.
- Create a `render.yaml` (infrastructure-as-code) template for Render.
- Walk through connecting the GitHub repo and performing the first deploy interactively.
