# Saffron Scents

A modern React + Vite web app for the Saffron Scents brand, featuring a waitlist signup form powered by EmailJS, beautiful custom fonts, and responsive design with Tailwind CSS.

## Features

- **Landing Page**: Elegant hero section with brand imagery and tagline.
- **Waitlist Signup**: Users can join the waitlist by submitting their name and email. Submissions are sent via EmailJS.
- **Responsive Navigation**: Includes social links (Instagram, WhatsApp) and a smooth-scroll "Sign up" button.
- **Custom Fonts & Styling**: Uses Google Fonts and a custom Carves font for a unique look.
- **SVG & FontAwesome Icons**: For social and menu icons.
- **Smooth Scrolling**: Uses `react-router-hash-link` for smooth anchor navigation.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/)
- [FontAwesome](https://fontawesome.com/)
- [react-router-dom](https://reactrouter.com/)
- [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link)

## Getting Started

### Prerequisites

- Node.js (or Bun)

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd saffron-scents
   ```
2. Install dependencies:
   ```sh
   bun install
   # or
   npm install
   ```
3. Set up EmailJS:
   - Create a `.env.local` file in the project root with:
     ```env
     VITE_PUBLIC_KEY=your_emailjs_public_key
     VITE_SERVICE_ID=your_emailjs_service_id
     VITE_TEMPLATE_ID=your_emailjs_template_id
     ```
   - Get these values from your [EmailJS dashboard](https://dashboard.emailjs.com/).

### Running the App

```sh
bun run dev
# or
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
saffron-scents/
├── public/
│   ├── fonts/
│   └── images/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── component/
│       ├── hero.jsx
│       ├── logo.jsx
│       ├── nav.jsx
│       ├── text.jsx
│       └── waitlist.jsx
├── .env.local
├── package.json
├── vite.config.js
└── README.md
```

## Customization

- **Branding**: Update images in `public/images/` and fonts in `public/fonts/`.
- **Social Links**: Edit URLs in `src/component/nav.jsx`.
- **Form Fields**: Adjust form fields in `src/App.jsx` as needed.

## Troubleshooting

- If the waitlist form does not work, ensure your `.env.local` is set up and the dev server is restarted after changes.
- For blank pages after adding `HashLink`, make sure `BrowserRouter` wraps your app in `main.jsx`.

## License

This project is for demonstration and personal use. For commercial use, please contact the author.

## Author

Ayomiposi Joshua George
-Posi
