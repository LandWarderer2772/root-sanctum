# Contribute to Root Sanctum

Thank you for your interest in contributing to Root Sanctum! This knowledge base thrives on community contributions, and we welcome input from everyone.

---

## How to Contribute

### 1. **Report Issues**

Found a mistake?

- Visit our [GitHub Issues](https://github.com/LandWarderer2772/root-sanctum/issues)
- Create a new issue describing what you found
- We'll review and fix it as soon as possible

### 2. **Suggest New Content**

Have an idea for a new topic or section?

- Open a [GitHub Discussion](https://github.com/LandWarderer2772/root-sanctum/discussions)
- Describe the topic and why it would be valuable
- The community can discuss and refine the idea

### 3. **Submit Content**

Ready to add or improve content?

**Easy Method (For Small Changes):**
1. Find the page you want to edit
2. Click "Edit this page" (if available) or go to GitHub
3. Make your changes
4. Submit a pull request

**Advanced Method (For Larger Contributions):**
1. Fork the [Root Sanctum repository](https://github.com/LandWarderer2772/root-sanctum)
2. Clone your fork locally
3. Create a new branch for your changes
4. Make your edits
5. Commit and push your changes
6. Open a pull request

---

## Content Guidelines

### Writing Style

- **Clear & Concise** - Use simple language and avoid jargon when possible
- **Well-Structured** - Use headings, lists, and sections appropriately
- **Accurate** - Ensure information is correct and up-to-date
- **Examples** - Include practical examples when relevant
- **Neutral Tone** - Keep content objective and informative

### Formatting

```markdown
# Main Heading (H1) - Page title

## Section Heading (H2) - Major sections

### Subsection Heading (H3) - Subsections

#### Sub-subsection (H4) - Details

- Use bullet points for lists
- Keep paragraphs short
- Add code blocks with proper syntax highlighting
```

### Content Structure

Each topic page should include:

1. **Introduction** - Brief overview of the topic
2. **Main Content** - Organized into logical sections
3. **Examples** - Practical demonstrations (when applicable)
4. **Resources** - Links to further reading (optional)

---

## Style Conventions

### Code Blocks

Use proper syntax highlighting:

````markdown
```javascript
function example() {
  console.log("Hello, Root Sanctum!");
}
```
````

### Links

- Internal links: `/technology/programming`
- No `.html` extension
- Use descriptive link text

### Images

- Place images in `/docs/public/images/`
- Use descriptive filenames
- Add alt text for accessibility

---

## Contribution Checklist

Before submitting your contribution:

- [ ] Content is accurate and well-researched
- [ ] Spelling and grammar are correct
- [ ] Formatting follows guidelines
- [ ] Links work and use proper format
- [ ] Code examples are tested (if applicable)
- [ ] Content fits within the existing structure
- [ ] Commit message is clear and descriptive

---

## Technical Setup

### Prerequisites

- Node.js (v16 or higher)
- PNPM package manager
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/LandWarderer2772/root-sanctum.git
cd root-sanctum

# Install dependencies
pnpm install

# Start development server
pnpm docs:dev

# Build for production
pnpm docs:build

# Preview production build
pnpm docs:preview
```

The site will be available at `http://localhost:5173`

---

## Project Structure

```
root-sanctum/
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # Site configuration
│   │   └── theme/              # Custom theme
│   ├── technology/             # Technology category
│   ├── science/                # Science category
│   ├── humanities/             # Humanities category
│   ├── life-skills/            # Life Skills category
│   ├── miscellaneous/          # Miscellaneous category
│   ├── index.md                # Homepage
│   ├── guide.md                # Beginners guide
│   ├── posts.md                # Blog posts
│   └── contribute.md           # This page
├── package.json
└── README.md
```

---

## Priority Areas

We especially welcome contributions in these areas:

### High Priority
- **Beginner-Friendly Tutorials** - Make complex topics accessible
- **Code Examples** - Practical, working examples
- **Diagrams & Visuals** - Help explain complex concepts
- **Real-World Applications** - Show how concepts apply in practice

### Always Welcome
- Fixing typos and grammar
- Improving explanations
- Adding missing information
- Updating outdated content
- Enhancing code examples

---

## Community Guidelines

### Be Respectful
- Treat all contributors with respect
- Welcome newcomers and help them learn
- Give constructive feedback
- Celebrate contributions from others

### Be Collaborative
- Work together to improve content
- Discuss changes and ideas openly
- Accept feedback gracefully
- Help review others' contributions

### Be Patient
- Understand that reviews take time
- Be willing to make revisions
- Ask questions if unclear
- Help others when you can

---

## Get in Touch

Have questions about contributing?

- **GitHub Discussions** - For general questions and ideas
- **GitHub Issues** - For specific problems or bugs
- **Pull Requests** - For submitting contributions

---

## Recognition

All contributors are valued and appreciated! Your contributions help build a better learning resource for everyone.

Contributors are recognized:
- In commit history on GitHub
- In the project's contributors list
- Through community acknowledgment

---

## License

By contributing to Root Sanctum, you agree that your contributions will be licensed under the same license as the project.

---

## Ready to Contribute?

1. Browse the existing content to understand the style
2. Choose what you want to work on
3. Follow the contribution process
4. Submit your contribution
5. Respond to any feedback

Thank you for helping make Root Sanctum better!

---

*Every contribution, no matter how small, makes a difference. We appreciate your support!*
