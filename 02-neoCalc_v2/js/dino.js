
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



// functions

let gameLoopId;

function gameLoop() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// dino
	ctx.fillStyle = dino.color
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
	ctx.fillText(Math.floor(score), 10, 15);
	score += 0.5

	// colisão
	if (dino.x < cactus.x + cactus.w && 
			dino.x + dino.w > cactus.x && 
			dino.y < cactus.y + cactus.h && 
			dino.y + dino.h > cactus.y) {
  			cancelAnimationFrame(gameLoopId);
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

calcButton.addEventListener("click", () => {
  if (mode === "dino" && !dino.isJumping) { // bloqueia a reoetição enquanto estiver no alto
    dino.velocityY = -3.5; // negativo sobe
    dino.isJumping = true; // só permite o pulo quando voltar ao chão
  }
});




// iniciar jogo
function startGame(){
		// zerar o dino
		dino = {w: 10, h: 10, x: 30, y: 43, color: "yellow", velocityY: 0, gravity: 0.2, isJumping: false}
		cactus = {w: 5, h: 20, x: 450,y: 40, background: "black"}
  	score = 0

		cancelAnimationFrame(gameLoopId); // evitar erros
		gameLoop();
}







