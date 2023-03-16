import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
    galleryEl: document.querySelector('.gallery')
}

const makeCard = ({ preview, original, description }) => {
    const itemEl = document.createElement('div')
    itemEl.classList.add('gallery__item')

    const linkEl = document.createElement('a')
    linkEl.classList.add('gallery__link')
    linkEl.setAttribute('href', original )

    const imageEl = document.createElement('img')
    imageEl.classList.add('gallery__image')
    imageEl.setAttribute('src', preview)
    imageEl.setAttribute('data-source', original)
    imageEl.setAttribute('alt', description)

    linkEl.append(imageEl)
    itemEl.append(linkEl)

    return itemEl
}

const cards = galleryItems.map(makeCard)

refs.galleryEl.append(...cards)

refs.galleryEl.addEventListener('click', onGetLink)

function onGetLink(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
    return;
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show()

   if (basicLightbox.visible()) {
    refs.galleryEl.addEventListener('keydown', onClickEscape)
   }

    function onClickEscape(event) {
        if (event.code === "Escape") {
            console.log(event.code);
            instance.close()
            refs.galleryEl.removeEventListener('keydown', onClickEscape)
        }
    }
}