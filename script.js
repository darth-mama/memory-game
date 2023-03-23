const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);

    counter--;

    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let i=0; i < colorArray.length; i++) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(colorArray[i]);

    //add id to div
    newDiv.id = [i];

    //call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

//create variable selectedCards to save up to two value
let selectedCards = [];

//create variable savedCards to save 'matched' values
let savedCards = [];

// function to check if the background color is the same & id is different (i.e. different cards matching same color)
function cardMatch(selectedCards) {
  if (selectedCards.length === 2 &&
    selectedCards[0].style.backgroundColor === selectedCards[1].style.backgroundColor
    &&
    selectedCards[0].id !== selectedCards[1].id
  ) {
    selectedCards[0].classList = 'true';
    selectedCards[1].classList = 'true';
  }
}
let count = 0;



function handleCardClick(event) {

  const card = event.target;
  card.style.backgroundColor = card.classList.value;
  // to see the card class value
  console.log(`this is the classlist value ${card.style.backgroundColor}`);
  // if (selectedCards.length === 2) {
  //   // If there are already 2 selected cards, return and do nothing
  //   return;
  // }
  // add targeted card to 'selectedCards' array
  selectedCards.push(card);
  console.log(`there are ${selectedCards.length} cards selected`);
  count++;

  if (count ===3) {
    selectedCards[0].style.backgroundColor = "";
    selectedCards[1].style.backgroundColor = "";
    selectedCards[2].style.backgroundColor = "";
    selectedCards = [];
    count = 0;
    alert("you cannot click more than 2 cards at a time");
  }

  // check if selected card variable is greater than two
  if (selectedCards.length >=2) {
    // run cardMatch function
    cardMatch(selectedCards);
    // check if cardMatch provided a positive result

  if (selectedCards[0].classList.contains("true")) {
    // push selected cards to savedCards variable to not lose value
    savedCards.push(selectedCards);
    //empty selected cards
    selectedCards = [];
    //reset count
    count = 0;
    //if not reset the selected cards array & change back to default
  } else
    setTimeout(function () {
        selectedCards[0].style.backgroundColor="";
        selectedCards[1].style.backgroundColor="";
        selectedCards = [];
        count = 0;

    }, 700);
  }
}

// when the DOM loads - updated below
createDivsForColors(shuffledColors);
