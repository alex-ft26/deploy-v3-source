# Lead Site Templates

Next.js 15 template system for the Lead Site Engine pipeline. Alex writes `prospect-data.json`, picks a template, builds, and deploys to Vercel.

## Quick Start

```bash
# 1. Copy example data
cp prospect-data.example.json prospect-data.json

# 2. Edit prospect-data.json with real prospect data

# 3. Install & run
npm install
npm run dev

# 4. Deploy
VERCEL_TOKEN=xxx ./scripts/build-and-deploy.sh my-prospect-site
```

## Templates

| Template | Industries | Animation |
|----------|-----------|-----------|
| `trust-authority` | Banking, finance, healthcare, law | Subtle |
| `clean-professional` | Law, accounting, real estate, advisory | Moderate |
| `local-authority` | HVAC, plumbing, roofing, electrical, trades | Subtle-Moderate |
| `lifestyle-visual` | Beauty, spa, salons, wellness | Bold |
| `data-driven` | Fintech, SaaS, digital banking | Bold |
| `immersive-scroll` | Ecommerce, DTC, boutiques, agencies | Bold |
| `community-focused` | Gyms, fitness, restaurants, cafes | Moderate-Bold |
| `industrial-precision` | Manufacturing, logistics, construction | Moderate |

## How It Works

1. Alex scrapes prospect site (logo, colors, fonts, content)
2. Writes `prospect-data.json` with brand + generated copy
3. Sets `config.template` to match their industry
4. Runs `npm run build` → static export
5. Deploys to Vercel → gets live URL
6. Sends cold email with the link

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/
│   ├── animated/           # 15 animated components (Motion + GSAP)
│   └── ui/                 # Base UI components (Button, Card, etc.)
├── lib/                    # Core utilities (theme, fonts, types)
├── templates/              # 8 industry templates
│   ├── trust-authority/
│   ├── clean-professional/
│   ├── local-authority/
│   ├── lifestyle-visual/
│   ├── data-driven/
│   ├── immersive-scroll/
│   ├── community-focused/
│   └── industrial-precision/
├── scripts/                # Build & deploy scripts
├── prospect-data.json      # Per-site data (gitignored)
└── prospect-data.example.json
```

## Changing Template

Edit `config.template` in `prospect-data.json`:

```json
{
  "config": {
    "template": "lifestyle-visual",
    "industry": "beauty",
    "animation_intensity": "bold"
  }
}
```

## Cost

- Build time: ~15-30 seconds
- AI tokens per site: ~270 (copy generation only)
- Vercel free tier: 100 deploys/day
- Total cost: $0.007-0.02 per site

**Git workflow test:** Verified automatic deployments (2026-02-19)
