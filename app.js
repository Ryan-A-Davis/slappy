let health = 100
let fighter = 'Sol Badguy'
let hits = 0

const characters = {
  SolBadguy: {
    name: 'SolBadguy',
    health: 200,
    hits: 0,
    img: "https://epic7x.com/wp-content/uploads/2019/04/sol.png",
    items: []
  }
}

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
  let mod = addMods() || 0
  characters.SolBadguy.health -= 1 + mod
  characters.SolBadguy.hits += 1
  update()
}
function punch() {
  
  let mod = addMods()
  characters.SolBadguy.health -= 5 + mod
  characters.SolBadguy.hits += 1
  update()
}
function kick() {
  let mod = addMods()
  characters.SolBadguy.health -= 10 + mod
  characters.SolBadguy.hits += 1
  update()
}
function equip(itemName) {
  characters.SolBadguy.items.push(items[itemName])

}


function update() {
  document.getElementById('health').innerText = `${characters.SolBadguy.health}`
  document.getElementById('name').innerText = `${characters.SolBadguy.name}`
  document.getElementById('hits').innerText = `${characters.SolBadguy.hits}`

  if(characters.SolBadguy.health <= 0){
    printKO()
  }
}

function printKO(){
  document.getElementById("KOimg").classList.remove("d-none")
}

function addMods(){
  let modTotal = 0;
  characters.SolBadguy.items.forEach(item => (modTotal += item.modifier)
  );
   return modTotal
}

function draw(){
  let itemsArray = Object.keys(items)
  let equipped = ""

  itemsArray.forEach(i => equipped += `<a class="dropdown-item" onclick="equip('${i}')">${i.toUpperCase()}</a>`)
  console.log(equipped)
  console.log(itemsArray)
  document.getElementById("items").innerHTML = equipped

  document.getElementById('character').innerHTML = `<img src="${characters.SolBadguy.img}" id="character-image" alt="">`
}

update()
draw()
