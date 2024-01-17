const buttonEle = document.querySelector("button");
const inputEle = document.querySelector(".input_element");
const inputext = document.querySelector(".input_text");

const ulEl = document.querySelector("#ul-el");

let store_url = [];

buttonEle.addEventListener("click", () => {
  store_url.push(inputEle.value);
  render();
  inputEle.value = "";
});

function render() {
  let listitems = "";

  for (let i = 0; i < store_url.length; i++) {
    listitems += `<li><a target='_blank' href='${store_url[i]}'>${store_url[i]}</a></li>`;
  }

  ulEl.innerHTML = listitems;
}
