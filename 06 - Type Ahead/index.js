
// Get the data
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const places = []
fetch(endpoint)
    .then(response => response.json())
    .then(data => places.push(...data))
    .catch(reason => console.error("Couldn't get data", reason))

// Get DOM-elements
const suggestionElement = document.querySelector('.suggestions')
const inputElement = document.querySelector('.search')

const getFilteredPlaces = (searchString, array) => {
    if (searchString === '') {
        return []
    }

    const regex = new RegExp(searchString,'i')
    return array.filter(x => x.city.match(regex))
}

const renderListItem = (place, matchedStr) => {
    const regex = new RegExp(matchedStr, 'i')
    const city = place.city.replace(regex, `<strong>${matchedStr}</strong>`)
    const state = place.state.replace(regex, `<strong>${matchedStr}</strong>`)
    return `<li><span class="name">${city}, ${state}</span><span class="population">${place.population}</span></li>`
}

// Hook up event and update DOM
inputElement.addEventListener("input", e => {
    const filteredPlaces = getFilteredPlaces(e.target.value, places)
    const html = filteredPlaces
        .map(x => renderListItem(x, e.target.value))
        .join('')

    suggestionElement.innerHTML = html
})

/* 
    What have I learned?
    - Matcha oavsett casing
    - Matcha mot variabler med RegExp
    - filtering repetion
 */