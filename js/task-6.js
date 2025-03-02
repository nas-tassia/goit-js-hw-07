const btn = document.querySelector("[data-create]");
const btn_destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const input = document.querySelector("input");




btn.addEventListener("click", () => {createBoxes(Number(input.value)); input.value = "";});

btn_destroy.addEventListener("click", () => destroyBoxes());

function createBoxes(amount){
  if (amount>=1 && amount<=100){
    boxes.innerHTML = "";
    for (let i=0; i<amount; i++){
      let div = document.createElement("div");
      div.style.backgroundColor = getRandomHexColor();
      div.style.width = '30px';
      div.style.height = '30px';
      boxes.append(div);
    }
  }
  else {
    alert("Введите число от 1 до 100");
  }
}

function destroyBoxes(){
  boxes.remove();
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
