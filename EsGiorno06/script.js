const progress = document.getElementById("pro");
const form = document.getElementById("form");
const btn = document.getElementById("btn");
const eta = document.getElementById("eta");
const nomeInput = document.getElementById("nome");
const cognomeInput = document.getElementById("cognome");
const provincia = document.getElementById("provinciaResidenza");
const numeroNome = document.getElementById("numeroNome");
const numeroCognome = document.getElementById("numeroCognome");

let i = 0;

function progressBar() {
  form.style.display = "none";
  progress.style.display = "block";
  if (i == 0) {
    i = 1;
    let width = 1;
    let add = setInterval(riempimento, 100);
    function riempimento() {
      if (width >= 100) {
        form.style.display = "block";
        progress.style.display = "none";
        clearInterval(add);
        i = 0;
      } else {
        width++;
        progress.style.width = width + "%";
      }
    }
  }
}

progressBar();

function charCount(idInput, idSpan) {
  const inputItem = document.getElementById(idInput);
  const spanItem = document.getElementById(idSpan);

  if (inputItem && spanItem) {
    spanItem.textContent = inputItem.value.length;
  }
}

btn.addEventListener("click", () => {
  let controlEta = eta.value;
  let controlProv = provincia.value;

  if (controlEta < 18 || controlEta > 65) {
    alert("eta sbagliata");
    return;
  }
  switch (controlProv) {
    case "MI":
      break;
    case "TO":
      break;
    case "RO":
      break;
    case "NA":
      break;
    case "VE":
      break;
    case "RC":
      break;
    case "PA":
      break;
    case "BA":
      break;
    default:
      alert("provincia errato");
      return;
  }
  alert("è tutto ok");
  form.reset();
  progressBar();
});

nomeInput.addEventListener("input", () => {
  charCount("nome", "numeroNome");
});

cognomeInput.addEventListener("input", () => {
  charCount("cognome", "numeroCognome");
});
