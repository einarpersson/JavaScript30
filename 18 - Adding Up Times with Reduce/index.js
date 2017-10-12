const videos = document.querySelector('.videos')

const totalSeconds = Array.from(videos.children)
    .map(x => x.dataset.time)
    .map(s => {
        const [min, sec] = s.split(':').map(x => parseInt(x, 10))
        return min*60 + sec
    })
    .reduce((x, y) => x+y, 0)

const hours = Math.floor(totalSeconds/3600)
const minutes = Math.floor((totalSeconds - hours*3600)/60)
const seconds = totalSeconds % 60

console.log(`${hours}:${minutes}:${seconds}`)

/* What have I learned?
    - Nothing new really, but useful repetition
    - You have to convert HTMLCollections to Arrays through Array.from()
    - Array destruction(?)
    - map reduce fun
 */