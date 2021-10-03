let order = [];
let clickedOrder = [];
let score = 0;

// 0 - blue
// 1 - yellow
// 2 - green
// 3 - red

const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");
const red = document.querySelector(".red");

let shuffleColors = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let element = createElementColor(order[i]);
        lightColor(element, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    })
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação ${score}\nVocê acertou! Iniciando o proximo nivel`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createElementColor(color).classList.add('selected');

    setTimeout(() => {
        createElementColor(color).classList.remove('selected')
        checkOrder();
    }, 250);

    
}

let createElementColor = (color) => {
    if(color == 0){
        return blue;
    }
    else if(color == 1){
        return yellow;
    }
    else if(color == 2){
        return green;
    } 
    else if(color == 3) {
        return red;
    }
}

let nextLevel = () => {
    score++;
    shuffleColors();
}

let gameOver = () => {
    alert(`Pontuação ${score}\nVocê perdeu\nClique em Ok para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert("Bem-vindo ao Genius")
    score = 0;

    nextLevel()
}

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
green.onclick = () => click(2);
red.onclick = () => click(3)

playGame()