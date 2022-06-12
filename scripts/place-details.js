/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

function GetFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

let infoDestino = GetFromLocalStorage('destinoElegido');
let continenteName = localStorage.getItem('continente');

document.getElementById('destino-cita').src = `../images/${infoDestino.images}`;
document.getElementById('name-cita').textContent = infoDestino.city;
document.getElementById('info-cita').textContent = infoDestino.description;
document.getElementById('destino').value = infoDestino.city;
document.getElementById('continente').value = continenteName.charAt(0).toUpperCase() + continenteName.slice(1);
document.getElementById('tarjeta-cont').src = `../images/${continenteName.toUpperCase()}.png`

function agendarCita(form) {

  form.preventDefault();
  
  let formulario = {
    "ciudad": document.getElementById('destino').value,
    "continente": document.getElementById('continente').value,
    "partida": document.getElementById('fecha-salida').value,
    "regreso": document.getElementById('fecha-regreso').value,
    "comentarios": document.getElementById('user-comment').value
  }

  if (formulario.partida === '' || formulario.regreso === '') {
    Swal.fire(
      '¡Oops!',
      'Asegúrate de que todos los campos estén correctamente diligenciados.',
      'error'
    )
  } else {
    sessionStorage.setItem('Formulario', JSON.stringify(formulario));

    Swal.fire(
      '¡Enviado!',
      'Tu cita ha sido agendada. Pronto uno de nuestros asesores se comunicará contigo.',
      'success'
    )
  }

  
}

document.getElementById('enviar-cita').addEventListener('submit', agendarCita)



