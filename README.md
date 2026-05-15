# 🛍️ THRIFT & THREAD — E-Commerce Website

A fully responsive, modern, and highly animated e-commerce website for a small business selling thrift fashion and custom handmade keychains.

## ✨ Features

### 🎨 Design & Aesthetics
- **Premium Y2K + Minimal Modern Fusion** aesthetic
- Soft neutral base (cream/black/white) with pastel pink, lavender, mint accents
- Modern sans-serif typography with stylish display headings
- Instagram-worthy, trendy, and youthful vibe

### 🎬 Animations & Interactions
- ✅ Smooth page transitions (fade, slide)
- ✅ Hover animations on buttons and product cards
- ✅ Scroll-triggered reveal animations (fade-in, slide-up)
- ✅ Floating decorative elements (stars, sparkles)
- ✅ Beautiful loading animation
- ✅ Micro-interactions on clicks and hovers
- ✅ Animated gradient orbs in hero section
- ✅ Product card hover zoom effects
- ✅ Smooth carousel with touch swipe support

### 📱 Pages Included

1. **Home Page**
   - Fullscreen hero with animated background
   - Featured products section
   - New drops carousel
   - Category banners
   - Instagram-style gallery
   - Customer testimonials

2. **Shop Page**
   - Grid layout with filters (All, Thrift, Keychains, New Arrivals)
   - Sort by price and newest
   - Product cards with hover animations
   - Quick view modal
   - Add to cart functionality

3. **Product Detail Page**
   - Image gallery with thumbnails
   - Size/color selection
   - Custom personalization input (for keychains)
   - Quantity controls
   - Add to cart & wishlist
   - Suggested products section

4. **About Page**
   - Brand storytelling section
   - Animated timeline of journey
   - Values cards with hover effects

5. **Cart Page**
   - Clean modern cart UI
   - Quantity controls
   - Promo code input
   - Order summary
   - Free shipping threshold indicator

6. **Contact Page**
   - Animated form inputs
   - Social media links
   - Contact information

### 🛒 E-Commerce Features
- ✅ Add to cart functionality with local storage
- ✅ Cart sidebar with live updates
- ✅ Wishlist feature with sidebar
- ✅ Product filtering system
- ✅ Sort products by price/newest
- ✅ Custom keychain personalization
- ✅ Quantity controls
- ✅ Quick view modal
- ✅ Toast notifications
- ✅ Badge animations
- ✅ Promo code support

### 📱 Fully Responsive
- ✅ Mobile-first design
- ✅ Optimized for all screen sizes (mobile, tablet, desktop)
- ✅ Touch-friendly buttons and sliders
- ✅ Hamburger menu for mobile
- ✅ Responsive grid layouts
- ✅ Touch swipe for carousel

## 🚀 Getting Started

### Installation

No build process required! This is a pure HTML/CSS/JavaScript website.

1. **Open the website:**
   - Simply open `index.html` in your web browser
   - Or use a local server for best experience:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

2. **View in browser:**
   - Navigate to `http://localhost:8000` (or just open index.html directly)

### File Structure

```
business/
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── app.js             # JavaScript functionality
└── README.md          # This file
```

## 🎯 Key Features Breakdown

### Navigation
- Sticky navbar with blur effect
- Smooth scroll to sections
- Active link highlighting
- Mobile hamburger menu
- Cart and wishlist badges with live counts

### Product Cards
- Hover zoom effect on images
- Quick view button
- Add to cart button
- Wishlist heart icon
- Product ratings
- Sale/New badges

### Cart System
- Persistent storage (localStorage)
- Add/remove items
- Update quantities
- Sidebar quick view
- Full cart page
- Order summary with shipping calculation

### Animations
- Page fade-in transitions
- Scroll-triggered reveals
- Floating decorative elements
- Gradient orb animations
- Button hover effects
- Badge bump animations
- Loading screen with progress bar

### Forms
- Animated input labels
- Form validation
- Success messages
- Newsletter signup
- Contact form with animated inputs

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
  --cream: #faf8f5;
  --pink: #f4a7b9;
  --lavender: #c9b8e8;
  --mint: #a8d8c8;
  /* ... more colors */
}
```

### Products
Edit the `products` array in `app.js`:
```javascript
const products = [
  {
    id: 1,
    name: "Product Name",
    category: "thrift", // or "keychains"
    price: 48,
    // ... more properties
  },
  // Add more products
];
```

### Content
- Update text directly in `index.html`
- Modify testimonials, timeline, and values in `app.js`
- Change gallery items in the `galleryItems` array

## 🌟 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- All product images are represented by emojis and gradient backgrounds for demo purposes
- Replace with actual product images by updating the product card HTML
- Cart data persists in localStorage
- No backend required — purely frontend
- Ready for integration with payment processors (Stripe, PayPal, etc.)

## 🎉 Features Checklist

- ✅ Fully responsive design
- ✅ Modern animations and transitions
- ✅ E-commerce functionality
- ✅ Cart and wishlist
- ✅ Product filtering and sorting
- ✅ Custom personalization
- ✅ Quick view modal
- ✅ Toast notifications
- ✅ Loading screen
- ✅ Scroll animations
- ✅ Mobile-friendly navigation
- ✅ Touch swipe support
- ✅ Local storage persistence
- ✅ SEO-friendly structure
- ✅ Accessible markup

## 💡 Tips

1. **Add Real Images:** Replace emoji placeholders with actual product photos
2. **Backend Integration:** Connect to a backend API for real product data
3. **Payment Gateway:** Integrate Stripe or PayPal for checkout
4. **Analytics:** Add Google Analytics or similar tracking
5. **SEO:** Update meta tags and add structured data
6. **Performance:** Optimize images and consider lazy loading

## 🚀 Deployment

Deploy to any static hosting service:
- **Netlify:** Drag and drop the folder
- **Vercel:** Connect your Git repository
- **GitHub Pages:** Push to a GitHub repo and enable Pages
- **Cloudflare Pages:** Connect and deploy

---

**Made with ♥ and a lot of code**

Enjoy your new e-commerce website! 🎉
