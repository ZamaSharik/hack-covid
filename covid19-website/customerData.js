var cards = [{
        name: "Customer1",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    },
    {
        name: "Customer2",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    },
    {
        name: "Customer3",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    },
    {
        name: "Customer4",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    },
    {
        name: "Customer5",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    },
    {
        name: "Customer6",
        need: "masks",
        quantity: 50,
        description: "This is nonprofit"
    }
]

let addCard = function (card) {
    document.getElementById("card-id").innerHTML += `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="sampleImg.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><strong>${card.name}</strong></h5>
      <p class="card-text">${card.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <hr>
      <li class="list-group-item">Resources Available: ${card.need}</li>
      <li class="list-group-item">Quantity: ${card.quantity}</li>
    </ul>
    <div class="card-body">
      <a href="mailto:sophiesajnani@bellevuebites.com" class="btn btn-primary">Contact me</a>
    </div>
  </div>
  <br>
`;
}

let runFunction = () => {
    cards.forEach((card) => {
        addCard(card);
    });
}
