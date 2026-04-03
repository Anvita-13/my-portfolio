# Anvita Arun | Personal Portfolio

A modern, responsive, single-page portfolio application built using React to showcase academic background, technical skills, projects, and accomplishments. The project emphasizes clean design, modular architecture, and ease of future updates.

---

## Description

This portfolio serves as a centralized platform to present my work, technical capabilities, and achievements as a Computer Science student. It is designed with a focus on simplicity, maintainability, and performance, while providing a visually appealing user experience.

---

## Features

- Single-page responsive design
- Smooth scrolling navigation across sections
- Subtle animations using Intersection Observer
- Modular and reusable React components
- Content-driven architecture for easy updates
- Clean and minimal UI with modern styling
- Docker support for containerized deployment
- Optimized static build served via Nginx

---

## Tech Stack

**Frontend:**
- React 18
- Vite
- JavaScript
- HTML5
- CSS3

**Design & Architecture:**
- Component-based architecture
- CSS variables for theming
- Intersection Observer for animations

**DevOps & Deployment:**
- Docker
- Nginx

---

## Project Structure

```text
my-portfolio/
│
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable React components mapped by section
│   ├── data/               # Centralized content definitions
│   ├── hooks/              # Custom React hooks
│   ├── App.jsx             # Main application layout
│   ├── index.css           # Global design tokens and styles
│   └── main.jsx            # Application entry point
│
├── Dockerfile              # Multi-stage Docker build configuration
├── .dockerignore           # Exclusions for Docker build context
├── .gitignore              # Git exclusions
├── package.json            # Node.js dependencies
└── README.md               # Project documentation
```

---

## Installation and Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Steps

```bash
git clone https://github.com/Anvita-13/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

The application will run locally on:
`http://localhost:5173`

---

## Running with Docker

### Build Docker Image
```bash
docker build -t portfolio-app .
```

### Run Container
```bash
docker run -d -p 3000:80 --name my-portfolio portfolio-app
```

The application will be available at:
`http://localhost:3000`

---

## Usage and Updates

The project is structured so that content can be updated without modifying core components.

- Update personal information, projects, and details inside the `src/data/portfolioData.js` file.
- Modify UI components inside `src/components/`.
- Styling changes can be made in CSS files using defined CSS variables for consistency.

To reflect updates in production environments:

```bash
npm run build
```
or rebuild the Docker container.

---


## Future Improvements

- Add live deployment and hosting
- Integrate backend services for dynamic content
- Enhance animations and UI interactions
- Add analytics for visitor tracking
- Improve accessibility and SEO optimization

---

## Contributing

Contributions are welcome. Suggestions, improvements, or issues can be submitted through pull requests or issue tracking.
