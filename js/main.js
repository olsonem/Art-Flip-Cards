
 

// DOMContentLoaded listener
document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded.");

    let cardSet = document.querySelectorAll('.card');

    for (let card of cardSet){
        card.addEventListener('click', function(event) {
            if (!event.target.classList.contains('front')) {
                event.target.classList.remove('front');
                event.target.classList.add('back');
            } else {
                event.target.classList.remove('back');
                event.target.classList.add('front');
            }
        });
    }
})

	/*let info = document.getElementById('artistInfo')

	showInfo.addEventListener('click',function (){
    	if (info.style.display === 'block') {
        info.style.display = 'none';
    	} else {
        info.style.display = 'block';
    	}
	});
})*/