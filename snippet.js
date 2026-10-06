Object.defineProperty(document, 'hidden', { get: () => false, configurable: true });
Object.defineProperty(document, 'visibilityState', { get: () => 'visible', configurable: true });


getEventListeners(document).visibilitychange?.forEach(l =>
document.removeEventListener('visibilitychange', l.listener)
);
getEventListeners(window).blur?.forEach(l =>
window.removeEventListener('blur', l.listener)
);


['visibilitychange', 'webkitvisibilitychange', 'blur', 'focus'].forEach(evt => {
window.addEventListener(evt, e => e.stopImmediatePropagation(), true);
});