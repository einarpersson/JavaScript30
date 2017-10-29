const links = document.querySelectorAll('a')
const highlightElement = document.createElement('span')
highlightElement.classList.add('highlight')
document.body.appendChild(highlightElement)

links.forEach(link => link.addEventListener('mouseenter', highlightLink))

function highlightLink(e) {   
    const { width, height, top, left } = e.currentTarget.getBoundingClientRect()
    highlightElement.style.width = `${width}px`
    highlightElement.style.height = `${height}px`
    highlightElement.style.transform = `translateX(${left + window.screenX}px) translateY(${top + window.scrollY}px)`
    
}

/* 
    What have I learned?
    - Blivit påmind om att man kan skapa html-element genom document.createElement('span')
    - Att alla element har ett .getBoundingClientRect() som returnerar massa koordinater att använda om man vill
    - Att det finns ett event som heter mouseenter
    - Hur man lägger till classer dynamiskt (.classList.add(_)) och stylar el.style.____ = ''
    - Att transform är att föredra om man kan när man vill animera saker
    - Om man vill flytta saker så kan man använda translateX() translateY()
    - Om man vill kompensera med scrollen så kan man plocka fram window.scrollY och window.scroll.X

    - Att man kan skapa ett "skugg-element" som kan överlagra/underlagras för att skapa coola effekter. Sätt isf position absolute
 */