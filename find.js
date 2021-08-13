const sobremesas = [
  {
      nome: 'pudim',
      diet: true,
  },
  {
      nome: 'gelatina',
      diet: false,
  },
  {
      nome: 'bolo de chocolate',
      diet: false,
  },
  {
      nome: 'pavê',
      diet: true,
  },
]

const isDiet = item => item.diet;

const sobremesaFind = sobremesas.find( item => item.nome === 'pavê'); // apresenta a primeira ocorrência

console.log(sobremesaFind)

const sobremesaFilter = sobremesas.filter(isDiet); // Filter busca por todos as ocorrências

console.log(sobremesaFilter)

console.log(Object.entries(sobremesas).find(([key, item]) => item.nome === 'pavê')?.[0]) // hack para pegar o id da posição do array