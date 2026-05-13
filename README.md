# ProfaN — True Norwegian Black Metal

Official website for **ProfaN**, a Norwegian black metal band.

## Features

- ⚡ **Responsive Design** - Mobile-first design that works on all devices
- 🎨 **Dark Aesthetic** - Black metal themed website with red accents
- ✨ **Smooth Animations** - Framer Motion animations for engaging UX
- 🎸 **Band Information** - History, releases, merchandise, and concert dates
- 📧 **Contact Section** - Direct booking and press inquiries
- 🖼️ **Gallery Support** - Ready for band photos and cover art

## Tech Stack

- **React 18** - UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/henjak9-source/ProfaN.git
cd ProfaN
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Band Information

Edit the constants in `src/App.jsx`:

```javascript
const bandName = "ProfaN";
const contactEmail = "henjak9@gmail.com";
const heroImage = "https://your-image-url.jpg";
const logoImage = "/images/profan-logo.png"; // Add your logo
```

### Add Photos to Gallery

Replace placeholder images in the gallery section by updating the image URLs.

### Update Releases and Merch

Modify the `releases` and `merch` arrays in `src/App.jsx` with your band's actual content.

### Add Concert Dates

Update the `concerts` array with upcoming performance dates and venues.

## Sections

- **Header** - Sticky navigation with mobile menu
- **Hero** - Large banner with band name and CTAs
- **Historie (History)** - Band origin and artistic expression
- **Utgivelser (Releases)** - Albums and singles
- **Merch** - Merchandise items with prices
- **Bilder (Gallery)** - Photo galleries
- **Konserter (Concerts)** - Upcoming shows
- **Kontakt (Contact)** - Booking and press inquiries
- **Footer** - Copyright information

## Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name if needed
2. Build the project: `npm run build`
3. Push to GitHub and enable Pages in repository settings
4. Deploy the `dist` folder

### Deploy to Other Platforms

- **Vercel**: Connect your GitHub repo directly
- **Netlify**: Connect your GitHub repo directly
- **Traditional Hosting**: Upload the `dist` folder via FTP

## License

© 2026 ProfaN - True Norwegian Black Metal

## Contact

For inquiries, contact: henjak9@gmail.com
