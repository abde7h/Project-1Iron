const burguer = document.getElementById("burguer");
const burguerMenu = document.querySelector(".hidden-nav");

burguer.addEventListener("click", () => {
  if (
    burguerMenu.className === `hidden-nav hidden-nav-active`
  ) {
    burguerMenu.className = `hidden-nav`;

    burguer.innerHTML = `<div class="burguer-line"></div>
        <div class="burguer-line"></div>
        <div class="burguer-line"></div>`;
  } else {
    burguerMenu.className = `hidden-nav hidden-nav-active`;

    burguer.innerHTML = `<div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>`;
  }
});

const returnToTop = document.getElementById("return-top");

window.addEventListener("load", () => returnToTop.style.display = "none");
window.addEventListener("scroll", () => {
  let contentHeight = document.documentElement.scrollHeight;
  let scrollPosition = window.innerHeight + window.pageYOffset;

  if (scrollPosition > contentHeight / 2) {
    returnToTop.style.display = "block";
  } else {
    returnToTop.style.display = "none";
  }
});

function topScroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
