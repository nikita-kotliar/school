const themeStylesheet = document.getElementById('theme-stylesheet');
const checkbox = document.getElementById('checkbox');
const checkboxx = document.getElementById('theme-checkbox');
const divCheckbox = document.getElementById('checkbox_div');
const divCheckboxx = document.getElementById('theme-checkbox_div');
let theme = localStorage.getItem('theme');
if (theme === 'dark') {
  divCheckbox.classList.add('moon');
  divCheckboxx.classList.add('moon');
} else {
  divCheckbox.classList.add('sun');
  divCheckboxx.classList.add('sun');
}
function button_change() {
  if (theme === 'dark') {
    divCheckbox.classList.remove('moon');
    divCheckbox.classList.add('sun');
    divCheckboxx.classList.remove('moon');
    divCheckboxx.classList.add('sun');
  } else {
    divCheckbox.classList.remove('sun');
    divCheckbox.classList.add('moon');
    divCheckboxx.classList.remove('sun');
    divCheckboxx.classList.add('moon');
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  checkbox.addEventListener('click', function () {
    theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
      button_change();
    } else {
      setLightTheme();
      localStorage.setItem('theme', 'light');
      button_change();
    }
  });
  checkboxx.addEventListener('change', function () {
    theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
      button_change();
    } else {
      setLightTheme();
      localStorage.setItem('theme', 'light');
      button_change();
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
