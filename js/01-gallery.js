import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(createGalleryMarkup(galleryItems));

const imagesContainer =
  document.querySelector('.gallery');
const imagesMarkup =
  createGalleryMarkup(galleryItems);
imagesContainer.insertAdjacentHTML(
  'beforeend',
  imagesMarkup
);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"
                >
            </a>
        </div>`;
    })
    .join('');
}

imagesContainer.addEventListener(
  'click',
  onImagesContainerClick
);

function onImagesContainerClick(evt) {
  evt.preventDefault();
  if (
    !evt.target.classList.contains(
      'gallery__image'
    )
  ) {
    return;
  }

  const instance = basiclightbox.create(
    `
    <img src="${evt.target.dataset.source}" width="800" height="600">
    `
  );
  instance.show();
}
