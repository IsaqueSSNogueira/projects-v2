
// import 
import { canvas, ctx, isGameOver, musicGameLoop, dino, isPlaying, isReady, startGame, resetGame, gameLoop, jumpingDino, stopSounds  } from "./dino.js"
import { expressionButtonClick, calc, eraseInput, clearInput, resetCalc } from "./calculator.js"

// elements
const displayInput = document.querySelector("#displayInput")
const displayCanvas = document.querySelector("#canvas")
const displayContainer = document.querySelector("#displayContainer")
const calcButton = document.querySelector("#calcButton")



// modo
let mode = ""
function toggleMode() {
	mode = mode === "dino" ? "calc" : "dino";
	if(mode === "dino"){
		displayInput.classList.add("hidden")
		displayCanvas.classList.remove("hidden")
		startGame()

	}
	else{
		displayInput.classList.remove("hidden")
		displayCanvas.classList.add("hidden")
		stopSounds()
	}
	// reset 
	resetGame()
	resetCalc()
} 




// calc
numberButton.forEach((item) => {
	const value = item.dataset.value;
	if(value !== "=" && value !== "c" && value !== "<" && value !== "d"){
		item.addEventListener("click", () => {
			expressionButtonClick(value)
		})
	}
	else if(value === "="){
		item.addEventListener("click", () => {
			calc()
		})
	}
	else if(value === "<"){
		item.addEventListener("click", () => {
			eraseInput()
		})
	}
	else if(value === "c"){
		item.addEventListener("click", () => {
			clearInput()
		})
	}
	else if(value === "d"){
		item.addEventListener("click", () => {
			toggleMode()
		})
	}
	else {
		displayInput.value = ""
	}
})



// dino 

// actions
calcButton.addEventListener("click", () => {
	// play again
	if(mode === "dino" && isGameOver){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		resetGame()
		gameLoop()
	}
	// start screen
	else if(mode === "dino" && isReady){
		ctx.clearRect(0, 0, canvas.width, canvas.height)
		musicGameLoop.currentTime = 0
		musicGameLoop.play()
		gameLoop()
	}
	// jump
  else if (mode === "dino" && !dino.isJumping && !isReady && isPlaying) { // permite o pulo só se já estiver no jogo
    jumpingDino()
  }
});