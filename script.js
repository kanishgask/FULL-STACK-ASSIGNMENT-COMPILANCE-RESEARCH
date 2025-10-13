const searchLogo = document.getElementById('searchLogo');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const backdrop = document.getElementById('mobileBackdrop');

searchLogo.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = '';
});

backdrop.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  document.body.style.overflow = '';
});
