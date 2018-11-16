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

//SELECTING A CARD 
info = {
    clickedItem: [],
    clickNumber: 0,
    correct: 0,
    incorrect: 0
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

function assignCards(event) {
    if (event.target !== event.currentTarget) {
        //when clicked
        var cardId = event.target.getAttribute('id');
        cardId = parseInt(cardId);

        event.target.style.backgroundImage = array[cardId];

        event.target.style.transition = "all 1.0s  ";
        event.target.style.transform = "rotateY(180deg)";

        info.clickedItem.push(array[cardId]);
        info.clickNumber++;

        if (info.clickNumber == 2 ) {
            decisionMaker();
        }
    }
    e.stopPropagation();
};

//MATCH OR NO MATCH
function decisionMaker() {
    setTimeout(function () {
        if (info.clickedItem[0] === info.clickedItem[1]) {
            correctAnswer();
        }

        else {
            incorrectAnswer();
        };

        //continue game
        info.clickNumber = 0;
        info.clickedItem = [];

    }, 1000);
}

// CORRECT ANSWER
function correctAnswer() {
    info.correct++;
    // RANDOM CARD NOT FOUND !!!!!!!!!!!!!!!!!!!!
    // info.clickedItem.slice();

    //MODAL  START
    modalText.innerHTML = "MATCH!";
    modal.style.display = "block";
    modalContent.style.backgroundColor = "green";
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    //MODAL END 
    win();
}

//INCORRECT ANSWER
function incorrectAnswer() {
    //MODAL  START
    // modalText.innerHTML = "NO MATCH!";
    // modal.style.display = "block";
    // modalContent.style.backgroundColor = "red";
    // var span = document.getElementsByClassName("close")[0];
    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function () {
    //     modal.style.display = "none";
    // }

    setTimeout(function () {
        for (var i = 0; i < memoryCard.length; i++) {
            memoryCard[i].style.backgroundImage = "url('./images/itc.png')";
            memoryCard[i].transition = "all 1.0s  ";
            memoryCard[i].transform = "rotateY(180deg)";
        }
    }, 1000);
    //MODAL END 
    info.incorrect++;
}


//NEWGAME
document.getElementById("newGame").addEventListener('click', function () {
    info.clickNumber = 0;
    info.clickedItem = [];
    for (var i = 0; i < memoryCard.length; i++) {
        memoryCard[i].style.backgroundImage = "url('./images/itc.png')";
    }
});

// winner
function win() {
    if (info.correct == 2) {
        alert("winner you have " + info.incorrect + " incorrect guesses")
    }
}





//need to make it so that once two have been clicked can no longer click
//fliping images
// when user wins the win appears and then the match!
//how do i take random card out the function so it can be found everywhere

function shuffle() {
    for (var flips = 0; flips < array.length; flips++) {
        var i = Math.floor(Math.random() * array.length);
        var j = Math.floor(Math.random() * array.length);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
