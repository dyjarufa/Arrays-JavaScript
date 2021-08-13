const bolsaKelly = [
   'cartão de crédito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenço de papel',
    'perfume',
    'alcool gel'
];

for (let index = 0; index < bolsaKelly.length; index++) {
  console.log(`${index+1} - ${bolsaKelly[index]}`)
  
  if(bolsaKelly[index] === 'dinheiro')break
}

for(index = 0; index < bolsaKelly.length; index ++){
  if(bolsaKelly[index] === 'dinheiro') continue
  console.log(`${index+1} - ${bolsaKelly[index]}`)
}