"use strict";
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const elementos = [
  "Alimentar al perro",
  "Estudiar para prueba escrita",
  "Pagar taxes",
  "Pasear a perro",
  "Comprar entradas para el cine",
];

const lista = document.getElementById("lista");

// recorrer lista con foreach
elementos.forEach((item, index) => {
  console.log("Recorriendo listado de elementos");

  console.log("Item", item);

  let li = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // añadir texto al checkbox
  li.textContent = item;

  //agregar evento change al checkbox
  checkbox.addEventListener("change", (e) => {
    console.log("e", e);
    if (e.target.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "initial";
    }
  });

  li.innerHTML = item;
  item.appendChild(li);
  lista.appendChild(checkbox);
});
