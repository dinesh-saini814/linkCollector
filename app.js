const buttonEle = document.querySelector("button");
const inputEle = document.querySelector("input");

const ulEl = document.querySelector("#ul-el");

let store_url = [];

buttonEle.addEventListener("click", () => {
  store_url.push(inputEle.value);
  console.log(store_url);

  //   ulEl.innerHTML += "<li>" + inputEle.value + "</li>";
  for (let i = 0; i < store_url.length; i++) {
    ulEl.innerHTML += "<li>" + store_url[i] + "</li>";
  }
  inputEle.value = "";
  store_url = [];
});
