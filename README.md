# SK Financial Group — Website
Built by RK Consulting · rkconsulting.co.nz

---

## Go-Live Checklist

Before making the site live on skfg.co.nz, complete each item below.

### 1 · Live Chat (Tidio)
1. Sign up free at https://www.tidio.com
2. Settings → Developer → copy your **Public Key**
3. In every HTML file, find `YOUR_TIDIO_KEY` and replace with your key
   - Quick way: open any file in a text editor, use Find & Replace All
   - There are 15 HTML files to update (or use the bulk replace script below)
4. Once set up, Tidio provides its own chat widget — you can hide the custom
   chat bubble by adding `display:none` to `.chat-bubble` in the CSS

### 2 · Contact Forms (Formspree)
1. Sign up free at https://formspree.io (free: 50 submissions/month)
2. Create a new form → copy your endpoint URL (e.g. `https://formspree.io/f/xpwzgkrd`)
3. In `contact.html`, wrap the form inputs in:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
     <!-- existing inputs here — add name="" to each one -->
   </form>
   ```
4. Add `name` attributes to each input:
   - First name: `name="first-name"`
   - Last name: `name="last-name"`  
   - Email: `name="email"`
   - Phone: `name="phone"`
   - Service: `name="service"`
   - Message: `name="message"`
5. Formspree emails you every form submission automatically

### 3 · Google Maps (contact.html)
The Google Maps embed is already placed in contact.html using the
New Lynn address. If you want a more precise pin:
1. Go to Google Maps → search the address → click Share → Embed a map
2. Copy the `<iframe>` code
3. Replace the existing `<iframe>` in contact.html

### 4 · Google Analytics
1. Go to https://analytics.google.com
2. Create a new property for skfg.co.nz
3. Get your Measurement ID (format: G-XXXXXXXXXX)
4. In every HTML file, replace both instances of `G-XXXXXXXXXX` with your ID
   (there are 2 instances per file — the script src and the gtag config call)

### 5 · Google Reviews
1. Sign up at https://elfsight.com → find Google Reviews widget
2. Connect your Google Business profile
3. Get the embed snippet
4. In `index.html`, find the reviews section and either:
   a. Add the Elfsight widget alongside the existing review cards, OR
   b. Replace the 3 static review cards with the live widget

### 6 · Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → enter skfg.co.nz → verify via HTML tag method
3. Copy the verification meta tag
4. Paste it into the `<head>` of `index.html` (already has a placeholder comment)
5. Submit sitemap.xml → enter `https://skfg.co.nz/sitemap.xml`

### 7 · Favicon
✅ Already done — favicon.ico, favicon-32x32.png, favicon-16x16.png,
   and apple-touch-icon.png are all included in this ZIP.

---

## Deploying to GitHub (rk-client-sites organisation)

1. Go to your `rk-client-sites` GitHub organisation
2. Create a new repo named `skfg`
3. Upload ALL files from this folder (keep flat — no subfolders)
4. Settings → Pages → Deploy from branch → main → / (root) → Save
5. Preview URL: `https://rk-client-sites.github.io/skfg/`

### To go live on skfg.co.nz
1. Create a file called `CNAME` (no extension) in the repo root containing:
   ```
   skfg.co.nz
   ```
2. At the domain registrar, add these DNS records:
   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | 185.199.108.153          |
   | A     | @    | 185.199.109.153          |
   | A     | @    | 185.199.110.153          |
   | A     | @    | 185.199.111.153          |
   | CNAME | www  | rk-client-sites.github.io |
3. In GitHub repo → Settings → Pages → tick **Enforce HTTPS**
4. DNS propagates within 1-24 hours

---

## Adding a New Blog Post

The quickest way — use the template file provided:

1. **Copy** `blog-template.html`
2. **Rename** it: `blog-your-topic-here.html`
   (lowercase, hyphens, no spaces — e.g. `blog-interest-rates-2026.html`)
3. **Edit** all sections marked `<!-- EDIT: -->`:
   - Page `<title>` and meta description
   - Post title (the `<h1>`)
   - Category (Mortgage or Insurance)
   - Date and read time
   - Intro paragraph
   - Section headings and paragraphs
   - Author CTA text
   - Sidebar "More articles" links
4. **Add the post to blog.html**:
   - Open `blog.html`
   - Find `<!-- ═══ ADD NEW BLOG POST ABOVE THIS LINE ═══ -->`
   - Copy one of the existing `<article>` blocks above it
   - Update: title, date, category colour, read time, excerpt, and `href` link
5. **Upload both files** to GitHub — the post is live immediately

---

## Files in this package

| File | Purpose |
|------|---------|
| `index.html` | Homepage |
| `mortgage.html` | All 12 mortgage services |
| `insurance.html` | All 6 insurance types |
| `about.html` | About page |
| `contact.html` | Contact + enquiry form |
| `blog.html` | Blog listing |
| `blog-*.html` | 6 existing blog articles |
| `blog-template.html` | **Template for new blog posts** |
| `disclosure.html` | Disclosure & privacy |
| `404.html` | Custom error page |
| `favicon.ico` | Browser tab icon |
| `favicon-32x32.png` | Favicon (32px) |
| `favicon-16x16.png` | Favicon (16px) |
| `apple-touch-icon.png` | iOS home screen icon |
| `robots.txt` | Search engine crawl rules |
| `sitemap.xml` | Sitemap for Google |
| `README.md` | This file |
