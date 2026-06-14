export function navigateTo(path, hash = "") {
  window.history.pushState({}, "", path + hash);
  window.dispatchEvent(new Event('popstate'));
  
  if (hash) {
    setTimeout(() => {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  } else {
    window.scrollTo(0, 0);
  }
}
