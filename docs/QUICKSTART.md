# Quick Start Guide

Welcome to Root Sanctum! This guide will help you get started with building your knowledge base.

## What You Have

Root Sanctum is a fully structured VitePress knowledge base with:

- **5 Main Categories** with organized subcategories
- **100+ Placeholder Pages** ready for content
- **Configured Navigation** with dropdowns and sidebars
- **Search Functionality** built-in
- **Light/Dark Theme** with custom styling
- **Responsive Design** that works on all devices

## Development

### Start the Dev Server

```bash
pnpm docs:dev
```

Visit `http://localhost:5173` to see your site.

### Add Content

1. Navigate to any `.md` file in the `docs/` directory
2. Replace the placeholder text with your content
3. Save the file - changes appear instantly!

### Example: Adding Programming Content

Edit `docs/technology/programming/languages.md`:

```markdown
# Programming Languages

## Python

Python is a versatile, high-level programming language known for its simplicity and readability.

### Features
- Easy to learn syntax
- Extensive standard library
- Large community support

### Example

'''python
def hello_world():
    print("Hello, World!")

hello_world()
'''

### Resources
- [Official Python Documentation](https://docs.python.org/)
- [Python Tutorial](https://docs.python.org/3/tutorial/)
```

## Project Structure Overview

```
docs/
├── index.md                    # Homepage
├── technology/
│   ├── programming/
│   │   ├── index.md           # Category overview
│   │   ├── languages.md       # Topic page
│   │   └── ...                # More topics
│   ├── web-dev/
│   ├── ai/
│   └── tools/
├── science/                    # Physics, Biology, Chemistry, Space
├── humanities/                 # History, Philosophy, Art, Literature
├── life-skills/               # Health, Productivity, Communication, Finance
└── miscellaneous/             # DIY, Travel, Culture, Fun Facts
```

## Customization

### Change Site Title/Description

Edit `docs/.vitepress/config.mts`:

```typescript
export default defineConfig({
  title: "Your Site Name",
  description: "Your description"
})
```

### Update Logo

Replace `docs/public/logo.svg` with your logo file.

### Modify Theme Colors

Edit `docs/.vitepress/theme/style.css`:

```css
:root {
  --vp-c-brand: #646cff;  /* Change to your brand color */
}
```

## Content Tips

### Use Markdown Features

- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Links**: `[text](url)`
- **Images**: `![alt](path)`
- **Lists**: `-` or `1.`
- **Code**: `` `inline` `` or triple backticks for blocks

### Add Callouts

```markdown
::: tip
Helpful information
:::

::: warning
Important warnings
:::

::: danger
Critical information
:::
```

### Insert Code Blocks

````markdown
```javascript
const greeting = "Hello, World!";
console.log(greeting);
```
````

## Building for Production

### Build the Site

```bash
pnpm docs:build
```

Output will be in `docs/.vitepress/dist/`

### Preview Production Build

```bash
pnpm docs:preview
```

## Deployment

### Popular Options

1. **Netlify**
   - Connect GitHub repo
   - Build command: `pnpm docs:build`
   - Publish directory: `docs/.vitepress/dist`

2. **Vercel**
   - Import project
   - Same settings as Netlify

3. **GitHub Pages**
   - Use GitHub Actions workflow
   - See VitePress deployment docs

4. **Cloudflare Pages**
   - Similar to Netlify setup

## Next Steps

1. **Add Content**: Start filling in your knowledge base
2. **Customize Theme**: Adjust colors and styles to match your brand
3. **Organize**: Adjust navigation and sidebars as needed
4. **Deploy**: Choose a hosting platform and go live

## Helpful Resources

- [VitePress Docs](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Detailed contribution guide

## Tips

- Use the search feature to find content quickly
- Test on mobile devices for responsive design
- Keep content organized in appropriate categories
- Link related topics together
- Use consistent formatting throughout

---

Happy writing! Your knowledge sanctuary awaits.
