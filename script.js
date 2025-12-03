//Index (global, onclick function)
let currentIndex = 0;

//Load my Pictures
let pictures = [
  "./img/img1.jpg",
  "./img/img2.jpg",
  "./img/img3.jpg",
  "./img/img4.jpg",
  "./img/img5.jpg",
  "./img/img6.jpg",
  "./img/img7.jpg",
  "./img/img8.jpg",
  "./img/img9.jpg",
  "./img/img10.jpg",
];

// (alt and p text)
let pictureDescription = [
  "Hotel Außenansicht",
  "Strand auf Mallorca",
  "Blick vom Hotelzimmer Morgens",
  "Blick vom Hotelzimmer Mittags",
  "Aquarium mit Meerfischen",
  "Strand auf Mallorca",
  "Schildkröten von Oben",
  "Hai im Aquarium",
  "Hai im Aquarium aus der Nähe",
  "Strand Spaziergang auf Mallorca",
];

window.onload = function () {
  // DOM
  dialog = document.getElementById("pictureDialog");
  bigImg = document.getElementById("bigImg");

  initGallery();
};

function initGallery() {
  const container = document.getElementById("holidayPicture");
  container.innerHTML = "";

  for (let i = 0; i < pictures.length; i++) {
    container.innerHTML += `
      <figure class="SmallImgWrapper"  aria-label="${pictureDescription[i]}">
        <button
          class="SmallImgButton"
          type="button"
          role="button"
          onclick="openDialogAt(${i})"
          aria-label="${pictureDescription[i]}"
        >
          <img
            class="SmallImg"
            src="${pictures[i]}"
            alt="${pictureDescription[i]}"
          >
        </button>
      </figure>
    `;
  }
}

function openDialogAt(i) {
  currentIndex = i;
  renderImage();

  dialog.showModal();
  dialog.classList.add("opened");
  dialog.focus();
}

function renderImage() {
  bigImg.src = pictures[currentIndex];
  bigImg.alt = pictureDescription[currentIndex];

  document.getElementById("pictureDescription").innerText =
    pictureDescription[currentIndex];
}

function openOnEnter(event, i) {
  if (event.key === "Enter") {
    openDialogAt(i);
  }
}

function switchKey(event) {
  if (event.key === "Escape") {
    closeBtn();
  }
  if (event.key === "ArrowLeft") {
    prevBtn();
  }
  if (event.key === "ArrowRight") {
    nextBtn();
  }
}

function closeBtn() {
  if (!dialog) return;
  dialog.close();
  dialog.classList.remove("opened");
}

function closeImg(event) {
  if (event.target === dialog) {
    closeBtn();
  }
}

function nextBtn() {
  currentIndex++;
  if (currentIndex >= pictures.length) currentIndex = 0;
  renderImage();
}

function prevBtn() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = pictures.length - 1;
  renderImage();
}
