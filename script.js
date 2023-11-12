const ToggleButton = document.querySelector('.ToggleButton')
const DropdownMenu = document.querySelector('.DropdownMenu')

ToggleButton.onclick = function () {
  DropdownMenu.classList.toggle('open')
}

window.addEventListener('scroll', function() {
  const navBar = document.getElementById('#NavBar');
  if (window.pageYOffset > 0) {
      navBar.style.position = 'fixed';
      navBar.style.top = '0';
  } else {
      navBar.style.position = 'relative';
  }
});