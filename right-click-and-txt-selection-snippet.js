(function () {
  window.oncontextmenu = null;
  document.oncontextmenu = null;
  if (document.body) document.body.oncontextmenu = null;
  window.addEventListener('contextmenu', e => e.stopImmediatePropagation(), true);

  const style = document.createElement('style');
  style.textContent = `
    *, *::before, *::after {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
    }
  `;
  (document.head || document.documentElement).appendChild(style);

  window.onselectstart = null;
  document.onselectstart = null;
  if (document.body) document.body.onselectstart = null;

  window.ondragstart = null;
  document.ondragstart = null;
  window.oncopy = null;
  document.oncopy = null;
  window.oncut = null;
  document.oncut = null;

  ['selectstart', 'dragstart', 'copy', 'cut'].forEach(evt => {
    window.addEventListener(evt, e => e.stopImmediatePropagation(), true);
  });

  console.log('[page-visibility-bypass] right-click and selection re-enabled');
})();
