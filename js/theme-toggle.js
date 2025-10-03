const themeToggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const body = document.body;

// Determine system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Check local storage for saved preference
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
  body.classList.remove('light-mode');
  themeIcon.src = '/logo/sun-icon.svg';
} else {
  body.classList.add('light-mode');
  themeIcon.src = '/logo/moon-icon.svg';
}

// Event listener to toggle theme
themeToggleBtn.addEventListener('click', function () {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.src = '/logo/moon-icon.svg';
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.src = '/logo/sun-icon.svg';
    localStorage.setItem('theme', 'dark');
  }
});
