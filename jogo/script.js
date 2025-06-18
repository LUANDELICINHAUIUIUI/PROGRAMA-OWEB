// Configuração do jogo
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const grid = 20; // Tamanho da célula
const canvasSize = 400; // Tamanho do canvas
canvas.width = canvasSize;
canvas.height = canvasSize;

let score = 0;
let snake = [
    {x: 100, y: 100},
    {x: 80, y: 100},
    {x: 60, y: 100}
];
let direction = 'RIGHT';
let food = spawnFood();

// Função para desenhar a cobrinha
function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x, segment.y, grid, grid);
    });
}

// Função para desenhar a comida (bosta)
function drawFood() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(food.x, food.y, grid, grid);
}

// Função para mover a cobrinha
function moveSnake() {
    const head = {x: snake[0].x, y: snake[0].y};

    if (direction === 'LEFT') head.x -= grid;
    if (direction === 'RIGHT') head.x += grid;
    if (direction === 'UP') head.y -= grid;
    if (direction === 'DOWN') head.y += grid;

    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        score++;
        document.getElementById('scoreValue').innerText = score;
        food = spawnFood(); // Cria uma nova "bosta"
    } else {
        snake.pop(); // Remove a última parte da cobrinha
    }
}

// Função para gerar a "bosta" em posições aleatórias
function spawnFood() {
    const x = Math.floor(Math.random() * (canvasSize / grid)) * grid;
    const y = Math.floor(Math.random() * (canvasSize / grid)) * grid;
    return {x: x, y: y};
}

// Função para controlar a direção com as teclas
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
    if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
});

// Função para verificar se a cobrinha colidiu com as paredes ou consigo mesma
function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

// Função principal do jogo
function gameLoop() {
    if (checkCollision()) {
        alert('Game Over!');
        document.location.reload(); // Reinicia o jogo
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Limpa o canvas
    moveSnake(); // Move a cobrinha
    drawSnake(); // Desenha a cobrinha
    drawFood(); // Desenha a "bosta"

    setTimeout(gameLoop, 100); // Controla a velocidade do jogo
}

// Inicia o jogo
gameLoop();
