const buttonEle = document.querySelector("button");
const inputEle = document.querySelector(".input_element");
const inputext = document.querySelector(".input_text");

const link_div = document.querySelector(".link_div");

let store_url = [];
let store_text = [];

buttonEle.addEventListener("click", () => {
  if (inputEle.value === "" || inputext.value === "") {
    changeColor_place("red");

    return;
  } else {
    store_url.push(inputEle.value);
    store_text.push(inputext.value);

    inputEle.value = "";
    inputext.value = "";

    render_div();
    colourChanger();
    changeColor_place("rgb(88, 88, 88)");
  }

  if (inputEle.value.includes("https://") === false) {
    inputEle.value = "https://" + inputEle.value;
  }
});

function render_div() {
  store_url.push(inputEle.value);
  store_text.push(inputext.value);

  console.log(store_text);
  console.log(store_text);

  for (let i = 0; i < store_url.length; i++) {
    link_div.innerHTML += `<div class='textdisplay'>${store_text[i]}</br><a target='_blank' href='${store_url[i]}'>${store_url[i]}</a></div>`;
    store_url = [];
    store_text = [];
  }
}

function colourChanger() {
  var colorBoxes = document.querySelectorAll(".color-box");
  for (var i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", function () {
      var color = this.getAttribute("data-color");
      document.querySelector(`.`).style.backgroundColor = color;
    });
  }
}

function changeColor_place(toColor) {
  addCSS = document.createElement("style");
  addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
  document.body.append(addCSS);
}
