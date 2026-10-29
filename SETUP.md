# ARIAN — full website project

This ZIP includes the complete static website, your **original uploaded photo** as the avatar, and the secure-feed Worker starter code. It is designed for `https://z4ayn.github.io/arian/`.

## 1. Replace your old GitHub site
1. Download and extract this ZIP on your phone.
2. In `https://github.com/z4ayn/arian`, remove the old site files/folders if you want a clean replacement.
3. Upload **all contents inside this ZIP's `arian_full_project` folder** (not the outer folder itself): `index.html`, `assets/`, `instagram-worker/`, and `SETUP.md`.
4. Commit changes. Ensure GitHub Pages is enabled for the `main` branch and `/ (root)`.
5. Open `https://z4ayn.github.io/arian/`. GitHub Pages may take a few minutes to update.

## 2. About automatic Reels
The site code is prepared to display the latest Instagram media automatically, but **the feed cannot be switched on just by uploading a ZIP**. Instagram requires account authorization/API access, and GitHub Pages cannot safely store a private access token.

You need to do these one-time setup steps:
1. Make sure `arian.wajd` is a Creator/Business professional account (not a private account).
2. Create/configure a Meta developer app for **Instagram API with Instagram Login** and request the `instagram_business_basic` permission, following the current Meta instructions: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
3. Authorize your own account and obtain a valid access token. Do not send your password/token to me or put it in GitHub.
4. Deploy the `instagram-worker/` folder as a Cloudflare Worker. Add the token as a Worker **Secret** named `IG_ACCESS_TOKEN`. Leave `ALLOWED_ORIGIN` as `https://z4ayn.github.io` unless your site domain changes.
5. Copy the deployed Worker URL. In `index.html`, replace `SET_WORKER_URL_HERE` with that URL, then commit the updated `index.html`.
6. Open the website; it will request the newest media when visitors load the page. Public media returned by the API will link back to Instagram.

If the Instagram API account/app/token has not been configured, the website remains functional and shows a setup message instead of fake Reels. API access rules can change; follow Meta's current documentation.

## 3. Music
The page has an original generated ambient synth fallback. If you want a music file, add your own or properly licensed audio at `assets/ambient.mp3`. Audio starts only after a visitor taps Play, as browsers block autoplay.

## Included
- `index.html` — responsive dark cinematic website
- `assets/arian-avatar.jpg` — your original photo
- `instagram-worker/index.js` — secure API proxy template
- `instagram-worker/wrangler.toml` — Worker config
