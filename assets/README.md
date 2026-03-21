# assets/ — Static Files

## assets/img/

Place all images here.

| File | Used where | Notes |
|------|-----------|-------|
| `profile.jpg` | Hero profile card | Recommended: square crop, min 300×300 px |

### How to enable your photo

1. Save your photo as `assets/img/profile.jpg`
2. Open `index.html` and find the hero section
3. Replace:
   ```html
   <div class="profile-initials">AK</div>
   ```
   With:
   ```html
   <img src="assets/img/profile.jpg" alt="Anjana K" />
   ```

## assets/Anjana_CV.pdf

Place your CV PDF here. The **Resume** button in the navbar and hero already points to this path.

To rename it, update both references in `index.html`:
```html
<a href="assets/YOUR_FILENAME.pdf" download ...>
```

## Adding a favicon

1. Save a `favicon.png` (32×32 or 180×180 px) in `assets/img/`
2. Add to `<head>` in `index.html`:
   ```html
   <link rel="icon" type="image/png" href="assets/img/favicon.png" />
   ```
