<<<<<<< HEAD
const medida =parseFloat(prompt("Insira uma medida em Metros:"));
const unidade = prompt("Para qual unidade de medida deseja converter?" + "\n1 - milimetros (mm)" + "\n2 - centimetros (cm)" + "\n3 - decimetros (dm)" + "\n4 - decametros (dam)" + "\n5 - hectometro (hm)" + "\n6 - quilometro (km)");

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
}

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("Opção inválida!")
    break
=======
const medida =parseFloat(prompt("Insira uma medida em Metros:"));
const unidade = prompt("Para qual unidade de medida deseja converter?" + "\n1 - milimetros (mm)" + "\n2 - centimetros (cm)" + "\n3 - decimetros (dm)" + "\n4 - decametros (dam)" + "\n5 - hectometro (hm)" + "\n6 - quilometro (km)");

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
}

switch (unidade) {
  case "1":
    alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
    break
  case "2":
    alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
    break
  case "3":
    alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
    break
  case "4":
    alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
    break
  case "5":
    alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
    break
  case "6":
    alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
    break
  default:
    alert("Opção inválida!")
    break
>>>>>>> f22e6b187bb1f3b076ee14b2b9684ea6b1cbb0d2
}