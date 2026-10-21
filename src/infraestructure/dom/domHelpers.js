export const qs  = (selector, root = document) => root.querySelector(selector);
export const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

export const on = (element, event, handler) => {
  if (!element) return () => {};
  element.addEventListener(event, handler);
  return () => element.removeEventListener(event, handler);
};

/** Delegación: ejecuta handler solo si el target hace match con `selector`. */
export const delegate = (root, event, selector, handler) => {
  const listener = (e) => {
    const target = e.target.closest(selector);
    if (target && root.contains(target)) handler(e, target);
  };
  root.addEventListener(event, listener);
  return () => root.removeEventListener(event, listener);
};

export const setText = (el, text) => { if (el) el.textContent = text; };

export const clearChildren = (el) => { while (el?.firstChild) el.removeChild(el.firstChild); };