const aulas = [
  {
    title: "POO",
    hour: 10,
    minute: 30,

  },
  {
    title: "Database",
    hour: 12,
    minute: 30,
  },
  {
    title: "Scrum",
    hour: 5,
    minute: 30,
  },
  {
    title: "Design UX",
    hour: 11,
    minute: 30,
  },
]

aulas.forEach((index, value) => {
  const horas = value.hour % 2 == 0;
  console.log(horas)
})