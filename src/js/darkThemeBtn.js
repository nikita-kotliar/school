let checkbox = null;
const themeStylesheet = document.getElementById('theme-stylesheet');

document.addEventListener('DOMContentLoaded', function () {
  checkbox =
    window.innerWidth > 1440
      ? document.getElementById('checkbox')
      : document.getElementById('theme-checkbox');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
    } else {
      setLightTheme();
      localStorage.setItem('theme', 'light');
    }
  });

  function setDarkTheme() {
    if (themeStylesheet) {
      themeStylesheet.href = './css/dark-theme.css';
    } else {
      console.error('themeStylesheet element not found');
    }
    checkbox.checked = true;
  }

  function setLightTheme() {
    if (themeStylesheet) {
      themeStylesheet.href = './css/index.css';
    } else {
      console.error('themeStylesheet element not found');
    }
  }
});
