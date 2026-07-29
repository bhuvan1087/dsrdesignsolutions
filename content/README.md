How to edit site content

Most website text and image paths are in `content/site.json`.

Common edits:
- Company name, phone, email: edit the `company` section.
- Header menu: edit the `navigation` section.
- Footer links and social links: edit the `footer` section.
- Home page hero/about/services/industries/clients/divisions: edit the `home` section.
- About page full content/journey/strengths: edit the `aboutPage` section.
- Image URLs or local image paths: edit the `images` section.

Local images:
1. Add the image file into the matching folder:
   - `public/images/home`
   - `public/images/about`
2. Change the image path in `content/site.json`.

Example:
```json
"homeHero1": "/images/home/hero-1.jpg"
```

Keep JSON commas valid when editing. Every item except the last item in a list needs a comma after it.
