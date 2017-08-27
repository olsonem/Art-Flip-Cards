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
for (let card of cardsetData){
  //sets up row to hold 3 containers
  if (itemCount % 3 === 0){
    let rowOfCards = document.createElement('div');
    rowOfCards.setAttribute('class', 'row');
    
    } else {
      //sets up card container
      let cardContainer = document.createElement('div');
      cardContainer.setAttribute('class', 'col-md-3', 'filp-container');
      
      //sets up card 
      let card = document.createElement('div');
      card.setAttribute('class', 'card');
      
      //sets up front of card
      let frontOfCard = document.createElement('div');
      frontOfCard.setAttribute('class', 'front');
  
      //fills front of card with an image
      let cardImage = document.createElement('img');
      cardImage.setAttribute('class', 'card-image', 'src',`img/${card.filename}`);
      cardImage.style.width = "100%";
      
      //sets up back of card
      let backOfCard = document.createElement('div');
      backOfCard.setAttribute('class', 'back');
    
      //fills back of card
      let cardDescription = document.createElement('p');
      cardDescription.setAttribute('class', 'description');
      
      cardsetContainer.appendChild(rowOfCards); 
      rowOfCards.appendChild(cardContainer);
      cardContainer.appendChild(card);
      card.appendChild(frontOfCard);
      frontOfCard.appendChild(cardImage);
      card.appendChild(backOfCard);
      backOfCard.appendChild(cardDescription);
      


   }
      
      
      
  
  itemCount++; 
  }
 



