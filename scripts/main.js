const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const playerpoints = document.getElementById("player-points");
const dealerpoints = document.getElementById("dealer-points");
const playerWtrack = document.getElementById("player-wins");
const playerLtrack = document.getElementById("player-losses");
const dealerWtrack = document.getElementById("dealer-wins");
const dealerLtrack = document.getElementById("dealer-losses");
const message = document.querySelector("#message");


const dealerHands =[];
const playerHands =[]
let playerWins = 0;
let playrLosses = 0;
let dealerWins = 0;
let dealerArr = [];
let playerArr = [];
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
  shuffle()
}

let dealbutt = document.querySelector("#deal-button")
dealbutt.addEventListener("click", function()  {
drawcards();
dealtoplay();
drawcards();
dealtoplay();
calculatePoints(playerHands,playerpoints);
calculatePoints(dealerHands,dealerpoints);
});
 
let hitbutt = document.querySelector("#hit-button")
hitbutt.addEventListener("click", function()  {
dealtoplay()
calculatePoints(playerHands,playerpoints);


});

const messages = document.querySelector("#messages");
message.append(pointscome)


window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
});



console.log(deck)

function drawcards(){
  console.log(deck)
let dealtoplay = deck.splice(0,1)[0]
console.log(dealtoplay)
dealerHands.push(dealtoplay)
console.log(dealerHands)
dealerHand.append(GetCardImage(dealtoplay))
}

function dealtoplay(){
  console.log(deck)
let drawcards = deck.splice(0,1)[0]
console.log(drawcards)
playerHands.push(drawcards)
console.log(playerHands)
playerHand.append(GetCardImage(drawcards))
}

function GetCardImage(card) {
  let cardi = document.createElement("img");
cardi.src = `images/${card.rank}_of_${card.suit}.png`;
console.log(cardi.src)
return(cardi)
}

function shuffle() {
  let currentIndex = deck.length,
  randomIndex;

while(currentIndex !=0) {

  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
[deck[currentIndex], deck[randomIndex]] = [
  deck[randomIndex],
  deck[currentIndex],
 ];

}


 console.log(deck)
 return deck
}

function calculatePoints(points,pointscome){
  pointscome.innerText = ""
  let storeit = 0
for (const card of points) {
  if (card.rank === "jack"){card.pointValue=10}
  if(card.rank === "queen"){card.pointValue=10}
  if(card.rank === "king"){card.pointValue=10}
  if(card.rank === "ace"){
    if (storeit < 11){card.pointValue=11}
    else {card.pointValue=1}
  }
  
storeit += card.pointValue
console.log(storeit)
}
pointscome.append(storeit)
  };

  function bustlogi() {
    if (parseInt(playerpoints.innerHTML) > 21) {
      buttonDisableAll();
      playerLtrack();
      dealerWtrack();
      message.innerHTML = "You busted! Dealer Wins!";
    }
  }

  const stand = document.querySelector("#stand-button");
  stand.addEventListener("click",standLogic);
  function standLogic() {
    document.getElementById("hit-button").disable = true;
    while (parseInt(dealerpoints.innerHTML) < 17) {
      const handy = deck.splice(0,1);
      GetCardImage(handy[0],dealerHand);
      dealerArr.push(handy[0]);
      calculatePoints(dealerArr,dealerpoints);
    }
    knownWinner();
  }
 function knownWinner(){
  document.getElementById("stand-button").disabled = true;
  switch (true) {
    case parseInt(playerpoints.innerHTML) > parseInt(dealerpoints.innerHTML)&&
    parseInt(playerpoints.innerHTML) <= 21:
    message.innerHTML = "Player Wins!";
    playerWt();
    dealerLtrack();
    
    case parseInt(playerpoints.innerHTML) <parseInt(dealerpoints.innerHTML)&&
    parseInt(dealerpoints.innerHTML) > 21:
    message.innerHTML = ("!Dealer Busts! Player Wins!");
    playerWtrack();
    dealerLtrack();
    
    parseInt(dealerpoints.innerHTML) === parseInt(playerpoints.innerHTML);
    message.innerHTML = ("The Game Ends In A Tie!");
  
      message.innerHTML = ("Dealer Wins!");
      playerLtrack();
      dealerWtrack();
  }
  
}

const restart = document.getElementById("restart-button");
restart.addEventListener("click", restartgame);
function restartgame() {
  dealerArr = []
  playerArr = []
  deck = [];
  dealerHand.innerHTML = "";
   playerHand.innerHTML = "";
  playerpoints.innerHTML = "";
   dealerpoints.innerHTML = "";
   message.innerHTML = "";
   buttonEnableAll();
}

