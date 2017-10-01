
const buffer = []
const pattern = "einar".split('')

const zipWith = (arr1, arr2, func) => {

    if (arr1.length > arr2.length) {
        arr1 = arr1.slice(0, arr2.length)
    } else if (arr2.length > arr1.length) {
        arr2 = arr2.slice(0, arr1.length)
    }

    return arr1.map((v, i) => func(v, arr2[i]))
}

const trim = () => buffer.splice(0, buffer.length - pattern.length)

const isMatch = () => {
    if (buffer.length < pattern.length) { return false }
    
    return zipWith(buffer, pattern, (x, y) => x === y).every(z => z === true)
}

window.addEventListener("keydown", e => {
    buffer.push(e.key)
    trim()
    
    if(isMatch()) { alert('Match!') }
})

/* What have I learned?
    - Difference between the window object and the document object
    - A use case for zipWith (from Haskell) and how I can write my own!
    - Splice och slice!
 */