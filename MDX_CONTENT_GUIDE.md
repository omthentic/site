# MDX Content Authoring Guide

## 📝 Creating New Posts

### File Location
Place MDX files in: `content/resources/[slug].mdx`

### Frontmatter Template

```yaml
---
title: "Your Post Title"
slug: "url-friendly-slug"
description: "A compelling 150-160 character description for SEO"
tags: ["Tag1", "Tag2", "Tag3"]
readTime: 8  # Optional: calculated automatically if omitted
date: "2025-01-15"  # ISO 8601 format
author: "Author Name"  # Optional
image: "/path/to/og-image.jpg"  # Optional: auto-generated if omitted
published: true  # Set to false to hide from index
---
```

## 🎨 Available MDX Components

### 1. Callout

Highlight important information with styled alerts.

```mdx
<Callout type="info" title="Pro Tip">
  Your important message here
</Callout>
```

**Types:** `info`, `warning`, `success`, `error`

---

### 2. InlineNote

Subtle highlights within text.

```mdx
This is regular text <InlineNote>with an inline note</InlineNote> continuing.
```

---

### 3. ProsCons

Display balanced comparisons.

```mdx
<ProsCons
  pros={[
    'Easy to use',
    'Great performance',
    'Well documented'
  ]}
  cons={[
    'Expensive',
    'Limited integrations'
  ]}
/>
```

---

### 4. Step / Steps

Create numbered tutorial sequences.

```mdx
<Steps>

<Step number={1} title="Install Dependencies">

Run `npm install` to get started.

</Step>

<Step number={2} title="Configure Settings">

Update your config file...

</Step>

</Steps>
```

---

### 5. BlockQuote

Enhanced quotes with attribution.

```mdx
<BlockQuote author="Dr. Sarah Chen" role="Medical Resident">
  This platform transformed how I prepare for interviews.
</BlockQuote>
```

---

## ✍️ Markdown Basics

### Headings

```markdown
## H2 Heading
### H3 Heading
```

> **Note:** H2 and H3 headings automatically appear in the Table of Contents

### Lists

```markdown
- Unordered item
- Another item

1. Ordered item
2. Second item
```

### Emphasis

```markdown
**Bold text**
*Italic text*
`inline code`
```

### Links

```markdown
[Link text](/path/to/page)
```

### Images

```markdown
![Alt text](/path/to/image.jpg)
```

Images automatically get rounded corners and proper spacing.

### Code Blocks

````markdown
```javascript
const hello = 'world';
```
````

---

## 🎯 SEO Best Practices

### Title (H1)
- 50-60 characters
- Include primary keyword
- Clear and compelling

### Description
- 150-160 characters
- Include primary keyword
- Call to action

### Tags
- 3-5 relevant tags
- Use consistent naming
- Capitalize each word

### Content Structure
- Use H2 for main sections
- Use H3 for subsections
- Keep paragraphs short (2-3 sentences)
- Use lists for scannability

---

## 📊 Automatic Features

### Table of Contents
- Automatically generated from H2 and H3 headings
- Appears on desktop sidebar
- Includes smooth scroll

### Read Time
- Calculated automatically if not provided
- Based on average reading speed (200 wpm)

### Metadata
- OpenGraph tags
- Twitter cards
- JSON-LD structured data
- Canonical URLs

### OG Images
- Auto-generated if not provided
- Custom API endpoint: `/api/og?title=Your+Title`

---

## 🚀 Publishing Workflow

### 1. Create MDX File
```bash
content/resources/my-post.mdx
```

### 2. Add Frontmatter
Ensure all required fields are present

### 3. Write Content
Use MDX components for enhanced formatting

### 4. Preview Locally
```bash
npm run dev
```

Navigate to: `http://localhost:3000/blog/my-post`

### 5. Check Build
```bash
npm run build
```

Ensures no errors before deployment

### 6. Deploy
```bash
git add .
git commit -m "Add new blog post: [title]"
git push
```

---

## 📁 File Organization

```
content/
└── resources/
    ├── getting-started.mdx
    ├── communication-tips.mdx
    └── [your-new-post].mdx
```

---

## 🔍 Testing Checklist

Before publishing, verify:

- [ ] Frontmatter is complete
- [ ] Title is H1 (single `#`)
- [ ] Sections use H2 (`##`)
- [ ] Links work correctly
- [ ] Images load properly
- [ ] Code blocks render
- [ ] MDX components display
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Read time is accurate
- [ ] Tags are consistent

---

## 💡 Tips & Tricks

### Internal Links
Always use relative paths:
```markdown
[About Us](/about)
```

### External Links
Will open in new tab automatically (configured in MDX).

### Breaking Changes
If you change a slug, set up a redirect in `next.config.ts`.

### Drafts
Set `published: false` in frontmatter to hide from index while working.

### Images
Use next/image for optimization:
```mdx
import Image from 'next/image';

<Image src="/path/to/image.jpg" alt="Description" width={800} height={600} />
```

---

## 🆘 Troubleshooting

### Post Not Appearing
- Check `published: true`
- Verify file is in `content/resources/`
- Ensure `.mdx` extension
- Restart dev server

### Styles Not Applying
- Check component name casing
- Verify imports in mdx-components
- Clear `.next` cache

### Build Errors
- Validate frontmatter YAML
- Check for unclosed MDX components
- Ensure all imports are available

---

## 📚 Examples

See these files for reference:
- `content/resources/getting-started.mdx`
- `content/resources/communication-tips.mdx`

---

**Happy Writing! 📝**

For questions, see [UI_NOTES.md](./UI_NOTES.md) or contact the development team.

