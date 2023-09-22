import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  ulGallery: document.querySelector('.gallery'),
};

function galleryTemplate({preview, original, description}) {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
};
 

function renderGallery() {
    const markup = galleryItems.
        map(galleryTemplate).
        join('');
    refs.ulGallery.innerHTML = markup;
    
};
 
renderGallery();


refs.ulGallery.addEventListener('click', e =>
    e.preventDefault());

    

new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});