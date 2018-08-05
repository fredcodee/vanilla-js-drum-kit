

window.addEventListener("keydown",(e)=>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) { return; }// stop the function if the key selected in invalid
  audio.currentTime=0 // rewind to the start
  audio.play();
  key.classList.add("playing");
})

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removetransition));

// to remove the transition
function removetransition(e) {
  if (e.propertyName !== "transform" ) {return;}
  else {
    this.classList.remove("playing");
  }
}
