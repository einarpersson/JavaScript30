
// DOM-elements
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

// 
const msg = new SpeechSynthesisUtterance(options[2].value)
let voices = []

const fillVoices = () => {
    voices = speechSynthesis.getVoices()

    voicesDropdown.innerHTML = speechSynthesis.getVoices()
        .map(v => `<option value="${v.name}">${v.name} [${v.lang}]</option>`)
        .join('')
    
    speakButton.attributes.removeNamedItem('disabled')
}

const toggle = (startover = false) => {
    speechSynthesis.cancel()
    if (startover) {
        speechSynthesis.speak(msg)
    }
}

const setOptions = e => msg[e.target.name] = e.target.value
const setVoice = () => msg.voice = voices.find(v => v.name === voicesDropdown.value)


speechSynthesis.addEventListener('voiceschanged', fillVoices)
voicesDropdown.addEventListener('change', setVoice)
speakButton.addEventListener('click', toggle)
stopButton.addEventListener('click', toggle.bind(null, false))
options.forEach(elem => elem.addEventListener('change', setOptions))

/* What have I learned?
    - Att Web Speech API innehåller både recognition och synthesis
    - Att det finns massa inbyggda voices
    - Att man antingen kan använda bind eller wrappa i en arrow function för att skicka in argument i en funktion utan att calla den automatiskt 
 */