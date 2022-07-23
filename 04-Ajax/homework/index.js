// ver lista de amigos
const btnAmigos = document.getElementById("boton");
const ul = document.getElementById("lista");

function showAmigos() {
  ul.innerHTML = "";
  fetch("http://localhost:5000/amigos")
    .then((res) => res.json())
    .then((amigos) => {
      // console.log(amigos)
      for (let i = 0; i < amigos.length; i++) {
        let li = `<li><button onClick = "deleteFriends(${amigos[i].id})" style = "color: red">X</button> ${amigos[i].name}</li>`;
        ul.innerHTML = ul.innerHTML + li;
      }
    });
}

btnAmigos.addEventListener("click", showAmigos);

//Buscar amigo
const inputAmigo = document.querySelector("#input");
const btnAmigo = document.querySelector("#search");
const spanAmigo = document.getElementById("amigo");

console.log(inputAmigo.value);
btnAmigo.addEventListener("click", function () {
  let idAmigo = inputAmigo.value;
  fetch(`http://localhost:5000/amigos/${idAmigo}`)
    .then((res) => res.json())
    .then((amigo) => {
      inputAmigo.value = "";
      spanAmigo.innerHTML = amigo.name;
    });
});

//DELETE amigo

const inputDelete = document.querySelector("#inputDelete");
const btnDelete = document.querySelector("#delete");
const spanSucces = document.querySelector("#success");

function deleteFriends(idAmigo) {
  if (typeof idAmigo !== "number") {
    idAmigo = inputDelete.value;
  }
  /* let idAmigo = inputDelete.value */
  fetch(`http://localhost:5000/amigos/${idAmigo}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => {
      inputDelete.value = "";
      spanSucces.innerText = "Borrado!!!!";
      showAmigos();
    });
}
btnDelete.addEventListener("click", deleteFriends);
