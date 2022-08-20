const nCards = prompt("Quantas cartas quer jogar?");
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

});
alert(cardsOrder);


















function chooseGIF(num){
    switch(num){
        case 1:

    }
}