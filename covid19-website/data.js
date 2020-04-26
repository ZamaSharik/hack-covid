var cards = [{
        name: "Sunny Sky's Animal Rescue",
        need: "Masks for volunteers adopting out foster dogs, leashes for incoming dogs",
        image: "np2new.PNG", 
        category: "health3",
        quantity: "25 masks, 10 leashes",
        websiteLink: "https://www.sunnyskysshelter.org/",
        description: "Animal rescue service in Puyallup, Washington",
    },
   
    {
        name: "Sound Generations",
        need: "Thermometers and toilet paper for seniors",
        image: "newbie.PNG",
        category: "health2",
        quantity: "10 thermometers and 20 toilet paper rolls",
        websiteLink: "https://soundgenerations.org/",
        description: "Senior services",
    },
    {
      name: "Seattle Public Schools",
      need: "Chromebook laptops for students",
      image:"np1.PNG",
      category: "health4",
      quantity: "50 laptops",
      websiteLink: "https://www.seattleschools.org/",
      description: "School district",
  },
    {
        name: "Seattle Humane Society",
        need: "Dog beds, food for dogs, and cat litter",
        image: "np3new.png",
        category: "health3",
        quantity: "15 dog beds, 10 packs of dog food, and 10 cat litters",
        websiteLink: "https://www.seattlehumane.org/",
        description: "Animal rescue service in Bellevue",
    },
    {
      name: "Kaiser Permanente Clinic",
      need: "N95 masks and gloves",
      image: "hosp.PNG",
      category: "health",
      quantity: "150 masks, 20 boxes of gloves",
      websiteLink: "https://wa.kaiserpermanente.org/html/public/locations/ballard?kp_shortcut_referrer=kp.org/wa/ballard",
      description: "Medicial clinic. Drop off box located at door of clinic (no walk ins allowed)"
  },
    {
        name: "Rainier Valley Food Bank",
        need: "Canned, perishable food",
        image: "foodnew.png",
        category: "health",
        quantity: "45 cans",
        websiteLink: "http://www.rvfb.org/",
        description: "Food bank",
    },
 
]

let addCard = function (card) {
    document.getElementById("card-id").innerHTML += `
  	<div class="card" style="width: 25rem;">
        <img class="seattlepublicschools" src=${card.image} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title"><strong>${card.name}</strong></h5>
          <p class="card-text">${card.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <hr>
          <li class="list-group-item">Need: ${card.need}</li>
          <li class="list-group-item">Quantity: ${card.quantity}</li>
        </ul>
        <div class="card-body">
          <a href="${card.websiteLink}" class="btn btn-primary">Website link</a>
          <a href="mailto:contact@nonprofit.com" class="btn btn-primary">Email us</a>
        </div>
      </div>
      <br>
  `;
}

let filterArray = function(category) {

	// Filtering the array on the basis of card.category === category
  let filteredArray = cards.filter((card) => {
    return card.category === category
  })
  
  // Emptying the #app container
  document.getElementById("card-id").innerHTML = ""
  
  // Updating the container with the filtered Array
  updateContainer(filteredArray);
  
}

let updateContainer = function(arr) {
	arr.forEach((card) => {
    addCard(card);
  })
}

updateContainer(cards);

