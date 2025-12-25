# GitHub Images Setup Guide

## Issue: Images Not Showing on GitHub

If your images are not displaying on GitHub Pages, follow these steps:

## Step 1: Make sure images are committed to Git

Run these commands in your terminal (in the project folder):

```bash
# Add all image files
git add images/*.jpg
git add images/*.png
git add images/*.jpeg

# Or add everything in the images folder
git add images/

# Commit the images
git commit -m "Add portfolio images"

# Push to GitHub
git push origin main
```

(Replace `main` with `master` if that's your default branch)

## Step 2: Verify images are in the repository

1. Go to your GitHub repository
2. Click on the `images` folder
3. Make sure you can see all the image files (profile.jpg, project1.jpg, etc.)

## Step 3: Check GitHub Pages settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Make sure GitHub Pages is enabled
4. Select the branch (usually `main` or `master`)
5. Save and wait a few minutes for the site to build

## Step 4: Clear browser cache

After pushing changes, clear your browser cache or do a hard refresh:
- **Windows/Linux**: `Ctrl + F5` or `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

## Common Issues:

### Images still not showing?
- Check the browser console (F12) for 404 errors
- Verify the image paths in the HTML match the actual filenames (case-sensitive!)
- Make sure images are not in `.gitignore`

### File size limits:
- GitHub has a 100MB file size limit
- If images are too large, compress them first

## Image Paths Updated

All image paths in `index.html` have been updated to use `./images/` which works better with GitHub Pages.

