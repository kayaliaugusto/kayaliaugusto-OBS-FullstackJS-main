<<<<<<< HEAD
const atacante = prompt("Qual o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual o seu poder de ataque?"))
const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")
let danoCausado = 0


if (poderDeAtaque > poderDeDefesa && (possuiEscudo === "Não" || "não" || "n") ){
danoCausado = poderDeAtaque - poderDeDefesa 
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)






=======
const atacante = prompt("Qual o nome do personagem atacante?")
const poderDeAtaque = parseFloat(prompt("Qual o seu poder de ataque?"))
const defensor = prompt("Qual é nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui?"))
const poderDeDefesa = parseFloat(prompt("Qual é o seu poder de defesa?"))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não)")
let danoCausado = 0


if (poderDeAtaque > poderDeDefesa && (possuiEscudo === "Não" || "não" || "n") ){
danoCausado = poderDeAtaque - poderDeDefesa 
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
  atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
  defensor + "\nPontos de vida: " + pontosDeVida +
  "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)






>>>>>>> f22e6b187bb1f3b076ee14b2b9684ea6b1cbb0d2
