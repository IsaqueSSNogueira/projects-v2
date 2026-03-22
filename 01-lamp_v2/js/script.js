
const lightSwitch = document.getElementById("lightSwitch");
const soundEffect = new Audio("source/clickSoundEffect.mp3");

lightSwitch.addEventListener("click", () => {
	onLightSwitch();
});

function onLightSwitch() {
	soundEffect.currentTime = 0;
	soundEffect.play();
}