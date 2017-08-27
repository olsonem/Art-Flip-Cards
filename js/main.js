cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener('click', function(event){
    event.currentTarget.classList.toggle("flip");
  });
}


//data for the cards

let cardsetData = [
  {filename: "images/cassett.jpg", description: "Here, Cassatt underscored the importance of the maternal bond by evoking religious art. The woman's adoring look and the boy's sweet face and contrapposto stance suggest Italian Renaissance images of the Virgin and Child, a connection reinforced by the oval mirror that frames the boy's head like a halo."},
  {filename: "images/degas.jpg", description: "This work represents one of the most ambitious paintings Degas devoted to the theme of the dance. Ballerinas and their mothers, wait while a dancer executes an 'attitude' for her examination. On the wall beside the mirror, a poster for pays tribute to the singer Jean-Baptiste Faure, who commissioned the picture."},
  {filename: "images/cezanne.jpg", description:"Cézanne rarely painted flowering plants or fresh-cut bouquets, which were susceptible to wilting under his protracted gaze. He included potted plants only in three still lifes, he seems to have reserved this particular table, with its scalloped apron and distinctive bowed legs, for three of his finest still lifes."}
]


//sets up card set container
let cardsetContainer = document.querySelector("#cardset");
let itemCount = 1
rowOfCards = document.createElement('div')
rowOfCards.setAttribute('class', 'row');
for (let card of cardsetData){
  if (itemCount % 3 === 0){
      let cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'col-md-3', 'filp-container');
      rowOfCards.appendChild(cardContainer);
      
      //sets up card 
      let card = document.createElement('div');
        card.setAttribute('class', 'card');
      cardContainer.appendChild(card);
      
      //sets up front of card
      let frontOfCard = document.createElement('div');
        frontOfCard.setAttribute('class', 'front');
      card.appendChild(frontOfCard);
  
      //fills front of card with an image
      let cardImage = document.createElement('img');
        cardImage.setAttribute('class', 'card-image', 'img',`img/${card.filename}`);
        cardImage.style.width = "100%";
      frontOfCard.appendChild(cardImage);
      
      //sets up back of card
      let backOfCard = document.createElement('div');
        backOfCard.setAttribute('class', 'back');
      card.appendChild(backOfCard);
    
      //fills back of card
      let cardDescription = document.createElement('p');
        cardDescription.setAttribute('class', 'description');
       backOfCard.appendChild(cardDescription);
      
      //add current rowOfCards to cardsetContainer
      cardsetContainer.appendChild(rowOfCards); 
      
      // create new rowOfCards
      rowOfCards = document.createElement('div')
      rowOfCards.setAttribute('class', 'row');
      
         } else { 
       let cardContainer = document.createElement('div');
      cardContainer.setAttribute('class', 'col-md-3', 'filp-container');
    rowOfCards.appendChild(cardContainer);
  
     let card = document.createElement('div');
      card.setAttribute('class', 'card');
    cardContainer.appendChild(card);
  
     let frontOfCard = document.createElement('div');
      frontOfCard.setAttribute('class', 'front');
    card.appendChild(frontOfCard)
  
     let cardImage = document.createElement('img');
      cardImage.setAttribute('class', 'card-image', 'img',`img/${card.filename}`);
      cardImage.style.width = "100%";
    frontOfCard.appendChild(cardImage)
  
     let backOfCard = document.createElement('div')
      backOfCard.setAttribute('class', 'back');
    card.appendChild(backOfCard);

     let cardDescription = document.createElement('p')
      cardDescription.setAttribute('class', 'description');
    backOfCard.appendChild(cardDescription);
      
     }
     
  itemCount++; 
  }
 



