
const canvas = document.querySelector("#canvas")
const displayContainer = document.querySelector("#displayContainer")
const ctx = canvas.getContext("2d")
canvas.width = displayContainer.clientWidth
canvas.height = displayContainer.clientHeight

ctx.fillStyle = "yellow"
ctx.fillRect(10, 40, 10, 10)