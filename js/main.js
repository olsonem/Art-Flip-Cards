cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener('click', function(event){
    event.currentTarget.classList.toggle("flip");
  });
}


// Code that adds captions to slideshow

let cardsetData = [
  {filename: "images/cassett.jpg"},
  {filename: "images/degas.jpg"},
  {filename: "images/cezanne.jpg"}
]

let cardsetContainer = document.querySelector(".cardImage");
for (let card of cardsetData){
  
  let cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'card-image');
  
  let img = document.createElement('img');
  img.setAttribute('src', `img/${card.filename}`);
  img.style.width = "100%";
  
 cardset.appendChild(img);
 
 cardsetContainer.appendChild(card); 
 cardCount++; 
}

/*this.cardset = document.querySelector('#cardset');  

    setUpCardSet(){
      console.log('setting up cards');
      this.cardset.innerHTML = '';
        for (let i=0; i<3; i++){
            let newRow = document.createElement('div');
            newRow.setAttribute('class', 'row');
            
            for (let j=0; j<3; j++){
              let newCol = document.createElement('div');
              newCol.setAttribute('class', 'col-xs-2');
              let newCard = document.createElement('span');
              newCard.setAttribute('class', 'tile glyphicon glyphicon-home');
              newCard.dataset.x = i;
              newCard.dataset.y = j;
              newCol.appendChild(newCard);
              newRow.appendChild(newCol);
            } // second `for` loop ends here.
            this.cardset.appendChild(newRow);
        }// First `for` loop should ends here.
      this.setUpTileListeners();
    }*/