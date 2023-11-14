var stringa = "CASA 11";

function inverter(str) {
  var risultato = [];
  var b = str.split("");
  b.forEach((item) => {
    if (/^[a-zA-Z]$/.test(item)) {
      item = item.toUpperCase();

      switch (item) {
        case "A":
          risultato.push("Z");
          break;
        case "B":
          risultato.push("Y");
          break;
        case "C":
          risultato.push("X");
          break;
        case "D":
          risultato.push("W");
          break;
        case "E":
          risultato.push("V");
          break;
        case "F":
          risultato.push("U");
          break;
        case "G":
          risultato.push("T");
          break;
        case "H":
          risultato.push("S");
          break;
        case "I":
          risultato.push("R");
          break;
        case "J":
          risultato.push("Q");
          break;
        case "K":
          risultato.push("P");
          break;
        case "L":
          risultato.push("O");
          break;
        case "M":
          risultato.push("N");
          break;
        case "N":
          risultato.push("M");
          break;
        case "O":
          risultato.push("L");
          break;
        case "P":
          risultato.push("K");
          break;
        case "Q":
          risultato.push("J");
          break;
        case "R":
          risultato.push("I");
          break;
        case "S":
          risultato.push("H");
          break;
        case "T":
          risultato.push("G");
          break;
        case "U":
          risultato.push("F");
          break;
        case "V":
          risultato.push("E");
          break;
        case "W":
          risultato.push("D");
          break;
        case "X":
          risultato.push("C");
          break;
        case "Y":
          risultato.push("B");
          break;
        case "Z":
          risultato.push("A");
          break;
        default:
          risultato.push(item);
          break;
      }
    } else {
      risultato.push(item);
    }
  });
  var finale = risultato.join("");
  console.log(finale);
}

inverter(stringa);
