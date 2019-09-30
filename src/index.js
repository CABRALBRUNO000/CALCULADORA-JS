let v1 = Number(prompt(`Digite o Primeiro valor: `));
let fn = Number(
  prompt(`ESCOLHA UMA FUNÇÃO: 
[1] soma:
[2] subtração:
[3] Multiplicação: 
[4] Divisão:
[5] Resto da Divisão:
[6] Exponenciação: `)
);
let tcalc;
let calc;
let simb;
let ao;
let v2;
if (fn != 6) {
  v2 = Number(prompt(`Digite o Segundo valor: `)); // o valor desta variáevel não funciona para a linha que está fora do if
  switch (fn) {
    case 1:
      calc = v1 + v2;
      tcalc = "soma";
      simb = "+";
      ao = "A";
      break;
    case 2:
      calc = v1 - v2;
      tcalc = "Subtração";
      simb = "-";
      ao = "A";
      break;
    case 3:
      calc = v1 * v2;
      tcalc = "Multiplicação";
      simb = "*";
      ao = "A";
      break;
    case 4:
      calc = v1 / v2;
      tcalc = "Divisão";
      simb = "/";
      ao = "A";
      break;
    case 5:
      calc = v1 % v2;
      tcalc = "Resto da Divisão";
      simb = "%";
      ao = "O";
      break;
    default:
      break;
  }
} else if (fn == 6) {
  calc = v1 ** 2;
  tcalc = "Exponenciação";
  simb = "**";
  ao = "A";
}
document.write(
  ` ${ao} ${tcalc} entre ${v1} ${simb} ${v2} é  ${calc.toFixed(2)}`
);
