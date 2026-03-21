# ✦ Anjana K — Light Theme Portfolio

> Futuristic light-theme Data Science portfolio. Pure **HTML · CSS · Vanilla JS** — no build step, no npm. Open `index.html` and it works.

---

## 📁 Project Structure

```
anjana-light-portfolio/
├── index.html              ← Single page — all sections live here
├── css/
│   ├── variables.css       ← 🎨 EDIT THIS FIRST — all colours, fonts, spacing
│   ├── base.css            ← Reset, globals, buttons
│   ├── animations.css      ← Keyframes + scroll reveal system
│   ├── navbar.css          ← Navigation bar styles
│   ├── hero.css            ← Hero section + profile card
│   └── sections.css        ← About · Projects · Skills · Contact · Footer
├── js/
│   ├── navbar.js           ← Scroll effect + mobile menu + active links
│   ├── typewriter.js       ← Hero rotating text effect
│   ├── scroll-reveal.js    ← IntersectionObserver scroll animations
│   ├── skills.js           ← Tab switching + bar fill animations
│   └── form.js             ← Contact form handler
├── assets/
│   ├── img/
│   │   └── profile.jpg     ← ⭐ ADD YOUR PHOTO HERE
│   └── Anjana_CV.pdf       ← ⭐ ADD YOUR CV PDF HERE
└── README.md
```

---

## ⚡ Quick Start

```bash
# No install needed — just open in browser
open index.html

# Or serve locally with Python
python -m http.server 3000
```

---

## 🔧 Personalisation Guide

### 1. Add your profile photo
Place your photo at `assets/img/profile.jpg`.  
Then in `index.html`, find this block inside the hero section:

```html
<!-- Replace this: -->
<div class="profile-initials">AK</div>

<!-- With this: -->
<img src="assets/img/profile.jpg" alt="Anjana K" />
```

### 2. Change colours & fonts
Open **`css/variables.css`** — every design token is here:

```css
--accent:   #0057ff;   /* ← Main blue — change to any colour */
--accent2:  #f59e0b;   /* ← Amber accent */
--bg:       #f4f6fb;   /* ← Page background */
--font-display: 'Syne', sans-serif;   /* ← Heading font */
--font-mono:    'DM Mono', monospace; /* ← Code/label font */
```
> Also update the Google Fonts `<link>` in `index.html` if you change fonts.

### 3. Update personal details
Search `index.html` for these and replace with your real values:
- `anjanaharidasan28@gmail.com` → your email
- `https://linkedin.com/in/anjana` → your LinkedIn URL
- `https://github.com/ANJANA-K-HUB` → your GitHub URL

### 4. Add your CV
Save as `assets/Anjana_CV.pdf`. The Resume button already points there.

### 5. Edit typewriter words
Open `js/typewriter.js` and edit the `WORDS` array:
```js
const WORDS = [
  'Machine Learning',
  'Your Custom Skill',
  ...
];
```

### 6. Add / edit projects
Each project is a `<div class="project-card">` in `index.html` inside `#projects`.  
Copy an existing card, update the title, description, tags, and GitHub link.

### 7. Adjust skill percentages
In `index.html`, each skill bar has a `--w` CSS property (0.0 – 1.0):
```html
<div class="sb-fill" style="--w:0.92"></div>
<!-- 0.92 = 92% -->
```

---

## 🌐 Deploy to GitHub Pages

1. Push the folder to a GitHub repo (e.g. `anjana-portfolio`)
2. **Settings → Pages → Source: main branch / root**
3. Live in ~60 seconds at `https://yourusername.github.io/anjana-portfolio/`

---

## 📦 Zero Dependencies

Everything uses:
- Plain HTML5 semantic markup
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript ES6+ (no jQuery, no frameworks)
- Google Fonts via CDN

---

## ✏️ Quick Reference

| What to change | Where |
|----------------|-------|
| Colours & fonts | `css/variables.css` |
| Your name / bio | `index.html` → `#about` |
| Hero text / buttons | `index.html` → `#hero` |
| Projects | `index.html` → `#projects` |
| Skill % values | `index.html` → `#skills` |
| Contact details | `index.html` → `#contact` |
| Typewriter words | `js/typewriter.js` |
| Form backend | `js/form.js` |
| Profile photo | `assets/img/profile.jpg` |

---

*© 2025 Anjana K · Built with precision, no frameworks needed.*
