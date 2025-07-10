function addPlayer() {
  const position = document.getElementById("position").value
  const name = document.getElementById("name").value
  const number = document.getElementById("number").value

  const confirmation = confirm("Escalar " + name + " como " + position + " na camisa " + number + "?")

  if (confirmation) {
    const teamList = document.getElementById("team-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-" + number
    playerItem.innerText = position + ": " + name + " (" + number + ")"
    teamList.appendChild(playerItem)

    document.getElementById("position").value = ""
    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
  }
}
function removePlayer() {
    const number = document.getElementById("numberToRemove").value; 

    if (number === "") {
        alert("Por favor, digite o número da camisa do jogador a ser removido.");
        return; 
    }

    const playerToRemove = document.getElementById("player-" + number);

    if (!playerToRemove) { 
        alert("Nenhum jogador encontrado com a camisa " + number + ".");
        document.getElementById("numberToRemove").value = ""; 
        return; 
    }

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");

    if (confirmation) {
        document.getElementById("team-list").removeChild(playerToRemove);
        document.getElementById("numberToRemove").value = "";
    }

}
//algum dia arrumar a parada de nao poder repetir o numero//
//apertar o botao escalar vazio salvando do msm jeito//