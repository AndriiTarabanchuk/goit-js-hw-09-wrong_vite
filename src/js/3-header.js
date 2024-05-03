const gallery = document.querySelector('#gallery');
const form = document.querySelector('#form');
const header = document.querySelector('#header');

header.addEventListener('click', hendlerHeader);
// console.log(header);
export function hendlerHeader(event) {
  event.preventDefault();
  const currentLI = event.target.closest('.nav-item');

  if (currentLI.dataset.id === 'gallery') {
    gallery.hidden = false;
    form.hidden = true;
  }
  if (currentLI.dataset.id === 'form') {
    form.hidden = false;
    gallery.hidden = true;
  }
}
