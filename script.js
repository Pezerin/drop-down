const button = document.querySelector("button");
const items = Array.from(document.querySelectorAll("li"));
let visible = false;

button.addEventListener("click", () => {
  items.forEach((item) => {
    if (!visible) {
      item.style.opacity = 100;
    } else {
      item.style.opacity = 0;
    }
  });

  visible = !visible;
});
