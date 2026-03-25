

// DOM
const displayInput = document.querySelector("#displayInput")
const numberButton = document.querySelectorAll(".button")

let expression = "";

numberButton.forEach((item) => {

	const value = item.dataset.value;

	if(value !== "=" && value !== "c"){
		item.addEventListener("click", () => {
			expressionButtonClick(value)
		})
	}
	else if(value === "="){
		item.addEventListener("click", () => {
			calc()
		})
	}
	else if(value === "c"){
		item.addEventListener("click", () => {
			clearInput()
		})
	}
	else {
		displayInput.value = "ERROR"
	}
})

function expressionButtonClick(value) {
	expression = expression + value
	displayInput.value = expression;
}

function calc() {
	const result = eval(expression)
	if(result){
		displayInput.value = result
	}
	else {
		displayInput.value = ""
	}
	expression = ""
}

function clearInput() {
	expression = ""
	displayInput.value = expression
}