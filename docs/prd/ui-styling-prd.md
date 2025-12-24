# Product Requirements Document (PRD)
## Visual Styling Enhancement for Portfolio Website

### Project Overview
This PRD outlines the requirements for implementing comprehensive visual styling enhancements for the portfolio website's main page and blog section, based on detailed UI/UX design specifications. The project aims to transform the current basic styling into a modern, professional, and visually appealing design that aligns with the provided design guidelines.

### Current State Analysis
- **Technology Stack**: Astro 5.13.8, Tailwind CSS 3.4.10, TypeScript
- **Current Design**: Basic styling with minimal visual hierarchy
- **Internationalization**: English/Spanish support with proper routing
- **Content Management**: Astro Content Collections for blog posts
- **Current Issues**: 
  - Limited visual impact and professional appearance
  - Inconsistent spacing and typography
  - Basic color scheme without brand identity
  - Missing visual elements described in design specifications

### Design Specifications

#### 1. Main Page (Homepage) Design Requirements

**1.1 Header Section**
- **Layout**: Simple centered header with name and CTA button
- **Styling**: 
  - Clean typography with proper font weights
  - Subtle border-bottom with `border-gray-100`
  - Responsive padding: `py-6 px-4 md:px-8`
  - Maximum width container: `max-w-7xl mx-auto`
- **Elements**:
  - Name: "Sofia Escobedo" in `text-2xl font-bold text-gray-900`
  - CTA Button: "Book a 30 min call" with brand colors and skeumorphic shadow
  - Language switcher: EN/ES toggle with proper styling

**1.2 Hero Section**
- **Layout**: Two-column responsive grid (`grid-cols-1 lg:grid-cols-2`)
- **Left Column Content**:
  - Main title: Large, bold typography (`text-5xl md:text-6xl font-bold`)
  - Branded italic text for specialization (`text-brand-600 italic`)
  - Description paragraph: `text-xl text-gray-600 leading-relaxed`
  - CTA button with consistent styling
- **Right Column**:
  - Circular profile image: `w-80 h-80 rounded-full`
  - Proper image scaling with `object-cover`
  - Centered alignment with responsive positioning

**1.3 Featured Work Section**
- **Layout**: Responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- **Card Design**:
  - White background with rounded corners (`rounded-xl`)
  - Subtle border and shadow effects
  - Hover animations: `hover:shadow-lg transition-all duration-300`
  - Image overlay with dark gradient for text readability
- **Content Structure**:
  - Background image with proper aspect ratio
  - Overlay for title and category information
  - Description text with line clamping
  - Smooth hover effects and transitions

**1.4 Professional Services Section**
- **Layout**: Responsive grid (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- **Card Design**: Gradient background cards with centered content
  - Three distinct color variants: blue, green, purple
  - Gradient backgrounds (`bg-gradient-to-br from-{color}-50 to-{color}-100`)
  - Circular icon containers with matching solid colors
  - Centered text content with title, description, and tags
- **Component Architecture**: 
  - Reusable `ExperienceCard.astro` component
  - Data-driven from `i18n.json` for multilingual support
  - Supports three icon types: check, star, globe
  - Color-coded tags matching card variant
- **Animation**: Staggered entrance animations and hover lift effects

**1.5 Certifications Section**
- **Layout**: Two-column grid with text content on left and badges on right
  - Left column: Section heading, description, and "Official" tag badge
  - Right column: Responsive grid (`grid-cols-2 md:grid-cols-3`) for certification badges
- **Card Design**:
  - Certification badge images (`w-32 h-32 md:w-36 md:h-36`)
  - Rounded corners (`rounded-2xl`) with overflow visible
  - Hover animations: scale and rotate effects
  - Links to credential verification URLs
- **Data Source**: `certifications.json` with multilingual support
- **Structured Data**: JSON-LD ItemList schema for SEO

**1.6 Footer**
- **Layout**: Simple horizontal layout with social icons
- **Styling**: Clean typography and proper spacing
- **Social Icons**: Colored squares with letters/initials
- **Copyright**: Centered text with proper color contrast

#### 2. Blog Page Design Requirements

**2.1 Blog Index Page**
- **Header Section**:
  - Centered header with glassmorphism effect (`bg-white/90 backdrop-blur-sm`)
  - Large title (`text-5xl md:text-6xl`) and descriptive subtitle
  - Rounded container with shadow (`rounded-3xl shadow-lg`)
- **Posts Section**:
  - Single-column list layout for all posts (no featured/regular distinction)
  - Card design with thumbnail on left, content on right
  - Hover states with lift effect and shadow transitions
  - Tag display using reusable `Tag.astro` component with dynamic HSLA colors
- **Filtering**: Posts filtered by `displayBlogPages` configuration in `site.json`
- **Responsive Design**: Adapts gracefully from mobile to desktop

**2.2 Individual Blog Post Page**
- **Hero/Banner Section**:
  - Full-width background image with dark overlay
  - Post title, employer, and date range display
  - Dynamic tag colors in upper left corner
  - Responsive typography and spacing
- **Content Area**:
  - Description block with clear title
  - Language toggle button (🇺🇸 English / 🇪🇸 Spanish)
  - Main markdown content with `prose prose-lg` styling
  - Proper code highlighting and formatting
- **Technologies Used Section**:
  - Dynamic tag/badge display
  - Consistent color scheme with banner
- **Lucidchart Integration**:
  - Conditional embedding for architecture diagrams
  - Proper iframe styling and responsiveness
- **Related Posts**:
  - Grid layout for related content
  - Consistent card design with main site

### Technical Implementation Requirements

#### 3.1 Tailwind CSS Configuration
- **Custom Color Palette**:
  - Brand colors: `brand-600` for primary accent
  - Extended gray scale for better contrast
  - Custom color variables for dynamic tag colors
- **Typography Scale**:
  - Proper heading hierarchy (h1-h6)
  - Consistent font weights and line heights
  - Responsive font sizing
- **Spacing System**:
  - Consistent padding and margin scales
  - Responsive spacing utilities
  - Proper container max-widths

#### 3.2 Component Architecture
- **Reusable Components**:
  - `BlogCard.astro` - Card component for blog post previews with image, metadata, and tags
  - `Tag.astro` - Dynamic tag/badge component supporting HSLA colors from frontmatter
    - Props: `name`, `color` (optional HSLA string), `size` (sm/md/lg)
    - Automatically calculates readable text color from background
  - `ExperienceCard.astro` - Service card with gradient backgrounds and icons
    - Props: `title`, `description`, `tags`, `variant` (blue/green/purple), `icon`
  - Language toggle integrated into Header
- **Layout Components**:
  - `Header.astro` - Sticky header with navigation, CTA button, and language switcher
  - `Footer.astro` - Simple footer with social icon links
  - `Layout.astro` - Base layout with dynamic preload optimization
- **Blog-Specific Features**:
  - Dynamic tags in hero banner (upper left corner)
  - Language toggle for translated posts
  - Related posts grid section
  - Lucidchart iframe embedding support

#### 3.3 Responsive Design
- **Breakpoints**:
  - Desktop-first approach
  - Tablet optimizations (md: breakpoint)
  - Desktop enhancements (lg: breakpoint)
- **Grid Systems**:
  - Flexible grid layouts for all sections
  - Proper gap spacing and alignment
  - Responsive image handling

#### 3.4 Animation and Interactions
- **Hover Effects**:
  - Smooth transitions on interactive elements
  - Scale and shadow effects on cards
  - Color transitions on links and buttons
- **Loading States**:
  - Proper image loading with placeholders
  - Smooth content transitions
- **Focus Management**:
  - Accessible focus indicators
  - Keyboard navigation support

### Content Integration Requirements

#### 4.1 Dynamic Content Handling
- **Blog Post Data**:
  - Proper frontmatter parsing for all fields
  - Dynamic tag color generation
  - Image optimization and responsive handling
  - Date formatting and localization
- **Project Data**:
  - Enhanced project card information
  - Proper image aspect ratios
  - Category and tag display
- **Certification Data**:
  - Issuer and date information
  - Credential URL integration

#### 4.2 Internationalization
- **Language Support**:
  - Localized date formats
  - Translated UI elements
- **Content Switching**:
  - Proper URL routing
  - SEO-friendly language alternates

### Performance Requirements

#### 5.1 Image Optimization
- **Responsive Images**:
  - Astro `Image` component with automatic optimization
  - WebP format conversion via `format="webp"` attribute
  - Lazy loading for below-fold content (`loading="lazy"`)
  - Quality optimization (`quality={85-90}`)
- **Dynamic Preloading**:
  - Conditional preload based on page type (homepage vs blog)
  - `preloadImage` prop in Layout for page-specific LCP optimization
  - Profile image preloaded only on homepage
  - Blog post thumbnail preloaded on individual post pages
- **Asset Management**:
  - Proper caching headers configured in `_headers`
  - CDN integration ready

#### 5.2 CSS Optimization
- **Tailwind Purging**:
  - Unused CSS removal
  - Minimal bundle size
  - Critical CSS inlining
- **Custom Styles**:
  - Minimal custom CSS additions
  - Utility-first approach
  - Component-scoped styling

### SEO and Performance

#### 7.1 Search Engine Optimization
- **Structured Data**:
  - Enhanced JSON-LD markup
  - Article schema for blog posts
  - Person schema for author information
- **Meta Tags**:
  - Dynamic title generation
  - Proper description tags
  - Open Graph and Twitter Card support

#### 7.2 Core Web Vitals
- **Largest Contentful Paint (LCP)**:
  - Optimized hero images
  - Critical resource prioritization
- **Cumulative Layout Shift (CLS)**:
  - Proper image dimensions
  - Stable layout structure
- **First Input Delay (FID)**:
  - Minimal JavaScript execution
  - Efficient event handling

### Success Criteria

#### 8.1 Visual Quality
- **Design Fidelity**:
  - 95% match with provided design specifications
  - Consistent visual hierarchy across all pages
  - Professional appearance and brand alignment
- **User Experience**:
  - Intuitive navigation and interaction patterns
  - Smooth animations and transitions
  - Responsive design across all devices

#### 8.2 Technical Quality
- **Performance**:
  - Lighthouse score > 90 for all metrics
  - Page load time < 3 seconds on 3G
  - Proper accessibility compliance
- **Code Quality**:
  - Clean, maintainable code structure
  - Proper TypeScript typing
  - Comprehensive component documentation

#### 8.3 Content Integration
- **Dynamic Content**:
  - All blog posts display correctly with new styling
  - Proper image handling and optimization
  - Seamless language switching functionality
- **Data Consistency**:
  - All content fields properly utilized
  - Consistent styling across all content types
  - Proper error handling for missing data

### Dependencies and Constraints

#### 9.1 Technical Dependencies
- Astro 5.13.8 framework
- Tailwind CSS 3.4.10
- TypeScript 5.9.2
- Existing content collections structure

#### 9.2 Design Constraints
- Must maintain existing content structure
- Preserve internationalization functionality
- Ensure backward compatibility
- Maintain SEO-friendly URLs

#### 9.3 Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement approach
- Graceful degradation for older browsers

### Risk Mitigation

#### 10.1 Technical Risks
- **Performance Impact**: Monitor bundle size and implement code splitting
- **Breaking Changes**: Thorough testing of existing functionality
- **Browser Compatibility**: Progressive enhancement and fallbacks

#### 10.2 Design Risks
- **Content Overflow**: Flexible layouts and proper text handling
- **Image Loading**: Proper fallbacks and loading states
- **Responsive Issues**: Mobile-first approach and thorough testing

### Conclusion

This PRD provides a comprehensive roadmap for implementing the visual styling enhancements for the portfolio website. The implementation will transform the current basic design into a modern, professional, and visually appealing website that aligns with the provided design specifications while maintaining all existing functionality and improving user experience across all devices and languages.

The project will be implemented in phases to ensure quality and allow for iterative improvements, with a focus on performance, accessibility, and maintainability throughout the development process.
