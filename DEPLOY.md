# Deploy Portfolio to GitHub Pages (username.github.io)

Follow these steps to publish your portfolio at **https://\<your-username\>.github.io**.

---

## 1. Create the GitHub repository

1. Go to [GitHub](https://github.com) and sign in.
2. Click **+** (top right) → **New repository**.
3. **Repository name** must be exactly: **`<your-username>.github.io`**  
   - Example: if your username is `devashishkamble`, the repo name is **`devashishkamble.github.io`**.
4. Choose **Public**.
5. Do **not** add a README, .gitignore, or license (you already have code).
6. Click **Create repository**.

---

## 2. Push your code from your machine

Open a terminal in the **app** folder (where `package.json` and `vite.config.ts` are).

**If this folder is not a git repo yet:**

```bash
cd "c:\Users\dkamble\Downloads\Kimi_Agent_End-to-End Developer Portfolio\app"

git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
git push -u origin main
```

Replace `<your-username>` with your GitHub username (e.g. `devashishkamble`).

**If you already use git from the parent folder:**  
Either push only the `app` folder by making `app` the repo root, or move the contents of `app` to the root of your existing repo and push. For a **new** personal site, the cleanest is: **one repo = the app folder**, and that repo is named `username.github.io`.

---

## 3. Enable GitHub Pages (Actions)

1. In your repo on GitHub, go to **Settings** → **Pages** (left sidebar).
2. Under **Build and deployment**:
   - **Source:** select **GitHub Actions** (not “Deploy from a branch”).
3. Save. You don’t need to create a branch or choose a folder; the workflow does the deploy.

---

## 4. Run the deployment

1. Go to the **Actions** tab in your repo.
2. You should see the workflow **“Deploy to GitHub Pages”** (after the first push, or trigger it via **Run workflow**).
3. Open the run and wait until the **build** and **deploy** jobs finish (green).
4. When it’s done, open **Settings** → **Pages** again. You’ll see a green box with the site URL, e.g. **https://\<your-username\>.github.io**.

Your portfolio will be live at **https://\<your-username\>.github.io**.

---

## 5. Updates (after the first deploy)

- Edit code locally in the **app** folder.
- Commit and push to **main**:

  ```bash
  git add .
  git commit -m "Update portfolio"
  git push origin main
  ```

- The **Deploy to GitHub Pages** workflow will run automatically and update the site in 1–2 minutes.

---

## Troubleshooting

| Issue | What to do |
|--------|------------|
| 404 or blank page | Wait 2–3 minutes after the first deploy. Hard refresh (Ctrl+Shift+R). Check that **Settings → Pages** shows “GitHub Actions” as source. |
| Build fails in Actions | Open the failed run, click the **build** job, and read the error (e.g. Node version, `npm ci` / `npm run build`). Fix in your repo and push. |
| Assets (images/CSS/JS) broken | `vite.config.ts` uses `base: '/'` for GitHub Pages root. Don’t change it if the repo is `username.github.io`. |
| Repo name is different | For **https://username.github.io** the repo **must** be named **username.github.io**. For other repo names you’d use **https://username.github.io/repo-name/** and set `base: '/repo-name/'` in `vite.config.ts`. |

---

## Summary

1. Create a **public** repo named **\<username\>.github.io**.
2. Push your **app** folder to **main** (with the `.github/workflows/deploy.yml` and `base: '/'` in Vite).
3. In the repo: **Settings → Pages → Source = GitHub Actions**.
4. After the workflow runs, the site is at **https://\<username\>.github.io**.
