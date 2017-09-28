// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
console.log('is at least one person 19 or older?', people.some(x => 2017 - x.year >= 19))

  // Array.prototype.every() // is everyone 19 or older?
console.log('is everyone 19 or older?', people.every(x => 2017 - x.year >= 19))

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
console.log(comments.find(x => x.id === 823423))

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  //comments.splice(comments.findIndex(x => x.id === 823423), 1) // MUTATING
  const index = comments.findIndex(x => x.id === 823423)
  console.log('comments with one removed:\n', [...comments.slice(0, index), ...comments.slice(index + 1)]) // NOT MUTATING
  

  /* What have I learned?
    - Kolla ifall minst ett element uppfyller ett villkor - använd array.some(pred)
    - Kolla ifall alla element .... använd .every(pred)
    - Hitta första element som uppfyller ... array.find(pred)
    - Hitta indexet av första elementet som uppfyller ... array.findIndex(pred)
    - Plocka bort ett element från originalarray (mutera, ej filtrera!), splice(startIndex, count)
    ---- men varför inte bara använda filter isf? :D JO för att då tar du bort på ett pred, inte på index!
    ---- isf använd slice() och ...spread!
   */

   