//DECLARING VARIABLES
var memoryCard = document.getElementsByClassName("memory-card");
var memoryGame = document.getElementById("memory-game");
var modal = document.getElementById('myModal');
var modalContent = document.getElementById("modalContent")

//SELECTING A CARD 
info = {
    clickedItem: [],
    clickNumber: 0,
    correct: 0,
    incorrect: 0
}

$('.memoryCard(1)').data("image","url('./images/cynthia.png')")
$('.memoryCard(2)').data("image","url('./images/laura.png')")

$("button").click(function(){
$(".memoryCard").css(backgroundImage,$(this).data("image"))
});








// function selectCard(e) {
//     info.clickNumber++;
//     if (e.target !== e.currentTarget) {
//         random(e);
//     }
//     e.stopPropagation();
//     if (info.clickNumber == 2) {
//         decisionMaker();
//     }
// }

// memoryGame.addEventListener("click", selectCard);

//RANDOM SELECTOR
// var array = [
//     ["url('./images/cynthia.png')", "url('./images/laura.png')"], "url('./images/gaby.png')", "url('./images/ilona.png')", "url('./images/rebecca.png')", "url('./images/emilie.png')"];

// function random(e) {
//     var randomCard = array[Math.floor(Math.random() * array.length)];
//     e.target.style.backgroundImage = randomCard;
//     e.target.style.transition = "all 1.0s  ";
//     e.target.style.transform = "rotateY(180deg)";
//     info.clickedItem.push(randomCard);

// }




// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

//MATCH OR NO MATCH
// function decisionMaker(e) {
//     setTimeout(function () {
//         if (info.clickedItem[0] === info.clickedItem[1]) {
//              correctAnswer();
//         }
//         else {
//             incorrectAnswer();
//         };
//         //continue game
//         info.clickNumber = 0;
//         info.clickedItem = [];
        
//     }, 1000);
// }

// CORRECT ANSWER
function correctAnswer(e) {
    info.correct++;
    // RANDOM CARD NOT FOUND !!!!!!!!!!!!!!!!!!!!
    info.clickedItem.slice(randomCard);

    //MODAL  START
    document.getElementById("modalText").innerHTML = "MATCH!";
    modal.style.display = "block";
    modalContent.style.backgroundColor = "green";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    };
    //MODAL END 
    win();
}

//INCORRECT ANSWER
function incorrectAnswer() {
    //MODAL  START
    document.getElementById("modalText").innerHTML = "NO MATCH!";
   
    modal.style.display = "block";
    modalContent.style.backgroundColor = "red";
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    for (var i = 0; i < memoryCard.length; i++) {
        memoryCard[i].style.backgroundImage = "url('./images/itc.png')";
        memoryCard[i].transition = "all 1.0s  ";
        memoryCard[i].transform = "rotateY(180deg)";
    }
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
    if (info.correct == 1) {
        alert("winner you have " + info.incorrect + " incorrect guesses")
    }
}





//need to make it so that once two have been clicked can no longer click
//fliping images
// when user wins the win appears and then the match!
//how do i take random card out the function so it can be found everywhere
