# Deploying to GitHub Pages

This guide will help you deploy the Zpire 2026 Vibe Coding Challenge landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Node.js and npm installed

## Deployment Steps

### Method 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" → "Pages"
   - Under "Source", select "GitHub Actions"

3. **Create GitHub Actions workflow:**
   Create a file `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: ['main']

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

4. **Commit and push the workflow:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

5. **Access your site:**
   Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Method 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Install gh-pages package:**
   ```bash
   npm install -D gh-pages
   ```

3. **Add deploy script to package.json:**
   Add this to your `scripts` section:
   ```json
   "deploy": "gh-pages -d dist"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set source to `gh-pages` branch
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Important Notes

- The app uses **HashRouter** for routing, which is perfect for GitHub Pages as it doesn't require server-side configuration
- All assets are bundled correctly and will work on GitHub Pages
- The build is optimized for production with minification and asset optimization

## Troubleshooting

### Site shows 404 error
- Ensure GitHub Pages is enabled in repository settings
- Check that the deployment workflow completed successfully
- Verify the source is set correctly (GitHub Actions or gh-pages branch)

### Assets not loading
- The project uses HashRouter which handles all routes client-side
- Check browser console for any errors
- Ensure the build completed successfully

### Updates not showing
- GitHub Pages may cache content for a few minutes
- Clear your browser cache or try incognito mode
- Wait 5-10 minutes for GitHub's CDN to update

## Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Enable HTTPS in GitHub Pages settings

For more information, visit the [GitHub Pages documentation](https://docs.github.com/en/pages).
