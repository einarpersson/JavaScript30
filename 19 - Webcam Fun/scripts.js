const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
    return navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(mediaStream => {
            video.src = window.URL.createObjectURL(mediaStream)
            video.play()
        })
        .catch(x => {
            alert(x)
        })
}

function paintToCanvas() {
    const height = video.videoHeight
    const width = video.videoWidth
    canvas.height = height
    canvas.width = width

    let hue = 0
    let blur = 0
    return setInterval(() => {
        
        //ctx.filter = `hue-rotate(${hue}deg) blur(${Math.floor(blur) % 30}px)`
        ctx.drawImage(video, 0, 0, width, height)
        let pixels = ctx.getImageData(0,0,width, height)
        pixels = rgbSplit(pixels)
        ctx.putImageData(pixels, 0, 0)
    }, 16)
}

function takePhoto() {
    // play sound
    snap.currentTime = 0
    snap.play()

    const data = canvas.toDataURL('image/jpeg')
    const link = document.createElement('a')
    link.setAttribute('download','handsome')
    link.href = data
    link.innerHTML = `<img src="${data}" alt="handsome" />`
    strip.insertBefore(link, strip.firstChild)
}

function rgbSplit(pixels) {
    for(let i = 0; i < pixels.data.length; i+=4) {
      pixels.data[i - 150] = pixels.data[i + 0]; // RED
      pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
  }

video.addEventListener("canplay", paintToCanvas)
getVideo()

/*  What have I learned?
    - Att accessa webbkameran/micen är inte så svårt, använd navigator.mediaDevices.getUserMedia()
    - Från den får jag en mediaström som jag kan langa vidare, t.ex. till ett videobjekt eller någon annanstans
    - En canvas-kontext har funktionen drawImage dit jag kan placera frames med visst intervall (och mixtra på vägen)
 */