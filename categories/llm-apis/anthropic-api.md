# Anthropic API

> Claude model family — known for writing quality, reasoning, long context, and developer-friendly features (prompt caching, computer use, Agent SDK).

| Field | Value |
|---|---|
| **Website** | https://console.anthropic.com |
| **Category** | [LLM APIs & Platforms](README.md) |
| **Pricing** | Pay-per-token; small free credits for new accounts |
| **Skill level** | Intermediate |
| **Best for** | Coding-heavy apps, document analysis, long-context tasks, agentic workflows |
| **Platform** | API (REST), official SDKs incl. Python, TypeScript, Java |
| **Open source** | No (Claude Code CLI partly open-source) |

---

## What it does

Anthropic's API gives access to the Claude model family — currently Claude Sonnet 4.6 and Claude Opus 4.6 as the main models. Strong on coding, long-document analysis, and careful reasoning. Includes prompt caching (90% cost reduction on cached tokens), computer use (Claude controls a computer), and the Agent SDK for building agentic apps.

## Best use cases

- Coding assistants and agentic workflows
- Long-document analysis (200k+ token context)
- High-quality writing/editing apps
- Apps where output quality matters more than cost

## Pricing breakdown

| Model | Approx Price (verify on site) | Notes |
|---|---|---|
| Claude Haiku | ~$0.80 input / $4 output per 1M tokens | Fast, cheap |
| Claude Sonnet | ~$3 input / $15 output per 1M tokens | Mid-tier |
| Claude Opus | ~$15 input / $75 output per 1M tokens | Highest quality |
| Prompt caching | 90% off cached input tokens | Big savings for repeated context |

*Pricing changes frequently. Verify on official pricing page.*

## Ratings from around the web

- **G2**: ~4.6/5
- **Common feedback**: Best for coding; prompt caching makes long-context apps affordable

*Ratings as of 2026-05. Re-verify periodically.*

## Beginner verdict

If you're building anything coding-related, Claude API tends to outperform OpenAI for the same prompts. Combine with prompt caching to keep costs manageable on projects.

- **Learning curve**: Easy (similar to OpenAI API)
- **Setup required**: Anthropic account + API key
- **Gotchas**: Opus tier is expensive — start with Sonnet for most use cases

## Alternatives

- [OpenAI API](openai-api.md) — broader ecosystem
- [AWS Bedrock](aws-bedrock.md) — Claude via AWS for enterprise
- [Groq](groq.md) — cheaper for open-source alternatives

---

[← Back to category](README.md) | [Back to main](../../README.md)

*Last updated: 2026-05-26*
