# Shiqi Cheng — Personal Portfolio

A personal portfolio website presenting my experience, projects, education, leadership, and skills at the intersection of **business, data, and AI**.

**Live website:** [https://sannycheng.github.io/shiqi-portfolio/](https://sannycheng.github.io/shiqi-portfolio/)

## About

This portfolio provides a curated overview of my academic background, professional experience, and selected projects across:

- Business and strategy analysis
- Data analytics and visualisation
- Machine learning and AI-assisted workflows
- Healthcare and economic research
- Product and operational problem-solving

## Featured Projects

The website currently includes:

- **AI-Powered Subcontracting Desk**
- **Market & Strategy Analysis**
- **Procurement Spend & Supplier Performance Dashboard**
- **Small Talk App**
- **Machine Learning for Differential Diagnosis**
- **DRG Research**

Selected project pages include reports, dashboard previews, research posters, source-code links, and locally hosted demonstration media.

## Technology

- React
- Vite
- Tailwind CSS
- JavaScript
- GitHub Actions
- GitHub Pages
- pnpm

## Project Structure

```text
shiqi-portfolio/
├── public/
│   ├── images/
│   └── projects/
│       ├── images/
│       ├── pdfs/
│       └── videos/
├── src/
│   ├── data/
│   │   ├── experienceData.js
│   │   ├── profile.js
│   │   └── projectsData.js
│   ├── main.jsx
│   └── styles.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
└── vite.config.js
```

Editable portfolio content is separated from the layout and styling:

- General profile, education, leadership, and skills: `src/data/profile.js`
- Professional experience: `src/data/experienceData.js`
- Selected projects and project assets: `src/data/projectsData.js`

## Run Locally

This project uses pnpm.

```bash
git clone https://github.com/SannyCheng/shiqi-portfolio.git
cd shiqi-portfolio
pnpm install
pnpm dev
```

Open the local URL shown in the terminal.

## Production Build

```bash
pnpm build
```

The production files are generated in the `dist` directory.

## Deployment

The website is deployed through GitHub Pages.

Every push to the `main` branch automatically triggers the GitHub Actions workflow, builds the project, and updates the live website.

## Contact

- [LinkedIn](https://www.linkedin.com/in/shiqi-cheng-a29376271/)
- [Portfolio](https://sannycheng.github.io/shiqi-portfolio/)

## License

This repository contains personal portfolio content and project materials. Please do not reproduce or redistribute the content without permission.
