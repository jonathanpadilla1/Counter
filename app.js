const decrease = document.getElementsByClassName("btn decrease");
const reset = document.getElementsByClassName("btn reset");
const increase = document.getElementsByClassName("btn increase");
const value = document.getElementById("value");
let newValue = value.textContent;

btnDecrease.addEventListener("click", logClickDecrease);
btnReset.addEventListener("click", logClickReset);
btnIncrease.addEventListener("click", logClickIncrease);

function logClick() {
  console.log("click!");
  console.log(value.textContent);
}

function logClickIncrease() {
  ++value.textContent;
  let funcValue = value.textContent;
  switch (true) {
    case funcValue > 0:
      document.getElementById("value").style.color = "green";
      console.log(`Increasing to ${value.textContent}`);
      break;
    case funcValue < 0:
      document.getElementById("value").style.color = "red";
      console.log(`Increasing to ${value.textContent}`);
      break;
    default:
      document.getElementById("value").style.color = "black";
      console.log(`Value is ${value.textContent}`);
  }
}

function logClickReset() {
  value.textContent = 0;
  document.getElementById("value").style.color = "black";
  console.log(`Value is reset to ${value.textContent}`);
}

function logClickDecrease() {
  --value.textContent;
  let funcValue = value.textContent;
  switch (true) {
    case funcValue > 0:
      document.getElementById("value").style.color = "green";
      console.log(`Decreasing to ${value.textContent}`);
      break;
    case funcValue < 0:
      document.getElementById("value").style.color = "red";
      console.log(`Decreasing to ${value.textContent}`);
      break;
    default:
      console.log(`Value is ${value.textContent}`);
      document.getElementById("value").style.color = "black";
  }
}
