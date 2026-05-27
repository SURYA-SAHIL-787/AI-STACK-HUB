# Groq

> Custom LPU hardware delivers the fastest open-source LLM inference available — generous free tier.

| Field | Value |
|---|---|
| **Website** | https://groq.com (developer console: console.groq.com) |
| **Category** | [LLM APIs & Platforms](README.md) |
| **Pricing** | Freemium (very generous free tier) |
| **Skill level** | Intermediate |
| **Best for** | Developers prototyping with open models; speed-sensitive applications |
| **Platform** | API (REST), Python/Node SDKs |
| **Open source** | Models served are open-source (Llama, Mixtral, etc.) |

---

## What it does

Groq runs Llama, Mixtral, and other open models on their custom "Language Processing Unit" (LPU) chips — outputting at 500+ tokens/second, often 10x faster than other providers. Free tier offers ~6,000 requests/day with reasonable token limits. Most generous free LLM API for hobbyists.

## Best use cases

- Real-time chat applications where latency matters
- Free prototyping before committing to paid APIs
- Voice agents (need fast inference)
- Replacing OpenAI/Anthropic in dev environments to save costs

## Pricing breakdown

| Tier | Price | What you get |
|---|---|---|
| Free | $0 | ~6,000 requests/day, all open-source models |
| Developer (Pay-as-you-go) | $0.05–0.79 per million tokens | Per-model pricing, no monthly minimum |
| Enterprise | Custom | Higher rate limits, SLAs |

*Verify current pricing on the official website.*

## Ratings from around the web

- **Reddit r/LocalLLaMA**: Universally praised for speed
- **GitHub**: Active community of integrations
- **Common feedback**: Fastest inference available — try once, never go back

*Ratings as of 2026-05. Re-verify periodically.*

## Beginner verdict

If you're learning to build with LLM APIs as a developer, Groq's free tier is the cheapest, fastest, most generous option. Use it for personal projects and learning.

- **Learning curve**: Moderate (API basics required)
- **Setup required**: Free account + API key
- **Gotchas**: Only serves open-source models — for GPT/Claude quality, use those APIs

## Alternatives

- [Together AI](together-ai.md) — also hosts open models
- [Google AI Studio](google-ai-studio.md) — free Gemini access
- [OpenRouter](openrouter.md) — multi-model gateway

---

[← Back to category](README.md) | [Back to main](../../README.md)

*Last updated: 2026-05-26*
