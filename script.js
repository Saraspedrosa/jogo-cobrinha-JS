let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // cada quadradinho vai ter 32p. 
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right"; // direção da cobrinha

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

function iniciarJogo() {
    // chamando as funções
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction =="right") snakeX += box; // acrescenta um quadrado se a direção for pra direita 
    if(direction ="left") snakeX -= box; // diminui um quadrado se a direção for esquerda
    if(direction =="up") snakeY -= box;
    if(direction =="down") snakeY += box;
    
    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100); // intervalo de tempo de criação do corpinho da cobrinha

