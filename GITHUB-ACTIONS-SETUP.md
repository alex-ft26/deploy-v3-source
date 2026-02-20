# GitHub Actions Deployment Setup

## What This Does

Automated deployments via GitHub Actions:
- **Push to `main`** → Automatic production deployment
- **Open a PR** → Automatic preview deployment + comment with URL
- **No Vercel UI needed** → Everything via CLI

## Required GitHub Secrets

The workflow needs 3 secrets added to the GitHub repository:

### 1. VERCEL_TOKEN
**What:** Vercel authentication token  
**Where to get it:**
1. Go to: https://vercel.com/account/tokens
2. Click "Create Token"
3. Name: "GitHub Actions Deploy"
4. Scope: Full Account
5. Click "Create"
6. Copy the token (starts with `vcp_...`)

### 2. VERCEL_ORG_ID  
**What:** Organization/Team ID  
**Value:** `team_E29oW3JKOoRoSt4xuflaXA0S` (flip-tech team)

**OR** if deploy-v3-source is under personal account:
1. Go to: https://vercel.com/account
2. Settings → General
3. Look for "Your ID" or "User ID"

### 3. VERCEL_PROJECT_ID
**What:** Project ID for deploy-v3-source  
**Where to get it:**
1. Go to: https://vercel.com (find deploy-v3-source project)
2. Click on `deploy-v3-source`
3. Settings → General
4. Scroll down to find **Project ID**
5. Copy the value (looks like: `prj_XXXXXXXXXXXXX`)

## How to Add Secrets to GitHub

### Option A: Via GitHub Web UI
1. Go to: https://github.com/alex-ft26/deploy-v3-source/settings/secrets/actions
2. Click "New repository secret"
3. Add each of the 3 secrets above

### Option B: Via GitHub CLI (I can do this)
Once you provide the 3 values above, I'll add them programmatically.

## Testing the Workflow

After secrets are added:

1. **Test Preview Deployment:**
   ```bash
   git checkout -b test/github-actions
   echo "test" >> README.md
   git commit -am "Test: GitHub Actions preview"
   git push origin test/github-actions
   # Open PR on GitHub → Check for preview URL comment
   ```

2. **Test Production Deployment:**
   ```bash
   git checkout main
   git merge test/github-actions
   git push origin main
   # Check Actions tab → Should deploy to production
   ```

## What Happens Next

Once this is set up:
- **Every PR** → Preview URL posted automatically
- **Every merge to main** → Production deployment
- **20 demos/day** → Fully scalable, no manual intervention

---

**Status:** Workflow file created, waiting for secrets to be added.
