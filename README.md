

# Continuous Deployment to GitHub Pages

This repository is set up for continuous deployment to GitHub Pages using GitHub Actions. Every push to the `main` branch will trigger the deployment process.

## Workflow

The deployment process is defined in the GitHub Actions workflow file located at `.github/workflows/deploy.yml`. The main steps in the workflow are:

1. **Checkout code**: Checks out the latest code from the repository.
2. **Set up Node.js**: Sets up the Node.js environment using the specified version.
3. **Install dependencies**: Installs the project dependencies using `npm install`.
4. **Build Vite project**: Builds the project using the Vite build tool.
5. **Deploy to GitHub Pages**: Deploys the built project to GitHub Pages using the `peaceiris/actions-gh-pages` action.

## Prerequisites

- Ensure that you have a `GITHUB_TOKEN` secret set up in your repository. This token is used to authenticate the deployment to GitHub Pages.

## GitHub Actions Workflow File

```yaml
name: Continuous Deployment to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v4
    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '16'  # Use your preferred Node.js version
    - name: Install dependencies
      run: npm install
    - name: Build Vite project
      run: npm run build
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        personal_access_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist  # Vite's default build output folder
```

## Notes

- The workflow is triggered on every push to the `main` branch.
- The `actions/checkout@v4` action is used to check out the code.
- The Node.js version can be customized by changing the `node-version` parameter in the `actions/setup-node@v3` action.
- The build output directory, `./dist`, is the default output folder for Vite builds. This can be changed if your build process outputs to a different directory.

This setup ensures that your project is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch.
