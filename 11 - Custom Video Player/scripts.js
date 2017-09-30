
// Get elements
const video = document.querySelector('video')
const playBtn = document.querySelector('.player__button.toggle')
const volumeSlider = document.querySelector('input[name="volume"]')
const playbackRateSlider = document.querySelector('input[name="playbackRate"]')
const skipButtons = document.querySelectorAll('button[data-skip]')
const progressSlider = document.querySelector('.progress')
 
// Higher order functions
const makeChangeVolume = videoElement => e => videoElement.volume = e.target.value
const makeChangePlaybackRate = videoElement => e => videoElement.playbackRate = e.target.value
const makeSkip = videoElement => e => {
    video.currentTime = video.currentTime + parseInt(e.target.dataset.skip, 10)
    e.stopPropagation()
}
const makeTogglePlay = (videoElement, btnElement) => e => {
    if (videoElement.paused) {
        videoElement.play()
        btnElement.innerHTML = '||'
    } else {
        videoElement.pause()
        btnElement.innerHTML = '►'
    }
    e.stopPropagation()
}
const makeChangeTime = videoElement => e => {

    e.stopPropagation()
}

// Create event handlers (functions)
const togglePlay = makeTogglePlay(video, playBtn)
const changeVolume = makeChangeVolume(video)
const changePlaybackRate = makeChangePlaybackRate(video)
const skip = makeSkip(video)
const changeTime = makeChangeTime(video)
const handleProgress = e => {
    const percent = (video.currentTime / video.duration) * 100 
    progressSlider.firstElementChild.style.flexBasis = `${percent}%`
}

// Hook up handlers to events
video.addEventListener("click", togglePlay)
video.addEventListener("timeupdate", handleProgress)
playBtn.addEventListener("click", togglePlay)
volumeSlider.addEventListener("input", changeVolume)
playbackRateSlider.addEventListener("input", changePlaybackRate)
skipButtons.forEach(x => addEventListener("click", skip))
progressSlider.addEventListener("click", changeTime)

// Logging
console.dir(video)