<<<<<<< HEAD
const turista  = prompt("digite seu nome");
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
while (continuar === "Sim" || continuar === "sim" || continuar === "s" || continuar === "S") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
=======
const turista  = prompt("digite seu nome");
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (Sim/Não)")
while (continuar === "Sim" || continuar === "sim" || continuar === "s" || continuar === "S") {
    let cidade = prompt("Qual é o nome da cidade visitada?")
  cidades += " - " + cidade + "\n"
  contagem++
  continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}
alert(
  "Turista: " + turista +
  "\nQuantidade de cidades visitadas: " + contagem +
  "\nCidades visitadas:\n" + cidades
)
>>>>>>> f22e6b187bb1f3b076ee14b2b9684ea6b1cbb0d2
