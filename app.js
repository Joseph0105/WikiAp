// API ENDPOINT : `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`

const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error-msg");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.textContent = "Veuillez remplir le formulaire";
    return;
  } else {
    errorMsg.textContent = "";
    wikiApiCall(input.value);
  }
}

async function wikiApiCall(searchInput) {
  const response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srlimit=20&srsearch=${searchInput}`
  );
  const data = await response.json();

  console.log(data);

  creatCards(data.query.search);
}

function creatCards(data) {
  if (!data.length) {
    errorMsg.textContent = "Oops, aucuns résultat";
    return;
  }
}
