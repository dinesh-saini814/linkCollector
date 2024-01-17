const buttonEle = document.querySelector("button");
const inputEle = document.querySelector(".input_element");
const inputext = document.querySelector(".input_text");

const ulEl = document.querySelector("#ul-el");
const ulEl2 = document.querySelector("#ul-el2");

const link_div = document.querySelector(".link_div");

let store_url = [];
let store_text = [];

buttonEle.addEventListener("click", () => {
  store_url.push(inputEle.value);
  store_text.push(inputext.value);

  inputEle.value = "";
  inputext.value = "";

  render_div();
});

// function render() {
//   let listitems = "";
//   let listtag = "";

//   for (let i = 0; i < store_url.length; i++) {
//     listitems += `<li><a target='_blank' href='${store_url[i]}'>${store_url[i]}</a></li>`;
//     listtag += `<li>${store_text[i]}</li>`;
//   }

//   ulEl.innerHTML = listitems;
//   ulEl2.innerHTML = listtag;
// }

function render_div() {
  store_url.push(inputEle.value);
  store_text.push(inputext.value);

  let listitems = "";

  console.log(store_text);
  console.log(store_text);

  for (let i = 0; i < store_url.length; i++) {
    link_div.innerHTML += `<div class='textdisplay'>${store_text[i]}</br><a target='_blank' href='${store_url[i]}'>${store_url[i]}</a></div>`;
    store_url = [];
    store_text = [];
  }
}
