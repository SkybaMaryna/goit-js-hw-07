import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryEl: document.querySelector('.gallery')
}

const makeCard = ({ preview, original, description }) => {
    const itemEl = document.createElement('a')
    itemEl.classList.add('gallery__item')
    itemEl.setAttribute('href', original )

    const imageEl = document.createElement('img')
    imageEl.classList.add('gallery__image')
    imageEl.setAttribute('src', preview)
    imageEl.setAttribute('alt', description)

    itemEl.append(imageEl)

    return itemEl
}

const cards = galleryItems.map(makeCard)

refs.galleryEl.append(...cards)

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});