# Star Wars Character Catalog

A React-based web app that allows users to explore Star Wars characters using the [SWAPI](https://swapi.py4e.com/). You can browse, search, and view detailed information about each character, including their movies, vehicles, species, and starships.

---

## 🚀 How to Launch the App

### 1. **Live Version**
Open this in your browser:
```
https://star-wars-ruddy-five.vercel.app/?page=1
```

---
## 📋 Prerequisites
- Node.js 16 or higher
- npm package manager

### 2. **Run Locally (via ZIP)**
```bash
# Download and unzip the project
cd <project-folder>
npm install
npm run dev
# Open the localhost URL printed in your terminal (e.g., http://localhost:5173)
```

---

### 3. **Run Locally (via Git)**
```bash
# Clone the project and switch to main branch
git clone <repo-url>
cd <project-folder>
git checkout main
git pull
npm install
npm run dev
# Open the localhost URL printed in your terminal
```

---

## 🧭 How to Use the App

- Browse characters using pagination buttons.
- Use the search bar to find specific characters.
- Click on any character card to view detailed information.
- On the detail page:
  - Basic info is shown immediately.
  - Expand dropdown sections to view films, vehicles, starships, and species.
- Use the **Back Home** button to return to the catalog.

---

## 🛠 Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Routing**: React Router DOM
- **API**: [SWAPI](https://swapi.py4e.com) (official swapi.dev website is currently down)
- **Features**:
  - Pagination
  - Search functionality (with debounce and abort controller)
  - Character detail pages
  - Lazy-loaded dropdowns for nested data: films, starships, vehicles, species
  - Responsive design (375px to 1920px+, works on 320px and ultra-wide as well)

---

## 🌐 API Used

> [https://swapi.py4e.com/api/?format=api](https://swapi.py4e.com/api/?format=api)  
Used this instead of the official SWAPI (`swapi.dev`), as it's currently down.

---

## 🧩 Developer Notes

- All UI components were handcrafted — no UI libraries like `shadcn/ui` were used.
- Search functionality includes both **debounce** and **abort controller** for a responsive and error-free experience.
- Encountered issues with search on long character names, resolved with `AbortController` to cancel stale requests.

---

## 📱 Responsive Design

- Optimized for all screen sizes from **mobile (320px)** to **ultra-wide displays (>1920px)**.
- Best viewed between **375px and 1920px**.

---

## ✨ Enjoy exploring the Star Wars universe!