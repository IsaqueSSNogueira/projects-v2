


// DOM
const displayInput = document.querySelector("#displayInput")
const displayCanvas = document.querySelector("#canvas")
const numberButton = document.querySelectorAll(".button")


let expression = "";
let isResult = false;
const operators = ["+", "*", "/", ".", "-"];



export function expressionButtonClick(value) {
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

export function calc() {
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

export function eraseInput() {
	if(expression){
		const expressionErase = expression.slice(0, -1)
		expression = expressionErase;
		displayInput.value = expression;
	}
}

export function clearInput() {
	expression = ""
	displayInput.value = expression
}


export function resetCalc(){
	expression = ""
	displayInput.value = ""
}