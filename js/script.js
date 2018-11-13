//DECLARING VARIABLES
var memoryCard = document.getElementsByClassName("memory-card");
var memoryGame = document.getElementById("memory-game");

//SELECTING A CARD 
info = {
    clickedItem: [],
    clickNumber: 0,
    correct: 0,
    incorrect:0
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
var array = ["url('./images/cynthia.png')","url('./images/laura.png')","url('./images/gaby.png')", "url('./images/ilona.png')","url('./images/rebecca.png')","url('./images/emilie.png')"];
function random(e) {
    var randomCard = array[Math.floor(Math.random() * array.length)];
    e.target.style.backgroundImage = randomCard;
    e.target.style.transition= "all 1.0s  ";
    e.target.style.transform="rotateY(180deg)";
    info.clickedItem.push(randomCard);
}


//MATCH OR NO MATCH
function decisionMaker() {
    

    setTimeout(function () {

        if (info.clickedItem[0] === info.clickedItem[1]) {
            
            info.correct++ ; 

            //MODAL  START
            document.getElementById("modalText").innerHTML= "MATCH";
            var modal = document.getElementById('myModal');
            modal.style.display = "block";
            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            };
            //MODAL END 
            win();
        }
        else {
            info.incorrect++ ;
             
             //MODAL  START
             document.getElementById("modalText").innerHTML= "NO MATCH!";
             var modal = document.getElementById('myModal');
             modal.style.display = "block";
             // Get the <span> element that closes the modal
             var span = document.getElementsByClassName("close")[0];
             // When the user clicks on <span> (x), close the modal
             span.onclick = function () {
                 modal.style.display = "none";
             }
             //MODAL END 
        };

        info.clickNumber = 0;
        info.clickedItem = [];
        // memoryGame.add("disable");;
        for (var i = 0; i < memoryCard.length; i++) {
            memoryCard[i].style.backgroundImage = "url('./images/itc.png')";
            memoryCard[i].transition= "all 1.0s  ";
            memoryCard[i].transform="rotateY(180deg)";
            
        }
    }, 1000);
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

function win (){
    if (info.correct == 1) {
alert("winner you have" + info.incorrect +"incorrect guesses")
    }
}







//need to make it so that once two have been clicked can no longer click
//fliping images