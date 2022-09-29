function show(id) {
  console.log(id);

  localStorage.setItem("id", id);
}

function darkMode() {
  const buttonL = document.querySelector(".bi-moon-fill");
  const buttonS = document.querySelector(".bi-brightness-high-fill");

  if (buttonL) {
    buttonL.classList.remove("bi-moon-fill");
    buttonL.classList.add("bi-brightness-high-fill");
  }

  if (buttonS) {
    buttonS.classList.remove("bi-brightness-high-fill");
    buttonS.classList.add("bi-moon-fill");
  }

  document.documentElement.classList.toggle("dark-mode");

  document
    .querySelectorAll(".inverted")
    .forEach((el) => el.classList.toggle("invert"));
}
