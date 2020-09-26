const menuHamburger = document.querySelector('.hamburger');

menuHamburger.addEventListener('click', function(){
  document.querySelector('.container').classList.toggle('show-menu');
})