//DECLARING VARIABLES
var memoryCard = document.getElementsByClassName("memory-card");
var memoryGame = document.getElementById("memory-game");
var modal = document.getElementById('myModal');
var modalContent = document.getElementById("modalContent");
var modalText = document.getElementById("modalText");
var newGame = document.getElementById("newGame");


//EVENT LISTENERS
memoryGame.addEventListener("click", assignCards);
newGame.addEventListener("click", shuffle);
newGame.addEventListener('click', newGameFunction);

//SELECTING A CARD 
info = {
    clickedItem: [],
    clickNumber: 0,
    correct: 0,
    incorrect: 0,
    div: []
}
var array = ["url('./images/cynthia.png')",
    "url('./images/laura.png')",
    "url('./images/gaby.png')",
    "url('./images/ilona.png')",
    "url('./images/rebecca.png')",
    "url('./images/emilie.png')",
    "url('./images/cynthia.png')",
    "url('./images/laura.png')",
    "url('./images/gaby.png')",
    "url('./images/ilona.png')",
    "url('./images/rebecca.png')",
    "url('./images/emilie.png')",
];
var cardId;
var firstCard;
var secondCard;
let hasFlippedCard = false;
function assignCards(event) {

    if (event.target !== event.currentTarget) {
        info.clickNumber++;

        if (event.target === firstCard) return;

        cardId = event.target.getAttribute('id');
        cardId = parseInt(cardId);
        event.target.style.backgroundImage = array[cardId];
        event.target.style.transition = "all 1.0s  ";
        event.target.style.transform = "rotateY(180deg)";
        info.clickedItem.push(array[cardId]);

        if (info.clickNumber == 1) {
            event.target = firstCard;
            info.div.push(event.target);
        }
        if (info.clickNumber == 2) {
            event.target = secondCard;
            info.div.push(event.target);
            decisionMaker();
        }
    }
    event.stopPropagation();
};

//MATCH OR NO MATCH
function decisionMaker() {
    info.clickNumber = 0;
    memoryGame.removeEventListener('click', assignCards);
    let isMatch = info.clickedItem[0] === info.clickedItem[1];
    isMatch ? correctAnswer() : incorrectAnswer();
}

// CORRECT ANSWER
function correctAnswer() {
    info.correct++;
    info.clickedItem = [];
    info.div = [];
    memoryGame.addEventListener("click", assignCards);
    win();
}

//INCORRECT ANSWER
function incorrectAnswer() {
    info.incorrect++;
    setTimeout(function () {
        info.div[0].style.backgroundImage = "url('./images/itc.png')";
        info.div[1].style.backgroundImage = "url('./images/itc.png')";
        info.clickedItem = [];
        info.div = [];
        memoryGame.addEventListener("click", assignCards);
    }, 2000);
}

//NEWGAME
function newGameFunction() {
    shuffle();
    info.clickNumber = 0;
    info.clickedItem = [];
    info.div = [];
    for (var i = 0; i < memoryCard.length; i++) {
        memoryCard[i].style.backgroundImage = "url('./images/itc.png')";
    }
};

// Winner
function win() {
    setTimeout(function () {
        if (info.correct == 1) {
            modalText.innerHTML = "WIN ! <br> You had " + info.incorrect + " incorrect guesses. <br> ";
            modal.style.display = "block";
            modalContent.style.backgroundColor = "green";
            var modalNewGame = document.getElementById("modalNewGame");
            modalNewGame.onclick = function () {
                modal.style.display = "none";
                newGameFunction()
            };
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function () {
                modal.style.display = "none";
            };
        }
    }, 2000);
}

function shuffle() {
    for (var flips = 0; flips < array.length; flips++) {
        var i = Math.floor(Math.random() * array.length);
        var j = Math.floor(Math.random() * array.length);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
