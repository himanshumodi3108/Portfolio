# Portfolio Website

A modern, responsive portfolio website built with React.js showcasing projects, skills, experience, and blog posts. Features multi-language support, smooth animations, and a contact form with EmailJS integration.

## 🌟 Features

### Core Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Multi-language Support**: i18n support for English, Hindi, and Spanish
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Contact Form**: Integrated with EmailJS for sending emails
- **Blog Section**: Showcase articles with pagination
- **Project Showcase**: Display projects with GitHub and live demo links
- **Skills Visualization**: Animated progress bars for programming skills
- **Work Experience**: Timeline of work history and internships
- **Certifications**: Display of professional certifications
- **Education**: Academic background and achievements

### Technical Features
- **Error Boundary**: Graceful error handling with user-friendly error pages
- **Loading Skeletons**: Better loading states for improved UX
- **Toast Notifications**: Success/error notifications for user feedback
- **Code Splitting**: Lazy loading for optimal performance
- **SEO Optimized**: Sitemap.xml, robots.txt, and meta tags
- **Accessibility**: ARIA labels, keyboard navigation, skip links
- **Print Styles**: Optimized styles for printing
- **Active Navigation**: Highlight current section in navigation

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Styling**: CSS3 with custom animations
- **Internationalization**: i18next, react-i18next
- **Email Service**: EmailJS
- **Animations**: Typed.js, Intersection Observer API
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine crawler instructions
│   └── sitemap.xml         # SEO sitemap
│
├── scripts/
│   └── generate-sitemap.js # Script to generate sitemap and update meta tags
│
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── sections/      # Section/page components
│   │   │   ├── Blog.js
│   │   │   ├── Contact.js
│   │   │   ├── Projects.js
│   │   │   ├── Certificates.js
│   │   │   ├── Work.js
│   │   │   ├── Programming.js
│   │   │   ├── Education.js
│   │   │   ├── Testimonials.js
│   │   │   ├── LanguageSwitcher.js
│   │   │   └── index.js   # Barrel exports
│   │   ├── ErrorBoundary.js
│   │   ├── LoadingSkeleton.js
│   │   ├── Toast.js
│   │   ├── SocialShare.js
│   │   └── index.js       # Barrel exports
│   │
│   ├── context/           # React Context providers
│   │   └── ToastContext.js
│   │
│   ├── config/            # Configuration files
│   │   └── portfolio.js
│   │
│   ├── i18n/              # Internationalization
│   │   ├── config.js
│   │   └── locales/
│   │       ├── en.json
│   │       ├── hi.json
│   │       └── es.json
│   │
│   ├── styles/            # Global styles
│   │   └── global.css
│   │
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
│
├── .env                   # Environment variables (not in repo)
├── .gitignore
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- EmailJS account (for contact form)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   # EmailJS Configuration
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_EMAILJS_TO_EMAIL=your_email@example.com
   REACT_APP_EMAILJS_TO_NAME=Your Name
   
   # Portfolio URL (optional, defaults to current origin)
   REACT_APP_PORTFOLIO_URL=https://your-portfolio-url.com
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `build` folder. This script:
- Runs the sitemap generation script automatically (prebuild)
- Optimizes the build for best performance
- Minifies files and includes hashes in filenames

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run generate-sitemap`
Manually generates/updates the sitemap.xml and robots.txt files, and updates URLs in index.html.

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Get your Public Key
5. Add the credentials to your `.env` file

### Multi-language Support

The website supports three languages:
- English (en)
- Hindi (hi)
- Spanish (es)

To add more languages:
1. Add a new JSON file in `src/i18n/locales/`
2. Update `src/i18n/config.js` to include the new language

### Customization

- **Portfolio Data**: Update data in component files:
  - Projects: `src/components/sections/Projects.js`
  - Certificates: `src/components/sections/Certificates.js`
  - Work Experience: `src/components/sections/Work.js`
  - Skills: `src/components/sections/Programming.js`
  - Blog Posts: `src/components/sections/Blog.js`

- **Styling**: Modify `src/styles/global.css` for global styles
- **Component Styles**: Each component has its own CSS file

## 🎨 Features in Detail

### Error Handling
- Error Boundary component catches React errors
- User-friendly error page with reload option
- Error details shown in development mode

### Loading States
- Skeleton loaders for better UX
- Loading spinners for async operations
- Smooth transitions between states

### Toast Notifications
- Success, error, warning, and info types
- Auto-dismiss after 5 seconds
- Manual close option
- Accessible with ARIA labels

### Accessibility
- Skip to main content link
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Semantic HTML

### SEO
- Sitemap.xml for search engines
- Robots.txt for crawler control
- Meta tags (Open Graph, Twitter Cards)
- Structured data (JSON-LD)
- Canonical URLs

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `build` folder to Netlify

### Environment Variables in Production

Make sure to add your environment variables in your hosting platform's environment variable settings.

## 📝 License

This project is private and personal.
