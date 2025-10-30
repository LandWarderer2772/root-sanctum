# Root Sanctum

A comprehensive VitePress-powered knowledge base serving as your sanctuary for learning across multiple disciplines.

## Overview

Root Sanctum is a well-organized knowledge base framework covering five main categories:

- **Technology** - Programming, Web Development, AI, Tools
- **Science** - Physics, Biology, Chemistry, Space & Astronomy
- **Humanities** - History, Philosophy, Art, Literature
- **Life Skills** - Health, Productivity, Communication, Finance
- **Miscellaneous** - DIY, Travel, Culture, Fun Facts

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

## Adding Content

Each category and subcategory has an `index.md` file and topic-specific markdown files. Simply edit these files to add your content:

1. Navigate to the relevant category folder
2. Edit the markdown files with your content
3. Use standard Markdown syntax
4. Add code blocks, tables, images, etc.

### Example

```markdown
# Your Topic Title

## Overview

Your content here...

## Subtopic

More content...
```

## Customization

### Theme

Edit `docs/.vitepress/theme/style.css` to customize colors, fonts, and styling.

### Configuration

Modify `docs/.vitepress/config.mts` to:
- Update site metadata
- Adjust navigation structure
- Configure sidebar items
- Add social links

### Logo

Replace `docs/public/logo.svg` with your custom logo.

## Features

- **Full-text search** - Built-in local search
- **Dark/Light theme** - Automatic theme switching
- **Responsive design** - Mobile-friendly layout
- **Fast navigation** - Vue-powered SPA
- **Markdown support** - Extended markdown features
- **Code highlighting** - Syntax highlighting for code blocks
- **SEO friendly** - Optimized for search engines

## Content Guidelines

- Keep content concise and well-structured
- Use headings hierarchy properly (H1 → H2 → H3)
- Include code examples where relevant
- Add links to related topics
- Use bullet points for lists
- Include images with alt text

## Deployment

### Build

```bash
pnpm docs:build
```

## Contributing

1. Create content in the appropriate category
2. Follow the existing structure
3. Keep formatting consistent
4. Test locally before committing

---

**Root Sanctum** - Your sanctuary for knowledge 🌳✨
