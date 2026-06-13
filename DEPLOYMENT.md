# Deployment Guide for Potential Octo

This document explains how to deploy Potential Octo to various platforms.

## Quick Links

- **GitHub Pages**: https://Jahavdu.github.io/potential-octo/
- **Vercel**: Configure secrets and push to main
- **Local Development**: See [README.md](README.md)

---

## Option 1: GitHub Pages Deployment ✅

**Status**: Automatically configured via GitHub Actions

### Setup Instructions

1. Go to repository **Settings** → **Pages**
2. Select "Deploy from a branch"
3. Choose:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click Save
5. Your site will be live at: `https://Jahavdu.github.io/potential-octo/`

### How It Works

- GitHub Actions automatically builds and deploys on every push to `main`
- Workflow file: `.github/workflows/pages.yml`
- Automatically serves `index.html` for all routes

### Manual Deployment

```bash
# If you need to manually trigger deployment:
git push origin main
```

---

## Option 2: GitHub Actions Workflow ✅

**Status**: Automatically configured

### What's Included

1. **Automatic Builds**: On every push to `main`
2. **Dependency Installation**: Runs `npm install`
3. **Static Artifacts**: Uploads to GitHub Pages
4. **Deployment**: Automatically deploys to GitHub Pages

### View Deployment Status

1. Go to repository → **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. View build logs and deployment status

---

## Option 3: Vercel Deployment 🚀

**Status**: Configured, requires setup

### Prerequisites

1. **Vercel Account**: Sign up at https://vercel.com
2. **GitHub Integration**: Connect GitHub to Vercel
3. **Project Setup**: Import this repository

### Setup Steps

#### Step 1: Connect Repository to Vercel

```bash
# Option A: Via Vercel Dashboard
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select "GitHub"
4. Select "Jahavdu/potential-octo"
5. Click Import
```

#### Step 2: Add Environment Secrets (Optional)

If using GitHub Actions → Vercel workflow:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Add these secrets:
   - `VERCEL_TOKEN`: Your Vercel API token (from https://vercel.com/account/tokens)
   - `VERCEL_PROJECT_ID`: From Vercel dashboard
   - `VERCEL_ORG_ID`: From Vercel dashboard

#### Step 3: Deploy

```bash
# Automatic deployment on push to main
git push origin main

# Or manual deployment
vercel --prod
```

### Vercel Configuration

The `vercel.json` file includes:
- Build command configuration
- Development command
- Static framework selection
- Environment variables
- Routing rules

### Access Your Vercel Deployment

After setup, your app will be available at:
- **Production**: https://potential-octo.vercel.app
- **Preview**: Auto-generated for pull requests

---

## Comparison Table

| Feature | GitHub Pages | Vercel | Local |
|---------|--------------|--------|-------|
| **Cost** | Free | Free tier available | N/A |
| **Node.js Backend** | ❌ No | ✅ Yes | ✅ Yes |
| **Static Files** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Auto Deploy** | ✅ Yes | ✅ Yes | Manual |
| **Preview URLs** | No | ✅ Yes | Local only |
| **Setup Time** | ~2 min | ~5 min | N/A |

---

## Local Development

For local testing before deployment:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build (if needed)
npm run build

# View in browser
# Navigate to http://localhost:3000 or open index.html
```

---

## Troubleshooting

### GitHub Pages Not Updating

1. Check Actions tab for failed workflows
2. Verify branch is set to `main` in Settings → Pages
3. Ensure `.github/workflows/pages.yml` exists
4. Try re-running the workflow manually

### Vercel Deployment Fails

1. Check that `package.json` exists and is valid
2. Verify all dependencies are listed in `package.json`
3. Check Vercel build logs for errors
4. Ensure `server.js` doesn't have syntax errors

### Local Server Won't Start

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

---

## Deployment Checklist

- [ ] GitHub Pages enabled in Settings
- [ ] `.github/workflows/pages.yml` exists
- [ ] `vercel.json` configured
- [ ] Vercel account created (optional)
- [ ] GitHub Actions secrets added (if using Vercel workflow)
- [ ] `index.html` is in repository root
- [ ] `package.json` exists and is valid
- [ ] All dependencies listed in `package.json`

---

## Advanced: Custom Domain

### GitHub Pages with Custom Domain

1. Add `CNAME` file to repository root with your domain
2. Configure DNS at your domain provider
3. Enable HTTPS in GitHub Pages settings

### Vercel with Custom Domain

1. Go to Vercel dashboard → Project Settings
2. Navigate to Domains
3. Add your custom domain
4. Follow DNS configuration steps

---

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [Express.js Deployment](https://expressjs.com/en/advanced/best-practice-security.html)

---

## Support

For issues or questions:
1. Check the [CONTRIBUTING.md](CONTRIBUTING.md) guide
2. Open an issue in the repository
3. Review deployment workflow logs in the Actions tab
