window.onload = function toggleMobileMenu() {
  var el = document.getElementById('mobile-menu');
  var elem = document.getElementById('mob-nav');
  el.onclick = function() {
    elem.classList.toggle('hiddenMenu');
  };
};

function closeMenu() {
	var elem = document.getElementById('mob-nav');
		elem.classList.add('hiddenMenu');
};
