# Aishwarya Chander's Personal Website

A clean and minimal personal website built with Jekyll, showcasing my academic journey, research, and thoughts. Fully configured for GitHub Pages with automated deployment.

## 🚀 GitHub Pages Setup

This repository is configured for GitHub Pages with automated deployment via GitHub Actions. Here's how to set it up:

### For Your Own Site

1. **Fork this repository** to your GitHub account
2. **Rename the repository** to `yourusername.github.io` (replace `yourusername` with your GitHub username)
3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
4. **Configure the site**:
   - Edit `_config.yml` with your information
   - Update social links, email, and other personal details
5. **Push changes** - GitHub Actions will automatically build and deploy your site
6. **Your site will be live** at `https://yourusername.github.io`

### Features

- ✅ Automated deployment with GitHub Actions
- ✅ Responsive design optimized for all devices
- ✅ Blog functionality with Jekyll posts
- ✅ SEO optimized with meta tags and sitemap
- ✅ Custom 404 error page
- ✅ Social media integration
- ✅ Clean typography with Helvetica font stack

## 🛠 Local Development

To run the site locally:

```bash
# Install dependencies
bundle install

# Serve the site
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## 📝 Customization

- **Site settings**: Edit `_config.yml` for basic site information
- **Content pages**: Modify `index.html`, `education.html`, `publications.html`
- **Blog posts**: Add markdown files in the `_posts` directory
- **Styling**: Customize CSS in `assets/css/main.css`
- **Navigation**: Update `_includes/header.html`
- **Footer**: Modify `_includes/footer.html`

## 📁 Project Structure

```
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _posts/              # Blog posts
├── assets/              # CSS, images, and other assets
├── .github/workflows/   # GitHub Actions deployment
├── 404.html             # Custom error page
└── *.html               # Site pages
```

## 🚀 Deployment

Deployment is fully automated via GitHub Actions. Every push to the `main` branch triggers a build and deployment to GitHub Pages.

## 📄 License

MIT License - feel free to use this template for your own site!
