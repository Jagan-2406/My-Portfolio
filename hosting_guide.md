# 🚀 Complete Hosting Guide — Vercel + Render + MongoDB Atlas

> **Your Stack:** React (Vite) → Vercel | Node/Express → Render | MongoDB → Atlas  
> **Goal:** Zero CORS errors, full production setup

---

## PHASE 1 — MongoDB Atlas (Database)

### Step 1 — Create a Free Cluster

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) → **Sign up / Log in**
2. Click **"Build a Database"** → Choose **Free (M0)**
3. Select **AWS** as provider, pick the closest region (e.g. Mumbai `ap-south-1`)
4. Name your cluster (e.g. `portfolio-cluster`) → Click **"Create"**

### Step 2 — Create a Database User

1. In the left sidebar → **Security → Database Access**
2. Click **"Add New Database User"**
3. Authentication: **Password**
4. Username: `portfolioUser` | Password: (generate a strong one, **save it**)
5. Role: **Atlas Admin** → Click **"Add User"**

### Step 3 — Allow All IPs (Required for Render)

1. Left sidebar → **Security → Network Access**
2. Click **"Add IP Address"**
3. Click **"Allow Access from Anywhere"** → this sets `0.0.0.0/0`
4. Click **"Confirm"**

> [!IMPORTANT]
> Render uses dynamic IPs. You MUST allow `0.0.0.0/0` or your backend will fail to connect.

### Step 4 — Get Your Connection String

1. Left sidebar → **Database** → Click **"Connect"** on your cluster
2. Choose **"Drivers"** → Driver: **Node.js**, Version: **5.5 or later**
3. Copy the URI — it looks like:
```
mongodb+srv://portfolioUser:<password>@portfolio-cluster.xxxxx.mongodb.net/?retryWrites=true&w=majority
```
4. Replace `<password>` with your actual password
5. Add your DB name: change `/?retryWrites` to `/portfolio_db?retryWrites`

Final URI:
```
mongodb+srv://portfolioUser:YOURPASS@portfolio-cluster.xxxxx.mongodb.net/portfolio_db?retryWrites=true&w=majority
```

---

## PHASE 2 — Deploy Backend to Render

### Step 5 — Push Your Code to GitHub

Make sure your `portfolio-back` folder is in a GitHub repo (can be the same monorepo).

```
MY-PORTFOLIO/
├── portfolio-back/   ← backend
└── portfolio-front/  ← frontend
```

If not already: create a GitHub repo and push everything.

> [!IMPORTANT]
> Make sure `.env` is in `.gitignore` — **never push secrets to GitHub.**

### Step 6 — Create Web Service on Render

1. Go to [render.com](https://render.com) → Sign up with GitHub
2. Click **"New"** → **"Web Service"**
3. Connect your GitHub repo
4. Configure:

| Field | Value |
|---|---|
| **Name** | `jagan-portfolio-api` |
| **Root Directory** | `portfolio-back` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |
| **Instance Type** | Free |

### Step 7 — Add Environment Variables on Render

In your Render service → **"Environment"** tab → Add these one by one:

| Key | Value |
|---|---|
| `PORT` | `5000` |
| `MONGODB_URI` | `mongodb+srv://portfolioUser:YOURPASS@...` (your full Atlas URI) |
| `CORS_ORIGIN` | `https://YOUR-APP.vercel.app` ← add this AFTER deploying frontend |
| `ANTHROPIC_API_KEY` | your Anthropic key |
| `EMAIL_USER` | `vasujagan382@gmail.com` |
| `EMAIL_PASS` | your Gmail App Password |

> [!WARNING]
> Leave `CORS_ORIGIN` blank for now. You'll update it after the frontend is deployed (Step 10).

Click **"Deploy"** — wait ~2 minutes.

### Step 8 — Get Your Render URL

After deploy succeeds, copy your URL:
```
https://jagan-portfolio-api.onrender.com
```

Test it in browser:
```
https://jagan-portfolio-api.onrender.com/api/health
```
Should return: `{ "status": "ok" }`

### Step 9 — Seed the Database

Run this **locally** with your live MongoDB URI:

```bash
cd portfolio-back
# Temporarily update .env with your Atlas MONGODB_URI
node scripts/seed.js
```

You should see: `Database seeded successfully!`

---

## PHASE 3 — Deploy Frontend to Vercel

### Step 10 — Set Environment Variable in Frontend

Before deploying, create/update `portfolio-front/.env.production`:

```env
VITE_API_URL=https://jagan-portfolio-api.onrender.com
```

> [!IMPORTANT]
> Vite requires the prefix `VITE_` for env vars to be accessible in the browser.

Also make sure `.env.production` is in `.gitignore` if it contains secrets — but `VITE_API_URL` is public-safe.

### Step 11 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click **"Add New Project"** → Import your GitHub repo
3. Configure:

| Field | Value |
|---|---|
| **Root Directory** | `portfolio-front` |
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |

4. Add Environment Variable:

| Key | Value |
|---|---|
| `VITE_API_URL` | `https://jagan-portfolio-api.onrender.com` |

5. Click **"Deploy"** — wait ~1-2 minutes

6. Copy your Vercel URL: `https://jagan-portfolio.vercel.app`

### Step 12 — Update CORS on Render (Critical!)

Now go back to **Render → your service → Environment** and update:

```
CORS_ORIGIN = https://jagan-portfolio.vercel.app
```

Then click **"Save Changes"** → Render will auto-redeploy.

---

## PHASE 4 — Verify CORS is Working

### What your `server.js` does (already correct ✅)

```js
const allowedOrigin = process.env.CORS_ORIGIN || '*';
app.use(cors({
  origin: allowedOrigin === '*' ? '*' : allowedOrigin.split(','),
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

- In **development** → `CORS_ORIGIN` is `http://localhost:5173` → only local allowed
- In **production** → `CORS_ORIGIN` is your Vercel URL → only Vercel allowed
- Multiple origins? Comma-separate them: `https://a.vercel.app,https://b.vercel.app`

### Step 13 — Test Everything

Open your Vercel URL and check:

- ✅ Projects load from DB (not fallback)
- ✅ Contact form sends email
- ✅ Chatbot responds
- ✅ No CORS errors in browser console (F12 → Console)

---

## PHASE 5 — Common Issues & Fixes

### ❌ CORS Error: "blocked by CORS policy"

**Cause:** `CORS_ORIGIN` on Render doesn't match your Vercel URL exactly.

**Fix:** Make sure there's **no trailing slash**:
- ✅ `https://jagan-portfolio.vercel.app`
- ❌ `https://jagan-portfolio.vercel.app/`

### ❌ "Network Error" / API not reachable

**Cause 1:** Render free tier **spins down after 15 min of inactivity** — first request takes ~30s.  
**Fix:** Add a loading state (already handled by your fallback data in `projectsData.js`).

**Cause 2:** `VITE_API_URL` not set in Vercel.  
**Fix:** Go to Vercel → Project Settings → Environment Variables → add `VITE_API_URL`.

### ❌ MongoDB connection error on Render

**Cause:** Network Access not set to `0.0.0.0/0` in Atlas.  
**Fix:** Atlas → Network Access → Add `0.0.0.0/0`.

### ❌ "Cannot GET /" on Vercel (React Router issue)

Add a `vercel.json` in `portfolio-front/`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Final Checklist

- [ ] MongoDB Atlas cluster created with `0.0.0.0/0` network access
- [ ] Atlas connection URI includes `/portfolio_db` database name
- [ ] Database seeded (`node scripts/seed.js`)
- [ ] Render service deployed with all env vars set
- [ ] `VITE_API_URL` set on Vercel pointing to Render URL
- [ ] `CORS_ORIGIN` on Render set to exact Vercel URL (no trailing slash)
- [ ] Both deploys verified working — no console errors

---

> **Render URL:** `https://YOUR-SERVICE.onrender.com`  
> **Vercel URL:** `https://YOUR-APP.vercel.app`  
> **Health check:** `https://YOUR-SERVICE.onrender.com/api/health`
