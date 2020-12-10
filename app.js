let health = 100
let fighter = 'Sol Badguy'
let hits = 0

const characters = {
  SolBadguy: {
    name: 'SolBadguy',
    health: 200,
    hits: 0,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLUchTFN9oAWOD6j1UANfReU4o5oAHkrlIfQ&usqp=CAU",
    items: []
  }
}
console.log(characters.SolBadguy)

const items = {
  fire: {
    name: 'Fire',
    modifier: 2,
    description: "This is Fine...possibly DOT"
  },
  spirit: {
    name: 'Spirit',
    modifier: 5,
    description: "Put some soul into it!"
  },
  ice: {
    name: 'Ice',
    modifier: 3,
    description: "DUN DUN DUN DUNDUN DUN DUN ICE ICE BABY!"
  },
}

function slap() {
  characters.SolBadguy.health -= 1
  characters.SolBadguy.hits += 1
  draw()
}
function punch() {
  characters.SolBadguy.health -= 5
  characters.SolBadguy.hits += 1
  draw()
}
function kick() {
  characters.SolBadguy.health -= 10
  characters.SolBadguy.hits += 1
  draw()
}
function giveFire() {
  characters.SolBadguy.items.push(items.fire)
}


function draw() {
  document.getElementById('health').innerText = `${characters.SolBadguy.health}`
  document.getElementById('name').innerText = `${characters.SolBadguy.name}`
  document.getElementById('hits').innerText = `${characters.SolBadguy.hits}`
  document.getElementById('character-image').innerHTML = `<img src="${characters.SolBadguy.img}" alt="">`

}


draw()
giveFire()

console.log(characters.SolBadguy)
