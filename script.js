console.log("hello");

/** LE logo WORKSHOP affiche une alert au clic */
const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  alert("Easter Eggs");
});

/** Auclic sur le titre, celui ci devient noir */
const annonce = document.getElementById("annonce");
annonce.addEventListener("mouseover", () => {
  annonce.style.color = "black";
});

annonce.addEventListener("mouseleave", () => {
  annonce.style.color = "white";
});

/** Au clic sur le bouton d'un article, celui passe en background vert */
const buttons = document.querySelectorAll(" article button");
const articles = document.querySelectorAll("article");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    articles[i].style.backgroundColor = "green";
  });
}

/** Ajout d'une categorie sur l'input */
const add = document.getElementById("add");
add.addEventListener("click", () => {
  const input = document.querySelector("input");
  const list = document.querySelector("#category-list ul");
  const newLi = document.createElement("li");
  newLi.innerText = input.value;

  list.appendChild(newLi);
  input.value = "";
});
// event.target = element
