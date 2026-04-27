
// import
const displayContainer = document.querySelector("#displayContainer")
const calcButton = document.querySelector("#calcButton")
export const canvas = document.querySelector("#canvas");
export const ctx = canvas.getContext("2d");

// canva display
canvas.width = displayContainer.clientWidth
canvas.height = displayContainer.clientHeight

// sprites
const dinoSprite = new Image()
dinoSprite.src = "./source/game/dino.png"
const cactusSprite = new Image()
cactusSprite.src = "./source/game/cactus.png"
const cloundSprite = new Image()
cloundSprite.src = "./source/game/clound1.png"
const playSprite = new Image()
playSprite.src = "./source/game/play.png"


// sound
const loadingSound = new Audio() 
loadingSound.src = "./source/game/loading_sound.mp3"
const readyPlaySound = new Audio() 
readyPlaySound.src = "./source/game/ready_play_sound.mp3"
readyPlaySound.volume = 0.2
const deathSound = new Audio() 
deathSound.src = "./source/game/death_sound_effect.mp3"
deathSound.volume = 0.2
const jumpingSound = new Audio() 
jumpingSound.src = "./source/game/jumping_sound_effect.mp3"
export const musicGameLoop = new Audio()
musicGameLoop.src = "./source/game/music_game_loop.mp3"
musicGameLoop.volume = 0.2



// elements
export let dino;
let cactus
let score;
let clound1;
let clound2;

// animations
let gameLoopId;
let initialScreenId;


// vars
let loading = 0
let maxScore = 0
export let isReady;
export let isPlaying;
export let isGameOver;



export function resetGame(){
		dino = {w: 20, h: 20, x: 30, y: 38, background: dinoSprite, backgroundLoser: "", velocityY: 0, gravity: 0.2, isJumping: false}
		cactus = {w: 12, h: 22, x: 450, y: 40, background: cactusSprite, backgroundLoser: ""}
  	clound1 = {w:28, h:18, x:100, y:7, background: cloundSprite}
  	clound2 = {w:28, h:18, x:300, y:22, background: cloundSprite}
  	score = 0
  	loading = 0
		isReady = false;
		isPlaying = false;
		isGameOver = false;
		readyPlaySound.pause()
		deathSound.pause()
		jumpingSound.pause()
		cancelAnimationFrame(gameLoopId);
}


// abrir jogo
export function startGame(){
		// zerar o dino
		resetGame()
		initialScreen()
		// loading sound
		loadingSound.currentTime = 0
		loadingSound.play()
}


// tela inicial
function initialScreen(){

		// tela inicial
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		
		// loading screen
		if(loading < 45){
			loading += 0.25
			initialScreenId = requestAnimationFrame(initialScreen)
			ctx.fillStyle = "gray"
			ctx.fillRect(106, 30, loading, 1)
		}
		// isReady
		else{
			cancelAnimationFrame(initialScreenId)
			loadingSound.pause()
			// screen
			ctx.font = "8px Arial"
			ctx.fillText("Play ", 120, 35)
			ctx.drawImage(playSprite, 138, 30, 5, 5)
			isReady = true

			// initial sound
			readyPlaySound.currentTime = 0
			readyPlaySound.play()
		}

		ctx.font = "10px Arial"
		ctx.fillStyle = "black"
		ctx.fillText("Start game", 105, 20)
}


// game
export function gameLoop() {
	isReady = false
	isPlaying = true;
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// clound
	ctx.drawImage(clound1.background, clound1.x, clound1.y, clound1.w, clound1.h)
	ctx.drawImage(clound2.background, clound2.x, clound2.y, clound2.w, clound2.h)
	clound1.x -= 1
	clound2.x -= 1
	if(clound1.x < -20){
		clound1.x = canvas.width + 35;
	} 
	if(clound2.x < -20){
			clound2.x = canvas.width;
	} 

	// dino
	ctx.drawImage(dino.background, dino.x, dino.y, dino.w, dino.h)


	// cactus
	ctx.drawImage(cactus.background, cactus.x, cactus.y, cactus.w, cactus.h);
	cactus.x -= 2;
	if(cactus.x < -20){
		cactus.x = canvas.width + 40;
	}

	// score
	ctx.fillStyle = "black";
	ctx.font = "8px Arial";
	ctx.fillText(Math.floor(score), 240, 15);
	score += 0.5

	// max score
	if(maxScore > 0){
		ctx.fillStyle = "#5e5e5e"
		ctx.fillText(`H1 ${Math.floor(maxScore)}`, 200, 15)
	}


	// colisão
	if (!isGameOver && 
			dino.x < cactus.x + cactus.w && 
			dino.x + dino.w - 5 > cactus.x && 
			dino.y < cactus.y + cactus.h && 
			dino.y + dino.h - 10 > cactus.y) {
  			gameOver()
	}
	else {
		gameLoopId = requestAnimationFrame(gameLoop);	
	}

	// pulo
	dino.y += dino.velocityY; // 40 + 0 = 40
	dino.velocityY += dino.gravity; // 0 + 0.4 = 0.4

	// chão impede de cair
	const ground = 39;
	if (dino.y >= ground) {
	  dino.y = ground; // não ultrapassa o chão
	  dino.velocityY = 0; // zera, se deixar ele vai forçar descer por causa da gravidade, impactando no pulo
	  dino.isJumping = false; // permite pular novamente
	}

	if(dino.isJumping && dino.velocityY > 0){
		dino.gravity = 0.3
	}
	else {
		dino.gravity = 0.2
	}

}


export const jumpingDino(){
		dino.velocityY = -3; // negativo sobe
    dino.isJumping = true; // só permite o pulo quando voltar ao chão
    jumpingSound.currentTime = 0.3; // cut delay
    jumpingSound.play()
}

// gameOver
function gameOver() {
	isPlaying = false;
  cancelAnimationFrame(gameLoopId);
	// clear
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	// dino & cactus & clound
	ctx.drawImage(clound1.background, clound1.x, clound1.y, clound1.w, clound1.h)
	if(clound2.x > 157 || clund2.x < 100){
		ctx.drawImage(clound2.background, clound2.x, clound2.y, clound2.w, clound2.h)
	}
	ctx.drawImage(dino.background, dino.x, dino.y, dino.w, dino.h)
	ctx.drawImage(cactus.background, cactus.x, cactus.y, cactus.w, cactus.h);

	// score
	ctx.fillStyle = "black";
	ctx.font = "8px Arial";
	ctx.fillText(Math.floor(score), 240, 15);
	score += 0.5

	// max score
	maxScore = maxScore < score ? score : maxScore
	if(maxScore > 0){
		ctx.fillStyle = "#5e5e5e"
		ctx.fillText(`H1 ${Math.floor(maxScore)}`, 200, 15)
	}
	
	// game over text
	ctx.fillStyle = "black"
	ctx.font = "10px Arial"
	ctx.fillText("Fim de jogo", 105, 20)
	ctx.fillStyle = "black"
	ctx.font = "8px Arial"
	ctx.fillText("Jogar denovo", 103, 35)
	ctx.drawImage(playSprite, 155, 30, 5, 5)
	// sound
	deathSound.currentTime = 0.2; // cut delay
	deathSound.play()
	// state
	setTimeout(() => {
		isGameOver = true;
	}, 500)
}


export function stopSounds(){
		readyPlaySound.pause()
		loadingSound.pause()
		musicGameLoop.pause()
}