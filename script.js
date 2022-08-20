
let nCards;
do {nCards = prompt("Quantas cartas quer jogar?");} while(nCards % 2 !=0 || nCards >14 || nCards<4)
let gameStarted = false;
let flippedCards = 0;
let correctCards = 0;
let secondsPassed = 0;
let myCounter;
let cardList = document.querySelector(".game");
const cards = [];
const cardsOrder =[];
for (let i = 0;i<nCards/2;i++){
    cards.push(i);
    cards.push(i);
}
for (let i = 0;i<nCards;i++){
    let rand = Math.floor(Math.random() * cards.length);
    cardsOrder.push(cards[rand]);
    cards.splice(rand,1);
}
cardsOrder.forEach(element => {
    chooseGIF(element);
});
function counterIncrease(){
    const counter = document.querySelector(".counter");
    secondsPassed ++;
    counter.innerHTML = secondsPassed;
    if (correctCards == nCards){
        clearInterval(myCounter);
        alert(`Você ganhou em ${flippedCards} jogadas! em ${secondsPassed} segundos`);
    }
}
function flipAll(){
    let allFlipped = document.querySelector(".cardFront");
    while (allFlipped != null){
        allFlipped.classList.remove("cardFront")
        allFlipped = document.querySelector(".cardFront");
    }
}
function flip(cardToFlip){
    if(gameStarted != true){myCounter = setInterval(counterIncrease,1000);gameStarted=true;}
    flippedCards ++;
    if(cardToFlip.classList.contains("cardFront")){
        alert("selecione outra carta");
    }
    else{
    const alreadyFlipped = document.querySelector(".cardFront");
    if (alreadyFlipped == null){
    cardToFlip.classList.toggle("cardFront")}
    else{
        cardToFlip.classList.toggle("cardFront");
        const list1 = cardToFlip.classList;
        const list2 = alreadyFlipped.classList;
        if (list1.item(1) == list2.item(1)){
            cardToFlip.classList.add("permaFront");
            alreadyFlipped.classList.add("permaFront");
            cardToFlip.classList.remove("cardFront");
            alreadyFlipped.classList.remove("cardFront");
            correctCards = correctCards + 2 ;
        }
        else{
            setTimeout(flipAll, 1000)
        }
    }
    }
}

















function chooseGIF(num){
    switch(num){
        case 0:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/explodyparrot.gif" alt="">
    </li>`; break;
        case 1:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/bobrossparrot.gif" alt="">
    </li>`; break;
        case 2:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/fiestaparrot.gif" alt="">
    </li>`; break;
        case 3:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/metalparrot.gif" alt="">
    </li>`; break;
        case 4:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/revertitparrot.gif" alt="">
    </li>`; break;
        case 5:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/tripletsparrot.gif" alt="">
    </li>`; break;
        case 6:     cardList.innerHTML = cardList.innerHTML + `            <li class = "cardBack ${num} " onclick= "flip(this)">
        <img class= "front" src="media/front.png" alt="">
        <img class= "individual" src="media/unicornparrot.gif" alt="">
    </li>`; break;

    }
}