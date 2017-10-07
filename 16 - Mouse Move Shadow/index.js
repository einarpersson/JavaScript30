
const h1 = document.querySelector('h1')
const hero = document.querySelector('.hero')

const {offsetHeight, offsetWidth, clientHeight, clientWidth} = hero

hero.addEventListener('mousemove', e => {
    
    
    if(e.target.classList.contains('hero')) {
        const x = e.offsetX - offsetWidth/2
        const y = e.offsetY - offsetHeight/2
        const length = Math.round(Math.sqrt(x*x + y*y))
        
        h1.style.textShadow = `${10 * x/length}px ${10 * y/length}px 0 rgba(0,0,0,1)`
    }
})

/*  What have I learned?
    - Att det är fett drygt att hålla på att tänka på coordinater när det kommer till html och mouseevents
    - Påmind om skillnaden mellan e.target (= vad som triggade eventet) och e.currentTarget (= vad vi band triggern på), som alltså inte behöver vara samma!
    
 */