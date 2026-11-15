# Hasibur Rahman Sun — Retro CSE Portfolio

A responsive, dependency-free portfolio site styled like a cheerful late-90s desktop. Open `index.html` directly in a browser or serve this folder with any static file server.

## Add your remaining materials

- The circular hero frame uses `assets/profile.jpg.jfif`.
- The ID popup displays your full card image from `assets/id-card.jpg.jfif`.
- The top wallpaper banner uses `assets/banner.jpg`.
- Your social profile links are configured in the `socialProfiles` object near the top of `script.js`.
- Add each project's description, technologies, screenshots, and repository/demo link as you are ready.
- To personalize the welcome sequence, edit the `greetings` array in `script.js`.

If you replace either image, keep these filenames (including `.jfif`) or update the image paths in `index.html`.

## Deploy to Vercel

This is a plain static HTML, CSS, and JavaScript site. In Vercel, import the project, choose **Other** as the framework preset, leave the build command blank, and use `.` as the output directory. No server, build tool, or paid feature is required for the static site. The free Hobby plan is for personal projects; check Vercel's current usage limits if traffic grows.

## Deploy to GitHub Pages

The site is already arranged for a GitHub user site. Create a repository named `Hasibur-sun.github.io`, put these files at the repository root, then in **Settings → Pages** choose **Deploy from a branch**, branch `main`, folder `/(root)`. GitHub Pages will publish it at `https://hasibur-sun.github.io/`. The `.nojekyll` file keeps this plain static site from going through Jekyll. On GitHub Free, the Pages repository must be public; the published site and files will be publicly accessible.

