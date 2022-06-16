/*Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { destinos } from './places-data-bases.js';

// function AddToLocalStorage(data) {
//   if (typeof data != "string") { data = JSON.stringify(data); }
//   return data;
// }


function openCards(name) {
  localStorage.setItem('continente', name)
  let opciones = document.getElementById('destinos-continenteSel');
  opciones.classList.remove('hidden');
  opciones.classList.add('destinos-container');

  let listDestinos;
  let salto;

  switch (name) {
    case 'africa':
      salto = 0;
      listDestinos = destinos.filter(destino => destino.continente == 'africa');
      break
    case 'asia':
      salto = 1;
      listDestinos = destinos.filter(destino => destino.continente == 'asia');
      break
    case 'europa':
      salto = 2;
      listDestinos = destinos.filter(destino => destino.continente == 'europa');
      break
    case 'oceania':
      salto = 3;
      listDestinos = destinos.filter(destino => destino.continente == 'oceania');
      break
    case 'america':
      salto = 4
      listDestinos = destinos.filter(destino => destino.continente == 'america');
      break
  }

  listDestinos.forEach((destino, index, listDestinos) => {
    let img = document.getElementById(`destino${index + 1}`);
    img.setAttribute("src", `./images/${destino.images}`);
    let nameC = document.getElementById(`dest-name${index + 1}`);
    nameC.textContent = destino.city;

    let masBttn = document.getElementById(`name-bttn-container${index + 1}`);
    let etiqueta = Array.from(masBttn.children).find((value, index, children) => value.tagName === 'A');
    etiqueta.addEventListener('click', () => localStorage.setItem('destinoElegido', (index + (6 * salto))));


  })


}

export { openCards };
