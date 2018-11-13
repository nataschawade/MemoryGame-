//DECLARING VARIABLES
var memoryCard = document.getElementsByClassName("memory-card");
var memoryGame = document.getElementById("memory-game");

//SELECTING A CARD 
info = {
    clickedItem: [],
    clickNumber: 0
}

function selectCard(e) {
    info.clickNumber++;
    if (e.target !== e.currentTarget) {
        random(e);
    }
    e.stopPropagation();
    if (info.clickNumber == 2) {
        decisionMaker();
    }
}

memoryGame.addEventListener("click", selectCard);

//RANDOM SELECTOR
var array = ["url('./images/image1.jpg')", "url('./images/image2.jpg')"];
function random(e) {
    var randomCard = array[Math.floor(Math.random() * array.length)];
    e.target.style.backgroundImage = randomCard;
    info.clickedItem.push(randomCard);
}

//MATCH OR NO MATCH
function decisionMaker() {
    setTimeout(function () {
    if (info.clickedItem[0] === info.clickedItem[1]) {
        alert("MATCH")

    }
    else {
        alert("NO MATCH")
    };
   
    info.clickNumber=0;
    info.clickedItem=[];
    memoryGame.add("disable");;
    for (var i = 0; i < memoryCard.length; i++) {
        memoryCard[i].style.backgroundImage = "url('./images/image3.jpg')";
    }
}, 1000);
}

//NEWGAME
document.getElementById("newGame").addEventListener('click',function(){
    info.clickNumber=0;
    info.clickedItem=[];
    for (var i = 0; i < memoryCard.length; i++) {
        memoryCard[i].style.backgroundImage = "url('./images/image3.jpg')";
    }
});


//need to disable buttons once two are clicked
