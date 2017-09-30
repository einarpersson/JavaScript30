
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked = null

const handleCheck = e => {
    if (e.shiftKey && e.target.checked) {
        let inBetween = false
        checkboxes.forEach(x => {
            if (x === e.target || x === lastChecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                x.checked = true
            }
        })
    } else
        lastChecked = e.target
}
checkboxes.forEach(x => x.addEventListener("click", handleCheck))

/* What have I learned?
    - e.shiftKey kan användas för att kolla om shift var nere när eventet triggades
    - this vs event.target kan båda användas för samma syfte, men om jag använder arrow functions så funkar bara e.target. Så lika bra alltså :)
    - komplicerade queryselectors document.querySelectorAll('.inbox input[type="checkbox"]')
    - element.checked = true
 */