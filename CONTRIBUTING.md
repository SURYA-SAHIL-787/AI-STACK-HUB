# Contributing to AI-STACK-HUB

Thanks for wanting to contribute. This guide explains how to submit a tool, fix outdated info, or propose a new category.

---

## What we accept

**Yes:**
- AI-powered tools accessible to the public (web / desktop / mobile / API / CLI)
- Tools with active development (updated within the last 12 months)
- Tools that fit one of our [categories](categories/)
- Both free and paid tools

**No:**
- Affiliate-link spam or paid-promotion attempts
- Dead projects (no updates in 12+ months)
- Tools that are just thin wrappers over an existing API with no unique value
- Anything that violates the host platform's terms of service

---

## How to submit a new tool

1. **Fork the repo** and clone your fork locally.
2. **Find the right category folder** in `categories/`. If the category doesn't exist yet, open an issue first to discuss adding it.
3. **Copy the template**: `templates/tool-template.md` → `categories/<category>/<tool-name>.md` (use kebab-case for the filename).
4. **Fill in every section**. Don't leave placeholder text.
5. **Update the category's `README.md`** to include your tool in the top-10 table.
6. **Update relevant filter pages** in `filters/` (pricing, skill level, role).
7. **Open a PR** with the title: `feat: add <Tool Name> to <Category>`

---

## File naming conventions

- **Tool files**: kebab-case (`github-copilot.md`, not `GitHubCopilot.md` or `github_copilot.md`)
- **Category folders**: kebab-case (`coding-development/`)
- **No spaces** anywhere in filenames

---

## Style rules

- **Plain language.** Assume the reader has no technical background.
- **No emojis** in tool pages (keeps things readable across devices and screen readers).
- **No marketing fluff.** Don't say "revolutionary AI-powered platform" — say what it does.
- **Cite ratings with sources** where possible (link to the review page).
- **Verify pricing** on the official site before submitting — pricing changes frequently.

---

## Updating an existing tool

Pricing changes, features ship, tools shut down. If you spot outdated info:

1. Edit the tool's `.md` file directly.
2. Update the `Last updated: YYYY-MM-DD` line at the bottom.
3. Open a PR with the title: `update: refresh <Tool Name> info`
4. Note what changed in the PR description.

---

## Proposing a new category

Categories are large additions and affect the repo structure. **Open an issue first** describing:

- Proposed category name
- 5–10 example tools that would go in it
- Why it deserves its own category vs fitting in an existing one

We'll discuss before scaffolding the folder.

---

## Submitting via Issue (no PR)

If you're not comfortable with Git, you can suggest a tool by [opening an issue](https://github.com/SURYA-SAHIL-787/AI-STACK-HUB/issues/new) with:

- Tool name + official link
- Which category it belongs in
- Why you think it should be added (1–2 sentences)

A maintainer will create the PR for you.

---

## Code of conduct

Be respectful. This is a community resource. No spam, no harassment, no off-topic discussions, no political or promotional content in tool pages.

---

## Questions?

Open an issue and tag it with `question`.

---

[← Back to main README](README.md)
