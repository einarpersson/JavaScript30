const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d')
//const ctx = new CanvasRenderingContext2D()
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

const state = {
    isDrawing: false,
    hue: 0,
    lineWidth: 1,
    lastX: 0,
    lastY: 0
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', e => {
    state.isDrawing = true
    state.lineWidth = 1
    state.lastX = e.offsetX
    state.lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => state.isDrawing = false)
canvas.addEventListener('mouseout', () => state.isDrawing = false)

function draw(e) {
    if(!state.isDrawing) {
        return
    }
    ctx.lineWidth = state.lineWidth
    ctx.strokeStyle = `hsl(${state.hue},100%, 50%)`

    ctx.beginPath()
    ctx.moveTo(state.lastX, state.lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    state.lastX = e.offsetX
    state.lastY = e.offsetY
    state.hue++
    state.lineWidth++
}

/* What have I learned?
    - Canvas är KUL! Och man kan göra snygga saker :)
    - Sätt canvas-width först (t.ex. med window.innerWidth om hela fönstret)
    - Mothereffing HSL, hsl är kul om man vill ha regnbågen cykliskt
    - Mus
    -events: "mousedown", "mouseup", "mouseout", "mousemove"
    -
 */