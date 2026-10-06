(function () {
  Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
  Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });

  ['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus'].forEach(evt => {
    window.addEventListener(evt, e => e.stopImmediatePropagation(), true);
  });

  console.log('[page-visibility-bypass] tab-switch detection disabled');
})();
