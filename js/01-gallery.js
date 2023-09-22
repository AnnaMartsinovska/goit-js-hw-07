import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const refs = {
  ulGallery: document.querySelector('.gallery'),
};

function galleryTemplate({preview, original, description}) {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

refs.ulGallery.addEventListener('click', e => {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') return;

    showModal(e);
});

let modalGallery = null;
   

function showModal(e) { 
    modalGallery = basicLightbox.create(`
    <img src="${e.target.dataset.source}" alt="${e.target.alt}">
`,
     {
    onShow: () => {
            document.addEventListener('keydown', closeEskModal);
            document.body.style.overflow = 'hidden';
        },
    onClose: () => {
           document.removeEventListener('keydown', closeEskModal);
    document.body.style.overflow = 'visible';
       }
    }    
);

    modalGallery.show();
};


function closeEskModal(e) {
    if (e.code !== 'Escape') return;

    closeModal()
};
 

function closeModal() {
    
    modalGallery.close();
};
