$(document).ready(function() {
    $(window).load(function() {
    });
});

var array = ["url('./images/cynthia.png')", "url('./images/laura.png')", "url('./images/gaby.png')", "url('./images/ilona.png')", "url('./images/rebecca.png')", "url('./images/emilie.png')"];

function shuffle (array) {

    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue=array[currentIndex]
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue; 
    }
    return array;
}

function start(array) {
    alert("hello");
    for (i=0; i=array.length ; i++) {
        var cards = $('<div/>');
        cards.addClass("memory-card");
        $('memory-game').append(cards);
        cards.text("HELLO")
    }
}
document.getElementById('new-game').addEventListener("click", start);























// //DECLARING VARIABLES
// var memoryCard = document.getElementsByClassName("memory-card");
// var memoryGame = document.getElementById("memory-game");
// var modal = document.getElementById('myModal');
// var modalContent = document.getElementById("modalContent")

// //SELECTING A CARD 
// info = {
//     clickedItem: [],
//     clickNumber: 0,
//     correct: 0,
//     incorrect: 0
// }
// var array = ["url('./images/cynthia.png')", "url('./images/laura.png')", "url('./images/gaby.png')", "url('./images/ilona.png')", "url('./images/rebecca.png')", "url('./images/emilie.png')"];

// function selectCard(e) {
//     info.clickNumber++;
//     if (e.target !== e.currentTarget) {
//         for (i=0; i<array.length; i++){
//           $('.memory-card:nth-child(i)').css('backgroundImage','array[i]');
//         }
//     }
//     e.stopPropagation();
//     if (info.clickNumber == 2) {
//         decisionMaker();
//     }
// }
// memoryGame.addEventListener("click", selectCard);





// // $('.memory-card(2)').data("image","url('./images/laura.png')")

// // $('.memory-card:nth-child(1)').on('click', function(){
// //     $('.memory-card:nth-child(i)').css("background-image","url('./images/cynthia.png')")
// // });

// // $('.memory-card:nth-child(2)').on('click', function(){
// //     $('.memory-card:nth-child(2)').css("background-image","url('./images/laura.png')")
// // });


// // $('#newGame').on('click', (function () {
// //     for (var i = memoryCard.length - 1; i > 0; i--) {
// //         var j = Math.floor(Math.random() * (i + 1));
// //         var temp = memoryCard[i];
// //         memoryCard[i] = memoryCard[j];
// //         memoryCard[j] = temp;
// //         console.log(temp);
// // }}));

// // var arra1 = memoryCard;

// //     function shuffle(arra1) {
// //         var ctr = arra1.length, temp, index;
    
// //     // While there are elements in the array
// //         while (ctr > 0) {
// //     // Pick a random index
// //             index = Math.floor(Math.random() * ctr);
// //     // Decrease ctr by 1
// //             ctr--;
// //     // And swap the last element with it
// //             temp = arra1[ctr];
// //             arra1[ctr] = arra1[index];
// //             arra1[index] = temp;
// //         }
        
// //         return arra1;
        
// //     }
	
// //     console.log(arra1)
 

// // $('#newGame').on('click',shuffle)

// // $('#newGame').on('click', $(function () {
// //     var parent = $(".memory-game");
// //     var divs = memoryGame.children();
// //     while (divs.length) {
// //         parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
// //     }
// // }));

// // $('#newGame').on('click', $(function () {
// // for(var i = 0; i < cards.length; i++){
// //     var target = Math.floor(Math.random() * cards.length -1) + 1;
// //     var target2 = Math.floor(Math.random() * cards.length -1) +1;
// //     cards.eq(target).before(cards.eq(target2));
// // }

