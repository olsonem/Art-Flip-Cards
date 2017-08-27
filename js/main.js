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



 



