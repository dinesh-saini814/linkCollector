const buttonEle = document.querySelector("button");
const inputEle = document.querySelector("input");

buttonEle.addEventListener("click", () => {
  const value = inputEle.value;
  alert(value);
});
