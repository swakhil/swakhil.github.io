// Theme toggle, mobile menu and footer year.
(function () {
  var root = document.documentElement;
  document.querySelector('.theme').addEventListener('click', function () {
    var d = root.classList.toggle('dark');
    try { localStorage.setItem('theme', d ? 'dark' : 'light'); } catch (e) {}
    document.querySelector('meta[name="theme-color"]').setAttribute('content', d ? '#0e2747' : '#f3f7f9');
  });
  document.querySelector('.yr').textContent = new Date().getFullYear();

  var menuBtn = document.querySelector('.menu-toggle');
  var menu = document.getElementById('mobile-menu');
  function setMenu(open) {
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.hidden = !open;
  }
  menuBtn.addEventListener('click', function () { setMenu(menu.hidden); });
  menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !menu.hidden) { setMenu(false); menuBtn.focus(); } });
})();
