/* Author: Sebastian Aguirre Duque
E-mail: sadw621@gmail.com */

import { openCards } from './main.js';

let africaSelect = document.getElementById('africa');
let asiaSelect = document.getElementById('asia');
let europaSelect = document.getElementById('europa');
let oceaniaSelect = document.getElementById('oceania');
let americaSelect = document.getElementById('america');

africaSelect.addEventListener('click', () => openCards('africa'));
asiaSelect.addEventListener('click', () => openCards('asia'));
europaSelect.addEventListener('click', () => openCards('europa'));
oceaniaSelect.addEventListener('click', () => openCards('oceania'));
americaSelect.addEventListener('click', () => openCards('america'));


