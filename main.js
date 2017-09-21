window.onload = function toggleMobileMenu() {
  var el = document.getElementById('mobile-menu');
  var elem = document.getElementById('mob-nav');
  el.onclick = function() {
    elem.classList.toggle('hiddenMenu');
  } 
}
