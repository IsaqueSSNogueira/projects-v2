


// DOM
const displayInput = document.querySelector("#displayInput")
const displayCanvas = document.querySelector("#canvas")
const numberButton = document.querySelectorAll(".button")


let expression = "";
let isResult = false;
const operators = ["+", "*", "/", ".", "-"];


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

function expressionButtonClick(value) {
	const isOperator = operators.includes(value);
	const lastChar = expression.at(-1);

	// Se não tem nada e clicou operador → ignora
	if(!expression && isOperator && value !== "-") {
		return;
	}

	// bloqueia bugs visuais 
	if(expression.length <= 1 && lastChar === "-" && isOperator){
		return
	}
	// Se clicou operador e o antecessor é operador
	else if (isOperator && operators.includes(lastChar)) {
		expression = expression.slice(0, -1) + value;
	}
	else if(isResult && !operators.includes(value)) {
		expression = ""
		expression += value
	}
	else {
		expression += value
	}

	displayInput.value = expression;
	isResult = false;
}

function calc() {
	/*se houver algo de errado*/
	if(!expression) return

	try {
		let resultNumber = eval(expression);
		let result = resultNumber.toString();

		expression = result;
		displayInput.value = expression;
		isResult = true;

	} catch {
		return;
	}
}

function eraseInput() {
	if(expression){
		const expressionErase = expression.slice(0, -1)
		expression = expressionErase;
		displayInput.value = expression;
	}
}

function clearInput() {
	expression = ""
	displayInput.value = expression
}


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
		readyPlaySound.pause()
		loadingSound.pause()
		musicGameLoop.pause()
	}
	// reset 
	resetGame()
	expression = ""
	displayInput.value = ""
} 