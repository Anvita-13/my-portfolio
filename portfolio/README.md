# Anvita Arun — Personal Portfolio

A clean, modern, single-page portfolio website built with **React + Vite**.  
All content lives in one file — easy to update forever.

---

## 📁 Project Structure

```
portfolio/
├── public/                   # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar/           # Fixed nav bar with smooth-scroll links
│   │   ├── Hero/             # Landing section
│   │   ├── About/            # Bio + quick-info card
│   │   ├── Education/        # Timeline cards
│   │   ├── Skills/           # Badge chips grouped by category
│   │   ├── Projects/         # Project cards
│   │   ├── Accomplishments/  # Award cards
│   │   ├── Interests/        # Hobby cards
│   │   ├── Contact/          # Clickable contact cards
│   │   └── Footer/           # Footer with back-to-top
│   ├── data/
│   │   └── portfolioData.js  # ← Edit ALL content here
│   ├── hooks/
│   │   └── useInView.js      # Scroll-triggered fade-in hook
│   ├── App.jsx               # Root component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles + design tokens
├── index.html                # HTML shell with SEO meta tags
├── Dockerfile                # Multi-stage Docker build
├── .dockerignore
├── .gitignore
└── vite.config.js
```

---

## ✏️ How to Update Content

Open **`src/data/portfolioData.js`** — every piece of text on the site comes from here.  
Change a value, save, and the page updates instantly (hot-reload in dev, or rebuild for Docker).

---

## 🚀 Run Locally (No Docker)

### Prerequisites
- Node.js 18+ — https://nodejs.org

### Steps

```bash
# 1. Navigate into the portfolio folder
cd portfolio

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🐳 Run with Docker

### Prerequisites
- Docker Desktop — https://www.docker.com/products/docker-desktop

### Build the image

```bash
# Run this from inside the portfolio/ folder
cd portfolio
docker build -t anvita-portfolio .
```

### Run the container

```bash
docker run -d -p 8080:80 --name my-portfolio anvita-portfolio
```

Open **http://localhost:8080** in your browser.

### Stop / remove the container

```bash
docker stop my-portfolio
docker rm my-portfolio
```

---

## 🔄 Rebuild After Making Changes

### Normal (dev) — instant hot-reload, no rebuild needed
Just edit and save any file while `npm run dev` is running.

### Docker rebuild after content/code changes

```bash
# Stop and remove old container
docker stop my-portfolio
docker rm my-portfolio

# Rebuild the image
docker build -t anvita-portfolio .

# Start fresh container
docker run -d -p 8080:80 --name my-portfolio anvita-portfolio
```

---

## ☁️ Push to GitHub

### First-time setup (if you haven't already)

```bash
git init
git remote add origin https://github.com/<your-username>/<repo-name>.git
```

### Push changes

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

> **Tip:** The repo is already connected to GitHub.  
> Just `git add . → git commit → git push` every time you make changes.

---

## 🏗️ Build Production Bundle (optional)

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Vanilla CSS | Styling (design tokens in `index.css`) |
| Nginx | Production server inside Docker |
| Intersection Observer API | Scroll animations |

---

*Built with ❤️ — last updated 2026*
