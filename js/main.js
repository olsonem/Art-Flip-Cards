// DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded.");
  })

let card = document.getElementByClass('card');

card.addEventListener('click', function() {
	if (!this.classList.contains('front')) {
		this.classList.remove('front');
		this.classList.add('back');
	} else {
		this.classList.remove('back');
		this.classList.add('front');
	}
});

let info = document.getElementById('artistInfo')

showInfo.addEventListener('click',function (){
    if (info.style.display === 'block') {
        info.style.display = 'none';
    } else {
        info.style.display = 'block';
    }
});