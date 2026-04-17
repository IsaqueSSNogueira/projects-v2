
const displayContainer = document.querySelector("#displayContainer")
const calcButton = document.querySelector("#calcButton")
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

canvas.width = displayContainer.clientWidth
canvas.height = displayContainer.clientHeight

const dino = {
  w: 10,
  h: 10,
  x: 10,
  y: 40,
  color: "yellow"
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = dino.color;
  ctx.fillRect(dino.x, dino.y, dino.w, dino.h);
}

draw();

canvas.addEventListener("click", () => {
  dino.x += 10;
  draw();
});

calcButton.addEventListener("click", () => {
	dino.x -= 10
	draw()
})