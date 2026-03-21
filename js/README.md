# js/ — JavaScript Files

All scripts are plain vanilla JS. No bundler, no npm, no frameworks.  
They are loaded at the bottom of `index.html` in this order.

| File | Purpose | Edit when… |
|------|---------|-----------|
| `navbar.js` | Scroll shrink effect, mobile hamburger toggle, active nav link highlighting | Changing scroll threshold or menu behaviour |
| `typewriter.js` | Cycles through skill phrases in the hero | Changing the rotating words |
| `scroll-reveal.js` | Lightweight IntersectionObserver-based scroll reveal (replaces AOS library) | Tweaking reveal threshold or animation timing |
| `skills.js` | Tab switching between skill categories + animated bar fill on scroll into view | Adding new skill tabs |
| `form.js` | Contact form submit handler — shows success message, ready for backend wiring | Connecting to a real form backend |

---

## Common edits

### Change typewriter words
```js
// js/typewriter.js — top of file
const WORDS = [
  'Machine Learning',
  'Add Your Skill Here',
];
```

### Wire the contact form to a backend
Free options: **Formspree**, **Web3Forms**, **EmailJS**

```js
// js/form.js — replace showSuccess() with a real fetch:
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method : 'POST',
  headers: { 'Content-Type': 'application/json' },
  body   : JSON.stringify({ name, email, message }),
});
if (res.ok) showSuccess();
```

### Adjust scroll reveal threshold
```js
// js/scroll-reveal.js
{ threshold: 0.10 }  // 0.0 = triggers as soon as element enters screen
                     // 0.5 = triggers when 50% visible
```

### Add a new skill tab
1. Add a button in `index.html`:
   ```html
   <button class="skill-tab" data-tab="newtab">New Tab</button>
   ```
2. Add a panel:
   ```html
   <div class="skills-panel" id="tab-newtab">
     <!-- skill bars here -->
   </div>
   ```
