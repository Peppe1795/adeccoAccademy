const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const btnSum = document.getElementById("btnSum");
const btnCreate = document.getElementById("btnCreate");
const somma = document.getElementById("sum");
const form = document.getElementById("form");

function sum() {
  let inputs = form.querySelectorAll("input");
  let tot = 0;

  inputs.forEach(function (input) {
    tot += parseInt(input.value);
  });

  somma.innerHTML = tot;
  form.reset();
}

let indexInput = 3;

function create() {
  const newInput = document.createElement("input");
  newInput.setAttribute("type", "number");
  newInput.setAttribute("id", `numero${indexInput}`);

  const newLabel = document.createElement("label");
  newLabel.setAttribute("for", `numero${indexInput}`);
  newLabel.textContent = `numero${indexInput}`;

  form.lastElementChild.insertAdjacentElement("beforebegin", newLabel);
  form.lastElementChild.insertAdjacentElement("beforebegin", newInput);

  somma.innerHTML = "";

  indexInput++;
}

btnSum.addEventListener("click", sum);
btnCreate.addEventListener("click", create);
