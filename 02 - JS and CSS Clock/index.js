
const hourHand = document.getElementsByClassName("hour-hand")[0]
const minuteHand = document.getElementsByClassName("min-hand")[0]
const secondHand = document.getElementsByClassName("second-hand")[0]

/* Just focus on hour hand */

function setDate() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    const hDegrees = ((((hours + minutes/60) % 12) / 12) * 360) + 90
    const mDegrees = (((minutes + seconds/60) / 60) * 360) + 90
    const sDegrees = ((seconds / 60) * 360) + 90

    hourHand.style.transform = `rotate(${hDegrees}deg)`    
    minuteHand.style.transform = `rotate(${mDegrees}deg)`
    secondHand.style.transform = `rotate(${sDegrees}deg)`
}

setInterval(setDate, 1000)

/*
    What have I learned?

    Hmm... not that much. Blivit påmind om transform som kan användas för bl.a. rotate, och om transition.
    Man kan använda chrome dev tools för att testa olika transition functions

    
 */




