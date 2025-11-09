// Meine Bilder in klein
const container = document.getElementById("holidaypicture");
const dialog = document.getElementById("pictureDialog");
const bigImg = document.getElementById("bigImg");

//Meine Bilder
const pictures = [
  //Bilder (NAMEN + GRÖßE muss noch angepasst werden)
  "./img/IMG_5554.jpg",
  "./img/IMG_5555.jpg",
  "./img/IMG_5607.jpg",
  "./img/IMG_5663.jpg",
  "./img/IMG_5726.jpg",
  "./img/Strand1.jpg",
  "./img/IMG_5759.jpg",
  "./img/IMG_5765.jpg",
  "./img/IMG_5771.jpg",
  "./img/IMG_9154.jpg",
];

// Bildebeschreibung und Bildtext (alt & p)
const pictureDescription = [
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

// aktueller Index (global, damit onclick-Funktionen ihn sehen)
let currentIndex = 0;




function renderImage() {
  bigImg.src = pictures[currentIndex];
  bigImg.alt = pictureDescription[currentIndex] || `Bild ${currentIndex + 1}`;
  document.getElementById("pictureDescription").innerHTML =
    pictureDescription[currentIndex] || "";
}

// onclick aus HTML

function closeBtn() {
  const dialog = document.getElementById("pictureDialog");
  dialog.close();
  dialog.classList.remove("opened");
}

function nextBtn() {
  currentIndex = (currentIndex + 1) % pictures.length;
  renderImage();
}

function prevBtn() {
  currentIndex = (currentIndex - 1 + pictures.length) % pictures.length;
  renderImage();
}

function openDialogAt(i) {
  currentIndex = i;
  renderImage(); // zeigt Bild + Text
  dialog.showModal();
  dialog.classList.add("opened");
  dialog.focus();
}

function closeImg(e) { // Schließt das Bild wenn man daneben klickt 
  if (e.target === dialog) {
    closeBtn();
  }
}

function switchKey(e) {
  if (!dialog.open) return;

  if (e.key === "ArrowRight") {
    e.preventDefault();
    nextBtn();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    prevBtn();
  } else if (e.key === "Escape") {
    e.preventDefault();
    closeBtn();
  }
}

// KLEINE BILDER
for (let i = 0; i < pictures.length; i++) {
  const img = document.createElement("img"); 
  img.src = pictures[i]; // Pfad zum Bild
  img.alt = pictureDescription[i] || `img ${i + 1}`;
  img.classList.add("small-img"); // img css style
  img.loading = "lazy";
  img.tabIndex = 0; // <img tabindex="0">
  // Bild öffnen
  img.addEventListener("click", () => openDialogAt(i));

  container.appendChild(img);
}

// Kontrollausgabe console.log(closeBtn);
