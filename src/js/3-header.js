export function getHeader() {
  const gallery = document.querySelector('#gallery');
  const form = document.querySelector('#form');
  const header = document.querySelector('#header');
  const strGallery = 'gallery';
  const strForm = 'form';

  header.addEventListener('click', hendlerHeader);
  // console.log(header);
  function hendlerHeader(event) {
    event.preventDefault();
    const currentLI = event.target.closest('.nav-item');

    if (currentLI.dataset.id === strGallery) {
      gallery.hidden = false;
      form.hidden = true;
    }
    if (currentLI.dataset.id === strForm) {
      form.hidden = false;
      gallery.hidden = true;
    }
  }
}
