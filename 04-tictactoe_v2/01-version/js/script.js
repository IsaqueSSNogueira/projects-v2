
/* elements */
const cells = document.querySelectorAll(".cell")
const gameStatusValue = document.querySelector("#gameStatusValue")
const restartButton = document.querySelector(".restartButton")
const scoreXSpan = document.querySelector("#scoreX")
const scoreOSpan = document.querySelector("#scoreO")

let currentPlayer = "X";
let indexX = []
let indexO = []
let alreadyClicked = []
let winsX = 0;
let winsO = 0;

const winnersSpreadsheet = [
  ["0", "1", "2"], // horizontal 1
  ["3", "4", "5"], // horizontal 2
  ["6", "7", "8"], // horizontal 3
  ["0", "3", "6"], // vertical 1
  ["1", "4", "7"], // vertical 2
  ["2", "5", "8"], // vertical 3
  ["0", "4", "8"], // diagonal left to right
  ["2", "4", "6"] // diagonal right to left
];


const togglePlayer = () => {
	currentPlayer = currentPlayer === "X" ? "O" : "X";
	gameStatusValue.textContent = currentPlayer;
}


const clearBoard = () => {
	cells.forEach((cell) => {
		cell.textContent = "";
	})

	indexX = [];
	indexO = [];
	alreadyClicked = [];
	scoreXSpan.textContent = winsX;
	scoreOSpan.textContent = winsO;
}


const verifyWinner = () => {

	// player X
	const isXWinner = winnersSpreadsheet.some((winningCondition) => {
		return winningCondition.every((i) => {
			return indexX.includes(i)
		})
	})

	// player O
	const isOWinner = winnersSpreadsheet.some((winningCondition) => {
		return winningCondition.every((i) => {
			return indexO.includes(i)
		})
	})

	// conditionals
	if(isOWinner) {
		alert("O")
		winsO += 1;
		clearBoard()
	}
	else if(isXWinner) {
		alert("X")
		winsX += 1;
		clearBoard()
	}
	else if(alreadyClicked.length > 8) {
		alert("Empate")
		clearBoard()
	}
	// toggle X / O
	togglePlayer()
}


const addIndex = (event) => {

	const index = event.currentTarget.dataset.index;

	if(currentPlayer === "X"){
		indexX.push (index)
	}
	else if(currentPlayer === "O"){
		indexO.push (index)
	}
	alreadyClicked.push(index)

	verifyWinner()
}


const clickCell = (event) => {
	if(event.currentTarget.textContent === ""){
		event.currentTarget.textContent = currentPlayer;
		addIndex(event)
	} 
}


/*initial*/
 
cells.forEach((cell) => {
	cell.addEventListener("click", (event) => {
		clickCell(event)
	})
})

restartButton.addEventListener("click", () => {
	clearBoard();
})

scoreXSpan.textContent = winsX;
scoreOSpan.textContent = winsO;