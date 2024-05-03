import { hendlerHeader } from './js/3-header.js';

const gallery = document.querySelector('#gallery');
const form = document.querySelector('#form');
const header = document.querySelector('#header');

header.addEventListener('click', hendlerHeader);

// Описаний в документації
import { images } from './js/const.js';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { createGalleryMarkup } from './js/1-gallery.js';

// Отримуємо посилання на елементи DOM
const domGallery = document.querySelector('.gallery');
console.log(domGallery);

// додаю змінну для отримання шаблонних строк
const addGalleryMarkup = createGalleryMarkup(images);

// додаємо шаблонну строку addGalleryMarkup до DOM - ".gallery"
domGallery.insertAdjacentHTML('beforeend', addGalleryMarkup);

// use library SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  overlayOpacity: 0.8,
  widthRatio: 0.77,
  heightRatio: 0.919,
});

import { resetForm, onInputData, hendlerSubmit } from './js/2-form.js';
//инпорт лода
import throttle from 'lodash.throttle';

// визначили сталу змінну ключ для локалстораджу
const LOCAL_KEY = 'feedback-form-state';

// визначили Дом елемент для форми
const formDom = document.querySelector('.feedback-form');

// деструктурізація DOM
const { email, message } = formDom.elements;

//отримання останніх данних з локалстореджа або
let formData = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

// очищення значень у полях ДОМ Form
resetForm(formData);

// слухач на зміну значень  email, message
formDom.addEventListener('input', throttle(onInputData, 500));

// слухач на submit
formDom.addEventListener('submit', hendlerSubmit);
