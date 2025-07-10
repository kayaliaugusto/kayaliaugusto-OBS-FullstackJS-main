<<<<<<< HEAD
let saldo = parseFloat(prompt("informe saldo atual"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )
    switch (opcao) {
        case "1":
        saldo += parseFloat(prompt("informe o valor a ser adicionado"));
        break;
        case "2":
        saldo -= parseFloat(prompt("informe o valor a ser retirado"));
        break;
        case "3":
        alert("saindo...");
        break;
        default:
        alert("entrada invalida")
        break
}
} while (opcao !== "3")
=======
let saldo = parseFloat(prompt("informe saldo atual"));
let opcao = "";

do {
  opcao = prompt(
    "Saldo disponível: R$ " + saldo +
    "\n1 - Adicionar dinheiro" +
    "\n2 - Remover dinheiro" +
    "\n3 - Sair"
  )
    switch (opcao) {
        case "1":
        saldo += parseFloat(prompt("informe o valor a ser adicionado"));
        break;
        case "2":
        saldo -= parseFloat(prompt("informe o valor a ser retirado"));
        break;
        case "3":
        alert("saindo...");
        break;
        default:
        alert("entrada invalida")
        break
}
} while (opcao !== "3")
>>>>>>> f22e6b187bb1f3b076ee14b2b9684ea6b1cbb0d2
