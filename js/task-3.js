const textinput = document.querySelector("#name-input");
const textoutput = document.querySelector("#name-output");

textinput.addEventListener("input", (event) => {
    if (textinput.value.trim() === ''){
        textoutput.textContent = "Anonymous";
    }
    else textoutput.textContent = event.currentTarget.value;
  });
