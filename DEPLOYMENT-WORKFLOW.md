# Deployment Workflow

## Making Changes

1. **Edit prospect data:**
   ```bash
   nano prospect-data.json
   ```

2. **Test locally:**
   ```bash
   npm install
   npm run dev
   # Visit http://localhost:3000
   ```

3. **Build and verify:**
   ```bash
   npm run build
   ```

## Deploy to Production

### Method 1: Git-based (Recommended after Vercel connection)
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### Method 2: Direct Vercel Deploy (Current method)
```bash
npm run build
vercel --prod
```

## Safety Rules

❌ NEVER deploy without testing locally first
✅ ALWAYS verify build passes before deploying
✅ ALWAYS test preview before production
