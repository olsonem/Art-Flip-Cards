cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener('click', function(event){
    event.currentTarget.classList.toggle("flip");
  });
}





 



