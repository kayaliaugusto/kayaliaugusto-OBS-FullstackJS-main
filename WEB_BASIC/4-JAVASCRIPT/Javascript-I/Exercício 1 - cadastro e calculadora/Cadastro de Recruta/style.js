let primeiroNome = prompt ("Informe o primeiro nome do Recruta:");
let segundoNome = prompt ("Informe o sobrenome do Recruta:");
let campoDeEstudo = prompt ("Qual o campo de estudo do Recruta?");
let anoDeNascimento = prompt ("Qual o ano de nascimento do Recruta?")   
let idade = new Date() - anoDeNascimento
console.log(idade);

alert(
  "Recruta cadastrado com sucesso!\n" +
  "\nNome completo: " + primeiroNome + " " + segundoNome +
  "\nCampo de estudo: " + campoDeEstudo +
  "\nIdade: " + (2025 - anoDeNascimento)
)


