window.onload = function toggleMobileMenu() {
  var el = document.getElementById('mobile-menu');
  var elem = document.getElementById('mob-nav');
  el.onclick = function() {
  	var pos = document.getElementsByTagName('main')[0];
  	pos.classList.toggle('position');
    elem.classList.toggle('hiddenMenu');
  };
};

function closeMenu() {
	var elem = document.getElementById('mob-nav');
	var pos = document.getElementsByTagName('main')[0];
		elem.classList.add('hiddenMenu');
		pos.classList.remove('position');
};

/*function modalImg() {
	let elem = document.querySelectorAll('.work-item');
	for(let i = 0; i < elem.length; i++) {
			elem[i].childNodes[1].onclick = function() {
				elem[i].classList.remove('work-item');
				elem[i].classList.add('img-modal');
				elem[i].lastChild.classList.remove('close-modal-img-hidden');
				elem[i].lastChild.classList.add('close-modal-img');
		};
		var close = document.createElement('div');
		close.setAttribute('class', 'close-modal-img-hidden');
		close.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
		close.display = 'none';
		elem[i].appendChild(close);
		close.onclick = function() {
			elem[i].removeAttribute('class');
			elem[i].classList.add('work-item');
			elem[i].lastChild.classList.remove('close-modal-img');
			elem[i].lastChild.classList.add('close-modal-img-hidden');
		}
	};
};*/

function modalImg() {
	if(window.screen.width > 760) {
		let elem = document.querySelectorAll('.work-item');
		for(let i = 0; i < elem.length; i++) {
			elem[i].childNodes[1].onclick = function() {
				elem[i].classList.remove('work-item');
				elem[i].classList.add('img-modal');
				elem[i].lastChild.classList.remove('close-modal-img-hidden');
				elem[i].lastChild.classList.add('close-modal-img');
			};
			var close = document.createElement('div');
			close.setAttribute('class', 'close-modal-img-hidden');
			close.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
			close.display = 'none';
			elem[i].appendChild(close);
			close.onclick = function() {
				elem[i].removeAttribute('class');
				elem[i].classList.add('work-item');
				elem[i].lastChild.classList.remove('close-modal-img');
				elem[i].lastChild.classList.add('close-modal-img-hidden');
			}
		};
	}

};

modalImg();