//import sumar from "./sumador";

const first = document.querySelector("#primer-titulo");
const second = document.querySelector("#primer-detalle");
const form = document.querySelector("#post-form");
const div = document.querySelector("#mensaje-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstTitulo = first.value;
  const firstMensaje = second.value;

  div.innerHTML = "<p> Lista de publicaciones:" + firstTitulo + firstMensaje + "</p>";
});
