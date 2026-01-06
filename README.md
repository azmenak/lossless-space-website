# Lossless Home Solutions Website

A modern, single-page website for Lossless Home Solutions - an ultra high-end audio and home automation company serving the Las Vegas area.

## Features

- **Hero Section**: Eye-catching introduction with calls-to-action
- **About Section**: Key features and value propositions
- **Services Section**: Comprehensive list of services offered
- **Systems Section**: Technologies and platforms supported
- **Contact Form**: Interactive form for customer inquiries
- **Responsive Design**: Optimized for all device sizes
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Contact form API endpoint
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main home page
├── components/
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About/features section
│   ├── Services.tsx          # Services offered
│   ├── Systems.tsx           # Systems we work with
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer
└── public/                   # Static assets
```

## Contact Form

The contact form currently logs submissions to the console. To make it functional, you'll need to:

1. Set up an email service (SendGrid, Resend, AWS SES, etc.)
2. Update `app/api/contact/route.ts` with your email service integration
3. Add environment variables for API keys

Example integration options:
- [Resend](https://resend.com/) - Modern email API
- [SendGrid](https://sendgrid.com/) - Popular email service
- [Nodemailer](https://nodemailer.com/) - SMTP solution

## Code Quality

### Automatic Formatting and Linting

This project includes a PostToolUse hook that automatically runs ESLint and Prettier on edited files. The hook is configured in `.claude/settings.json` and will:

- Run ESLint with `--fix` to automatically fix linting issues
- Format code with Prettier for consistent styling
- Only process TypeScript/JavaScript files (`.ts`, `.tsx`, `.js`, `.jsx`)

The hook runs automatically when files are edited through Claude Code.

### Manual Formatting

You can also format and lint files manually:

```bash
# Format all files with Prettier
npx prettier --write "components/**/*.{ts,tsx}" "app/**/*.{ts,tsx}"

# Run ESLint with fix
npx eslint --fix "components/**/*.{ts,tsx}" "app/**/*.{ts,tsx}"

# Check formatting without making changes
npx prettier --check .
```

### Prettier Configuration

Prettier settings are defined in `.prettierrc.json`:
- Single quotes for strings
- Semicolons enabled
- 2 space indentation
- 100 character line width
- Trailing commas in ES5-compatible locations

## Customization

### Colors

The site uses a slate color palette. To customize, edit:
- `tailwind.config.ts` for theme colors
- `app/globals.css` for CSS variables

### Content

All content is in the component files under `/components`. Edit these files to update text, add images, or modify sections.

## Deployment

This site can be deployed to:
- [Vercel](https://vercel.com) (recommended for Next.js)
- [Netlify](https://netlify.com)
- Any hosting provider that supports Node.js

## Contact

For questions about Lossless Home Solutions:
- Email: info@lossless.space
- Service Area: Las Vegas & Surrounding Areas
