# GoClaw Docs

Documentation site for [GoClaw](https://goclaw.sh) — Enterprise AI Agent Platform.

## Stack

- Static SPA with client-side markdown rendering (marked.js)
- Mermaid.js v11 diagrams with interactive zoom/pan
- highlight.js for code syntax highlighting
- Tailwind CSS v3 CDN, dark theme
- Bilingual EN/VI with toggle

## Development

```bash
npx wrangler pages dev ./ --port 8788
```

## Deploy

```bash
npx wrangler pages deploy ./
```

## Structure

```
├── index.html              # SPA entry
├── js/docs-app.js          # App logic, routing, i18n, zoom
├── css/styles.css           # Dark theme styles
├── docs/                    # English markdown docs
├── docs/vi/                 # Vietnamese markdown docs
├── images/dashboard/        # Dashboard screenshots
├── llms.txt                 # LLM-friendly doc index
├── llms-full.txt            # All docs concatenated
├── build-llms.js            # Generates llms-full.txt
└── wrangler.toml            # Cloudflare Pages config
```

## Build llms-full.txt

```bash
node build-llms.js
```
