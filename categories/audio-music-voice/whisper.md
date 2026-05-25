# Whisper (Open Source)

> OpenAI's free open-source speech-to-text model — runs locally or via API, supports 99+ languages.

| Field | Value |
|---|---|
| **Website** | https://github.com/openai/whisper |
| **Category** | [Audio, Music & Voice](README.md) |
| **Pricing** | Free (open-source) — paid API option also available |
| **Skill level** | Intermediate to Advanced |
| **Best for** | Developers, privacy-sensitive transcription, multilingual transcription |
| **Platform** | Python (local), API, many community wrappers |
| **Open source** | Yes (MIT license) |

---

## What it does

Whisper is OpenAI's open-source automatic speech recognition (ASR) model. It transcribes audio in 99+ languages, translates non-English to English, and handles noisy/accented audio better than most alternatives. Free to use locally; the OpenAI API offers a hosted version (~$0.006/min).

## Best use cases

- Free local transcription of meetings, lectures, podcasts
- Multilingual transcription (99+ languages)
- Privacy-sensitive transcription (data stays on your machine)
- Building apps that need speech-to-text

## Pricing breakdown

| Option | Cost | What you get |
|---|---|---|
| Local install | Free | Run on your computer (best with GPU) |
| OpenAI API (Whisper) | $0.006/min | Hosted, no setup needed |
| Whisper.cpp (community port) | Free | CPU-friendly local install |

*Many user-friendly wrappers exist — see WhisperX, Whisper Desktop, MacWhisper.*

## Ratings from around the web

- **GitHub**: One of the most-starred AI repos
- **Reddit r/LocalLLaMA**: Standard recommendation for speech-to-text
- **Common feedback**: Best free transcription quality; setup is the only barrier

*Ratings as of 2026-05. Re-verify periodically.*

## Beginner verdict

Not your first AI tool. For non-technical use, the easier path is a wrapper app like MacWhisper or one of the hosted services using Whisper under the hood.

- **Learning curve**: Steep (CLI) / Easy (via wrappers)
- **Setup required**: Python install or wrapper app
- **Gotchas**: Local install needs GPU for reasonable speed on long files

## Alternatives

- [AssemblyAI](assemblyai.md) — hosted, easier
- [Descript](descript.md) — uses Whisper under the hood + UI
- Otter.ai (not in this category — see [Meetings & Transcription](../meetings-transcription/))

---

[← Back to category](README.md) | [Back to main](../../README.md)

*Last updated: 2026-05-25*
