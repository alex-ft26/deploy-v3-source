# Deploy-v3-Source: Deployment Guide

## 🚀 Quick Start

**Production URL:** https://deploy-v3-source.vercel.app/

**Repository:** https://github.com/alex-ft26/deploy-v3-source

## ✅ Fully Automated - No Manual Steps

Changes deploy automatically when you push to GitHub.

## Standard Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/my-changes
```

### 2. Make Changes
- Edit `prospect-data.json` for content changes
- Edit templates for design changes
- Test locally: `npm run dev`

### 3. Commit and Push
```bash
git add .
git commit -m "Description of changes"
git push origin feature/my-changes
```

### 4. Open PR
- Go to GitHub or use CLI: `gh pr create`
- **Vercel automatically deploys preview**
- Bot comments with preview URL

### 5. Merge to Main
```bash
git checkout main
git merge feature/my-changes
git push origin main
```
**→ Automatically deploys to production**

## Template Configuration

**Current Template:** trust-authority

**To change content:**
Edit `prospect-data.json`:
- `content.company_name` - Business name
- `content.tagline` - Headline
- `content.services` - Services list
- `content.testimonials` - Customer reviews
- `content.stats` - Statistics

**To change template:**
Edit `config.template` in `prospect-data.json` to:
- `trust-authority` (current)
- `clean-professional`
- `community-focused`
- `data-driven`
- `immersive-scroll`
- `industrial-precision`
- `lifestyle-visual`
- `local-authority`

## Emergency Procedures

### Rollback Production
1. Find last working deployment in Vercel dashboard
2. Click "Promote to Production"

OR via Git:
```bash
git revert HEAD
git push origin main
```

### Local Testing
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Build Test
```bash
npm run build
```

## Key Information

- **Project ID:** prj_uoAu5gK707tqojoERtrUmGVgWBWu
- **Org ID:** team_E29oW3JKOoRoSt4xuflaXA0S
- **Framework:** Next.js 14 + TypeScript + Tailwind CSS

## Troubleshooting

**Preview not deploying?**
- Check GitHub Actions tab for errors
- Verify GitHub secrets are set

**Production not updating?**
- Ensure merged to `main` branch
- Check Vercel dashboard for deployment status

**Build failing?**
- Run `npm run build` locally to test
- Check for syntax errors in prospect-data.json

---

**Last Updated:** 2026-02-20  
**Status:** Production Ready ✅
