/*Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */


import { destinos } from './places-data-bases.js';

function AddToLocalStorage(data) {
  if (typeof data != "string") { data = JSON.stringify(data); }
  return data;
}


function openCards(name) {
  localStorage.setItem('continente', name)
  let opciones = document.getElementById('destinos-continenteSel');
  opciones.classList.remove('hidden');
  opciones.classList.add('destinos-container');

  let listDestinos;

  switch (name) {
    case 'africa':
      listDestinos = destinos.filter(destino => destino.continente == 'africa');
      break
    case 'asia':
      listDestinos = destinos.filter(destino => destino.continente == 'asia');
      break
    case 'europa':
      listDestinos = destinos.filter(destino => destino.continente == 'europa');
      break
    case 'oceania':
      listDestinos = destinos.filter(destino => destino.continente == 'oceania');
      break
    case 'america':
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
    etiqueta.addEventListener('click', () => localStorage.setItem('destinoElegido', AddToLocalStorage(destino)));


  })

}

export { openCards };
