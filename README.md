# Sovann Khmer Kitchen — multi-page restaurant website

A five-page Cambodian restaurant website built with **HTML, Tailwind CSS v4, TypeScript, and Vite**.

## Requirements covered
- Five pages: Home, Menu, Our Story, Gallery, Contact
- At least three content sections on every page
- Tailwind CSS v4 through the official Vite plugin
- TypeScript interactions: mobile navigation, dark mode, menu filters, reservation form validation
- Responsive layouts, SEO descriptions, Open Graph metadata, semantic HTML, image alt text, and reduced-motion support
- Static restaurant and menu data in `src/main.ts`

## Run locally
1. Install Node.js (LTS).
2. Extract this project folder.
3. Open the folder in VS Code.
4. Open Terminal and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Build for production
```bash
npm run build
npm run preview
```

## Customize before submitting
- Replace the sample phone number, email, street address, and social handle with real details.
- Verify all menu prices and dish descriptions.
- Replace sample Unsplash photos with photos you have permission to use and check that the chosen images accurately represent each Khmer dish.
- The reservation form is a front-end demonstration only. It does not send data to a server or create a real booking.
- Check every page on mobile and desktop and record your required video demonstration.

## Project structure
```text
sovann-khmer-kitchen/
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── contact.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── main.ts
    └── style.css
```
