const menuHamburger = document.querySelector('.hamburger');

menuHamburger.addEventListener('click', function(){
  document.querySelector('.sidebar').classList.toggle('show-menu');
})