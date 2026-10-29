# ARIAN — Daniels-inspired personal portfolio

Your original uploaded photo is used in `assets/arian-avatar.jpg`. Website: https://z4ayn.github.io/arian/

## Upload the full project
1. Extract this ZIP on your Android phone.
2. Open https://github.com/z4ayn/arian.
3. Delete old website files if you want a clean replacement.
4. Upload all contents of this ZIP to the repository root: `index.html`, `assets/`, `instagram-worker/`, `SETUP.md`, and `README.txt`.
5. Commit changes. Check GitHub Pages is enabled for branch `main` and folder `/ (root)`.
6. Visit https://z4ayn.github.io/arian/ after a few minutes.

## Instagram auto-feed
Uploading alone cannot activate automatic Reels. Instagram requires a professional Creator/Business account, Meta developer app authorization, and a valid access token.
1. Configure Instagram API with Instagram Login and the `instagram_business_basic` permission: https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
2. Deploy `instagram-worker/` as a Cloudflare Worker.
3. Add the token as a Worker Secret named `IG_ACCESS_TOKEN`. Never put it in public GitHub or send it in chat.
4. Replace `SET_WORKER_URL_HERE` in `index.html` with your deployed Worker URL, then commit again.
The site fetches recent media on page load. Without the API setup, the rest of the website works and the Reels cards link to Instagram.

## Music
The Play ambience button uses `assets/ambient.mp3` if you add an MP3 you own or have permission to use; otherwise it tries a quiet synthesized ambience after a visitor taps the button. Browsers block autoplay.

## Included
- `index.html` — responsive Daniels-inspired portfolio
- `assets/arian-avatar.jpg` — your original photo
- `instagram-worker/index.js` — secure Instagram feed proxy starter
- `instagram-worker/wrangler.toml` — Worker configuration
