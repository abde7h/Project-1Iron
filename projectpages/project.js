const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const largeText = document.getElementById("large-text");
const image = document.getElementById("image");
const completionDate = document.getElementById("completed-on-2");
let cardsContainer = document.querySelector(".cards-container");

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let wantedId = params.get("id");

const endpoint =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const selectedProject = data.find((i) => i.uuid == wantedId);
    const otherProjects = data.filter((data) => data.uuid !== wantedId);

    otherProjects.forEach((element) => {
      cardsContainer.innerHTML += `<div class="project-card">
          <a class="project-link" href="../projectpages/project.html?id=${element.uuid}">
            <img
              class="project-img"
              src="../assets/projects-section/${element.uuid}.jpg"
              alt="Project 1"
            />
            <div>
              <h4 class="project-title">${element.name}</h4>
              <p class="project-description">${element.description}</p>
              <a class="learn-more-link" href="../projectpages/project.html?id=${element.uuid}"
                >Learn more</a
              >
            </div>
          </a>
        </div>`;
    });

    title.textContent = selectedProject.name;
    subtitle.textContent = selectedProject.description;
    largeText.innerHTML = selectedProject.content;
    image.src = selectedProject.image;
    completionDate.textContent = selectedProject.completed_on;
  });

const burguer = document.getElementById("burguer");
const burguerMenu = document.querySelector(".hidden-nav");

burguer.addEventListener("click", () => {
  if (burguerMenu.className === `hidden-nav hidden-nav-active`) {
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
