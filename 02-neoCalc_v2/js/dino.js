
const displayContainer = document.querySelector("#displayContainer")
const calcButton = document.querySelector("#calcButton")
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = displayContainer.clientWidth
canvas.height = displayContainer.clientHeight



// elements

const dino = {
  w: 10,
  h: 10,
  x: 10,
  y: 10,
  color: "yellow"
};

const cactus = {
	w: 10,
	h: 20,
	x: 350,
	y: 30,
	background: "black",
}



// functions

function moveCactus() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = cactus.background;
	ctx.fillRect(cactus.x, cactus.y, cactus.w, cactus.h);

	cactus.x -= 2;

	if(cactus.x === -10){
		cactus.x = 350
	}

    requestAnimationFrame(moveCactus);	

}

canvas.addEventListener("click", () => {
  cactus.x += 10;
});


moveCactus();






