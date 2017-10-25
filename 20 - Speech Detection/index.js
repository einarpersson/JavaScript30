window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.interimResults = true
recognition.lang = 'en-US'

const words = document.querySelector('.words')
words.appendChild(document.createElement('p'))

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(results => results[0])
        .map(x => x.transcript)
        .join('')
    
    words.lastChild.textContent = transcript

    if (transcript.toLowerCase().includes('swedish')) {
        recognition.lang = 'sv'
        console.log('Byter till svenska')
    } else if (transcript.toLowerCase().includes('engelska')) {
        recognition.lang = 'en-US'
        console.log('Switching to english')
    }

    if (e.results[0].isFinal) {
        words.appendChild(document.createElement('p'))
    }
})
recognition.addEventListener('end', recognition.start)

recognition.start()

/* What have I learned?
    - Att det existerar ett Web Speech API som funkar i Chrome idag, och är superlätt att komma igång med. Flera språk!
    - ...
    - Så coolt!

 */