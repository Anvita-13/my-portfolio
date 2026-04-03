# 🚀 Technical Guide & Operations

This document covers all the technical instructions needed to run, build, update, and deploy the portfolio.

---

## ✏️ How to Update Content

All textual content, data, and configurations are isolated in a single file. 
Open **`src/data/portfolioData.js`** — every piece of text on the site comes from here.  
Change a value, save, and the page updates instantly (hot-reload in dev, or rebuild for Docker).

---

## 💻 Run Locally (No Docker)

### Prerequisites
- Node.js 18+ — https://nodejs.org

### Steps

```bash
# 1. Install dependencies (only needed once after cloning)
npm install

# 2. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🐳 Run with Docker

### Prerequisites
- Docker Desktop — https://www.docker.com/products/docker-desktop

### Build the image

```bash
# Run this from the root of the project
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
Just edit and save any file while `npm run dev` is running locally.

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

## 🏗️ Build Production Bundle (optional)

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages, etc.).

---

## 🛠️ Tech Stack Details

| Tool | Purpose |
|------|---------|
| **React 18** | UI framework |
| **Vite** | Build tool & dev server |
| **Vanilla CSS** | Styling (design tokens in `src/index.css`) |
| **Nginx** | Production server inside Docker |
| **Intersection Observer** | Scroll animations |
