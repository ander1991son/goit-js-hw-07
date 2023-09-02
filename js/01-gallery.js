import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
const gallery = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(
    (item) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img
          class="gallery__image"
          src="${item.preview}"
        data-source="${item.original}"           //revisar para que sirve
          alt="${item.description}"
        />
      </a>
    </li>
  `
  )
  .join("");

// //gallery.innerHTML = galleryMarkup;
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName === "IMG") {
    const sourceUrl = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${sourceUrl}" alt="">`);
    instance.show();
  }
}

gallery.addEventListener("click", openModal);

// galleryItems.addEventListener("keydown", (event) => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });
