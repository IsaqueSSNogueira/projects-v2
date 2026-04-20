
const displayContainer = document.querySelector("#displayContainer")
const calcButton = document.querySelector("#calcButton")
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = displayContainer.clientWidth
canvas.height = displayContainer.clientHeight



// elements
let dino;
let cactus
let score;

// animations
let gameLoopId;
let initialScreenId;


// vars
let loading = 0
let maxScore = 0
let isReady;
let isGameOver;


function resetGame(){
		dino = {w: 10, h: 10, x: 30, y: 43, background: "rgba(255, 255, 0, 0.7)", backgroundLoser: "rgba(255, 255, 0, 0.5)", velocityY: 0, gravity: 0.2, isJumping: false}
		cactus = {w: 5, h: 20, x: 450,y: 40, background: "rgba(0, 0, 0, 0.7)", backgroundLoser: "rgba(0, 0, 0, 0.5)"}
  	score = 0
  	loading = 0
		isReady = false
		isGameOver = false
}


// abrir jogo
function startGame(){
		// zerar o dino
		resetGame()
		cancelAnimationFrame(gameLoopId); // evitar erros
		initialScreen()
}


// tela inicial
function initialScreen(){

		// tela inicial
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		
		if(loading < 45){
			loading += 0.2
			initialScreenId = requestAnimationFrame(initialScreen)
			ctx.fillStyle = "gray"
			ctx.fillRect(110, 30, loading, 1)
		}
		else{
			cancelAnimationFrame(initialScreenId)
			ctx.font = "8px Arial"
			ctx.fillText("Play >", 110, 35)
			isReady = true
		}

		ctx.font = "10px Arial"
		fillStyle = "black"
		ctx.fillText("Start game", 110, 20)
}


// gameOver
function gameOver() {
  cancelAnimationFrame(gameLoopId);
	// clear
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	// dino
	ctx.fillStyle = "rgba(255, 255, 0, 0.7)"
	ctx.fillRect(dino.x, dino.y, dino.w, dino.h)
	// cactus
	ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
	ctx.fillRect(cactus.x + 2, cactus.y, cactus.w, cactus.h)
	// text
	ctx.fillStyle = "gray"
	ctx.font = "10px Arial"
	ctx.fillText("Fim de jogo", 110, 20)
	ctx.fillStyle = "black"
	ctx.font = "8px Arial"
	ctx.fillText("Jogar denovo >", 110, 35)
	// state
	isGameOver = true;
}


// actions
calcButton.addEventListener("click", () => {
	if(mode === "dino" && isGameOver){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		resetGame()
		gameLoop()
	}
	else if(mode === "dino" && isReady){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		isReady = false
		gameLoop()
	}
  else if (mode === "dino" && !dino.isJumping && !isReady) { // bloqueia a reoetição enquanto estiver no alto
    dino.velocityY = -3.5; // negativo sobe
    dino.isJumping = true; // só permite o pulo quando voltar ao chão
  }
});



// game
function gameLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// dino
	ctx.fillStyle = dino.background;
	ctx.fillRect(dino.x, dino.y, dino.w, dino.h)

	// cactus
	ctx.fillStyle = cactus.background;
	ctx.fillRect(cactus.x, cactus.y, cactus.w, cactus.h);
	cactus.x -= 2;
	if(cactus.x < -20){
		cactus.x = canvas.width + 40;
	}

	// score
	ctx.fillStyle = "black";
	ctx.font = "8px Arial";
	ctx.fillText(Math.floor(score), 250, 15);
	score += 0.5

	// colisão
	if (dino.x < cactus.x + cactus.w && 
			dino.x + dino.w > cactus.x && 
			dino.y < cactus.y + cactus.h && 
			dino.y + dino.h > cactus.y) {
  			gameOver()
	}
	else {
		gameLoopId = requestAnimationFrame(gameLoop);	
	}

	// pulo
	dino.y += dino.velocityY; // 40 + 0 = 40
	dino.velocityY += dino.gravity; // 0 + 0.4 = 0.4

	// chão impede de cair
	const ground = 43;
	if (dino.y >= ground) {
	  dino.y = ground; // não ultrapassa o chão
	  dino.velocityY = 0; // zera, se deixar ele vai descer por causa da gravidade
	  dino.isJumping = false; // permite pular novamente
	}

	if(dino.isJumping && dino.velocityY > 0){
		dino.gravity = 0.4
	}
	else {
		dino.gravity = 0.2
	}

}

