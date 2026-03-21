# css/ — Stylesheets

All CSS is split by concern. **Load order in `index.html` matters** — `variables.css` must come first.

| File | Purpose | Edit when… |
|------|---------|-----------|
| `variables.css` | **All design tokens** — colours, fonts, spacing, shadows, border-radius | Changing colours, fonts, or global spacing |
| `base.css` | CSS reset, `<body>`, layout container, `.btn` components, noise overlay | Adding new global button styles |
| `animations.css` | All `@keyframes` + the `[data-aos]` scroll-reveal system | Adding new animation types |
| `navbar.css` | Fixed nav bar, logo, links, mobile hamburger | Changing nav height or link style |
| `hero.css` | Full-height hero, profile card with spinning ring, social icon buttons | Editing hero layout or profile card design |
| `sections.css` | About · Projects · Skills · Contact · Footer | Editing any section below the hero |

---

## Common edits

**Change the accent colour:**
```css
/* css/variables.css */
--accent: #0057ff;   /* change to any hex */
```

**Increase section spacing:**
```css
--section-pad: clamp(5rem, 9vw, 8rem);  /* increase the last value */
```

**Change card border radius:**
```css
--radius: 12px;    /* project / contact cards */
--radius-sm: 6px;  /* tags, buttons, inputs */
```

**Disable the noise texture:**
In `base.css`, find `body::before` and set `opacity: 0`.
