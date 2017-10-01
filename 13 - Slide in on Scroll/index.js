
// Get image DOM elements
const images = Array.from(document.querySelectorAll('.slide-in'))

// Generic debounce function maker
const makeDebounce = (func, delay = 100) => {
    let lastTime  
    return args => {
        let now = Date.now()
        if (now - lastTime < delay) {
            return
        }
        lastTime = now
        return func(args)
    }
}

// Check if it is time to activate image and do so if conditions match
const handleScroll = e => {
    const margin = 50

    images.filter(img => !img.classList.contains('active'))
          .filter(img => window.scrollY + window.innerHeight - margin > img.y)
          .forEach(img => img.classList.add('active'))
}

// Hook up event listener
window.addEventListener("scroll", makeDebounce(handleScroll))

/* What have I learned?
    - How to write a generic debounce function with higher order functions
    - How to write default parameters in functions (which also gives intellisense!)
    - How to encapsule data with higher order functions and closures
    - How to trigger something on scroll
 */