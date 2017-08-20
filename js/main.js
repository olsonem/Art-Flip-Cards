var card = document.getElementById('mary');

card.addEventListener('click', function() {
	if (!this.classList.contains('front')) {
		this.classList.remove('front');
		this.classList.add('back');
	} else {
		this.classList.remove('back');
		this.classList.add('front');
	}
});