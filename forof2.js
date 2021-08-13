const familia = "eu amo minha familia"

for (const letra of familia) {
  console.log(letra)
  let separa = letra.split(' ')
  console.log(separa)
  let junta = separa.join();

  console.log(junta)
}

///////////////
const family = ["Kelly", "Benício", "Jady", "Loiuse"];

let removed = family.slice(0,2)

console.log(removed)


let changed = family.splice(0,2)

console.log(changed)


console.log(family)