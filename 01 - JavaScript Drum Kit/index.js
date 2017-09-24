
function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    
    if (key && sound) {
        key.classList.add('playing')
        sound.currentTime = 0
        sound.play()
    }
}

function removePlayingClass(e) {
    if (e.propertyName === 'transform') {
        e.target.classList.remove('playing')
    }
}

window.addEventListener("keydown", playSound)
document.querySelectorAll('.key').forEach(k => k.addEventListener("transitionend", removePlayingClass))