# page-visibility-bypass

Overrides the Page Visibility API to prevent tab-switch detection. Originally built to get past the anti-cheating block on uzdevumi.lv, but works on any site that relies on `visibilitychange`, `blur`, or `focus` events to log when you leave the tab.

## What it does

Modern browsers expose the [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API). When you switch tabs, minimize the window, or move focus away, the browser fires a `visibilitychange` event and flips:

- `document.hidden` → `true`
- `document.visibilityState` → `"hidden"`

Many anti-cheat systems (Canvas, uzdevumi.lv, various quiz platforms) listen for that event and log it — sometimes showing the instructor a counter or a warning like *"Stopped viewing the quiz."*

This script overrides those read-only properties so the page always thinks it is visible, and stops `visibilitychange`, `blur`, and `focus` events from reaching the page's own listeners.

## Usage

### Option 1 — DevTools console (quick, per-tab)

1. Open the page you want to bypass (e.g. `https://www.uzdevumi.lv/...`).
2. Open DevTools:
   - Windows / Linux: `F12` or `Ctrl` + `Shift` + `J`
   - macOS: `Cmd` + `Option` + `J`
3. Paste the snippet from [`snippet.js`](./snippet.js) into the Console tab and press Enter.
4. You can now switch tabs freely. The counter (if the site shows one) will not increase.

**Limitation:** the console snippet only applies to the current tab and is lost on reload. For a permanent fix, use a userscript.

### Option 2 — Userscript (Tampermonkey / Violentmonkey)

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open the raw link to [`page-visibility-bypass.user.js`](./page-visibility-bypass.user.js).
3. The userscript manager should offer to install it. Confirm.
4. Reload the target site. The script runs at `document-start`, before the page's own scripts.

To limit it to specific sites, edit the `@match` lines at the top of the `.user.js` file.