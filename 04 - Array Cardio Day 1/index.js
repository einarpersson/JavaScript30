// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const oldInventors = inventors.filter(x => (1500 <= x.year && x.year < 1600))

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorNames = inventors.map(x => `${x.first} ${x.last}`)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.slice().sort((a,b) => a.year - b.year)
// Också möjligt att göra < jmf med ternary operator

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYearsLived = inventors.reduce((tot, inventor) => tot + (inventor.passed - inventor.year), 0)

// 5. Sort the inventors by years lived
//const sortedInventorsAgain = inventors.slice().map(x => Object.assign({}, { ...x, age: (x.passed - x.year) })).sort((a,b) => a.age - b.age)
const sortedInventorsAgain = inventors.slice().sort((a,b) => (a.passed - a.year) - (b.passed - b.year))
// Se kommentaren på trean!


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// TODO? Node-fetch...

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortedPeopleByFirstName = people.slice().sort((a, b) => {
    const aFirstName = /,\s(\w+)$/.exec(a)[1]
    const bFirstName = /,\s(\w+)$/.exec(b)[1]
    return aFirstName.localeCompare(bFirstName)
})
const sortedPeopleByLastName = people.slice().sort((a, b) => a.localeCompare(b))

/*  Från "facit":
    const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
  }); */


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const summary = data.reduce((sum, x) => {
    if (sum.hasOwnProperty(x)) {
        sum[x]++
    } else {
        sum[x] = 1
    }
    return sum
}, {})


/* What have I learned? Mycket!
    - arr.slice() kan användas för att skapa en kopia av en array
    - arr.sort((a,b) => ....) är bra, men muterar arrayen och bör därför kombineras med arr.slice() eller nåt
    ----- OBS jämt när man kopierar arrayer så bör man tänka på shallow vs deep copy
    - strA.localCompare(strB)
    - Hur lägger jag till en property när jag mappar över en array? Well beror på om jag vill göra kopior av objektet eller mutera
    - Object.assign() vs Object.create() - den senare sätter protypen och skapar objektet. Den förra tar ett (nytt) objekt som input
    - spreadoperatorn för objekt och arrays { ...x }, är superanvändbar!!  https://davidwalsh.name/spread-operator
    ---- men tänk på läsbarheten! Array.from(x) vs [...x], vad är tydligast?
    - prop in obj vs. obj.hasOwnProperty(prop) - den förra kollar i hela proto-kedjan medan den senare bara kollar på obj
 */