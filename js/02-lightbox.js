import { galleryItems } from './gallery-items.js';
// Change code below this line
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
        <li>
            <a class="gallery__item" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}" 
                    alt="${description}"
                >
            </a>
        </li>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
