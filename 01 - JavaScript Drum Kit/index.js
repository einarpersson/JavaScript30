
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
        e.target.classList.remove('playing') // Not: det är e.target som man ska använda
    }
}

window.addEventListener("keydown", playSound)
document.querySelectorAll('.key').forEach(k => k.addEventListener("transitionend", removePlayingClass))

/* 
    <<<< What I've learned: >>>>
    querySelectorAll och getByClassName... ger inte arrayer utan andra typer av objekt, som dock går att konveretera till arrayer genom Array.From()
    Man kan även iterera på dem direkt... delvis. Men kanske inte använda map/filter etc.

    <audio> audio.play() och audio.currentTime = 0

    data-.... attribut på html-taggar.

    Kombinera queryselector med string literals :)

    Man kan subscriba till att en css-transition tar slut! Smart!
 */