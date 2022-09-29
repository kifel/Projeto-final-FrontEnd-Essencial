window.addEventListener("scroll", onScroll);

onScroll();

function onScroll() {
  showBackToTopButtonOnScroll();

  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(maisVendidos);
  activateMenuAtCurrentSection(produtos);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  // verificar se a seção passou da linha
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop;

  const sectionEndAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndAt <= targetLine;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;

  const sectionId = section.getAttribute("id");

  const menuElement = document.querySelector(
    `.navbar-nav a[href*=${sectionId}]`
  );

  menuElement.classList.remove("active");

  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 100) {
    document.querySelector("#backToTopButton").classList.add("show");
  } else {
    document.querySelector("#backToTopButton").classList.remove("show");
  }
}

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
