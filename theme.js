// Runs before the first paint so the app never flashes the wrong theme.
(function () {
  var pref = 'system';
  try {
    pref = JSON.parse(localStorage.getItem('retzef.state.v1')).settings.theme || 'system';
  } catch (e) {}
  var dark = pref === 'dark' || (pref === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
})();
