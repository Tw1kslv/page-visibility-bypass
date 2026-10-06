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

Limitation: the console snippet only applies to the current tab and is lost on reload. For a permanent fix, use a userscript.

# Limitations
- Does not defeat server-side tracking, WebRTC checks, mouse/keyboard activity monitoring, or requestAnimationFrame throttling.

- If a site checks document.hasFocus() directly, you may also need to override that. The userscript version does.

- Some sites detect that document.hidden and visibilityState have been tampered with (rare, but possible).

# Credits
- Based on the common userscript pattern for overriding the Page Visibility API.

- Tested against https://www.cheatgpt.app/tools/tab-switch-detection-test