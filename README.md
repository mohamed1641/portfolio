# Mohamed Kamel — Creative Portfolio

A responsive Arabic-first personal portfolio for **video editing, content creation, motion graphics and digital marketing**, with a pure-black visual language and interactive motion effects.

## Overview

The site brings together service information, creative content categories, a production workflow, and direct email contact in a single page. Its content and identity are designed around Mohamed Kamel.

## Key features

- Responsive RTL layout built with semantic HTML5 and modern CSS.
- Minimal black UI, animated hero, particle canvas, scrolling marquee and interactive cards.
- Filterable, searchable creative-content categories.
- Clear services and four-step production workflow.
- Contact form that opens a **pre-filled email draft** in the visitor's email app.
- Accessible form feedback with `aria-live`.

## Tech stack

HTML5 · CSS3 · Vanilla JavaScript · Google Fonts (Cairo)

No build step or package installation is required.

## Run locally

Open `index.html` in a web browser, or start a local static server from the project root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish to GitHub Pages

1. Upload the files in this directory to the repository root on the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Choose **main** and **/(root)**, then save.

Because this is a static site, GitHub Pages can host the frontend without a server.

## Content and contact

- Edit the name, intro and contact information in `index.html`.
- Edit creative categories in `portfolioItems` inside `static/js/main.js`.
- Update the theme in `static/css/style.css`.
- The gallery uses Unsplash imagery as **visual references for creative categories**, not as a claim that these are finished client commissions.
- The form uses `mailto:`; the user must complete sending in their own mail application. There is no email collection server or stored form data. If a server-side contact workflow is desired, integrate a secure form endpoint separately.

## Structure

```text
.
├── index.html
├── README.md
├── .gitignore
├── .nojekyll
└── static/
    ├── css/style.css
    └── js/main.js
```

## Copyright

© Mohamed Kamel. All rights reserved for original site content and design; external image and font assets follow their respective licenses.
