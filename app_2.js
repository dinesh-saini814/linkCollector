const text_input = document.querySelector(".input_text");
const url_input = document.querySelector(".input_element");
const buttonEle = document.querySelector("button");

const outer_list = document.querySelector(".link_div");

const output = [
  {
    id: 1,
    url: "https://www.google.com",
    text: "Google",
  },
];

render_list();

// function to render the list

function render_list() {
  let div_html = "";
  output.forEach((item) => {
    const { id, url, text } = item;

    const html = `
      <div class="textdisplay" id="link_${id}">
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
    output.push({
      id: newId,
      url: url_input.value,
      text: text_input.value,
    });

    url_input.value = "";
    text_input.value = "";

    placeChangeColor("rgb(88, 88, 88)");
    render_list();
    colourChanger();
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
  const linkTag = linkDiv.querySelector(".link_tag");

  // Toggle filter effect on click
  if (linkTag.style.filter === "blur(5px)") {
    linkTag.style.filter = "none"; // Remove filter effect
  } else {
    linkTag.style.filter = "blur(5px)"; // Apply filter effect
  }

  // Add or remove the "highlighted" class
  linkDiv.classList.toggle("highlighted");
}

// function to change the background color
// function colourChanger(color) {
//   const outerList = document.querySelector(".link_div");
//   const lastDiv = outerList.lastElementChild;

//   if (lastDiv) {
//     lastDiv.style.backgroundColor = color;
//   }
// }

// const colorBoxes = document.querySelectorAll(".color-box"); // replace with your color box class
// colorBoxes.forEach((box) => {
//   box.addEventListener("click", function () {
//     const color = this.style.backgroundColor;
//     colourChanger(color);
//   });
// });

//dfdfg

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
