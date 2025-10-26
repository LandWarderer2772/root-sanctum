# Contributing to Root Sanctum

Thank you for your interest in contributing to Root Sanctum! This guide will help you add and organize content effectively.

## 📝 Content Structure

Root Sanctum is organized into five main categories:

1. **Technology** (`docs/technology/`)
2. **Science** (`docs/science/`)
3. **Humanities** (`docs/humanities/`)
4. **Life Skills** (`docs/life-skills/`)
5. **Miscellaneous** (`docs/miscellaneous/`)

Each category has subcategories with an `index.md` overview page and topic-specific pages.

## ✍️ Writing Content

### Markdown Basics

All content is written in Markdown. Here are some common patterns:

```markdown
# Main Title (H1)

## Section (H2)

### Subsection (H3)

Regular paragraph text.

- Bullet point
- Another point

1. Numbered list
2. Second item

**Bold text** and *italic text*

[Link text](https://example.com)

![Image alt text](/path/to/image.png)
```

### Code Blocks

Use triple backticks with language identifier:

````markdown
```javascript
function example() {
  console.log("Hello, World!");
}
```
````

### Callouts

VitePress supports special callouts:

```markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a danger notice
:::

::: info
This is informational
:::
```

## 📂 Adding New Content

### Adding to Existing Section

1. Navigate to the appropriate folder
2. Create or edit a `.md` file
3. Write your content using Markdown
4. Test locally with `pnpm docs:dev`

### Adding a New Subcategory

1. Create a new folder in the appropriate main category
2. Create an `index.md` file for the overview
3. Add topic pages as needed
4. Update `docs/.vitepress/config.mts`:
   - Add navigation item
   - Add sidebar configuration

Example sidebar entry:

```typescript
'/your-category/your-subcategory/': [
  {
    text: 'Your Subcategory',
    items: [
      { text: 'Overview', link: '/your-category/your-subcategory/' },
      { text: 'Topic 1', link: '/your-category/your-subcategory/topic-1' },
      { text: 'Topic 2', link: '/your-category/your-subcategory/topic-2' }
    ]
  }
]
```

## 🎨 Style Guidelines

### Headings

- Use H1 (`#`) for page title only
- Use H2 (`##`) for major sections
- Use H3 (`###`) for subsections
- Keep heading hierarchy logical

### Content

- Write clear, concise sentences
- Break up long paragraphs
- Use bullet points for lists
- Include examples where relevant
- Link to related topics
- Add images to clarify concepts

### Code Examples

- Include practical, working examples
- Add comments to explain complex code
- Show both the code and expected output
- Use appropriate language syntax highlighting

## 🔍 Content Checklist

Before submitting content:

- [ ] Content is accurate and well-researched
- [ ] Markdown formatting is correct
- [ ] Links work properly
- [ ] Code examples are tested
- [ ] Images have alt text
- [ ] Spelling and grammar are correct
- [ ] Content fits the category structure
- [ ] Tested locally with `pnpm docs:dev`

## 🚀 Workflow

1. **Setup**: Clone the repo and run `pnpm install`
2. **Develop**: Run `pnpm docs:dev` to preview changes
3. **Edit**: Create or modify markdown files
4. **Review**: Check your content in the browser
5. **Commit**: Save your changes with clear commit messages

## 🤝 Best Practices

- **Be Comprehensive**: Cover topics thoroughly
- **Stay Organized**: Follow the existing structure
- **Keep Updated**: Review and update content periodically
- **Cross-Reference**: Link related topics together
- **Be Accessible**: Write for various skill levels
- **Include Sources**: Reference authoritative sources when needed

## 📚 Resources

- [VitePress Documentation](https://vitepress.dev/)
- [Markdown Guide](https://www.markdownguide.org/)
- [Writing Style Guide](https://developers.google.com/style)

## 💡 Need Help?

If you have questions:

1. Check existing content for examples
2. Review VitePress documentation
3. Open an issue for discussion

Thank you for helping make Root Sanctum a valuable learning resource! 🌳✨
