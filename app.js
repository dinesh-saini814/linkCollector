const text_input = document.querySelector(".input_text");
const url_input = document.querySelector(".input_element");
const buttonEle = document.querySelector("button");

const outer_list = document.querySelector(".link_div");

const output = [
  {
    id: 1,
    url: "https://www.google.com",
    text: "Google",
    color: "#ffffff", // Default color
  },
];

render_list();

// function to render the list

function render_list() {
  let div_html = "";
  output.forEach((item) => {
    const { id, url, text, color } = item;

    const html = `
      <div class="textdisplay" id="link_${id}" style="background-color: ${color}">
        <div class="action-buttons">
          <i class="delete-button fa fa-trash" style="color:#474747" onclick="deleteLink(${id})"></i> 
          <i class="hide-button icon fa fa-eye" style="color:#474747" onclick="toggleHide(${id})"></i>
        </div>
        ${text}</br>
        <a class="link_tag" target="_blank" href="${url}">${url}</a>
      </div>
    `;

    div_html += html;
  });
  outer_list.innerHTML = div_html;

  document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => {
      output.splice(index, 0);
      render_list();
    });
  });
}

// using event listner for button

buttonEle.addEventListener("click", () => {
  if (url_input.value === "" || text_input.value === "") {
    placeChangeColor("red");
    return;
  } else {
    const newId = output.length + 1;
    const color = getRandomColor();
    output.push({
      id: newId,
      url: url_input.value,
      text: text_input.value,
      color: color,
    });

    url_input.value = "";
    text_input.value = "";

    console.log(color);

    placeChangeColor("rgb(88, 88, 88)");
    render_list();
  }
});

// function to change the placeholder color

function placeChangeColor(toColor) {
  addCSS = document.createElement("style");
  addCSS.innerHTML = "::placeholder { color: " + toColor + "; }";
  document.body.append(addCSS);
}

// Toggle Font Awesome classes for eye open and eye closed

document.querySelectorAll(".hide-button").forEach((hideButton, index) => {
  hideButton.addEventListener("click", () => {
    const linkId = output[index].id;
    toggleHide(linkId);
    render_list();
  });
});
// delete button event listner
document.querySelectorAll(".delete-button").forEach((deleteButton, index) => {
  deleteButton.addEventListener("click", () => {
    const linkId = output[index].id;
    deleteLink(linkId);
    render_list();
  });
});

// function to delete the link

function deleteLink(id) {
  const index = output.findIndex((item) => item.id === id);
  if (index !== -1) {
    output.splice(index, 1);
  }
}
// function to toggle the hide button
function toggleHide(id) {
  const linkDiv = document.getElementById(`link_${id}`);
  const hideButton = linkDiv.querySelector(".hide-button");
  const linkTag = linkDiv.querySelector(".link_tag");

  // Toggle filter effect on click
  if (linkTag.classList.contains("blurred")) {
    linkTag.style.filter = "none"; // Remove filter effect
    linkTag.classList.remove("blurred");
    hideButton.classList.remove("fa-eye-slash");
    hideButton.classList.add("fa-eye");
  } else {
    linkTag.style.filter = "blur(2px)"; // Apply filter effect
    linkTag.classList.add("blurred");
    hideButton.classList.remove("fa-eye");
    hideButton.classList.add("fa-eye-slash");
  }

  linkDiv.classList.toggle("highlighted");
}

function shuffleArray(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const predefinedColors = [
  "#f0e584",
  "#ff9e9e",
  "#aafa95",
  "#a0d1cb",
  "#a6bcda",
  "#e4d6ba",
  "#e0fbfc",
  "#bdbdbd",
];

const shuffledColors = shuffleArray(predefinedColors);

function getRandomColor() {
  const color = shuffledColors.shift();
  shuffledColors.push(color); // Move the used color to the end of the array
  return color;
}
