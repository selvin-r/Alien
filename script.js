
function playSound(id) {
  const sound = document.getElementById(id);
  sound.currentTime = 0; // restart sound every click
  sound.play();
}

