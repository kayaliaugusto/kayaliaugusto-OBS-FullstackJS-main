<<<<<<< HEAD
let opcao = "";

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
=======
let opcao = "";

do {
  opcao = prompt(
    "Seja bem-vindo(a)!\n" +
    "\nEscolha uma das opções abaixo:" +
    "\n1 - Opção Um" +
    "\n2 - Opção Dois" +
    "\n3 - Opção Três" +
    "\n4 - Opção Quatro" +
    "\n5 - Encerar"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1.")
      break
    case "2":
      alert("Você escolheu a opção 2.")
      break
    case "3":
      alert("Você escolheu a opção 3.")
      break
    case "4":
      alert("Você escolheu a opção 4.")
      break
    case "5":
      alert("Encerrando o programa...")
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
>>>>>>> f22e6b187bb1f3b076ee14b2b9684ea6b1cbb0d2
} while (opcao !== "5");